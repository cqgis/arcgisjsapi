// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/accessorSupport/decorators ../support/serviceTileInfoProperty ../support/TilemapCache".split(" "),function(k,d,l,e,c,f,b,g,h){Object.defineProperty(d,"__esModule",{value:!0});d.ArcGISCachedService=function(d){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.copyright=null;a.minScale=0;a.maxScale=0;a.spatialReference=
null;a.tileInfo=null;a.tilemapCache=null;return a}e(a,d);a.prototype.readMinScale=function(a,b){return null!=b.minLOD&&null!=b.maxLOD?a:0};a.prototype.readMaxScale=function(a,b){return null!=b.minLOD&&null!=b.maxLOD?a:0};Object.defineProperty(a.prototype,"supportsBlankTile",{get:function(){return 10.2<=this.version},enumerable:!0,configurable:!0});a.prototype.readTilemapCache=function(a,b){return b.capabilities&&-1<b.capabilities.indexOf("Tilemap")?new h.TilemapCache({layer:this}):null};c([b.property({json:{read:{source:"copyrightText"}}})],
a.prototype,"copyright",void 0);c([b.property()],a.prototype,"minScale",void 0);c([b.reader("service","minScale")],a.prototype,"readMinScale",null);c([b.property()],a.prototype,"maxScale",void 0);c([b.reader("service","maxScale")],a.prototype,"readMaxScale",null);c([b.property({type:f.SpatialReference})],a.prototype,"spatialReference",void 0);c([b.property({readOnly:!0,dependsOn:["version"]})],a.prototype,"supportsBlankTile",null);c([b.property(g.serviceTileInfoProperty)],a.prototype,"tileInfo",void 0);
c([b.property()],a.prototype,"tilemapCache",void 0);c([b.reader("service","tilemapCache",["capabilities"])],a.prototype,"readTilemapCache",null);c([b.property()],a.prototype,"version",void 0);return a=c([b.subclass("esri.layers.mixins.ArcGISCachedService")],a)}(b.declared(d))}});