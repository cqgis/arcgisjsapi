// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/asyncUtils ../../../../core/maybe ../../../../core/ObjectPool ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/Polygon ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../layers/graphics/dehydratedFeatures ../../../../layers/graphics/featureConversionUtils ./featureExpressionInfoUtils ../../support/projectionUtils".split(" "),
function(B,C,n,p,r,t,u,v,w,f,h,g,x,y,z){var q=new u(Array,function(b){return f.set(b,f.ZERO)},null,10,5),A=h.create();return function(){function b(a,c,d,b){this._labelGraphics=[];this._auxiliaryGraphics=[];for(var e=Array(2),k=0;k<e.length;k++)e[k]=Array(4);this._visibilityFlags=e;this._featureExpressionFeature=null;this._optimizedGeometry={geometry:null,hasZ:!1,hasM:!1};this.extent=null;++c.referenced;this.graphics3DSymbol=c;this.graphic=a;this._graphics=d;this._featureExpressionFeature=y.createFeature(a,
b)}b.prototype.initialize=function(a,c){var d=this;this._layer=a;this._stage=c;this.forEachSymbolLayerGraphic(function(b){b.initialize(a,c);b.setVisibility(d.isVisible())})};b.prototype.destroy=function(){this.forEachSymbolLayerGraphic(function(a){return a.destroy()});this._auxiliaryGraphics=this._graphics=null;--this.graphics3DSymbol.referenced;this.graphics3DSymbol=null};Object.defineProperty(b.prototype,"destroyed",{get:function(){return null==this._graphics},enumerable:!0,configurable:!0});b.prototype.clearLabelGraphics=
function(){this.forEachLabelGraphic(function(a){return a.destroy()});this._labelGraphics.length=0};b.prototype.addLabelGraphic=function(a,c,d){this._labelGraphics.push(a);a.initialize(c,d);a.setVisibility(this.isVisible(1))};b.prototype.addAuxiliaryGraphic=function(a){this._auxiliaryGraphics.push(a);this._layer&&(a.initialize(this._layer,this._stage),a.setVisibility(this.isVisible()))};b.prototype.isDraped=function(){var a=!1;this.forEachSymbolLayerGraphic(function(c){"draped"===c.type&&(a=!0)});
return a};b.prototype.isVisible=function(a,c){void 0===a&&(a=0);for(var d=0;d<=a;d++)for(var b=this._visibilityFlags[d],e=0;e<b.length;++e)if(!1===b[e]&&e!==c)return!1;return!0};b.prototype.hasVisibilityFlag=function(a,c){return null!=this._visibilityFlags[c][a]};b.prototype.setVisibilityFlag=function(a,c,d){var b=this.isVisible(d);this._visibilityFlags[d][a]=c;var e=this.isVisible(d);if(b===e)return!1;if(1===d)this.forEachLabelGraphic(function(a){return a.setVisibility(e)});else{this.forEachSymbolLayerGraphic(function(a){return a.setVisibility(e)});
var f=this.isVisible(1);this.forEachLabelGraphic(function(a){return a.setVisibility(f)})}return!0};b.prototype.clearVisibilityFlag=function(a,c){void 0===c&&(c=0);return this.setVisibilityFlag(a,void 0,c)};b.prototype.getBSRadius=function(){var a=0;this.forEachSymbolLayerGraphic(function(c){a=Math.max(a,c.getBSRadius())});return a};b.prototype.getCenterObjectSpace=function(a){void 0===a&&(a=v.vec3f64.create());return this._graphics[0].getCenterObjectSpace(a)};b.prototype.computeExtent=function(a){if(!this.extent){this.extent=
h.create();var c=this.graphic.geometry;if(t.isNone(c))return this.extent=null,!1;var d=c.spatialReference;g.computeAABR(c,this.extent);if(!d.equals(a)&&!z.boundingRectToBoundingRect(this.extent,d,this.extent,a))return this.extent=null,!1}return!0};b.prototype.getAsOptimizedGeometry=function(a,c){if(this._optimizedGeometry.geometry&&this._optimizedGeometry.hasZ===a&&this._optimizedGeometry.hasM===c)return this._optimizedGeometry.geometry;this._optimizedGeometry.geometry=this._convertGraphicToOptimizedGeometry(this.graphic,
a,c);this._optimizedGeometry.hasZ=a;this._optimizedGeometry.hasM=c;return this._optimizedGeometry.geometry};b.prototype._convertGraphicToOptimizedGeometry=function(a,c,d){a=a.geometry;if("mesh"===a.type||"extent"===a.type)a=w.fromExtent("mesh"===a.type?a.extent:a);return x.convertFromGeometry(a,c,d)};Object.defineProperty(b.prototype,"usedMemory",{get:function(){var a=this,c=0;this.forEachSymbolLayerGraphic(function(d){var b=d.graphics3DSymbolLayer.complexity;d="draped"===d.type?b.memory.draped:b.memory;
c+=d.bytesPerFeature;d.bytesPerCoordinate&&(c+=g.numVertices(a.graphic.geometry)*d.bytesPerCoordinate)});return c},enumerable:!0,configurable:!0});b.prototype.getProjectedBoundingBox=function(a,c,b,k,e){return p(this,void 0,void 0,function(){var d=this;return n(this,function(g){switch(g.label){case 0:return e||(e={boundingBox:null,requiresDrapedElevation:!1,screenSpaceObjects:[]}),e.boundingBox?f.empty(e.boundingBox):e.boundingBox=f.empty(),e.requiresDrapedElevation=!1,[4,r.forEach(this._graphics,
function(g){return p(d,void 0,void 0,function(){var d,l,m;return n(this,function(h){switch(h.label){case 0:if(!g)return[2];d="draped"===g.type?c:a;l=q.acquire();return[4,g.getProjectedBoundingBox(d,b,e.screenSpaceObjects,k,l)];case 1:return m=h.sent(),isFinite(m[2])&&isFinite(m[5])||(e.requiresDrapedElevation=!0),m&&f.expand(e.boundingBox,l),q.release(l),[2]}})})})];case 1:return g.sent(),f.allFinite(e.boundingBox)||h.allFinite(f.toRect(e.boundingBox,A))?[2,e]:[2,null]}})})};b.prototype.needsElevationUpdates=
function(){for(var a=0,c=this._graphics;a<c.length;a++){var d=c[a];if(d&&("object3d"===d.type||"lod-instance"===d.type)&&d.needsElevationUpdates)return!0}a=0;for(c=this._labelGraphics;a<c.length;a++)if((d=c[a])&&d.needsElevationUpdates)return!0;return!1};b.prototype.alignWithElevation=function(a,c){var d=this;this.forEachRenderedGraphic(function(b){"object3d"!==b.type&&"lod-instance"!==b.type||b.alignWithElevation(a,c,d._featureExpressionFeature)})};b.prototype.addHighlight=function(a,c){this.forEachSymbolLayerGraphic(function(b){return b.addHighlight(a,
c)})};b.prototype.removeHighlight=function(a){this.forEachSymbolLayerGraphic(function(c){return c.removeHighlight(a)})};b.prototype.forEachGraphicList=function(a,c){a.forEach(function(a,b){return a&&c(a,b)})};b.prototype.forEachSymbolLayerGraphic=function(a){this.forEachGraphicList(this._graphics,a);this.forEachGraphicList(this._auxiliaryGraphics,a)};b.prototype.forEachLabelGraphic=function(a){this.forEachGraphicList(this._labelGraphics,a)};b.prototype.forEachRenderedGraphic=function(a){this.forEachSymbolLayerGraphic(a);
this.forEachLabelGraphic(a)};return b}()});