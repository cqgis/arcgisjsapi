// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/asyncUtils ../../../core/Error ../../../core/accessorSupport/decorators ../../../tasks/support/FeatureSet ./FeatureLayerView2D".split(" "),function(r,t,l,c,k,m,n,f,p,q){return function(h){function a(){var g=null!==h&&h.apply(this,arguments)||this;g._enabledDataRecieved=!1;g.errorString=null;g.connectionStatus="disconnected";return g}l(a,h);
a.prototype.destroy=function(){this.connectionStatus="disconnected"};Object.defineProperty(a.prototype,"connectionError",{get:function(){if(this.errorString)return new n("stream-controller",this.errorString)},enumerable:!0,configurable:!0});a.prototype.on=function(g,b){"data-received"===g&&(this._enabledDataRecieved=!0,this._proxy.enableEvent("data-received",!0));var d=this.inherited(arguments),a=this;return{remove:function(){d.remove();a.hasEventListener("data-received")||a._proxy.enableEvent("data-received",
!1)}}};a.prototype.queryLatestObservations=function(a,b){var d=this;return m.safeCast(this._proxy.queryLatestObservations(this._cleanUpQuery(a),b).then(function(a){a=p.fromJSON(a);a.features.forEach(function(a){a.layer=d.layer;a.sourceLayer=d.layer});return a}))};a.prototype._createClientOptions=function(){var a=this,b=this.inherited(arguments);return k({},b,{emitEvent:function(b){a.emit(b.name,b.event)},setProperty:function(b){a.set(b.propertyName,b.value)}})};a.prototype._createTileRendererHash=
function(){var a=this.inherited(arguments),b=this.layer,d=b.filter&&JSON.stringify(b.filter.geometry)+"."+b.filter.where;return a+"."+d+"."+(b.purgeOptions&&b.purgeOptions.age+"."+b.purgeOptions.displayCount)+"."+b.maximumTrackPoints};a.prototype._createServiceOptions=function(){var a=this.inherited(arguments),b=this.layer.parsedUrl.path,d=this.layer.source.sourceJSON.streamUrls,f=this.layer.parsedUrl.query,e;if(e=this.layer.filter){var c={};e.geometry&&(c.geometry=e.geometry.toJSON());e.where&&(c.where=
e.where);e=c}else e=null;return k({},a,{type:"stream",source:b,streamUrls:d,content:f,serviceFilter:e,purgeOptions:this.layer.purgeOptions,maximumTrackPoints:this.layer.maximumTrackPoints,enableDataRecieved:this._enabledDataRecieved})};c([f.property()],a.prototype,"errorString",void 0);c([f.property({dependsOn:["errorString"],readOnly:!0})],a.prototype,"connectionError",null);c([f.property()],a.prototype,"connectionStatus",void 0);return a=c([f.subclass("esri.views.2d.layers.StreamLayerView2D")],
a)}(f.declared(q))});