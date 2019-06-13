// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ./glUtil3D ./RenderTargetHelper ./Util ../shaders/OffscreenPrograms ../../../webgl/renderState ../../../webgl/Util".split(" "),function(q,r,k,l,m,e,d,g){var n=[0,0,0,0],p=[0,1,0,1];return function(){function a(c,b){this.dimensions={width:4,height:4};this._enabled=!1;this._background={type:"color",color:[0,0,0,1]};this._compositePipelineState=new Map;this._rctx=b;b=this.renderTargetHelper=new l.RenderTargetHelper(b);this.mainColor=b.registerColorTarget({name:"mainColor"});this.mainDepth=
b.registerDepthTarget({name:"mainDepth"});this.linearDepth=b.registerColorTarget({name:"linearDepth"});this.normal=b.registerColorTarget({name:"normal"});this.highlight=b.registerColorTarget({name:"highlight",dataType:32819});this.hudVisibility=b.registerColorTarget({name:"hudVisibility",dataType:32819});this.tmpColor=b.registerColorTarget({name:"tmpColor"});this.tmpDepth=b.registerDepthTarget({name:"tmpDepth"});this._compositeProgram=c.getProgram(e.composite);this._compositePipelineState.set("none",
d.makePipelineState({colorWrite:d.defaultColorWriteParams}));this._compositePipelineState.set("alpha",d.makePipelineState({blending:d.separateBlendingParams(770,1,771,771),colorWrite:d.defaultColorWriteParams}));this._compositePipelineState.set("premultiplied-alpha",d.makePipelineState({blending:d.simpleBlendingParams(1,771),colorWrite:d.defaultColorWriteParams}));this._compositeTransparentToHUDVisibilityProgram=c.getProgram(e.compositeTransparentToHUDVisibility);this._compositeTransparentToHUDVisibilityPipelineState=
d.makePipelineState({colorWrite:{r:!1,g:!0,b:!1,a:!1}});this._compositeOccludedProgram=c.getProgram(e.compositeOccluded);this._compositeOccludedPipelineState=d.makePipelineState({blending:d.simpleBlendingParams(1,771),colorWrite:d.defaultColorWriteParams})}Object.defineProperty(a.prototype,"width",{get:function(){return this.dimensions.width},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"height",{get:function(){return this.dimensions.height},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"enabled",{get:function(){return this._enabled},set:function(c){c?this.enable():this.disable()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"background",{get:function(){return this._background},set:function(c){this._background=c},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"framebuffer",{get:function(){return this.renderTargetHelper.getFramebuffer(this.dimensions,this.mainColor,this.mainDepth)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"colorTexture",{get:function(){return this.framebuffer.colorTexture},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"depthTexture",{get:function(){return this.framebuffer.depthStencilTexture},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"linearDepthTexture",{get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.linearDepth)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"normalTexture",{get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.normal)},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"highlightTexture",{get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.highlight)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"hudVisibilityTexture",{get:function(){return this.getColorTexture(this.hudVisibility)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"tmpColorTexture",{get:function(){return this.getColorTexture(this.tmpColor)},enumerable:!0,configurable:!0});
a.prototype.initializeFrame=function(c,b){m.assert(this.enabled);var a=this._rctx;this.dimensions.width=c.fullWidth;this.dimensions.height=c.fullHeight;this.outputFramebuffer=b;this.bindTarget(this.mainColor,this.mainDepth);a.setClearStencil(0);c=this._background.color;a.setClearColor(c[0]*c[3],c[1]*c[3],c[2]*c[3],c[3]);a.clearSafe(17664)};a.prototype.renderSeparateAndComposite=function(c,b,a){void 0===b&&(b=n);void 0===a&&(a="none");this.renderToTargets(c,this.tmpColor,this.mainDepth,b);this.composite(this.getColorTexture(this.tmpColor),
this.framebuffer,a)};a.prototype.renderHUDVisibility=function(c){this.renderToTargets(c,this.hudVisibility,this.mainDepth,p)};a.prototype.compositeTransparentTerrainOntoHUDVisibility=function(){var c=this,b=this._rctx;this.renderToTargets(function(){var a=c._compositeTransparentToHUDVisibilityProgram;b.bindProgram(a);b.setPipelineState(c._compositeTransparentToHUDVisibilityPipelineState);a.setUniform1i("tex",1);b.bindTexture(c.getColorTexture(c.tmpColor),1);b.bindVAO(c.quadVAO);b.drawArrays(5,0,g.vertexCount(c.quadVAO,
"geometry"))},this.hudVisibility,this.mainDepth)};a.prototype.compositeTransparentTerrainOntoMain=function(){this.composite(this.getColorTexture(this.tmpColor),this.framebuffer,"premultiplied-alpha")};a.prototype.compositeOccludedOntoMain=function(c){var b=this._rctx,a=this._compositeOccludedProgram;this.bindFramebuffer();b.bindProgram(a);b.setPipelineState(this._compositeOccludedPipelineState);b.bindVAO(this.quadVAO);b.bindTexture(this.getColorTexture(this.tmpColor),0);a.setUniform1i("occludedColorMap",
0);a.setUniform1f("opacity",c);b.drawArrays(5,0,g.vertexCount(this.quadVAO,"geometry"));b.bindVAO(null)};a.prototype.bindFramebuffer=function(){this._rctx.bindFramebuffer(this.framebuffer)};a.prototype.renderDepthDetached=function(c){var a=this.bindTarget(this.mainColor);c(a);this.bindTarget(this.mainColor,this.mainDepth)};a.prototype.composite=function(c,a,d){void 0===c&&(c=this.framebuffer.colorTexture);void 0===a&&(a=this.outputFramebuffer);void 0===d&&(d="none");var b=this._rctx,h=this._compositeProgram;
b.bindFramebuffer(a);b.bindProgram(h);b.setPipelineState(this._compositePipelineState.get(d));h.setUniform1i("tex",1);b.bindTexture(c,1);b.bindVAO(this.quadVAO);b.drawArrays(5,0,g.vertexCount(this.quadVAO,"geometry"))};a.prototype.disposeTarget=function(c){this.renderTargetHelper.disposeTargetResource(c)};a.prototype.enable=function(){this.enabled||(this._enabled=!0,this.quadVAO=k.createQuadVAO(this._rctx))};a.prototype.disable=function(){this.enabled&&(this._enabled=!1,this.renderTargetHelper.disposeAllResource(),
this.quadVAO.dispose(!0),this.quadVAO=null)};a.prototype.renderToTargets=function(c,a,d,f,e){var b=this._rctx;a=this.bindTarget(a,d);d=0;f&&(b.setClearColor(f[0],f[1],f[2],Math.max(1E-13,f[3])),d|=16384);e&&(d|=256);b.clearSafe(d);c(a);b.gl.flush();this.bindTarget(this.mainColor,this.mainDepth);return a};a.prototype.bindTarget=function(a,b){a=this.renderTargetHelper.getFramebuffer(this.dimensions,a,b);this._rctx.bindFramebuffer(a);return a};a.prototype.getColorTexture=function(a){return this.renderTargetHelper.getColorTexture(a,
this.dimensions)};a.prototype.getGpuMemoryUsage=function(){var a=0;this.renderTargetHelper&&(a+=this.renderTargetHelper.getGpuMemoryUsage());return a};return a}()});