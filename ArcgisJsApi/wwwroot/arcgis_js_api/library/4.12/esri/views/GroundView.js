// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Accessor ../core/Collection ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators ./support/GroundViewElevationSampler".split(" "),function(m,n,f,c,g,d,h,k,b,l){return function(e){function a(a){a=e.call(this)||this;a.handles=new h;a.view=null;a.layerViews=new d;return a}f(a,e);a.prototype.initialize=function(){var a=this;this.handles.add(k.when(this,"view.map.ground",function(a){return a.load()}));
this.handles.add(this.layerViews.on("after-changes",function(){return a.layerViewsAfterChangesHandler()}))};a.prototype.destroy=function(){this._set("view",null);this.handles&&(this.handles.destroy(),this.handles=null)};Object.defineProperty(a.prototype,"elevationSampler",{get:function(){return this.view&&"2d"!==this.view.type&&this.view.ready&&this.view.basemapTerrain&&this.view.basemapTerrain.ready?new l({view:this.view}):null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"updating",
{get:function(){return this.suspended?!1:this.layerViews.some(function(a){return a.updating})},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"suspended",{get:function(){return!this.view||this.view.suspended},enumerable:!0,configurable:!0});a.prototype.layerViewsAfterChangesHandler=function(){var a=this;this.handles.remove("updating");this.handles.add(this.layerViews.map(function(b){return b.watch("updating",function(){return a.updateUpdating()},!0)}).toArray(),"updating");this.updateUpdating()};
a.prototype.updateUpdating=function(){this.notifyChange("updating")};c([b.property({readOnly:!0,dependsOn:["view.ready","view.basemapTerrain?.ready"]})],a.prototype,"elevationSampler",null);c([b.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],a.prototype,"updating",null);c([b.property({constructOnly:!0})],a.prototype,"view",void 0);c([b.property({type:d,readOnly:!0})],a.prototype,"layerViews",void 0);c([b.property({readOnly:!0,dependsOn:["view.suspended"]})],a.prototype,"suspended",
null);return a=c([b.subclass("esri.views.GroundView")],a)}(b.declared(g))});