// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,e){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function a(c,b,a){this.pixelBlock=c;this.extent=b;this.originalPixelBlock=a}Object.defineProperty(a.prototype,"width",{get:function(){return this.pixelBlock?this.pixelBlock.width:0},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"height",{get:function(){return this.pixelBlock?this.pixelBlock.height:0},enumerable:!0,configurable:!0});a.prototype.render=function(c){if(this.pixelBlock){var b=
this.filter({pixelBlock:this.pixelBlock}),a=b.pixelBlock.getAsRGBA(),b=c.createImageData(b.pixelBlock.width,b.pixelBlock.height);b.data.set(a);c.putImageData(b,0,0)}};a.prototype.getRenderedRasterPixels=function(){var a=this.filter({pixelBlock:this.pixelBlock});return{width:a.pixelBlock.width,height:a.pixelBlock.height,renderedRasterPixels:new Uint8Array(a.pixelBlock.getAsRGBA().buffer)}};return a}();e.default=d});