// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,c){Object.defineProperty(c,"__esModule",{value:!0});c.isSupportedGraphic=function(a){var b=a.symbol&&"point-3d"===a.symbol.type&&a.symbol.symbolLayers;return b&&0<b.length&&b.some(function(a){return"object"===a.type})&&"point"===a.geometry.type&&"graphics"===a.layer.type}});