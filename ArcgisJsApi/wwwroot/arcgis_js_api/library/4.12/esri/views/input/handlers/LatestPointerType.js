// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler"],function(c,e,f,g){Object.defineProperty(e,"__esModule",{value:!0});c=function(c){function d(a){var b=c.call(this,!0)||this;b._onChange=a;b._value="mouse";b.registerIncoming("pointer-down",function(a){b._setValue("touch"===a.data.native.pointerType?"touch":"mouse")});b._moveHandler=b.registerIncoming("pointer-move",function(a){b._setValue("touch"===a.data.native.pointerType?"touch":"mouse")});b._moveHandler.pause();
return b}f(d,c);d.prototype._setValue=function(a){a!==this._value&&("touch"===a?this._moveHandler.resume():this._moveHandler.pause(),this._value=a,this._onChange(a))};return d}(g.InputHandler);e.LatestPointerType=c});