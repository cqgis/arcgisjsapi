// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/declareExtendsHelper ./tsSupport/decorateHelper ./Accessor ./promiseUtils ./scheduling ./accessorSupport/decorators".split(" "),function(n,p,h,k,l,d,f,g){var m=function(){function c(b){var a=this;this.instance=b;this._resolver=d.createDeferred();this._status=void 0;this._resolvingPromises=[];this._resolver.promise.then(function(){a._status=0;a._cleanUp()},function(){a._status=1;a._cleanUp()})}c.prototype.addResolvingPromise=function(b){this._resolvingPromises.push(b);
this._tryResolve()};c.prototype.isResolved=function(){return 0===this._status};c.prototype.isRejected=function(){return 1===this._status};c.prototype.isFulfilled=function(){return null!=this._status};c.prototype.abort=function(){this._resolver.reject(d.createAbortError())};c.prototype.when=function(b,a){return this._resolver.promise.then(b,a)};c.prototype._cleanUp=function(){this._allPromise=this._resolvingPromises=this._allPromise=null};c.prototype._tryResolve=function(){var b=this;if(!this.isFulfilled()){var a=
d.createDeferred(),c=this._resolvingPromises.concat([a.promise]),e=this._allPromise=d.all(c);e.then(function(){b.isFulfilled()||b._allPromise!==e||b._resolver.resolve(b.instance)},function(a){b.isFulfilled()||b._allPromise!==e||d.isAbortError(a)||b._resolver.reject(a)});f.schedule(function(){a.resolve()})}};return c}();return function(c){function b(){var a=c.call(this)||this;a._promiseProps=new m(a);a.addResolvingPromise(d.create(function(a){f.schedule(a)}));return a}h(b,c);b.prototype.isResolved=
function(){return this._promiseProps.isResolved()};b.prototype.isRejected=function(){return this._promiseProps.isRejected()};b.prototype.isFulfilled=function(){return this._promiseProps.isFulfilled()};b.prototype.when=function(a,b){var c=this;return d.create(function(a,b){c._promiseProps.when(a,b)}).then(a,b)};b.prototype.catch=function(a){return this.when(null,a)};b.prototype.addResolvingPromise=function(a){a&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in
a?a.when():a)};return b=k([g.subclass("esri.core.Promise")],b)}(g.declared(l))});