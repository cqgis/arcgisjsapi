// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../webgl/FramebufferObject ../../../webgl/Renderbuffer ../../../webgl/Texture ../../../webgl/Util".split(" "),function(k,l,g,h,n,m,p){Object.defineProperty(l,"__esModule",{value:!0});var q={dataType:5121},r={};k=function(){function e(a){this.rctx=a;this.activeTargets=new Set;this.depthTextures=new Map;this.depthBuffers=new Map;this.colorTextures=new Map;this.framebuffers=new Map;this.nextId=1;this.depthTextureSupported=a.capabilities.depthTexture}
e.prototype.disposeAllResource=function(){this.depthBuffers.forEach(function(a){return a.dispose()});this.depthBuffers.clear();this.depthTextures.forEach(function(a){return a.dispose()});this.depthTextures.clear();this.colorTextures.forEach(function(a){return a.dispose()});this.colorTextures.clear()};e.prototype.disposeTargetResource=function(a){a=a.id;this.activeTargets.has(a)&&(this.activeTargets.delete(a),this.depthTextures.has(a)&&(this.depthTextures.get(a).dispose(),this.depthTextures.delete(a)),
this.depthBuffers.has(a)&&(this.depthBuffers.get(a).dispose(),this.depthBuffers.delete(a)),this.colorTextures.has(a)&&(this.colorTextures.get(a).dispose(),this.colorTextures.delete(a)))};e.prototype.getDepthTexture=function(a,c){if(this.depthTextureSupported){var b=this.depthTextures.get(a.id);!b||b.descriptor.width===c.width&&b.descriptor.height===c.height||(b.dispose(),b=void 0);b||(b=new m(this.rctx,{target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:c.width,height:c.height}),
this.depthTextures.set(a.id,b),this.activeTargets.add(a.id));return b}};e.prototype.getDepthBuffer=function(a,c){if(!this.depthTextureSupported){var b=this.depthBuffers.get(a.id);b?b.descriptor.width===c.width&&b.descriptor.height===c.height||b.resize(c.width,c.height):(b=new n(this.rctx,g({internalFormat:34041},c)),this.depthBuffers.set(a.id,b),this.activeTargets.add(a.id));return b}};e.prototype.getColorTexture=function(a,c){var b=this.colorTextures.get(a.id);!b||b.descriptor.width===c.width&&b.descriptor.height===
c.height||(b.dispose(),b=void 0);b||(b=new m(this.rctx,{target:3553,pixelFormat:6408,dataType:a.dataType,samplingMode:9729,wrapMode:33071,width:c.width,height:c.height}),this.colorTextures.set(a.id,b),this.activeTargets.add(a.id));return b};e.prototype.getAllocatedColorTexture=function(a){return this.colorTextures.get(a.id)};e.prototype.registerDepthTarget=function(a){void 0===a&&(a={});var c=this.nextId++;return g({id:c},r,a)};e.prototype.registerColorTarget=function(a){void 0===a&&(a={});var c=
this.nextId++;return g({id:c},q,a)};e.prototype.getFramebuffer=function(a,c,b){var e=this.getKey(c,b),d=this.framebuffers.get(e);c=this.getColorTexture(c,a);if(this.depthTextureSupported){var f=b?this.getDepthTexture(b,a):void 0;if(!d)return d=b?h.createWithAttachments(this.rctx,c,{colorTarget:0,depthStencilTarget:4},f):h.createWithAttachments(this.rctx,c,{colorTarget:0,depthStencilTarget:0}),this.framebuffers.set(e,d),d;if(b=d.width!==a.width||d.height!==a.height||d.colorTexture!==c||d.depthStencilTexture!==
f)d.detachColorTexture(),d.detachDepthStencilTexture(),d.resize(a.width,a.height),d.attachColorTexture(c),d.attachDepthStencilTexture(f);return d}f=b?this.getDepthBuffer(b,a):void 0;if(!d)return d=h.createWithAttachments(this.rctx,c,{colorTarget:0,depthStencilTarget:b?3:0},f),this.framebuffers.set(e,d),d;if(b=d.width!==a.width||d.height!==a.height||d.colorTexture!==c)d.detachColorTexture(),d.detachDepthStencilBuffer(),d.resize(a.width,a.height),d.attachColorTexture(c),d.attachDepthStencilBuffer(f);
return d};e.prototype.getKey=function(a,c){return a.id+"_"+(c?c.id:"X")+"_"+a.name+(c?"_"+c.name:"")};e.prototype.getGpuMemoryUsage=function(){var a=0,c=new Set,b=function(b){c.has(b)||(c.add(b),a+=p.getGpuMemoryUsage(b))};this.depthTextures.forEach(b);this.colorTextures.forEach(b);this.depthBuffers.forEach(b);this.framebuffers.forEach(b);return a};return e}();l.RenderTargetHelper=k});