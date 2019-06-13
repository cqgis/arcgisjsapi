// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../kernel ../kernel ../languageUtils ../featureset/support/shared ./centroid ../../geometry/Extent ../../geometry/Geometry ../../geometry/geometryEngineAsync ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/support/jsonUtils".split(" "),function(z,t,y,k,c,l,u,p,f,g,v,r,n,q,w){function x(c){return 0===y.version.indexOf("4.")?n.fromExtent(c):new n({spatialReference:c.spatialReference,rings:[[[c.xmin,c.ymin],[c.xmin,
c.ymax],[c.xmax,c.ymax],[c.xmax,c.ymin],[c.xmin,c.ymin]]]})}function m(b){c.pcCheck(b,2,2);if(!(b[0]instanceof f&&b[1]instanceof f||b[0]instanceof f&&null===b[1]||b[1]instanceof f&&null===b[0]||null===b[0]&&null===b[1]))throw Error("Illegal Argument");}Object.defineProperty(t,"__esModule",{value:!0});t.registerFunctions=function(b){"async"===b.mode&&(b.functions.disjoint=function(d,e){return b.standardFunctionAsync(d,e,function(h,d,a){a=c.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===
a[1]?!0:g.disjoint(a[0],a[1])})},b.functions.intersects=function(d,e){return b.standardFunctionAsync(d,e,function(h,d,a){a=c.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?!1:g.intersects(a[0],a[1])})},b.functions.touches=function(d,e){return b.standardFunctionAsync(d,e,function(h,d,a){a=c.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?!1:g.touches(a[0],a[1])})},b.functions.crosses=function(d,e){return b.standardFunctionAsync(d,e,function(h,d,a){a=c.autoCastFeatureToGeometry(a);
m(a);return null===a[0]||null===a[1]?!1:g.crosses(a[0],a[1])})},b.functions.within=function(d,e){return b.standardFunctionAsync(d,e,function(h,d,a){a=c.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?!1:g.within(a[0],a[1])})},b.functions.contains=function(d,e){return b.standardFunctionAsync(d,e,function(h,d,a){a=c.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?!1:g.contains(a[0],a[1])})},b.functions.overlaps=function(d,e){return b.standardFunctionAsync(d,e,function(h,
d,a){a=c.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?!1:g.overlaps(a[0],a[1])})},b.functions.equals=function(d,e){return b.standardFunctionAsync(d,e,function(h,d,a){c.pcCheck(a,2,2);return a[0]===a[1]?!0:a[0]instanceof f&&a[1]instanceof f?g.equals(a[0],a[1]):c.isDate(a[0])&&c.isDate(a[1])?a[0].getTime()===a[1].getTime():!1})},b.functions.relate=function(d,e){return b.standardFunctionAsync(d,e,function(h,d,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,3,3);if(a[0]instanceof
f&&a[1]instanceof f)return g.relate(a[0],a[1],c.toString(a[2]));if(a[0]instanceof f&&null===a[1]||a[1]instanceof f&&null===a[0]||null===a[0]&&null===a[1])return!1;throw Error("Illegal Argument");})},b.functions.intersection=function(d,e){return b.standardFunctionAsync(d,e,function(h,d,a){a=c.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?null:g.intersect(a[0],a[1])})},b.functions.union=function(d,e){return b.standardFunctionAsync(d,e,function(h,b,a){a=c.autoCastFeatureToGeometry(a);
h=[];if(0===a.length)throw Error("Function called with wrong number of Parameters");if(1===a.length)if(c.isArray(a[0]))for(a=c.autoCastFeatureToGeometry(a[0]),b=0;b<a.length;b++){if(null!==a[b]){if(!(a[b]instanceof f))throw Error("Illegal Argument");h.push(a[b])}}else if(c.isImmutableArray(a[0]))for(a=c.autoCastFeatureToGeometry(a[0].toArray()),b=0;b<a.length;b++){if(null!==a[b]){if(!(a[b]instanceof f))throw Error("Illegal Argument");h.push(a[b])}}else{if(a[0]instanceof f)return c.fixSpatialReference(l.cloneGeometry(a[0]),
d.spatialReference);if(null===a[0])return null;throw Error("Illegal Argument");}else for(b=0;b<a.length;b++)if(null!==a[b]){if(!(a[b]instanceof f))throw Error("Illegal Argument");h.push(a[b])}return 0===h.length?null:g.union(h)})},b.functions.difference=function(d,e){return b.standardFunctionAsync(d,e,function(h,b,a){a=c.autoCastFeatureToGeometry(a);m(a);return null!==a[0]&&null===a[1]?l.cloneGeometry(a[0]):null===a[0]?null:g.difference(a[0],a[1])})},b.functions.symmetricdifference=function(d,e){return b.standardFunctionAsync(d,
e,function(h,b,a){a=c.autoCastFeatureToGeometry(a);m(a);return null===a[0]&&null===a[1]?null:null===a[0]?l.cloneGeometry(a[1]):null===a[1]?l.cloneGeometry(a[0]):g.symmetricDifference(a[0],a[1])})},b.functions.clip=function(d,e){return b.standardFunctionAsync(d,e,function(h,b,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,2);if(!(a[1]instanceof p)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");return null===a[1]?null:
g.clip(a[0],a[1])})},b.functions.cut=function(d,e){return b.standardFunctionAsync(d,e,function(h,b,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,2);if(!(a[1]instanceof q)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return[];if(!(a[0]instanceof f))throw Error("Illegal Argument");return null===a[1]?[l.cloneGeometry(a[0])]:g.cut(a[0],a[1])})},b.functions.area=function(d,e){return b.standardFunctionAsync(d,e,function(h,b,a){c.pcCheck(a,1,2);a=c.autoCastFeatureToGeometry(a);if(null===
a[0])return 0;if(c.isFeatureSet(a[0]))return a[0].sumArea(k.convertSquareUnitsToCode(c.defaultUndefined(a[1],-1)),!1,d.progressTracker).then(function(a){if(d.progressTracker.isCanceled())throw Error("Operation has been cancelled.");return a});if(c.isArray(a[0])||c.isImmutableArray(a[0]))return h=c.autoCastArrayOfPointsToPolygon(a[0],d.spatialReference),null===h?0:g.planarArea(h,k.convertSquareUnitsToCode(c.defaultUndefined(a[1],-1)));if(!(a[0]instanceof f))throw Error("Illegal Argument");return g.planarArea(a[0],
k.convertSquareUnitsToCode(c.defaultUndefined(a[1],-1)))})},b.functions.areageodetic=function(d,e){return b.standardFunctionAsync(d,e,function(b,e,a){c.pcCheck(a,1,2);a=c.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(c.isFeatureSet(a[0]))return a[0].sumArea(k.convertSquareUnitsToCode(c.defaultUndefined(a[1],-1)),!0,d.progressTracker).then(function(a){if(d.progressTracker.isCanceled())throw Error("Operation has been cancelled.");return a});if(c.isArray(a[0])||c.isImmutableArray(a[0]))return b=
c.autoCastArrayOfPointsToPolygon(a[0],d.spatialReference),null===b?0:g.geodesicArea(b,k.convertSquareUnitsToCode(c.defaultUndefined(a[1],-1)));if(!(a[0]instanceof f))throw Error("Illegal Argument");return g.geodesicArea(a[0],k.convertSquareUnitsToCode(c.defaultUndefined(a[1],-1)))})},b.functions.length=function(d,e){return b.standardFunctionAsync(d,e,function(b,e,a){c.pcCheck(a,1,2);a=c.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(c.isFeatureSet(a[0]))return a[0].sumLength(k.convertLinearUnitsToCode(c.defaultUndefined(a[1],
-1)),!1,d.progressTracker).then(function(a){if(d.progressTracker.isCanceled())throw Error("Operation has been cancelled.");return a});if(c.isArray(a[0])||c.isImmutableArray(a[0]))return b=c.autoCastArrayOfPointsToPolyline(a[0],d.spatialReference),null===b?0:g.planarLength(b,k.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)));if(!(a[0]instanceof f))throw Error("Illegal Argument");return g.planarLength(a[0],k.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)))})},b.functions.lengthgeodetic=
function(d,e){return b.standardFunctionAsync(d,e,function(b,e,a){c.pcCheck(a,1,2);a=c.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(c.isFeatureSet(a[0]))return a[0].sumLength(k.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)),!0,d.progressTracker).then(function(a){if(d.progressTracker.isCanceled())throw Error("Operation has been cancelled.");return a});if(c.isArray(a[0])||c.isImmutableArray(a[0]))return b=c.autoCastArrayOfPointsToPolyline(a[0],d.spatialReference),null===b?0:g.geodesicLength(b,
k.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)));if(!(a[0]instanceof f))throw Error("Illegal Argument");return g.geodesicLength(a[0],k.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)))})},b.functions.distance=function(d,e){return b.standardFunctionAsync(d,e,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);b=a[0];if(c.isArray(a[0])||c.isImmutableArray(a[0]))b=c.autoCastArrayOfPointsToMultiPoint(a[0],d.spatialReference);e=a[1];if(c.isArray(a[1])||c.isImmutableArray(a[1]))e=
c.autoCastArrayOfPointsToMultiPoint(a[1],d.spatialReference);if(!(b instanceof f))throw Error("Illegal Argument");if(!(e instanceof f))throw Error("Illegal Argument");return g.distance(b,e,k.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1)))})},b.functions.densify=function(d,e){return b.standardFunctionAsync(d,e,function(b,d,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");
if(0>=b)throw Error("Illegal Argument");return a[0]instanceof n||a[0]instanceof q?g.densify(a[0],b,k.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1))):a[0]instanceof p?g.densify(x(a[0]),b,k.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1))):a[0]})},b.functions.densifygeodetic=function(d,e){return b.standardFunctionAsync(d,e,function(b,d,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");b=c.toNumber(a[1]);
if(isNaN(b))throw Error("Illegal Argument");if(0>=b)throw Error("Illegal Argument");return a[0]instanceof n||a[0]instanceof q?g.geodesicDensify(a[0],b,k.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1))):a[0]instanceof p?g.geodesicDensify(x(a[0]),b,k.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1))):a[0]})},b.functions.generalize=function(d,e){return b.standardFunctionAsync(d,e,function(b,d,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,4);if(null===a[0])return null;if(!(a[0]instanceof
f))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");return g.generalize(a[0],b,c.toBoolean(c.defaultUndefined(a[2],!0)),k.convertLinearUnitsToCode(c.defaultUndefined(a[3],-1)))})},b.functions.buffer=function(d,e){return b.standardFunctionAsync(d,e,function(b,d,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");
return 0===b?l.cloneGeometry(a[0]):g.buffer(a[0],b,k.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1)))})},b.functions.buffergeodetic=function(d,e){return b.standardFunctionAsync(d,e,function(b,d,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");return 0===b?l.cloneGeometry(a[0]):g.geodesicBuffer(a[0],b,k.convertLinearUnitsToCode(c.defaultUndefined(a[2],
-1)))})},b.functions.offset=function(d,e){return b.standardFunctionAsync(d,e,function(b,d,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,6);if(null===a[0])return null;if(!(a[0]instanceof n||a[0]instanceof q))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");d=c.toNumber(c.defaultUndefined(a[4],10));if(isNaN(d))throw Error("Illegal Argument");var e=c.toNumber(c.defaultUndefined(a[5],0));if(isNaN(e))throw Error("Illegal Argument");return g.offset(a[0],
b,k.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1)),c.toString(c.defaultUndefined(a[3],"round")).toLowerCase(),d,e)})},b.functions.rotate=function(d,e){return b.standardFunctionAsync(d,e,function(b,d,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);b=a[0];if(null===b)return null;if(!(b instanceof f))throw Error("Illegal Argument");b instanceof p&&(b=n.fromExtent(b));d=c.toNumber(a[1]);if(isNaN(d))throw Error("Illegal Argument");a=c.defaultUndefined(a[2],null);if(null===a)return g.rotate(b,
d);if(a instanceof r)return g.rotate(b,d,a);throw Error("Illegal Argument");})},b.functions.centroid=function(d,e){return b.standardFunctionAsync(d,e,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,1,1);if(null===a[0])return null;b=a[0];if(c.isArray(a[0])||c.isImmutableArray(a[0]))b=c.autoCastArrayOfPointsToMultiPoint(a[0],d.spatialReference);if(null===b)return null;if(!(b instanceof f))throw Error("Illegal Argument");return b instanceof r?c.fixSpatialReference(l.cloneGeometry(a[0]),
d.spatialReference):b instanceof n?b.centroid:b instanceof q?u.centroidPolyline(b):b instanceof v?u.centroidMultiPoint(b):b instanceof p?b.center:null})},b.functions.multiparttosinglepart=function(d,e){return b.standardFunctionAsync(d,e,function(b,e,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,1,1);var h=[];if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");return a[0]instanceof r||a[0]instanceof p?[c.fixSpatialReference(l.cloneGeometry(a[0]),d.spatialReference)]:
g.simplify(a[0]).then(function(b){if(b instanceof n){for(var e=[],g=[],f=0;f<b.rings.length;f++)if(b.isClockwise(b.rings[f])){var k=w.fromJSON({rings:[b.rings[f]],hasZ:!0===b.hasZ,hazM:!0===b.hasM,spatialReference:b.spatialReference.toJSON()});e.push(k)}else g.push({ring:b.rings[f],pt:b.getPoint(f,0)});for(f=0;f<g.length;f++)for(b=0;b<e.length;b++)if(e[b].contains(g[f].pt)){e[b].addRing(g[f].ring);break}return e}if(b instanceof q){e=[];for(f=0;f<b.paths.length;f++)g=w.fromJSON({paths:[b.paths[f]],
hasZ:!0===b.hasZ,hazM:!0===b.hasM,spatialReference:b.spatialReference.toJSON()}),e.push(g);return e}if(a[0]instanceof v){b=c.fixSpatialReference(l.cloneGeometry(a[0]),d.spatialReference);for(f=0;f<b.points.length;f++)h.push(b.getPoint(f));return h}return null})})},b.functions.issimple=function(d,e){return b.standardFunctionAsync(d,e,function(b,d,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,1,1);if(null===a[0])return!0;if(!(a[0]instanceof f))throw Error("Illegal Argument");return g.isSimple(a[0])})},
b.functions.simplify=function(d,e){return b.standardFunctionAsync(d,e,function(b,d,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,1,1);if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");return g.simplify(a[0])})})}});