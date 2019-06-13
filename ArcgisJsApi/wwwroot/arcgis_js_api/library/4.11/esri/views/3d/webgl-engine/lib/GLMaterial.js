// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","./ManagingDisposable"],function(g,h,d,e){return function(b){function a(a,f){var c=b.call(this)||this;c.material=a;c.programRep=f;return c}d(a,b);a.prototype.isVisible=function(){return this.material.isVisible()};a.prototype.isVisibleInPass=function(a){return this.material.isVisibleInPass(a)};a.prototype.getPrograms=function(){return[this.getProgram()]};a.prototype.getDrawMode=function(){return 4};a.prototype.release=function(a,
b){};return a}(e.ManagingDisposable)});