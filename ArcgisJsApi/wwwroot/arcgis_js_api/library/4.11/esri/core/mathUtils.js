// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,b){Object.defineProperty(b,"__esModule",{value:!0});b.isFinite=Number.isFinite||function(a){return"number"===typeof a&&window.isFinite(a)};b.isNaN=Number.isNaN||function(a){return a!==a};b.nextHighestPowerOfTwo=function(a){--a;for(var b=1;32>b;b<<=1)a|=a>>b;return a+1}});