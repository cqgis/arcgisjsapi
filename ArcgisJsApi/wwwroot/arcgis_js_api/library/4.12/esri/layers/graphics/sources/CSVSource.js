// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../geometry ../../../core/Accessor ../../../core/has ../../../core/Loadable ../../../core/maybe ../../../core/promiseUtils ../../../core/requireUtils ../../../core/workers ../../../core/accessorSupport/decorators ../../../tasks/support/FeatureSet module".split(" "),function(k,g,l,e,m,n,p,f,h,q,r,x,t,u,d,v,w){Object.defineProperty(g,
"__esModule",{value:!0});h.add("esri-workers-for-memory-layers",!1);f=function(f){function a(b){b=f.call(this,b)||this;b.type="csv";return b}l(a,f);a.prototype.load=function(b){b=r.isSome(b)?b.signal:null;this.addResolvingPromise(this._startWorker(b));return this.when()};a.prototype.destroy=function(){this._connection&&this._connection.close()};a.prototype.openPorts=function(){var b=this;return this.load().then(function(){return b._connection.openPorts()})};a.prototype.queryFeatures=function(b,c){var a=
this;void 0===c&&(c={});return this.load(c).then(function(){return a._connection.invoke("queryFeatures",b?b.toJSON():null,c)}).then(function(b){return v.fromJSON(b)})};a.prototype.queryFeaturesJSON=function(b,c){var a=this;void 0===c&&(c={});return this.load(c).then(function(){return a._connection.invoke("queryFeatures",b?b.toJSON():null,c)})};a.prototype.queryFeatureCount=function(b,a){var c=this;void 0===a&&(a={});return this.load(a).then(function(){return c._connection.invoke("queryFeatureCount",
b?b.toJSON():null,a)})};a.prototype.queryObjectIds=function(a,c){var b=this;void 0===c&&(c={});return this.load(c).then(function(){return b._connection.invoke("queryObjectIds",a?a.toJSON():null,c)})};a.prototype.queryExtent=function(a,c){var b=this;void 0===c&&(c={});return this.load(c).then(function(){return b._connection.invoke("queryExtent",a?a.toJSON():null,c)}).then(function(a){return{count:a.count,extent:p.Extent.fromJSON(a.extent)}})};a.prototype._startWorker=function(a){return n(this,void 0,
void 0,function(){var b,d;return m(this,function(c){switch(c.label){case 0:return[3,2];case 1:c.sent(),c.label=2;case 2:return b=this,[4,u.open(t.getAbsMid("./support/CSVSourceWorker",k,w),{strategy:h("esri-workers-for-memory-layers")?"dedicated":"local",signal:a})];case 3:return b._connection=c.sent(),[4,this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map(function(a){return a.toJSON()}),latitudeField:this.latitudeField,longitudeField:this.longitudeField,
spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:a})];case 4:return d=c.sent(),this.locationInfo=d.locationInfo,this.layerDefinition=d.layerDefinition,this.columnDelimiter=d.columnDelimiter,[2]}})})};e([d.property()],a.prototype,"type",void 0);e([d.property()],a.prototype,"url",void 0);e([d.property()],a.prototype,"delimiter",void 0);e([d.property()],a.prototype,"fields",void 0);e([d.property()],a.prototype,"latitudeField",
void 0);e([d.property()],a.prototype,"longitudeField",void 0);e([d.property()],a.prototype,"spatialReference",void 0);e([d.property()],a.prototype,"timeInfo",void 0);e([d.property()],a.prototype,"locationInfo",void 0);e([d.property()],a.prototype,"layerDefinition",void 0);e([d.property()],a.prototype,"columnDelimiter",void 0);return a=e([d.subclass("esri.layers.graphics.sources.CSVSource")],a)}(d.declared(f,q));g.default=f});