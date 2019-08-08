// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/Collection ../../../core/Error ../../../core/Evented ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../../../tasks/support/FeatureSet ./FeatureLayerView2D".split(" "),function(u,v,l,c,h,m,n,p,q,d,r,t){return function(g){function a(){var a=null!==g&&g.apply(this,arguments)||this;a._enabledDataRecieved=!1;a.errorString=null;
a.connectionStatus="disconnected";a.graphics=new m;return a}l(a,g);a.prototype.destroy=function(){this.connectionStatus="disconnected"};Object.defineProperty(a.prototype,"connectionError",{get:function(){if(this.errorString)return new n("stream-controller",this.errorString)},enumerable:!0,configurable:!0});a.prototype.on=function(a,b){"data-received"===a&&(this._enabledDataRecieved=!0,this._proxy.enableEvent("data-received",!0));var e=this.inherited(arguments),k=this;return{remove:function(){e.remove();
k.hasEventListener("data-received")||k._proxy.enableEvent("data-received",!1)}}};a.prototype.queryLatestObservations=function(a,b){var e=this;return this._proxy.queryLatestObservations(this._cleanUpQuery(a),b).then(function(a){a=r.fromJSON(a);a.features.forEach(function(a){a.layer=e.layer;a.sourceLayer=e.layer});return a})};a.prototype.connect=function(){return q.resolve()};a.prototype.disconnect=function(){};a.prototype._createClientOptions=function(){var a=this,b=this.inherited(arguments);return h({},
b,{emitEvent:function(b){a.emit(b.name,b.event)},setProperty:function(b){a.set(b.propertyName,b.value)}})};a.prototype._createTileRendererHash=function(){var a=this.inherited(arguments),b=this.layer,e=b.filter&&JSON.stringify(b.filter.geometry)+"."+b.filter.where;return a+"."+e+"."+(b.purgeOptions&&b.purgeOptions.age+"."+b.purgeOptions.displayCount)+"."+b.maximumTrackPoints};a.prototype._createServiceOptions=function(){var a=this.inherited(arguments),b=this.layer.parsedUrl.path,e=this.layer.source.layerDefinition.streamUrls,
d=this.layer.parsedUrl.query,f;if(f=this.layer.filter){var c={};f.geometry&&(c.geometry=f.geometry.toJSON());f.where&&(c.where=f.where);f=c}else f=null;return h({},a,{type:"stream",source:b,streamUrls:e,content:d,serviceFilter:f,purgeOptions:this.layer.purgeOptions,maximumTrackPoints:this.layer.maximumTrackPoints,enableDataRecieved:this._enabledDataRecieved})};c([d.property()],a.prototype,"errorString",void 0);c([d.property({dependsOn:["errorString"],readOnly:!0})],a.prototype,"connectionError",null);
c([d.property()],a.prototype,"connectionStatus",void 0);c([d.property({readOnly:!0})],a.prototype,"graphics",void 0);return a=c([d.subclass("esri.views.2d.layers.StreamLayerView2D")],a)}(d.declared(t,p))});