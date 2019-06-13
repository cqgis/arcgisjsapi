// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Error ../../../core/promiseUtils ../../../geometry/support/contains ../../../geometry/support/intersects ../../../geometry/support/jsonUtils ../../../geometry/support/spatialReferenceUtils ../contains ../featureConversionUtils ../OptimizedGeometry ./projectionSupport ./utils".split(" "),function(t,e,g,d,m,u,f,n,p,q,r,v,k){function l(){return d.create(function(a){return t(["../../../geometry/geometryEngine"],a)})}Object.defineProperty(e,"__esModule",{value:!0});
var w={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},x={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,
esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},y={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},z={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};e.importGeometryEngine=l;e.getGeodesicBufferOperator=function(){return l().then(function(a){return a.geodesicBuffer})};e.getSpatialQueryOperator=
function(a,c,b){if(f.isPolygon(c)&&"esriGeometryPoint"===b.geometryType&&("esriSpatialRelIntersects"===a||"esriSpatialRelContains"===a)){var e=q.convertFromPolygon(new r.default,c,!1,!1);return d.resolve(function(a){return p.polygonContainsPoint(e,!1,!1,a)})}if(f.isPolygon(c)&&"esriGeometryMultipoint"===b.geometryType){var h=q.convertFromPolygon(new r.default,c,!1,!1);if("esriSpatialRelContains"===a)return d.resolve(function(a){return p.polygonContainsMultipoint(h,!1,!1,a,b.hasZ,b.hasM)})}if(f.isExtent(c)&&
"esriGeometryPoint"===b.geometryType&&("esriSpatialRelIntersects"===a||"esriSpatialRelContains"===a))return d.resolve(function(a){return m.extentContainsPoint(c,k.getGeometry(b,a))});if(f.isExtent(c)&&"esriGeometryMultipoint"===b.geometryType&&"esriSpatialRelContains"===a)return d.resolve(function(a){return m.extentContainsMultipoint(c,k.getGeometry(b,a))});if(f.isExtent(c)&&"esriSpatialRelIntersects"===a){var g=u.getExtentIntersector(b.geometryType);return d.resolve(function(a){return g(c,k.getGeometry(b,
a))})}return l().then(function(d){var e=d[w[a]].bind(null,c);return function(a){return e(k.getGeometry(b,a))}})};e.checkSpatialQuerySupport=function(a,c,b){var e=a.spatialRel,h=a.geometry;return h?!0!==x[e]?d.reject(new g("feature-store:unsupported-query","Unsupported query spatial relationship",{query:a})):n.isValid(h.spatialReference)&&n.isValid(b)?!0!==y[f.getJsonType(h)]?d.reject(new g("feature-store:unsupported-query","Unsupported query geometry type",{query:a})):!0!==z[c]?d.reject(new g("feature-store:unsupported-query",
"Unsupported layer geometry type",{query:a})):a.outSR?v.checkProjectionSupport(a.geometry&&a.geometry.spatialReference,a.outSR):d.resolve():d.resolve():d.resolve()};e.canQueryWithRBush=function(a){if(f.isExtent(a))return!0;if(f.isPolygon(a)){var c=0;for(a=a.rings;c<a.length;c++){var b=a[c];if(5!==b.length||b[0][0]!==b[1][0]||b[0][0]!==b[4][0]||b[2][0]!==b[3][0]||b[0][1]!==b[3][1]||b[0][1]!==b[4][1]||b[1][1]!==b[2][1])return!1}return!0}return!1}});