// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/compilerUtils ../../../core/Handles ../../../core/watchUtils ../../../core/accessorSupport/decorators ./PanoramicAtmosphere ./RealisticAtmosphere ./SimpleAtmosphere ./Stars".split(" "),function(u,v,k,e,l,m,n,f,d,p,h,q,r){var t=[13,14];return function(g){function c(){var a=null!==g&&g.apply(this,arguments)||this;a.needsRender=!1;a.didRender=!0;a._handles=
new n;a._initContext=null;a._pendingAtmosphere=null;a._atmosphere=null;a._stars=null;return a}k(c,g);Object.defineProperty(c.prototype,"updating",{get:function(){return null!=this._pendingAtmosphere},enumerable:!0,configurable:!0});c.prototype.initialize=function(){this.view._stage.addRenderPlugin(t,this)};c.prototype.destroy=function(){this._pendingAtmosphere&&(this._pendingAtmosphere.destroy(),this._pendingAtmosphere=null);this._atmosphere&&(this._atmosphere.destroy(),this._atmosphere=null);this._stars&&
(this._stars.destroy(),this._stars=null);this._handles&&this._handles.removeAll();this.view&&(this.view._stage.removeRenderPlugin(this),this.view=null)};c.prototype.initializeRenderContext=function(a){this._initContext=a;this.setup()};c.prototype.setup=function(){var a=this;this._handles.add(f.when(this.view,"basemapTerrain",function(){return a._updateBasemapTerrain()}));this._handles.add([f.init(this.view,["viewingMode","environment.atmosphereEnabled","environment.atmosphere.quality"],function(){return a._updateAtmosphere()}),
f.init(this.view,"environment.starsEnabled",function(){return a._updateStars()})])};c.prototype.uninitializeRenderContext=function(a){this._stars&&(this._stars.uninitializeRenderContext(a),this._stars.destroy(),this._stars=null);this._atmosphere&&(this._atmosphere.uninitializeRenderContext(a),this._atmosphere.destroy(),this._atmosphere=null)};c.prototype.render=function(a){var b=this.view.basemapTerrain;if(!(b&&b.loaded||"global"!==this.view.viewingMode))return!1;b=!0;this._stars&&(b=this._stars.render(a)&&
b);this._atmosphere&&(b=this._atmosphere.render(a)&&b);b&&(this.needsRender=!1);return b};c.prototype._updateStars=function(){var a=this.view.get("environment.starsEnabled")||!1;a&&!this._stars?(this._stars=new r(this.view),this._stars.initializeRenderContext(this._initContext),this.needsRender=!0):!a&&this._stars&&(this._stars.destroy(),this._stars=null,this.needsRender=!0)};c.prototype._updateAtmosphere=function(){var a=this,b=this._getAtmosphereType();this.atmosphereType!==b&&(this.atmosphereType=
b,this._pendingAtmosphere&&(this._pendingAtmosphere!==this._atmosphere&&this._pendingAtmosphere.destroy(),this._pendingAtmosphere=null),(b=this._getAtmosphereClass())?(b=new b(this.view),b.initializeRenderContext(this._initContext),null==this._atmosphere?(this._atmosphere=b,this.needsRender=!0):(this._pendingAtmosphere=b,b.when(function(){a._atmosphere.destroy();a._atmosphere=a._pendingAtmosphere;a._pendingAtmosphere=null})),b.when(function(){a.needsRender=!0;a._updateBasemapTerrain()})):(this._atmosphere&&
(this._atmosphere.destroy(),this._atmosphere=null,this.needsRender=!0),this._updateBasemapTerrain()))};c.prototype._getAtmosphereClass=function(){var a=this._getAtmosphereType();switch(a){case "none":return null;case "realistic":return h;case "panoramic":return p;case "simple":return q;default:m.neverReached(a)}};c.prototype._getAtmosphereType=function(){var a=this.view.get("environment.atmosphereEnabled"),b=this.view.get("environment.atmosphere.quality");return a&&null!=b?"local"===this.view.viewingMode?
"panoramic":"high"===b&&h.isSupported(this._initContext)?"realistic":"simple":"none"};c.prototype._updateBasemapTerrain=function(){var a=this.view.basemapTerrain;a&&(a.velvetOverground=null!=this._atmosphere&&"simple"===this.atmosphereType)};Object.defineProperty(c.prototype,"test",{get:function(){return{atmosphere:this._atmosphere}},enumerable:!0,configurable:!0});e([d.property()],c.prototype,"view",void 0);e([d.property({dependsOn:["_pendingAtmosphere"]})],c.prototype,"updating",null);e([d.property()],
c.prototype,"_pendingAtmosphere",void 0);return c=e([d.subclass("esri.views.3d.environment.EnvironmentRenderer")],c)}(d.declared(l))});