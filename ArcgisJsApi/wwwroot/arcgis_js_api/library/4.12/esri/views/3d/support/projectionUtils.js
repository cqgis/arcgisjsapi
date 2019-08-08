// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/mathUtils ../../../core/maybe ../../../core/unitUtils ../../../core/libs/gl-matrix-2/mat4 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/Point ../../../geometry/SpatialReference ../../../geometry/support/aaBoundingRect ../../../layers/graphics/dehydratedFeatures ./earthUtils ./mathUtils ../webgl-engine/lib/BufferVectorMath".split(" "),function(ia,f,ca,t,da,G,H,I,V,W,ea,fa,h,N,ga){function S(a,b,d,e){2===a.length?(c[0]=
a[0],c[1]=a[1],c[2]=0,a=c):a===d&&(H.vec3.copy(c,a),a=c);return m(a,b,0,d,e,0,1)}function m(a,b,d,e,c,k,g){void 0===g&&(g=1);b=T(b,c,X).projector;if(t.isNone(b))return!1;if(b===l){if(a===e&&d===k)return!0;for(b=d+3*g;d<b;d++,k++)e[k]=a[d];return!0}for(g=d+3*g;d<g;d+=3,k+=3)b(a,d,e,k);return!0}function D(a,b){if(b.spatialReference===a)return b.spatialReferenceId;b.spatialReference=a;"metersPerUnit"in b&&(b.metersPerUnit=da.getMetersPerUnitForSR(a,1));return a.wkt===f.SphericalECEFSpatialReference.wkt?
b.spatialReferenceId=1:a.isWGS84?b.spatialReferenceId=2:a.isWebMercator?b.spatialReferenceId=3:a.wkt===f.WGS84ECEFSpatialReference.wkt?b.spatialReferenceId=4:4490===a.wkid?b.spatialReferenceId=5:b.spatialReferenceId=0}function l(a,b,d,e){d[e++]=a[b++];d[e++]=a[b++];d[e]=a[b]}function O(a,b,d,e){d[e++]=E*(a[b++]/h.earthRadius);d[e++]=E*(Math.PI/2-2*Math.atan(Math.exp(-1*a[b++]/h.earthRadius)));d[e]=a[b]}function P(a,b,d,e){var c=.4999999*Math.PI,c=ca.clamp(q*a[b+1],-c,c),c=Math.sin(c);d[e++]=q*a[b]*
h.earthRadius;d[e++]=h.halfEarthRadius*Math.log((1+c)/(1-c));d[e]=a[b+2]}function Y(a,b,d){b=D(b,U);b=u[b][6];if(t.isNone(b))return!1;b(a,0,c,0);d!==c&&(d[0]=c[0],d[1]=c[1],2<d.length&&(d[2]=c[2]));return!0}function Z(a,b){c[0]=a.x;c[1]=a.y;c[2]=a.hasZ?a.z:0;return Y(c,a.spatialReference,b)}function J(a,b,d,e){var c=h.earthRadius+a[b+2],k=q*a[b+1];a=q*a[b];b=Math.cos(k);d[e++]=Math.cos(a)*b*c;d[e++]=Math.sin(a)*b*c;d[e]=Math.sin(k)*c}function K(a,b,d,e){var c=ga.Vec3Compact.length(a,b),k=N.asin(a[b+
2]/(0===c?1:c)),g=Math.cos(k)*c;a=(0<a[b+1]?1:-1)*N.acos(a[b]/(0===g?1:g));d[e++]=E*a;d[e++]=E*k;d[e]=c-h.earthRadius}function L(a,b,d,e){var c=aa,k=q*a[b],g=q*a[b+1];a=a[b+2];b=Math.sin(g);var g=Math.cos(g),f=c.a/Math.sqrt(1-c.e2*b*b);d[e++]=(f+a)*g*Math.cos(k);d[e++]=(f+a)*g*Math.sin(k);d[e++]=(f*(1-c.e2)+a)*b}function M(a,b,d,e){var c=aa,k=a[b],g=a[b+1];a=a[b+2];var f,l,n,p,h,m;b=Math.abs(a);f=k*k+g*g;l=Math.sqrt(f);n=f+a*a;p=Math.sqrt(n);k=Math.atan2(g,k);h=a*a/n;n=f/n;g=c.a2/p;f=c.a3-c.a4/p;
.3<n?(h=b/p*(1+n*(c.a1+g+h*f)/p),p=Math.asin(h),g=h*h,n=Math.sqrt(1-g)):(n=l/p*(1-h*(c.a5-g-n*f)/p),p=Math.acos(n),g=1-n*n,h=Math.sqrt(g));m=1-c.e2*g;g=c.a/Math.sqrt(m);c=c.a6*g;g=l-g*n;f=b-c*h;b=n*g+h*f;l=n*f-h*g;c=l/(c/m+b);p+=c;0>a&&(p=-p);d[e++]=E*k;d[e++]=E*p;d[e]=b+l*c/2}function T(a,b,d){if(d.source.spatialReference===a&&d.dest.spatialReference===b)return d;var e=D(a,d.source),c=D(b,d.dest);0===e&&0===c?a.equals(b)?d.projector=l:d.projector=null:d.projector=u[e][c];return d}Object.defineProperty(f,
"__esModule",{value:!0});var v,w,x,y,z,A,B,C;f.SphericalECEFSpatialReference=new W({wkt:'GEOCCS["Spherical geocentric",\n  DATUM["Not specified",\n    SPHEROID["Sphere",\' + earthUtils.earthRadius + \',0]],\n  PRIMEM["Greenwich",0.0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",EAST],\n  AXIS["Geocentric Z",NORTH]\n]'});f.WGS84ECEFSpatialReference=new W({wkt:'GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",6378137,298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]'});
f.canProject=function(a,b){return!!T(a,b,X).projector};f.vectorToVector=S;f.pointToPoint=function(a,b,d,e){void 0===d&&(d=b.spatialReference);void 0===e&&(e=0);c[0]=a.x;c[1]=a.y;var f=a.z;c[2]=void 0!==f?f:e;if(!m(c,a.spatialReference,0,c,d,0,1))return!1;b.x=c[0];b.y=c[1];b.spatialReference=d;void 0!==f?(b.z=c[2],b.hasZ=!0):(b.z=void 0,b.hasZ=!1);return!0};f.pointToVector=function(a,b,d,e){void 0===e&&(e=0);c[0]=a.x;c[1]=a.y;var f=a.z;c[2]=void 0!==f?f:e;return m(c,a.spatialReference,0,b,d,0,1)};
f.vectorToPoint=function(a,b,d,e){d instanceof V?e=e||d.spatialReference:fa.isPoint(d)?(d.hasZ=!0,e=e||d.spatialReference):(e=d,d=new V({spatialReference:e}));return m(a,b,0,c,e,0,1)?(d.x=c[0],d.y=c[1],d.z=c[2],d.spatialReference=e,d):null};f.xyzToVector=function(a,b,d,e,f,k){c[0]=a;c[1]=b;c[2]=d;return m(c,e,0,f,k,0,1)};f.bufferToBuffer=m;f.computeLinearTransformation=function(a,b,d,e){var c=D(a,U),f=D(e,ba);if(c===f&&1!==f&&(0!==c||a.equals(e)))return G.mat4.identity(d),G.mat4.translate(d,d,b),
!0;if(1===f){a=u[c][6];f=u[6][f];if(t.isNone(a)||t.isNone(f))return!1;a(b,0,r,0);f(r,0,F,0);a=q*r[0];f=q*r[1];b=Math.sin(a);a=Math.cos(a);e=Math.sin(f);f=Math.cos(f);d[0]=-b;d[4]=-e*a;d[8]=f*a;d[12]=F[0];d[1]=a;d[5]=-e*b;d[9]=f*b;d[13]=F[1];d[2]=0;d[6]=f;d[10]=e;d[14]=F[2];d[3]=0;d[7]=0;d[11]=0;d[15]=1;return!0}if(3===f&&(2===c||1===c)){a=u[c][6];f=u[6][3];if(t.isNone(a)||t.isNone(f))return!1;a(b,0,r,0);b=q*r[1];f(r,0,F,0);G.mat4.identity(d);G.mat4.translate(d,d,F);b=1/Math.cos(b);G.mat4.scale(d,
d,[b,b,1]);return!0}return!1};f.transformDirection=function(a,b,d,c,f){H.vec3.copy(Q,a);H.vec3.add(R,a,b);S(Q,d,Q,f);S(R,d,R,f);H.vec3.subtract(c,R,Q);H.vec3.normalize(c,c)};f.mbsToMbs=function(a,b,d,c){b=T(b,c,ha);if(b.projector===l)return d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3],!0;if(t.isNone(b.projector))return!1;c=b.source;var e=b.dest;if(3===e.spatialReferenceId){b=u[c.spatialReferenceId][2];if(t.isNone(b))return!1;b(a,0,r,0);b=Math.abs(q*r[1])+Math.asin(a[3]/(h.earthRadius+a[2]));P(r,0,d,0);
d[3]=b>.9999*Math.PI?Number.MAX_VALUE:1/Math.cos(b)*a[3];return!0}b.projector(a,0,d,0);d[3]=a[3]*c.metersPerUnit/e.metersPerUnit;return!0};f.extentToBoundingBox=function(a,b,d){if(null==a)return!1;var e;c[0]=null!=a.xmin?a.xmin:0;c[1]=null!=a.ymin?a.ymin:0;c[2]=null!=a.zmin?a.zmin:0;e=m(c,a.spatialReference,0,b,d,0,1);c[0]=null!=a.xmax?a.xmax:0;c[1]=null!=a.ymax?a.ymax:0;c[2]=null!=a.zmax?a.zmax:0;e=e&&m(c,a.spatialReference,0,b,d,3,1);null==a.xmin&&(b[0]=-Infinity);null==a.ymin&&(b[1]=-Infinity);
null==a.zmin&&(b[2]=-Infinity);null==a.xmax&&(b[3]=Infinity);null==a.ymax&&(b[4]=Infinity);null==a.zmax&&(b[5]=Infinity);return e};f.extentToBoundingRect=function(a,b,d){if(null==a)return!1;var e;c[0]=null!=a.xmin?a.xmin:0;c[1]=null!=a.ymin?a.ymin:0;c[2]=null!=a.zmin?a.zmin:0;e=m(c,a.spatialReference,0,c,d,0,1);b[0]=c[0];b[1]=c[1];c[0]=null!=a.xmax?a.xmax:0;c[1]=null!=a.ymax?a.ymax:0;c[2]=null!=a.zmax?a.zmax:0;e=e&&m(c,a.spatialReference,0,c,d,0,1);b[2]=c[0];b[3]=c[1];null==a.xmin&&(b[0]=-Infinity);
null==a.ymin&&(b[1]=-Infinity);null==a.xmax&&(b[2]=Infinity);null==a.ymax&&(b[3]=Infinity);return e};f.boundingRectToBoundingRect=function(a,b,d,e){if(null==a)return!1;if(b.equals(e))return ea.set(d,a),!0;var f;c[0]=a[0];c[1]=a[1];c[2]=0;f=m(c,b,0,c,e,0,1);d[0]=c[0];d[1]=c[1];c[0]=a[2];c[1]=a[3];c[2]=0;f=f&&m(c,b,0,c,e,0,1);d[2]=c[0];d[3]=c[1];return f};(function(a){a.x2lon=function(a){return a/h.earthRadius};a.y2lat=function(a){return Math.PI/2-2*Math.atan(Math.exp(-1*a/h.earthRadius))};a.lon2x=
function(a){return a*h.earthRadius};a.lat2y=function(a){a=Math.sin(a);return h.earthRadius/2*Math.log((1+a)/(1-a))}})(f.webMercator||(f.webMercator={}));f.canProjectToWGS84ComparableLonLat=function(a){a=D(a,U);return!!u[a][6]};f.vectorToWGS84ComparableLonLat=Y;f.pointToWGS84ComparableLonLat=Z;f.pointToWGS84ComparableLonLatPoint=function(a,b){var d=D(b.spatialReference,ba);return t.isNone(u[6][d])?!1:Z(a,c)?(b.x=c[0],b.y=c[1],b.z=c[2],!0):!1};f.wgs84ComparableLonLatToECEF=function(a,b,d,c){void 0===
c&&(c=0);c=h.earthRadius+c;var e=Math.cos(d);a[0]=Math.cos(b)*e*c;a[1]=Math.sin(b)*e*c;a[2]=Math.sin(d)*c};var u=(v={},v[2]=(w={},w[5]=null,w[6]=l,w[1]=J,w[0]=null,w[3]=P,w[2]=l,w[4]=L,w),v[5]=(x={},x[5]=l,x[6]=l,x[1]=J,x[0]=null,x[3]=null,x[2]=null,x[4]=L,x),v[3]=(y={},y[5]=null,y[6]=O,y[1]=function(a,b,d,c){O(a,b,d,c);J(d,c,d,c)},y[0]=null,y[3]=l,y[2]=O,y[4]=function(a,b,d,c){O(a,b,d,c);L(d,c,d,c)},y),v[4]=(z={},z[5]=M,z[6]=M,z[1]=function(a,b,d,c){M(a,b,d,c);J(d,c,d,c)},z[0]=null,z[3]=function(a,
b,d,c){M(a,b,d,c);P(d,c,d,c)},z[2]=M,z[4]=l,z),v[1]=(A={},A[5]=K,A[6]=K,A[1]=l,A[0]=null,A[3]=function(a,b,c,e){K(a,b,c,e);P(c,e,c,e)},A[2]=K,A[4]=function(a,b,c,e){K(a,b,c,e);L(c,e,c,e)},A),v[0]=(B={},B[5]=null,B[6]=null,B[1]=null,B[0]=l,B[3]=null,B[2]=null,B[4]=null,B),v[6]=(C={},C[5]=null,C[6]=l,C[1]=J,C[0]=null,C[3]=null,C[2]=l,C[4]=L,C),v),U={spatialReference:null,spatialReferenceId:0},ba={spatialReference:null,spatialReferenceId:0},X={source:{spatialReference:null,spatialReferenceId:0},dest:{spatialReference:null,
spatialReferenceId:0},projector:l},ha={source:{spatialReference:null,spatialReferenceId:0,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:0,metersPerUnit:1},projector:l},q=N.deg2rad(1),E=N.rad2deg(1),aa={a:6378137,e2:.006694379990137799,a1:42697.67270715754,a2:1.8230912546075456E9,a3:142.91722289812412,a4:4.557728136518864E9,a5:42840.589930055656,a6:.9933056200098622},c=I.vec3f64.create(),r=I.vec3f64.create(),F=I.vec3f64.create(),Q=I.vec3f64.create(),R=I.vec3f64.create()});