// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../config","../../core/unitUtils"],function(h,d,e,c){function f(b,a){a=c.getMetersPerUnitForSR(a);return b/(a*c.inchesPerMeter*e.screenDPI)}Object.defineProperty(d,"__esModule",{value:!0});d.getScale=function(b,a){a=a||b.extent;b=b.width;var g=c.getMetersPerUnit(a&&a.spatialReference);return a&&b?a.width/b*(g||c.decDegToMeters)*c.inchesPerMeter*e.screenDPI:0};d.getResolutionForScale=f;d.getExtentForScale=function(b,a){var c=b.extent;b=b.width;a=f(a,c.spatialReference);
return c.clone().expand(a*b/c.width)}});