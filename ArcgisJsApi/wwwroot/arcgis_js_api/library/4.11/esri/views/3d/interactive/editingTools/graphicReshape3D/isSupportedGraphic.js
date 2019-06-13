// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/maybe"],function(e,b,d){function c(a){return d.isSome(a)&&("polygon"===a.type||"polyline"===a.type)}Object.defineProperty(b,"__esModule",{value:!0});b.isSupportedGeometry=c;b.isSupportedGraphic=function(a){return c(a.geometry)}});