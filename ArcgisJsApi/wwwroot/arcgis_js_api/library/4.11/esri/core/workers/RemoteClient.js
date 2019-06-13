define(["require", "exports", "@dojo/framework/shim/AbortController", "../Error", "../promiseUtils", "./utils"], function (require, exports, AbortController_1, EsriError, promiseUtils_1, utils_1) {
    var CLOSE = utils_1.MessageType.CLOSE, ABORT = utils_1.MessageType.ABORT, INVOKE = utils_1.MessageType.INVOKE, RESPONSE = utils_1.MessageType.RESPONSE, OPEN_PORT = utils_1.MessageType.OPEN_PORT;
    function mapDelete(map, key) {
        map["delete"](key);
    }
    function createAbortError(message) {
        var error = new EsriError("AbortError", message);
        error.dojoType = "cancel";
        return error;
    }
    /**
     * Queue that thottle message processing.
     */
    var MessageQueue = /** @class */ (function () {
        function MessageQueue(invoke) {
            this._timer = null;
            this._cancelledJobIds = new Set();
            this._invokeMessages = [];
            this._invoke = invoke;
            this._timer = null;
            this._process = this._process.bind(this);
        }
        MessageQueue.prototype.push = function (message) {
            if (message.type === utils_1.MessageType.ABORT) {
                this._cancelledJobIds.add(message.jobId);
            }
            else {
                this._invokeMessages.push(message);
                if (this._timer === null) {
                    this._timer = setTimeout(this._process, 0);
                }
            }
        };
        MessageQueue.prototype.clear = function () {
            this._invokeMessages.length = 0;
            this._cancelledJobIds.clear();
            this._timer = null;
        };
        MessageQueue.prototype._process = function () {
            this._timer = null;
            for (var _i = 0, _a = this._invokeMessages; _i < _a.length; _i++) {
                var message = _a[_i];
                if (!this._cancelledJobIds.has(message.jobId)) {
                    this._invoke(message);
                }
            }
            this._cancelledJobIds.clear();
            this._invokeMessages.length = 0;
        };
        return MessageQueue;
    }());
    var RemoteClient = /** @class */ (function () {
        //--------------------------------------------------------------------------
        //
        //  Lifecycle
        //
        //--------------------------------------------------------------------------
        function RemoteClient(_port, _client, options) {
            var _this = this;
            this._port = _port;
            this._client = _client;
            this._outJobs = new Map();
            this._inJobs = new Map();
            this._queue = new MessageQueue(function (message) { return _this._onInvoke(message); });
            this._responseQueue = [];
            this._onMessage = this._onMessage.bind(this);
            this._port.addEventListener("message", this._onMessage);
            this._port.start();
            this._channel = options.channel;
            if (options.scheduler) {
                this._frameTask = options.scheduler.registerTask(1 /* REMOTE_CLIENT */, function (budget) { return _this._update(budget); }, function () { return _this._responseQueue.length > 0; });
            }
        }
        RemoteClient.connect = function (Module) {
            var channel = new MessageChannel();
            var client;
            // instantiate the module
            if (typeof Module === "function") {
                client = new Module();
            }
            else if ("default" in Module && typeof Module.default === "function") {
                /*eslint-disable */
                client = new Module.default();
                /*eslint-enable */
            }
            else {
                client = Module;
            }
            // store instance to prevent GC
            client.remoteClient = new RemoteClient(channel.port1, client, { channel: channel });
            return channel.port2;
        };
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        /**
         *
         */
        RemoteClient.prototype.close = function () {
            this._post({ type: CLOSE });
            this._close();
        };
        RemoteClient.prototype.isBusy = function () {
            return this._outJobs.size > 0;
        };
        /**
         * Invokes a method on the other thread.
         *
         * @param methodName the name or path to the method to be invoked
         * @param data Parameters passed to the method with name `methodName`
         * @param {Object} [options]
         * @param {Object} [options.signal] the signal to abort the execution
         * @param {Object} [options.transferList] an array of Transferable objects
         */
        RemoteClient.prototype.invoke = function (methodName, data, options) {
            var _this = this;
            var signal = options && options.signal;
            var transferList = options && options.transferList;
            if (!this._port) {
                return promiseUtils_1.reject(new EsriError("remote-client:port-closed", "Can't invoke(), port is closed"));
            }
            if (signal && signal.aborted) {
                return promiseUtils_1.reject(createAbortError("Job already aborted"));
            }
            var jobId = utils_1.newJobId();
            var abort = function () {
                if (signal) {
                    signal.removeEventListener("abort", abort);
                }
                var outJob = _this._outJobs.get(jobId);
                if (!outJob) {
                    return;
                }
                mapDelete(_this._outJobs, jobId);
                _this._post({ type: ABORT, jobId: jobId });
                outJob.reject(createAbortError("Job aborted"));
            };
            if (signal) {
                signal.addEventListener("abort", abort);
            }
            return promiseUtils_1.create(function (resolve, reject) {
                var job = { resolve: resolve, reject: reject };
                _this._outJobs.set(jobId, job);
                _this._post({
                    type: INVOKE,
                    jobId: jobId,
                    methodName: methodName,
                    // TODO: abortable should be true only if there is an input signal.
                    // Change this when switching to ES Promise
                    abortable: true
                }, data, transferList);
            }, abort);
        };
        RemoteClient.prototype.openPort = function () {
            var _this = this;
            var jobId = utils_1.newJobId();
            var canceller = function () {
                mapDelete(_this._outJobs, jobId);
                _this._post({
                    type: ABORT,
                    jobId: jobId
                });
            };
            return promiseUtils_1.create(function (resolve, reject) {
                var job = { resolve: resolve, reject: reject, signal: canceller };
                _this._outJobs.set(jobId, job);
                _this._post({
                    type: OPEN_PORT,
                    jobId: jobId
                });
            }, canceller);
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        /**
         * Method to terminate all communications.
         */
        RemoteClient.prototype._close = function () {
            this._channel && (this._channel = null);
            this._port.removeEventListener("message", this._onMessage);
            this._port.close();
            this._outJobs.forEach(function (job) { return job.reject(createAbortError("Abort job: worker closing")); });
            this._inJobs.clear();
            this._outJobs.clear();
            this._queue.clear();
            this._port = this._client = null;
            if (this._frameTask) {
                this._frameTask.remove();
            }
            this._frameTask = null;
            this._responseQueue = null;
        };
        /**
         * Methode processing the message coming from the remote side.
         * @param event
         */
        RemoteClient.prototype._onMessage = function (event) {
            var message = utils_1.receiveMessage(event);
            if (!message) {
                return;
            }
            switch (message.type) {
                // transfer a response to a promise
                case RESPONSE:
                    this._onResponse(message);
                    break;
                // Invoke method on loaded module
                case INVOKE:
                    this._queue.push(message);
                    break;
                // Existing job cancellation
                case ABORT:
                    this._onAbort(message);
                    break;
                // The other client closed the connection
                case CLOSE:
                    this._onClose();
                    break;
                // open of a new port
                case OPEN_PORT:
                    this._onOpenPort(message);
                    break;
            }
        };
        /**
         * An existing job is being canceled
         * @param message
         */
        RemoteClient.prototype._onAbort = function (message) {
            var inJobs = this._inJobs;
            var jobId = message.jobId;
            var job = inJobs.get(jobId);
            this._queue.push(message);
            if (!job) {
                return;
            }
            // A job is cancelable only if the call to invoke() had a signal
            if (job.controller) {
                job.controller.abort();
            }
            mapDelete(inJobs, jobId);
        };
        /**
         * Processing the closing message coming from a call to `connection.close()`
         * in the other thread.
         */
        RemoteClient.prototype._onClose = function () {
            var client = this._client;
            // We first close the connection and cancel out going jobs
            this._close();
            // Then we destroy the instanciated module.
            // Only happening when `this` is the owner of the instanciated module.
            if (client && client.remoteClient === this && "destroy" in client) {
                client.destroy();
            }
            client.remoteClient = null;
        };
        RemoteClient.prototype._onInvoke = function (message) {
            var _this = this;
            var methodName = message.methodName, jobId = message.jobId, data = message.data, abortable = message.abortable;
            var controller = abortable ? new AbortController_1.default() : null;
            var inJobs = this._inJobs;
            var thisArgs = this._client;
            var func = thisArgs[methodName];
            var resultOrPromise;
            try {
                if (!func && methodName && methodName.indexOf(".") !== -1) {
                    var split = methodName.split(".");
                    for (var i = 0; i < split.length - 1; i++) {
                        thisArgs = thisArgs[split[i]];
                        func = thisArgs[split[i + 1]];
                    }
                }
                if (typeof func !== "function") {
                    throw new TypeError(methodName + " is not a function");
                }
                resultOrPromise = func.call(thisArgs, data, {
                    client: this,
                    signal: controller ? controller.signal : null
                });
            }
            catch (error) {
                this._post({
                    type: RESPONSE,
                    jobId: jobId,
                    error: utils_1.toInvokeError(error)
                });
                return;
            }
            if (!promiseUtils_1.isThenable(resultOrPromise)) {
                this._post({
                    type: RESPONSE,
                    jobId: jobId
                }, resultOrPromise);
            }
            else {
                inJobs.set(jobId, { controller: controller, promise: resultOrPromise });
                var abortHandler_1 = function () {
                    if (!inJobs.has(jobId)) {
                        return;
                    }
                    controller.signal.removeEventListener("abort", abortHandler_1);
                    // TODO Yann: remove cancel() call after moving to Promise.
                    resultOrPromise.cancel();
                    mapDelete(inJobs, jobId);
                };
                controller.signal.addEventListener("abort", abortHandler_1);
                resultOrPromise
                    .then(function (result) {
                    if (!inJobs.has(jobId)) {
                        return;
                    }
                    mapDelete(inJobs, jobId);
                    _this._post({
                        type: RESPONSE,
                        jobId: jobId
                    }, result);
                })
                    .catch(function (error) {
                    if (!inJobs.has(jobId)) {
                        return;
                    }
                    controller.signal.removeEventListener("abort", abortHandler_1);
                    mapDelete(inJobs, jobId);
                    if (!error || error.name !== "AbortError") {
                        _this._post({
                            type: RESPONSE,
                            jobId: jobId,
                            error: utils_1.toInvokeError(error || {
                                message: "Error encountered at method " + methodName
                            })
                        });
                    }
                });
            }
        };
        RemoteClient.prototype._onOpenPort = function (message) {
            var channel = new MessageChannel();
            new RemoteClient(channel.port1, this._client, {});
            this._post({
                type: RESPONSE,
                jobId: message.jobId
            }, channel.port2, [channel.port2]);
        };
        RemoteClient.prototype._onResponse = function (message) {
            if (this._frameTask) {
                this._responseQueue.push(message);
            }
            else {
                this._handleResponse(message);
            }
        };
        RemoteClient.prototype._update = function (budget) {
            while (!budget.done && this._responseQueue.length > 0) {
                this._handleResponse(this._responseQueue.shift());
                budget.madeProgress();
            }
        };
        RemoteClient.prototype._handleResponse = function (message) {
            var jobId = message.jobId, error = message.error, data = message.data;
            var outJobs = this._outJobs;
            if (!outJobs.has(jobId)) {
                return;
            }
            var job = outJobs.get(jobId);
            mapDelete(outJobs, jobId);
            if (error) {
                job.reject(EsriError.fromJSON(JSON.parse(error)));
            }
            else {
                job.resolve(data);
            }
        };
        RemoteClient.prototype._post = function (message, resultOrData, transferList) {
            return utils_1.postMessage(this._port, message, resultOrData, transferList);
        };
        return RemoteClient;
    }());
    return RemoteClient;
});
