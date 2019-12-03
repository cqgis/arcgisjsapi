// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/maybe"],function(e,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.isSupportedGraphic=function(a){var b=d.isSome(a.symbol)&&"point-3d"===a.symbol.type&&a.symbol.symbolLayers;return!!b&&0<b.length&&b.some(function(a){return"object"===a.type})&&d.isSome(a.geometry)&&"point"===a.geometry.type&&"graphics"===a.layer.type}});