// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/maybe ../../../../core/promiseUtils ../lib/AutoDisposable ../../../support/screenshotUtils ../../../webgl/FramebufferObject".split(" "),function(l,n,p,q,w,r,t,u,m,v){Object.defineProperty(n,"__esModule",{value:!0});l=function(l){function f(a,d,b,c,e){void 0===c&&(c=null);void 0===e&&(e=!0);var g=l.call(this)||this;g._rctx=a;g._renderScene=
d;g._requestRenderScene=b;g._renderOverlay=c;g.supersample=e;g._screenshotQueue=[];return g}q(f,l);f.prototype.dispose=function(){this._rctx=null};f.prototype.takeScreenshot=function(a){var d=this;this._requestRenderScene();var b=t.createResolver(function(){d._screenshotQueue=d._screenshotQueue.filter(function(a){return a.resolver!==b})});this._screenshotQueue.push({settings:a,resolver:b});return b.promise};f.prototype.update=function(a){if(0!==this._screenshotQueue.length){for(var d=0,b=this._screenshotQueue;d<
b.length;d++){var c=b[d];if(this.isDisposed)c.resolver.reject();else{var e=p({},c.settings,{pixelRatio:c.settings.pixelRatio*a.viewCamera.pixelRatio}),g=this._ensureScreenshotEncodeCanvas(),h=this._renderScreenshot(a,e),e=m.encodeResult(h,e,g,{flipY:!0,premultipliedAlpha:!0});c.resolver(e)}}this._screenshotQueue=[]}};f.prototype._renderScreenshotOverlay=function(a,d,b){if(!r.isNone(this._renderOverlay)){a.width=d.width;a.height=d.height;var c=a.getContext("2d"),e=b.pixelRatio;c.save();c.translate(0,
d.height);c.scale(1,-1);b.region&&c.translate(-b.region.x,-b.region.y);c.scale(e,e);this._renderOverlay(a,d);c.restore()}};f.prototype._readbackScreenshot=function(a){return a.resample?this._readbackScreenshotResampled(a):this._readbackScreenshotImmediate(a)};f.prototype._readbackScreenshotResampled=function(a){var d=a.framebufferWidth,b=a.framebufferHeight,c=a.region,e=a.resample,g=this._ensureScreenshotEncodeCanvas(),h=m.createEmptyImageData(d,b,g);this._rctx.gl.readPixels(0,0,d,b,6408,5121,new Uint8Array(h.data.buffer));
this._renderScreenshotOverlay(g,h,p({},a,{region:null}));a=m.createEmptyImageData(c.width,c.height,g);return m.resampleHermite(h,a,!0,e.region.x,b-(e.region.y+e.region.height),e.region.width,e.region.height)};f.prototype._readbackScreenshotImmediate=function(a){var d=a.framebufferHeight,b=a.region,c=this._ensureScreenshotEncodeCanvas(),e=m.createEmptyImageData(b.width,b.height,c);this._rctx.gl.readPixels(b.x,d-(b.y+b.height),b.width,b.height,6408,5121,new Uint8Array(e.data.buffer));this._renderScreenshotOverlay(c,
e,a);return e};f.prototype._renderScreenshot=function(a,d){var b=null,c=a.viewCamera,e=d.framebufferWidth,g=d.framebufferHeight,h=!1,f=a.frameHasSlicePlane&&d.disableSlice;if(f=e!==c.fullWidth||g!==c.fullHeight||f){var k=c.clone();k.fullWidth=e;k.fullHeight=g;k.pixelRatio=d.pixelRatio;b=c.fovX-k.fovX;h=c.fovY-k.fovY;0>b&&b<h?k.fovX=c.fovX:0>h&&h<b&&(k.fovY=c.fovY);a.drapedRenderer.forceUpdate&&a.drapedRenderer.forceUpdate(k);h=!0;b=new v(this._rctx,{width:k.fullWidth,height:k.fullHeight,colorTarget:0,
depthStencilTarget:3});this._renderScene(b,k,d.disableSlice)}d=this._readbackScreenshot(d);if(f&&!this._rctx.contextAttributes.alpha)for(f=3;f<d.data.length;f+=4)d.data[f]=255;b&&b.dispose();this._rctx.bindFramebuffer(null);h&&a.drapedRenderer.forceUpdate&&a.drapedRenderer.forceUpdate(c);return d};f.prototype._ensureScreenshotEncodeCanvas=function(){this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas"));return this._screenshotEncodeCanvas};return f}(u.AutoDisposable);
n.ScreenshotManager=l});