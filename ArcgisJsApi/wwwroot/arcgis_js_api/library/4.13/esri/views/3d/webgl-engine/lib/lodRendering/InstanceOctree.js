// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../support/mathUtils ../Octree".split(" "),function(b,f,g,h,k,l,m,n){Object.defineProperty(f,"__esModule",{value:!0});b=function(b){function d(a,e){var c=b.call(this,[0,0,0],1,{getCenter:function(a){var e=c._instanceData.view.boundingSphere,b=c._tmpCenter;b[0]=e.get(a,0);b[1]=e.get(a,1);b[2]=e.get(a,
2);return b},getRadius:function(a){return c._instanceData.view.boundingSphere.get(a,3)}},{maximumDepth:25})||this;c._tmpCenter=l.vec3f64.create();c._tmpMat4=h.mat4f64.create();c._instanceData=a;c._boundingSphere=e;return c}g(d,b);d.prototype.addInstance=function(a){var b=this._instanceData.view.boundingSphere,c=this._instanceData.getCombinedModelTransform(a,this._tmpMat4),d=k.vec3.transformMat4(this._tmpCenter,this._boundingSphere.center,c),c=this._boundingSphere.radius*m.maxScale(c);b.set(a,0,d[0]);
b.set(a,1,d[1]);b.set(a,2,d[2]);b.set(a,3,c);this.add(a)};d.prototype.removeInstance=function(a){this.remove(a)};return d}(n);f.InstanceOctree=b});