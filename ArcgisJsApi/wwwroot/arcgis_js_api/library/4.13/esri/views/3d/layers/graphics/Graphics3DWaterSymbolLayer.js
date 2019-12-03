// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../Color ../../../../core/maybe ../../../../core/unitUtils ../../../../core/libs/earcut/earcut ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/math/common ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ./ElevationAligners ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./polygonUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/WaterMaterial ../../webgl-engine/materials/internal/waterMaterialUtils".split(" "),
function(n,u,G,H,I,J,K,x,L,M,y,z,N,q,O,P,Q,v,w,R,S,T,l,U,A,V,W,X,B,C){Object.defineProperty(u,"__esModule",{value:!0});n=function(n){function c(a,b,e,c){return n.call(this,a,b,e,c)||this}H(c,n);c.prototype.doLoad=function(){return J(this,void 0,void 0,function(){var a,b;return I(this,function(e){a=C.waterParameterDefaultsLocal;b=G({},a);this._updateMaterialParameters(b);b.isDraped=!0;this._drapedMaterial=new B.WaterMaterial(b,"waterDraped");this._context.stage.add(3,this._drapedMaterial);this._updateMaterialParameters(a);
this._material=new B.WaterMaterial(a,"water");this._context.stage.add(3,this._material);return[2]})})};c.prototype.destroy=function(){n.prototype.destroy.call(this);this._material&&(this._context.stage.remove(3,this._material.id),this._material=null);this._drapedMaterial&&(this._context.stage.remove(3,this._drapedMaterial.id),this._drapedMaterial=null)};c.prototype.createGraphics3DGraphic=function(a){a=a.graphic;if(!this._validateGeometryType(a.geometry,c.validGeometryTypes,this.symbolLayer.type)||
!this._validateGeometry(a.geometry))return null;var b="graphic"+a.uid,e=this.getGraphicElevationContext(a);return"on-the-ground"===e.mode?this._createAsOverlay(a,b):this._createAs3DShape(a,e,b,a.uid)};c.prototype.layerOpacityChanged=function(){var a=this._material.getParameters().color,b=this._getCombinedOpacity(this.symbolLayer.color,{hasIntrinsicColor:!0}),e=1>b||this._isPropertyDriven("opacity");this._material.setParameterValues({color:[a[0],a[1],a[2],b],transparent:e});this._drapedMaterial.setParameterValues({color:[a[0],
a[1],a[2],b],transparent:e});return!0};c.prototype.layerElevationInfoChanged=function(a,b,e){var d=this._elevationContext.mode;e=l.elevationModeChangeUpdateType(c.elevationModeChangeTypes,e,d);if(e!==l.SymbolUpdateType.UPDATE)return e;var k=l.needsElevationUpdates2D(d);return this.updateGraphics3DGraphicElevationInfo(a,b,function(){return k})};c.prototype.slicePlaneEnabledChanged=function(a,b){this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});this._drapedMaterial.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});
return!0};c.prototype.physicalBasedRenderingChanged=function(a,b){return!0};c.prototype.pixelRatioChanged=function(a,b){return!0};c.prototype.setDrawOrder=function(a,b,e){this.updateSymbolLayerOrder(a,b);this._material&&(this._material.renderPriority=a+b/2,e.add(this._material.id));this._drapedMaterial&&(this._drapedMaterial.renderPriority=a+b/2,e.add(this._drapedMaterial.id))};c.prototype._createAs3DShape=function(a,b,e,c){var k=l.getGeometryAsPolygon(a.geometry);a=l.getGeometryVertexData3D(k.rings,
k.hasZ,k.spatialReference,this._context.renderSpatialReference,this._context.elevationProvider,this._context.renderCoordsHelper,b);var D=a.vertexData.length/3;a.uvCoords=new Float64Array(2*D);d.idHint=e;d.data=a;d.outNum=0;d.outGeometries=[];d.outTransforms=[];d.outMaterials=[];this._create3DShapeGeometries(d);this._logGeometryCreationWarnings(d.data,k.rings,"rings","WaterSymbol3DLayer");if(0===d.outNum)return null;this._createUVCoordsFromVertices(d.data.uvCoords,d.data.eleVertexData,D,this._context.elevationProvider.spatialReference);
e=new W({geometries:d.outGeometries,materials:d.outMaterials,transformations:d.outTransforms,castShadow:!1,metadata:{layerUid:this._context.layer.uid,graphicUid:c},idHint:e});e=new T(this,e,d.outGeometries,null,null,R.perVertexElevationAligner,b);e.alignedTerrainElevation=a.terrainElevation;e.needsElevationUpdates=l.needsElevationUpdates2D(b.mode);return e};c.prototype._createUVCoordsFromVertices=function(a,b,e,d){d=L.getMetersPerUnitForSR(d);w.empty(h);for(var k=0;k<e;k++)N.vec2.set(F,b[3*k+0],b[3*
k+1]),w.expandPointInPlace(h,F);P.vec4.scale(h,h,d);k=h[1]%c.unitSizeOfTexture;r[0]=h[0]-h[0]%c.unitSizeOfTexture;r[1]=h[1]-k;for(k=0;k<e;k++)a[2*k+0]=(b[3*k+0]*d-r[0])/c.unitSizeOfTexture,a[2*k+1]=(b[3*k+1]*d-r[1])/c.unitSizeOfTexture};c.prototype._create3DShapeGeometries=function(a){for(var b=a.data.eleVertexData,e=a.data.vertexData,d=a.data.uvCoords,c=0,E=a.data.geometryData.polygons;c<E.length;c++){var g=E[c],f=g.count,m=g.index;if(this._context.clippingExtent&&(l.computeBoundingBox(b,m,f,p),
l.boundingBoxClipped(p,this._context.clippingExtent)))continue;var h=new Float64Array(b.buffer,3*m*b.BYTES_PER_ELEMENT,3*f),g=this._runEarcut(h,g);if(0!==g.length){g=new Uint32Array(g);l.applyOrigin(e,m,f,t);var n=new Float64Array(e.buffer,3*m*e.BYTES_PER_ELEMENT,3*f),f=new Float64Array(d.buffer,2*m*d.BYTES_PER_ELEMENT,2*f),h=A.createPolygonGeometryData({indices:g,vertices:n,uv0:f,eleVertices:h}),h=new V(h,a.idHint);h.singleUse=!0;f=z.mat4f64.create();y.mat4.translate(f,f,t);a.outGeometries.push(h);
a.outMaterials.push(this._material);a.outTransforms.push(f);a.outNum++}}};c.prototype._updateMaterialParameters=function(a){var b=this.symbolLayer.color;x.isSome(b)&&(a.color=K.toUnitRGBA(b));b=this._getCombinedOpacity(b,{hasIntrinsicColor:!0});a.color=[a.color[0],a.color[1],a.color[2],b];a.transparent=1>b||this._isPropertyDriven("opacity");a.waveDirection=x.isSome(this.symbolLayer.waveDirection)?c.headingVectorFromAngle(this.symbolLayer.waveDirection):q.vec2f64.fromValues(0,0);b=C.wavePresets[this.symbolLayer.waveStrength+
"-"+this.symbolLayer.waterbodySize];a.waveStrength=b.waveStrength;a.waveTextureRepeat=b.textureRepeat;a.waveVelocity=b.waveVelocity;a.flowStrength=b.perturbationStrength};c.prototype._createAsOverlay=function(a,b){var e=l.getGeometryAsPolygon(a.geometry);this._drapedMaterial.renderPriority=this._symbolLayerOrder+this._symbolLayerOrderDelta/2;var c=l.getGeometryVertexDataDraped(e.rings,e.spatialReference,this._context.overlaySR);d.idHint=b;d.data=c;b=c.vertexData.length/3;c.uvCoords=new Float64Array(2*
b);d.outNum=0;d.outGeometries=[];d.outBoundingBox=v.empty();d.layerUid=this._context.layer.uid;d.graphicsUid=a.uid;this._createAsOverlayWater(d);this._logGeometryCreationWarnings(d.data,e.rings,"rings","WaterSymbol3DLayer");if(0===d.outNum)return null;this._createUVCoordsFromVertices(d.data.uvCoords,d.data.vertexData,b,e.spatialReference);return 0<d.outNum?new S(this,d.outGeometries,d.outBoundingBox):null};c.prototype._runEarcut=function(a,b){var c=b.holeIndices.map(function(a){return a-b.index});
return M(a,c,3)};c.prototype._createAsOverlayWater=function(a){for(var b=a.data.vertexData,c=a.data.uvCoords,d=0,k=a.data.geometryData.polygons;d<k.length;d++){var h=k[d],g=h.count,f=h.index;l.computeBoundingBox(b,f,g,p);if(!l.boundingBoxClipped(p,this._context.clippingExtent)){v.expand(a.outBoundingBox,p);var m=new Float64Array(b.buffer,3*f*b.BYTES_PER_ELEMENT,3*g),h=this._runEarcut(m,h);0!==h.length&&(h=new Uint32Array(h),l.applyOrigin(b,f,g,t),l.setZ(b,f,g,this._getDrapedZ()),g=new Float64Array(c.buffer,
2*f*c.BYTES_PER_ELEMENT,2*g),m=A.createPolygonGeometryData({indices:h,vertices:m,uv0:g}),g=new X(m),g.data.layerUid=a.layerUid,g.data.graphicUid=a.graphicsUid,g.material=this._drapedMaterial,f=p,g.center=[.5*(f[0]+f[3]),.5*(f[1]+f[4]),0],g.bsRadius=.5*Math.sqrt((f[3]-f[0])*(f[3]-f[0])+(f[4]-f[1])*(f[4]-f[1])),f=z.mat4f64.create(),y.mat4.translate(f,f,t),g.transformation=f,g.name=a.idHint,g.uniqueName=a.idHint+"#"+m.id,a.outGeometries.push(g),a.outNum++)}}};c.headingVectorFromAngle=function(a){var b=
q.vec2f64.create();a=Q.toRadian(a);b[0]=Math.sin(a);b[1]=Math.cos(a);return b};Object.defineProperty(c.prototype,"test",{get:function(){var a=this;return{create3DShape:function(b){return a._createAs3DShape(b.graphic,b.elevationContext,b.idHint,b.graphicUid)}}},enumerable:!0,configurable:!0});c.validGeometryTypes=["polyline","polygon","extent"];c.unitSizeOfTexture=100;c.elevationModeChangeTypes={definedChanged:l.SymbolUpdateType.RECREATE,staysOnTheGround:l.SymbolUpdateType.NONE,onTheGroundChanged:l.SymbolUpdateType.RECREATE};
return c}(U.default);u.Graphics3DWaterSymbolLayer=n;var r=q.vec2f64.create(),h=w.create(),F=q.vec2f64.create(),p=v.create(),t=O.vec3f64.create(),d={idHint:null,data:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null};u.default=n});