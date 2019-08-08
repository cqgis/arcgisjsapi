// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Evented ../../../core/HandleOwner ../../../core/Identifiable ../../../core/Promise ../../../core/accessorSupport/decorators".split(" "),function(l,m,n,e,c,f,g,h,k,b){return function(d){function a(a){a=d.call(this,a)||this;a.layer=null;a.parent=null;a.view=null;return a}e(a,d);a.prototype.initialize=function(){};a.prototype.destroy=function(){this.layer=
this.view=this.parent=null};Object.defineProperty(a.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(a){void 0===a?this._clearOverride("visible"):this._override("visible",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"fullOpacity",{get:function(){var a=this.get("layer.opacity"),a=null!=a?a:1,b=this.get("parent.fullOpacity");return a*(null!=b?b:1)},enumerable:!0,configurable:!0});a.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.visible||!1};a.prototype.isUpdating=function(){return!1};c([b.property()],a.prototype,"layer",void 0);c([b.property()],a.prototype,"parent",void 0);c([b.property({readOnly:!0,dependsOn:["view","visible","parent.suspended"]})],a.prototype,
"suspended",null);c([b.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],a.prototype,"updating",null);c([b.property()],a.prototype,"view",void 0);c([b.property({dependsOn:["layer.visible"]})],a.prototype,"visible",null);c([b.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],a.prototype,"fullOpacity",null);return a=c([b.subclass("esri.views.3d.layers.BuildingSublayerView3D")],a)}(b.declared(g,f,h.Identifiable,k))});