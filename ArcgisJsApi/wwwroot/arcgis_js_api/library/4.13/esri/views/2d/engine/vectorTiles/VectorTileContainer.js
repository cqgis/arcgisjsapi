// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/has ../../../../core/promiseUtils ../../../../core/scheduling ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f32 ../../../../core/libs/gl-matrix-2/vec2f32 ../../../../core/libs/gl-matrix-2/vec3f32 ../../../webgl ../../engine ../../tiling ./GeometryUtils ./renderers/Renderer ../../tiling/TileCoverage".split(" "),function(H,I,A,x,B,C,n,y,D,u,J,v,w,E,F,G){var r=v.enums.WGLDrawPhase;return function(l){function h(){var a=
null!==l&&l.apply(this,arguments)||this;a._tileCoordinateScale=u.vec3f32.create();a._orientationVec=u.vec3f32.fromValues(0,0,1);a._displayScale=u.vec3f32.create();a._defaultTransform=y.mat4f32.create();a._displayWidth=0;a._displayHeight=0;a._backgroundTile={tileTransform:{transform:y.mat4f32.create(),displayCoord:D.vec2f32.create()},coords:[0,0],key:w.TileKey.pool.acquire(),coordRange:4096};a._pointToCallbacks=new Map;return a}A(h,l);h.prototype.initialize=function(a,k,b,c){var f=this;this._spriteMosaicPromise=
a;this._spriteMosaicPromise.then(function(b){f._spriteMosaicPromise===a&&(f._renderer=new F(b,k))});this._tileInfoView=c;this._tileInfo=b};h.prototype.dispose=function(){this._renderer&&this._renderer.dispose();w.TileKey.pool.release(this._backgroundTile.key);l.prototype.dispose.call(this)};h.prototype.hitTest=function(a,k){var b=this,c=[a,k];return B.create(function(a,d){b._pointToCallbacks.set(c,{resolve:a,reject:d});b.requestRender()},function(){b._pointToCallbacks.has(c)&&b._pointToCallbacks.delete(c)})};
h.prototype.renderChildren=function(a){var k=this;if(0!==this.children.length&&this._tileInfoView&&a&&a.state&&(a.drawPhase===r.MAP||a.drawPhase===r.HITTEST))if(this._renderer){if(x("esri-vector-tiles-debug"))for(var b=0,c=this.children;b<c.length;b++){var f=c[b];f.triangleCount=0}c=a.state;b=this.stage.context;f=this._renderer;f.initializeProgramCache(this.stage.context);f.setGlobalOpacity(b,a,this.opacity);a.displayLevel=this._tileInfoView.scaleToLevel(c.scale);a.requiredLevel=this._tileInfoView.getSmallestInfoForScale(c.scale).level;
a.renderer=this._renderer;c=a.drawPhase===r.HITTEST?4:0;b.setDepthWriteEnabled(!1);b.setStencilTestEnabled(!1);this._renderBackgroundBuckets(a,this._styleRepository.backgroundBucketIds,c);b.setDepthWriteEnabled(!0);b.setStencilWriteMask(255);b.setClearDepth(1);b.setClearStencil(0);b.clear(b.gl.DEPTH_BUFFER_BIT|b.gl.STENCIL_BUFFER_BIT);b.setDepthWriteEnabled(!1);this.sortChildren(function(a,b){a=0!==a.key.level-b.key.level?a.key.level-b.key.level:0!==a.key.row-b.key.row?a.key.row-b.key.row:a.key.col-
b.key.col;return a});for(var c=this.children.length,d=1;d<=c;d++){var g=this.children[d-1];g.attached&&g.visible&&(g.stencilData.reference=d,g.stencilData.mask=255)}this._updateTilesTransform(a.state,a.requiredLevel,this.children);b.setDepthWriteEnabled(!0);this._renderer.setStateParams(a.state,a.pixelRatio,a.displayLevel);this._renderer.drawClippingMasks(b,this.children);b.setStencilWriteMask(0);b.setBlendFunctionSeparate(1,771,1,771);b.setStencilOp(7680,7680,7681);b.setDepthFunction(515);b.setBlendingEnabled(!1);
b.setStencilTestEnabled(!0);b.setDepthTestEnabled(!0);b.setDepthWriteEnabled(!0);a.drawphase=1;l.prototype.renderChildren.call(this,a);b.setDepthWriteEnabled(!1);b.setBlendingEnabled(!0);a.drawphase=2;l.prototype.renderChildren.call(this,a);a.drawphase=3;l.prototype.renderChildren.call(this,a);b.setStencilTestEnabled(!1);b.setDepthTestEnabled(!1);f.applyGlobalOpacity(b,a,this.opacity);if(x("esri-vector-tiles-debug"))for(c=0,d=this.children;c<d.length;c++)f=d[c],f.attached&&f.visible&&this._renderer.renderTileInfo(b,
f);0<this._pointToCallbacks.size&&(this._pointToCallbacks.forEach(function(b,c){var d=k._hitTest(a,c[0],c[1]);C.schedule(function(){b.resolve(d)})}),this._pointToCallbacks.clear());this._renderer.needsRedraw()&&this.requestRender()}else this.requestRender()};h.prototype.removeAllChildren=function(){for(var a=0;a<this.children.length;a++)this.children[a].dispose();l.prototype.removeAllChildren.call(this)};h.prototype.setStyleRepository=function(a){this._styleRepository=a};h.prototype._hitTest=function(a,
k,b){var c=this._tileInfoView.getSmallestInfoForScale(a.state.scale).level,f=[0,0];a.state.toMap(f,[k,b]);var d=a.state.clone(),g=d.viewpoint.clone(),e=g.targetGeometry;e.x=f[0];e.y=f[1];g.targetGeometry=e;d.viewpoint=g;d.size=[3,3];this._renderer.setStateParams(d,a.pixelRatio,a.displayLevel);return(a=this._renderer.hitTest({context:this.stage.context,drawPhase:0,pixelRatio:a.pixelRatio,stationary:a.stationary,globalOpacity:a.globalOpacity,displayLevel:a.displayLevel,requiredLevel:a.requiredLevel,
renderer:a.renderer,layerOpacity:a.layerOpacity,state:d,drawphase:4},k,b,this.children,c,3,this._updateTilesTransform.bind(this)))&&0!==a.length?a[0]:null};h.prototype._updateTilesTransform=function(a,k,b){var c=1/a.size[0],f=1/a.size[1],d=[0,0];this._calculateRelativeViewProjMat(this._tileInfo.lodAt(k).resolution,a.resolution,a.rotation,this._tileInfo.size[1],4096,a.size[0],a.size[1],this._defaultTransform);for(var g=0;g<b.length;g++){var e=b[g];a.toScreen(d,e.coords);d[1]=a.size[1]-d[1];e.tileTransform.displayCoord[0]=
2*d[0]*c-1;e.tileTransform.displayCoord[1]=2*d[1]*f-1;e.key.level===k&&4096===e.coordRange?e.tileTransform.transform.set(this._defaultTransform):this._calculateRelativeViewProjMat(this._tileInfo.lodAt(e.key.level).resolution,a.resolution,a.rotation,this._tileInfo.size[1],e.coordRange,a.size[0],a.size[1],e.tileTransform.transform)}};h.prototype._calculateRelativeViewProjMat=function(a,k,b,c,f,d,g,e){var h=.125;512!==c&&4096!==f&&(h=c/f);a=a/k*h;this._tileCoordinateScale.set([a,a,1]);if(d!==this._displayWidth||
g!==this._displayHeight)this._displayScale.set([2/d,-2/g,1]),this._displayWidth=d,this._displayHeight=g;n.mat4.identity(e);n.mat4.scale(e,e,this._tileCoordinateScale);n.mat4.rotate(e,e,-b*E.C_DEG_TO_RAD,this._orientationVec);n.mat4.scale(e,e,this._displayScale);n.mat4.transpose(e,e)};h.prototype._renderBackgroundBuckets=function(a,k,b){if(k&&0!==k.length){var c=a.state,f=this._tileInfoView.getTileCoverage(a.state,0,"smallest"),d=c.resolution,g=c.rotation,e=c.size,h=f.spans,l=f.lodInfo,n=l.level,t=
this._tileInfo,u=this.stage.context,r=a.displayLevel,p=this._backgroundTile;this._calculateRelativeViewProjMat(t.lodAt(n).resolution,d,g,t.size[1],p.coordRange,e[0],e[1],p.tileTransform.transform);for(var m,d=[0,0],g=1/c.size[0],e=1/c.size[1],t=0;t<h.length;t++)for(var q=h[t],x=q.row,y=q.colTo,q=q.colFrom;q<=y;q++){m=p.key;m.set(n,x,l.normalizeCol(q),l.getWorldForColumn(q));this._tileInfoView.getTileCoords(p.coords,m);c.toScreen(d,p.coords);d[1]=c.size[1]-d[1];p.tileTransform.displayCoord[0]=2*d[0]*
g-1;p.tileTransform.displayCoord[1]=2*d[1]*e-1;for(var z=0,v=k;z<v.length;z++){var w=v[z];m=this._styleRepository.layers[w];void 0!==m.minzoom&&m.minzoom>r+1E-6||void 0!==m.maxzoom&&m.maxzoom<=r-1E-6||this._renderer.renderBackGroundLayer(u,m,w,p,a.requiredLevel,b,1)}}G.pool.release(f)}};return h}(v.Container)});