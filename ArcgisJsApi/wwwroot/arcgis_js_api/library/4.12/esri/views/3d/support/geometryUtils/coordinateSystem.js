// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64"],function(q,b,p,f,l){function m(a){return{operations:a,value:a.create()}}function n(a,c,d,b){return a.operations.setAltitudeAt(a.value,c,d,b)}Object.defineProperty(b,"__esModule",{value:!0});b.create=function(a){var c=a.operations;return{operations:c,value:c.create(a.value)}};b.setExtent=function(a,c,d){a.operations.setExtent(a.value,c,d.value);
return d};b.createFromOperations=m;b.fromValues=function(a,c,d){void 0===d&&(d=m(a));d.operations=a;a.copy(c,d.value);return d};b.wrap=function(a,c){k.operations=a;k.value=c;return k};b.normalAt=function(a,c,d){return a.operations.axisAt(a.value,c,2,d)};b.axisAt=function(a,c,d,b){return a.operations.axisAt(a.value,c,d,b)};b.intersectRay=function(a,c,d){return a.operations.intersectRay(a.value,c,d)};b.intersectsRay=function(a,c){return a.operations.intersectRay(a.value,c,null)};b.closestPoint=function(a,
c,d){return a.operations.closestPoint(a.value,c,d)};b.intersectRayClosestSilhouette=function(a,c,d){return a.operations.intersectRayClosestSilhouette(a.value,c,d)};b.closestPointOnSilhouette=function(a,c,d){return a.operations.closestPointOnSilhouette(a.value,c,d)};b.distanceToSilhouette=function(a,c){return a.operations.distanceToSilhouette(a.value,c)};b.altitudeAt=function(a,c){return a.operations.altitudeAt(a.value,c)};b.setAltitudeAt=n;b.setAltitudeOfTransformation=function(a,c,d,b){c!==b&&p.mat4.copy(b,
c);f.vec3.set(e,b[12],b[13],b[14]);n(a,e,d,e);b[12]=e[0];b[13]=e[1];b[14]=e[2];return b};b.elevate=function(a,c,b){return a.operations.elevate(a.value,c,b.value)};var e=l.vec3f64.create(),k={operations:null,value:null};b.vectorCoordinates=function(a,c,b,e,g){g[0]=f.vec3.dot(a,c);g[1]=f.vec3.dot(a,b);g[2]=f.vec3.dot(a,e);return g};b.coordinateSystemFromOneAxisAndNormalVector=function(a,b,d,e,g){f.vec3.copy(d,a);f.vec3.copy(h,b);f.vec3.normalize(h,h);f.vec3.cross(e,h,d);f.vec3.cross(g,e,d)};var h=l.vec3f64.create()});