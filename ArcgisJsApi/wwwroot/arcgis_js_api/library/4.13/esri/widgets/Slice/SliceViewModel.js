// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Logger ../../core/accessorSupport/decorators ../../views/3d/interactive/analysisTools/slice/SliceTool ../support/InteractiveToolViewModel".split(" "),function(l,m,f,c,g,b,h,k){var d=g.getLogger("esri.widgets.Slice.SliceViewModel");return function(e){function a(a){a=e.call(this,a)||this;a.supportedViewType="3d";a.excludedLayers=null;a.excludeGroundSurface=null;return a}f(a,e);Object.defineProperty(a.prototype,
"state",{get:function(){return this.isDisabled?"disabled":this.tool.state},enumerable:!0,configurable:!0});a.prototype.newSlice=function(){this.tool&&this.tool.newSlice()};a.prototype.clearSlice=function(){this.tool&&this.tool.clearSlice()};a.prototype.enterExcludeLayerMode=function(){this.tool&&this.tool.enterExcludeLayerMode()};a.prototype.exitExcludeLayerMode=function(){this.tool&&this.tool.exitExcludeLayerMode()};a.prototype.createToolParams=function(){return{toolConstructor:h}};a.prototype.logUnsupportedError=
function(){d.error("Slice widget is not implemented for MapView")};a.prototype.logError=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];d.error.apply(d,a)};c([b.property({dependsOn:["isDisabled","tool.state"],readOnly:!0})],a.prototype,"state",null);c([b.property()],a.prototype,"tool",void 0);c([b.aliasOf("tool.plane")],a.prototype,"plane",void 0);c([b.aliasOf("tool.layersMode")],a.prototype,"layersMode",void 0);c([b.aliasOf("tool.excludedLayers")],a.prototype,"excludedLayers",
void 0);c([b.aliasOf("tool.excludeGroundSurface")],a.prototype,"excludeGroundSurface",void 0);return a=c([b.subclass("esri.widgets.slice.SliceViewModel")],a)}(b.declared(k))});