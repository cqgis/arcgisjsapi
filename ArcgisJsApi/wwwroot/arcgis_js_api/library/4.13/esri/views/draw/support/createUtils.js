// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../geometry ../../../core/unitUtils ../../../core/libs/gl-matrix-2/mat2d ../../../core/libs/gl-matrix-2/mat2df64 ../../../core/libs/gl-matrix-2/quat ../../../core/libs/gl-matrix-2/quatf64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/Circle ../../../geometry/geometryEngine ../../../geometry/support/coordsUtils ../../../geometry/support/spatialReferenceUtils".split(" "),
function(r,l,v,F,m,B,C,t,w,x,p,n,D,y,u,E){function f(a,e){return{x:a,y:e}}function q(a,e,d,c){void 0===c&&(c=!0);a=a.map(function(a){return Array.apply([],a)});a.forEach(function(a,b){a[0][0]===a[a.length-1][0]&&a[0][1]===a[a.length-1][1]||a.push(a[0])});var b=new m.Polygon({rings:a,spatialReference:e});b.rings.forEach(function(a){b.isClockwise(a)||a.reverse()});d&&u.unnormalizeGeometryOnDatelineCrossing(b);c&&b.isSelfIntersecting&&E.isValid(e)&&(b=y.simplify(b));return b}Object.defineProperty(l,
"__esModule",{value:!0});l.makeMapPoint=function(a,e){return[a,e]};l.makeSurfacePoint=f;r=function(){function a(a){this.spatialReference=a}a.prototype.mapToLocalMultiple=function(a){var d=this;return a.map(function(a){return d.mapToLocal(a)})};Object.defineProperty(a.prototype,"doUnnormalization",{get:function(){return!1},enumerable:!0,configurable:!0});return a}();var z=function(a){function e(d,c){c=a.call(this,c)||this;c.transform=t.mat2df64.create();c.transformInv=t.mat2df64.create();c.transform=
t.mat2df64.clone(d);C.mat2d.invert(c.transformInv,c.transform);return c}v(e,a);e.prototype.mapToLocal=function(a){return f(this.transform[0]*a[0]+this.transform[2]*a[1]+this.transform[4],this.transform[1]*a[0]+this.transform[3]*a[1]+this.transform[5])};e.prototype.localToMap=function(a){return[this.transformInv[0]*a.x+this.transformInv[2]*a.y+this.transformInv[4],this.transformInv[1]*a.x+this.transformInv[3]*a.y+this.transformInv[5]]};return e}(r);l.AffineCoordinateSystem=z;var A=function(a){function e(d,
c){var b=a.call(this,d.spatialReference)||this;b.view=d;b.pWS=n.vec3f64.create();b.tangentFrameUpWS=n.vec3f64.create();b.tangentFrameRightWS=n.vec3f64.create();b.tangentFrameForwardWS=n.vec3f64.create();b.localFrameRightWS=n.vec3f64.create();b.localFrameUpWS=n.vec3f64.create();b.worldToLocalTransform=x.quatf64.create();b.localToWorldTransform=x.quatf64.create();b.scale=1;b.scale=d.resolution;b.pMS=c;d=d.state.camera.viewRight;b.view.renderCoordsHelper.toRenderCoords(b.pMS,b.pWS);b.view.renderCoordsHelper.worldBasisAtPosition(b.pWS,
0,b.tangentFrameRightWS);b.view.renderCoordsHelper.worldBasisAtPosition(b.pWS,1,b.tangentFrameUpWS);b.view.renderCoordsHelper.worldBasisAtPosition(b.pWS,2,b.tangentFrameForwardWS);c=n.vec3f64.create();p.vec3.scale(c,b.tangentFrameForwardWS,p.vec3.dot(d,b.tangentFrameForwardWS));p.vec3.subtract(b.localFrameRightWS,d,c);p.vec3.normalize(b.localFrameRightWS,b.localFrameRightWS);p.vec3.cross(b.localFrameUpWS,b.tangentFrameForwardWS,b.localFrameRightWS);w.quat.rotationTo(b.worldToLocalTransform,b.localFrameRightWS,
b.tangentFrameRightWS);w.quat.invert(b.localToWorldTransform,b.worldToLocalTransform);return b}v(e,a);Object.defineProperty(e.prototype,"doUnnormalization",{get:function(){return"global"===this.view.viewingMode},enumerable:!0,configurable:!0});e.prototype.mapToLocal=function(a){var c=n.vec3f64.create();this.view.renderCoordsHelper.toRenderCoords(new m.Point({x:a[0],y:a[1],spatialReference:this.spatialReference}),c);p.vec3.transformQuat(c,c,this.worldToLocalTransform);a=this.view.renderCoordsHelper.fromRenderCoords(c,
this.view.spatialReference);return f(a.x/this.scale,a.y/this.scale)};e.prototype.localToMap=function(a){var c=n.vec3f64.create();this.view.renderCoordsHelper.toRenderCoords(new m.Point({x:a.x*this.scale,y:a.y*this.scale,spatialReference:this.spatialReference}),c);p.vec3.transformQuat(c,c,this.localToWorldTransform);a=this.view.renderCoordsHelper.fromRenderCoords(c,this.view.spatialReference);return[a.x,a.y]};return e}(r);l.SceneViewCoordinateSystem=A;l.createViewAlignedCoordinateSystem=function(a,
e){return"2d"===a.type?new z(a.state.transform,a.spatialReference):"3d"===a.type?new A(a,new m.Point({x:e[0],y:e[1],spatialReference:a.spatialReference})):null};l.createPoint=function(a,e){return new m.Point({x:a[0],y:a[1],spatialReference:e})};l.createMultipoint=function(a,e){return new m.Multipoint({points:a,spatialReference:e})};l.createPolyline=function(a,e,d){a=new m.Polyline({paths:a,spatialReference:e});d&&u.unnormalizeGeometryOnDatelineCrossing(a);return a};l.createPolygon=q;l.createTriangleMS=
function(a,e,d,c){var b=e.mapToLocalMultiple(a);a=b[0];var g=b[1],h=Math.round(g.x-a.x),k=Math.round(g.y-a.y),l=b=null,m=null;d&&c?(d=Math.sqrt(h*h+k*k),b=f(-.8660254037844386*d+a.x,.5*d+a.y),l=f(.8660254037844386*d+a.x,.5*d+a.y),m=f(a.x,a.y-d)):d?(b=f(0<k?g.x:a.x,a.y+k),l=f(a.x-h,0<k?g.y:a.y-k),m=f(0<k?a.x:g.x,a.y-k)):c?(d=Math.max(Math.abs(h),Math.abs(k)),c=d*Math.sqrt(3)/2,b=f(a.x,0<k?a.y+d:a.y),l=f(0<h?a.x+d:a.x-d,0<k?a.y+d:a.y),m=f(0<h?a.x+d/2:a.x-d/2,0<k?a.y+d-c:a.y-c)):(b=f(0<k?a.x+h/2:g.x,
a.y),l=f(0<k?a.x:a.x+h/2,g.y),m=f(0<k?g.x:a.x,0<k?g.y:a.y));return q([[b,m,l].map(function(a){return e.localToMap(a)})],e.spatialReference,e.doUnnormalization,!0)};l.createSquare=function(a,e,d){var c=e.mapToLocalMultiple(a);a=[];var b=c[0].x,g=c[0].y,h=Math.round(c[1].x-b),k=Math.round(c[1].y-g),c=Math.max(Math.abs(h),Math.abs(k));d?(d=b+c,h=g+c,b-=c,g-=c,a.push(f(d,g),f(b,g),f(b,h),f(d,h))):(d=0<h?b+c:b-c,c=0<k?g+c:g-c,a.push(f(b,g),f(d,g),f(d,c),f(b,c)));return q([a.map(function(a){return e.localToMap(a)})],
e.spatialReference,e.doUnnormalization,!0)};l.createRectangle=function(a,e,d){var c=e.mapToLocalMultiple(a);1===c.length&&(a=c[0],c=[f(a.x-48,a.y+48),f(a.x+48,a.y-48),f(a.x+48,a.y-48),f(a.x-48,a.y+48)]);a=[];var b=c[0].x,g=c[0].y,h=c[1].x,c=c[1].y;if(d){d=Math.round(h-b);var k=Math.round(c-g);a.push(f(b-d,g-k),f(h,g-k),f(h,c),f(b-d,c))}else a.push(f(b,g),f(h,g),f(h,c),f(b,c));return q([a.map(function(a){return e.localToMap(a)})],e.spatialReference,e.doUnnormalization,!0)};l.createCircle=function(a,
e,d){var c=e.mapToLocalMultiple(a),b=a=null;d?(a=c[0],b=c[1]):(a=c[0],c=c[1],d=Math.round(c.x-a.x),c=Math.round(c.y-a.y),b=Math.max(Math.abs(d),Math.abs(c)),a=f(0<d?a.x+b/2:a.x-b/2,0<c?a.y+b/2:a.y-b/2),b=f(Math.abs(d)>Math.abs(c)?a.x-b/2:a.x,Math.abs(d)>Math.abs(c)?a.y:a.y-b/2));a=e.localToMap(a);d=e.localToMap(b);e.doUnnormalization&&u.unnormalizeVerticesOnDatelineCrossing([[a,d]],e.spatialReference);a=new m.Point({x:a[0],y:a[1],spatialReference:e.spatialReference});d=new m.Point({x:d[0],y:d[1],
spatialReference:e.spatialReference});d=B.getMetersPerUnitForSR(e.spatialReference)*y.distance(a,d,null);e=new D({center:a,radius:d,radiusUnit:"meters",spatialReference:e.spatialReference});return q(e.rings,e.spatialReference,!1)};l.createEllipse=function(a,e,d){var c=e.mapToLocalMultiple(a);a=c[0];var b=c[1],c=Math.round(b.x-a.x),b=Math.round(b.y-a.y);a=f(d?a.x:a.x+c/2,d?a.y:a.y+b/2);c=d?c:c/2;d=d?b:b/2;for(var b=[],g=2*Math.PI/60,h=0;60>h;h++){var k=f(c*Math.cos(h*g)+a.x,d*Math.sin(h*g)+a.y);b.push(k)}b.push(b[0]);
return q([b.map(function(a){return e.localToMap(a)})],e.spatialReference,e.doUnnormalization,!1)}});