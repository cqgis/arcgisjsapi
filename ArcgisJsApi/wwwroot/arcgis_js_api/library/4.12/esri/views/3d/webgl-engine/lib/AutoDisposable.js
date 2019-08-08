// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,b){Object.defineProperty(b,"__esModule",{value:!0});d=function(){function a(){this._isDisposed=!1}a.prototype.dispose=function(){for(var a=this.__proto__.__managedDisposables__||[],b=a.length-1;0<=b;b--){var c=a[b];this[c]&&"function"===typeof this[c].dispose&&this[c].dispose();this[c]=null}this._isDisposed=!0};Object.defineProperty(a.prototype,"isDisposed",{get:function(){return this._isDisposed},enumerable:!0,configurable:!0});return a}();b.AutoDisposable=
d;b.autoDispose=function(){return function(a,b){a.__managedDisposables__=a.__managedDisposables__||[];a.__managedDisposables__.push(b)}}});