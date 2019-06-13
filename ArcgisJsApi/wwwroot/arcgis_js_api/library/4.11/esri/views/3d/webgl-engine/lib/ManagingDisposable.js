// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,b){Object.defineProperty(b,"__esModule",{value:!0});c=function(){function a(){}a.prototype.dispose=function(){var a=this;(this.__proto__.__managedDisposables__||[]).forEach(function(b){a[b]&&(a[b].dispose(),a[b]=void 0)})};return a}();b.ManagingDisposable=c;b.manageDisposal=function(){return function(a,b){a.__managedDisposables__=a.__managedDisposables__||[];a.__managedDisposables__.push(b)}}});