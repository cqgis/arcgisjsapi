// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../config","../../core/unitUtils"],function(g,c,e,d){function f(b,a){a=d.getMetersPerUnitForSR(a);return b/(a*d.inchesPerMeter*e.screenDPI)}Object.defineProperty(c,"__esModule",{value:!0});c.getScale=function(b,a){a=a||b.extent;b=b.width;var c=d.getMetersPerUnitForSR(a&&a.spatialReference);return a&&b?a.width/b*c*d.inchesPerMeter*e.screenDPI:0};c.getResolutionForScale=f;c.getScaleForResolution=function(b,a){a=d.getMetersPerUnitForSR(a);return b*a*d.inchesPerMeter*e.screenDPI};
c.getExtentForScale=function(b,a){var c=b.extent;b=b.width;a=f(a,c.spatialReference);return c.clone().expand(a*b/c.width)}});