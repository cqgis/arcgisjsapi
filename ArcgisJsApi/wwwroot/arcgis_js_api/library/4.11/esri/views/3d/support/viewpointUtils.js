// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../Camera ../../../geometry ../../../Graphic ../../../Viewpoint ../../../core/compilerUtils ../../../core/Error ../../../core/promiseUtils ../../../core/libs/gl-matrix-2/mat3 ../../../core/libs/gl-matrix-2/mat3f64 ../../../core/libs/gl-matrix-2/mat4f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/webMercatorUtils ../camera/intersectionUtils ./cameraUtils ./geometryUtils ./mathUtils ./projectionUtils".split(" "),
function(ka,t,G,u,W,z,X,O,l,P,Y,Z,k,A,p,Q,q,x,g,aa,R,w){function H(a){return 360-R.cyclicalDeg.normalize(a)}function v(a){return R.cyclicalDeg.normalize(360-a)}function B(a,b){a&&(null==b?a.reject():a.resolve(b));return b}function S(a,b,c,d){if(!b)return B(d);var e=a.spatialReference||u.SpatialReference.WGS84;if(b.camera){a=b.get("camera.position.spatialReference");if(!q.canProject(a,e))return B(d);b=b.camera.clone();a.equals(e)||(b.position=q.project(b.position,e));return B(d,b)}var f=b.get("targetGeometry.spatialReference");
if(f&&!q.canProject(f,e))return B(d);e=g.internalToExternal(a,a.state.camera);f=g.OrientationMode.ADJUST;null!=b.rotation&&(e.heading=H(b.rotation),f=g.OrientationMode.LOCKED);null!=c&&(e.tilt=c);if("point"===b.targetGeometry.type){c=b.targetGeometry;var m=void 0,h=b.targetGeometry.clone(),m=null!=b.scale?g.scaleToDistance(a,b.scale,c.latitude):a.state.camera.distance;return g.fromCenterDistance(a,h,m,e,f,d)}return g.fromExtent(a,b.targetGeometry.extent,e.heading,e.tilt,f,d)}function I(a,b){return null==
b.scale&&null!=b.zoom?g.zoomToScale(a,b.zoom):b.scale}function J(a,b){var c=!1;null!=b.heading?(a.heading=b.heading,c=!0):null!=b.rotation&&(a.heading=H(b.rotation),c=!0);null!=b.tilt&&(a.tilt=b.tilt,c=!0);null!=b.fov&&(a.fov=b.fov);return c}function C(a,b,c){var d=a.spatialReference||u.SpatialReference.WGS84;b=b||g.externalToInternal(a,c.camera);c.targetGeometry=w.vectorToPoint(b.center,a.renderSpatialReference,d);c.scale=g.computeScale(a,b);c.rotation=v(c.camera.heading);return c}function K(a,b,
c){if(b){if(!q.canProject(b.spatialReference,a.spatialReference))throw new O("viewpointutils:incompatible-spatialreference","Spatial reference ("+(b.spatialReference?b.spatialReference.wkid:"unknown")+") is incompatible with the view ("+a.spatialReference.wkid+")",{geometry:b});var d=[];if(!b.hasZ&&a.basemapTerrain){var e=void 0;switch(b.type){case "point":e=b;break;case "multipoint":case "polyline":case "mesh":e=b.extent.center;break;case "extent":e=b.center;break;case "polygon":e=b.centroid;break;
default:X.neverReached(b)}e&&q.canProject(e,a.basemapTerrain.spatialReference)?h[2]=a.basemapTerrain.getElevation(e)||0:h[2]=0}(0,ba[b.type])(b,function(a){d.push(a[0],a[1],a[2])},h);var f=d.length/3;if(0!==f&&(e=Array(d.length),w.bufferToBuffer(d,b.spatialReference,0,e,a.spatialReference,0,f)))for(b.hasZ&&(c.hasZ=!0),a=0;a<e.length;a+=3)b.hasZ?(h[0]=e[a+0],h[1]=e[a+1],h[2]=e[a+2]):(h[0]=e[a+0],h[1]=e[a+1]),p.expand(c.boundingBox,h)}}function ca(a,b,c,d){return a.whenViewForGraphic(b).then(function(a){if(a&&
a.whenGraphicBounds)return a.whenGraphicBounds(b,{minDemResolution:c})}).then(function(a){var b=a.boundingBox;p.expand(d.boundingBox,b);a.screenSpaceObjects&&a.screenSpaceObjects.forEach(function(a){d.screenSpaceObjects.push(a)});isFinite(b[2])&&(d.hasZ=!0)}).catch(function(){K(a,b.geometry,d)})}function T(a,b,c,d){if(Array.isArray(b)&&2===b.length){var e=b[0],f=b[1];if("number"===typeof e&&"number"===typeof f)return n.x=e,n.y=f,n.z=void 0,n.spatialReference=u.SpatialReference.WGS84,K(a,n,d),l.resolve()}if(b&&
"function"===typeof b.map)return l.eachAlways(b.map(function(b){return T(a,b,c,d)}));if(b instanceof u.BaseGeometry)try{K(a,b,d)}catch(m){return l.reject(m)}else if(b instanceof W)return ca(a,b,c,d);return l.resolve()}function da(a,b,c,d){if(b.camera)return l.resolve(U(a,c,b.camera,d));d.scale=b.scale;d.rotation=b.rotation;d.targetGeometry=b.targetGeometry?b.targetGeometry.clone():null;d.camera=null;null!=c.heading?d.rotation=v(c.heading):null!=c.rotation&&(d.rotation=c.rotation);b=I(a,c);null!=b&&
(d.scale=b);b=l.createResolver();S(a,d,c.tilt,b);return b.promise.then(function(a){d.camera=a;return d})}function U(a,b,c,d){d.camera=c.clone();d.camera.fov=a.camera.fov;b=a.spatialReference;c=d.camera.position.spatialReference;if(!q.canProject(c,b))return null;c.equals(b)||(d.camera.position=q.project(d.camera.position,b));return C(a,null,d)}function ea(a,b,c,d,e){var f=a.renderSpatialReference;w.pointToVector(c.position,D,f);w.pointToVector(b,L,f);e.targetGeometry=new u.Point(b);e.camera.position=
new u.Point(c.position);k.vec3.subtract(E,L,D);g.directionToHeadingTilt(a,D,E,d.up,e.camera);e.scale=g.distanceToScale(a,k.vec3.distance(D,L),e.targetGeometry.latitude);e.rotation=v(e.camera.heading);return e}function M(a,b,c,d){if(!c)return l.reject();d.targetGeometry=c.clone();var e=x.cameraOnContentAlongViewDirection(a);if(b.position)return l.resolve(ea(a,d.targetGeometry,b,e,d));if(b.zoomFactor){var f=e.distance/b.zoomFactor,m=k.vec3.scale(h,e.viewForward,-f);k.vec3.add(e.eye,e.center,m);e.markViewDirty();
d.scale=g.distanceToScale(a,f,c.latitude)}g.internalToExternal(a,e,d.camera);f=J(d.camera,b)?g.OrientationMode.LOCKED:g.OrientationMode.ADJUST;return b.zoomFactor?l.resolve(d):(d.scale=I(a,b),null==d.scale&&(w.pointToVector(c,h,a.renderSpatialReference),aa.frustum.intersectsPoint(e.frustum.planes,h)?d.scale=g.distanceToScale(a,k.vec3.distance(e.eye,h),c.latitude):d.scale=g.computeScale(a,e)),b=l.createResolver(),g.fromCenterScale(a,d.targetGeometry,d.scale,d.camera,f,b),b.promise.then(function(a){d.camera=
a;return d}))}function fa(a,b,c,d){d.targetGeometry=c.clone();var e=x.cameraOnContentAlongViewDirection(a);g.internalToExternal(a,e,d.camera);b=J(d.camera,b)?g.OrientationMode.LOCKED:g.OrientationMode.ADJUST;e=l.createResolver();g.fromExtent(a,c,d.camera.heading,d.camera.tilt,b,e);return e.promise.then(function(a){d.camera=a;return d})}function ga(a,b,c,d,e){var f=0;c.hasZ?f=c.z:a.basemapTerrain&&(f=a.basemapTerrain.getElevation(c));k.vec3.set(h,c.x,c.y,f);w.computeLinearTransformation(a.spatialReference,
h,V,a.renderSpatialReference);P.mat3.fromMat4(F,V);P.mat3.transpose(F,F);p.empty(r);c=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];for(var m=0;m<c.length;m++){var g=c[m],l=d[g[2]];isFinite(l)||(l=f);k.vec3.set(h,d[g[0]],d[g[1]],l);w.vectorToVector(h,a.spatialReference,h,a.renderSpatialReference);p.expand(r,k.vec3.transformMat3(h,h,F))}a=p.width(r);d=p.height(r);f=p.depth(r);c=1/Math.tan(b.fovY/2);return Math.max(.5*Math.sqrt(a*a+f*f)*Math.max(c,1/Math.tan(b.fovX/2))+.5*d,.5*d*
c+.5*Math.max(a,f))/e}function ha(a,b,c,d,e,f){f.targetGeometry=c.clone();var m=x.cameraOnContentAlongViewDirection(a);c=ga(a,m,c,d,e);g.internalToExternal(a,m,f.camera);b=J(f.camera,b)?g.OrientationMode.LOCKED:g.OrientationMode.ADJUST;f.scale=g.distanceToScale(a,c,f.targetGeometry.latitude);m=l.createResolver();g.fromCenterScale(a,f.targetGeometry,f.scale,f.camera,b,m);return m.promise.then(function(a){f.camera=a;return f})}function ia(a,b){if(!b||!a.spatialReference)return null;a={target:null};
if("declaredClass"in b||Array.isArray(b))a.target=b;else{for(var c in b)a[c]=b[c];b.center&&!a.target&&(a.target=b.center)}return a}function y(a){a&&(a.rotation=v(a.camera.heading));return a}Object.defineProperty(t,"__esModule",{value:!0});t.DEFAULT_FRAME_COVERAGE=.66;t.rotationToHeading=H;t.headingToRotation=v;t.toCamera=S;t.fromInternalCamera=function(a,b,c){c||(c=new z({camera:new G}));g.internalToExternal(a,b,c.camera);return C(a,b,c)};t.fromCamera=function(a,b,c){c||(c=new z);c.camera=b.clone();
return C(a,null,c)};t.create=function(a,b){var c=ia(a,b);if(!c)return l.reject(new O("viewpointutils-create:no-target","Missing target for creating viewpoint"));var d=new z({camera:new G({fov:a.camera.fov})});if(c.target instanceof z)return da(a,c.target,c,d).then(function(a){return y(a)});if(c.target instanceof G)return l.resolve(y(U(a,c,c.target,d)));var e=null!=c.scale||null!=c.zoom;if(c.target instanceof u.Extent)return b=c.target.xmin===c.target.xmax||c.target.ymin===c.target.ymax,e||b?M(a,c,
c.target.center,d).then(function(a){return y(a)}):fa(a,c,c.target,d).then(function(a){return y(a)});var f={boundingBox:p.empty(),hasZ:!1,screenSpaceObjects:[]};b=e?g.scaleToResolution(a,I(a,c)):void 0;return T(a,c.target,b,f).then(function(){if(isFinite(f.boundingBox[0])){p.center(f.boundingBox,h);n.x=h[0];n.y=h[1];n.z=h[2];n.spatialReference=a.spatialReference;var b=void 0;isFinite(n.z)&&f.hasZ?b=p.isPoint(f.boundingBox):(n.z=void 0,b=Q.isPoint(p.toRect(f.boundingBox,ja)));if(e||b)return M(a,c,n,
d);var b=f.screenSpaceObjects,l=t.DEFAULT_FRAME_COVERAGE;if(b.length){for(var q=Number.NEGATIVE_INFINITY,v=0;v<b.length;v++)var r=b[v].screenSpaceBoundingRect,q=Math.max(q,Math.abs(r[0]),Math.abs(r[1]),Math.abs(r[2]),Math.abs(r[3]));b=l-q/Math.min(a.width,a.height)*2}else b=l;return ha(a,c,n,f.boundingBox,b,d)}if(c.position)return b=x.cameraOnContentAlongViewDirection(a),k.vec3.copy(E,b.viewForward),g.directionToHeadingTilt(a,b.eye,E,b.up,N),d.camera.position=new u.Point(c.position),d.camera.heading=
null!=c.heading?c.heading:N.heading,d.camera.tilt=null!=c.tilt?c.tilt:N.tilt,C(a,null,d);b=x.cameraOnContentAlongViewDirection(a);b=w.vectorToPoint(b.center,a.renderSpatialReference,n,a.spatialReference);return M(a,c,b,d)}).then(function(a){return y(a)})};var h=A.vec3f64.create(),V=Z.mat4f64.create(),F=Y.mat3f64.create(),r=p.create(),ja=Q.create(),E=A.vec3f64.create(),D=A.vec3f64.create(),L=A.vec3f64.create(),N={heading:0,tilt:0},n=new u.Point,ba={point:function(a,b,c){c[0]=a.x;c[1]=a.y;a.hasZ&&(c[2]=
a.z);b(c)},polygon:function(a,b,c){for(var d=a.hasZ,e=0;e<a.rings.length;e++)for(var f=a.rings[e],g=0;g<f.length;g++)c[0]=f[g][0],c[1]=f[g][1],d&&(c[2]=f[g][2]),b(c)},polyline:function(a,b,c){for(var d=a.hasZ,e=0;e<a.paths.length;e++)for(var f=a.paths[e],g=0;g<f.length;g++)c[0]=f[g][0],c[1]=f[g][1],d&&(c[2]=f[g][2]),b(c)},multipoint:function(a,b,c){var d=a.points;a=a.hasZ;for(var e=0;e<d.length;e++)c[0]=d[e][0],c[1]=d[e][1],a&&(c[2]=d[e][2]),b(c)},extent:function(a,b,c){a.hasZ?(b(k.vec3.set(c,a.xmin,
a.ymin,a.zmin)),b(k.vec3.set(c,a.xmax,a.ymin,a.zmin)),b(k.vec3.set(c,a.xmin,a.ymax,a.zmin)),b(k.vec3.set(c,a.xmax,a.ymax,a.zmin)),b(k.vec3.set(c,a.xmin,a.ymin,a.zmax)),b(k.vec3.set(c,a.xmax,a.ymin,a.zmax)),b(k.vec3.set(c,a.xmin,a.ymax,a.zmax)),b(k.vec3.set(c,a.xmax,a.ymax,a.zmax))):(b(k.vec3.set(c,a.xmin,a.ymin,c[2])),b(k.vec3.set(c,a.xmax,a.ymin,c[2])),b(k.vec3.set(c,a.xmin,a.ymax,c[2])),b(k.vec3.set(c,a.xmax,a.ymax,c[2])))},mesh:function(a,b,c){if(a=a.vertexAttributes&&a.vertexAttributes.position)for(var d=
0;d<a.length;d+=3)b(k.vec3.set(c,a[d+0],a[d+1],a[d+2]))}}});