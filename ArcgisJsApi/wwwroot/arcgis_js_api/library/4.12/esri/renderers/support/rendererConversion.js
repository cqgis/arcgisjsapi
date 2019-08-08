// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Error","../../symbols/support/symbolConversion"],function(m,f,g,d){function e(a,b){if(!b)return null;b=Array.isArray(b)?b:[b];if(0<b.length){var c=b.map(function(a){return a.details.symbol.type||a.details.symbol.declaredClass}).filter(function(a){return!!a});c.sort();var h=[];c.forEach(function(a,b){0!==b&&a===c[b-1]||h.push(a)});return new g("renderer-conversion-3d:unsupported-symbols","Renderer contains symbols ("+h.join(", ")+") which are not supported in 3D",
{renderer:a,symbolErrors:b})}return null}function k(a){var b=a.uniqueValueInfos.map(function(a){return d.to3D(a.symbol).error}).filter(function(a){return!!a}),c=d.to3D(a.defaultSymbol);c.error&&b.unshift(c.error);return e(a,b)}function l(a){var b=a.classBreakInfos.map(function(a){return d.to3D(a.symbol).error}).filter(function(a){return!!a}),c=d.to3D(a.defaultSymbol);c.error&&b.unshift(c.error);return e(a,b)}Object.defineProperty(f,"__esModule",{value:!0});f.validateTo3D=function(a){return a?"simple"===
a.type?e(a,d.to3D(a.symbol).error):"unique-value"===a.type?k(a):"class-breaks"===a.type?l(a):new g("renderer-conversion-3d:unsupported-renderer","Unsupported renderer of type '"+(a.type||a.declaredClass)+"'",{renderer:a}):null}});