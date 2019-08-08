// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,b){Object.defineProperty(b,"__esModule",{value:!0});b.isFinite=Number.isFinite||function(a){return"number"===typeof a&&window.isFinite(a)};b.isNaN=Number.isNaN||function(a){return a!==a};b.nextHighestPowerOfTwo=function(a){--a;for(var c=1;32>c;c<<=1)a|=a>>c;return a+1};b.clamp=function(a,c,b){return a<c?c:a>b?b:a}});