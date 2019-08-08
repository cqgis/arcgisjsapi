// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function b(a){this._start=this.size=0;this.maxSize=a;this._buffer=Array(a)}b.prototype.enqueue=function(a){if(this.size===this.maxSize){var b=this._buffer[this._start];this._buffer[this._start]=a;this._start=(this._start+1)%this.maxSize;return b}this._buffer[(this._start+this.size++)%this.maxSize]=a;return null};b.prototype.dequeue=function(){if(0===this.size)throw Error("Cannot dequeue from empty buffer");
var a=this._buffer[this._start];this.size--;this._start=(this._start+1)%this.maxSize;return a};return b}();d.default=c});