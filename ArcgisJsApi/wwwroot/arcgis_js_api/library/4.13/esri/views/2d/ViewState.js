// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../Viewpoint ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/libs/gl-matrix-2/common ../../core/libs/gl-matrix-2/mat2d ../../core/libs/gl-matrix-2/mat2df32 ../../core/libs/gl-matrix-2/mat2df64 ../../core/libs/gl-matrix-2/mat3 ../../core/libs/gl-matrix-2/mat3f32 ../../core/libs/gl-matrix-2/vec2 ../../core/libs/gl-matrix-2/vec2f32 ../../core/libs/gl-matrix-2/vec2f64 ../../core/libs/gl-matrix-2/types/vec2 ./viewpointUtils".split(" "),
function(E,F,z,n,v,w,A,g,B,p,C,q,m,r,k,x,D,t,l){var e=[0,0];return function(y){function c(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];a=y.apply(this,a)||this;a._viewpoint2D={center:D.vec2f64.create(),rotation:0,scale:0,spatialReference:null};a.center=[0,0];a.extent=new v.Extent;a.id=0;a.inverseTransform=q.mat2df64.create();a.resolution=0;a.rotation=0;a.scale=0;a.transform=q.mat2df64.create();a.transformNoRotation=q.mat2df64.create();a.displayMat3=r.mat3f32.create();a.displayViewMat3=
r.mat3f32.create();a.viewMat3=r.mat3f32.create();a.viewMat2d=C.mat2df32.create();a.worldScreenWidth=0;a.size=[0,0];return a}z(c,y);u=c;Object.defineProperty(c.prototype,"pixelRatio",{set:function(a){this._set("pixelRatio",a);this._update()},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"size",{set:function(a){this._set("size",a);this._update()},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"viewpoint",{set:function(a){if(a){var b=this._viewpoint2D,f=a.targetGeometry;
b.center[0]=f.x;b.center[1]=f.y;b.rotation=a.rotation;b.scale=a.scale;b.spatialReference=f.spatialReference}this._update()},enumerable:!0,configurable:!0});c.prototype.copy=function(a){var b=this.size,f=this.viewpoint;f&&b?(this.viewpoint=l.copy(f,a.viewpoint),this._set("size",k.vec2.copy(b,a.size))):(this.viewpoint=a.viewpoint.clone(),this._set("size",[a.size[0],a.size[1]]));this._set("pixelRatio",a.pixelRatio);return this};c.prototype.clone=function(){return new u({size:this.size,viewpoint:this.viewpoint.clone(),
pixelRatio:this.pixelRatio})};c.prototype.toMap=function(a,b,f){if(t.isVec2(b))return k.vec2.transformMat2d(a,b,this.inverseTransform);e[0]=b;e[1]=f;return k.vec2.transformMat2d(a,e,this.inverseTransform)};c.prototype.toScreen=function(a,b,f){if(t.isVec2(b))return k.vec2.transformMat2d(a,b,this.transform);e[0]=b;e[1]=f;return k.vec2.transformMat2d(a,e,this.transform)};c.prototype.toScreenNoRotation=function(a,b,f){if(t.isVec2(b))return k.vec2.transformMat2d(a,b,this.transformNoRotation);e[0]=b;e[1]=
f;return k.vec2.transformMat2d(a,e,this.transformNoRotation)};c.prototype.pixelSizeAt=function(a){return l.pixelSizeAt(a,this.viewpoint,this.size)};c.prototype.getScreenTransform=function(a,b){var f=this._viewpoint2D.center,d=this._get("pixelRatio")||1,c=this._get("size");l.getMatrix(a,f,c,b,0,d);return a};c.prototype._update=function(){var a=this._viewpoint2D,b=a.center,c=a.spatialReference,d=a.scale,e=a.rotation,a=this._get("pixelRatio")||1,h=this._get("size");this._set("id",this.id+1);var g=new w({targetGeometry:new v.Point(b[0],
b[1],c),scale:d,rotation:e});this._set("viewpoint",g);if(h&&c&&d)return this.resolution=l.getResolution(g),this.rotation=e,this.scale=d,this.spatialReference=c,k.vec2.copy(this.center,b),m.mat3.set(this.displayMat3,0!==h[0]?2/h[0]:0,0,0,0,0!==h[1]?-2/h[1]:0,0,-1,1,1),d=m.mat3.identity(this.viewMat3),b=x.vec2f32.fromValues(h[0]/2,h[1]/2),c=x.vec2f32.fromValues(-h[0]/2,-h[1]/2),e=B.common.toRadian(e),m.mat3.translate(d,d,b),m.mat3.rotate(d,d,e),m.mat3.translate(d,d,c),m.mat3.multiply(this.displayViewMat3,
this.displayMat3,d),d=p.mat2d.identity(this.viewMat2d),p.mat2d.translate(d,d,b),p.mat2d.rotate(d,d,e),p.mat2d.translate(d,d,c),l.getExtent(this.extent,g,h),l.getTransform(this.transform,g,h,a),p.mat2d.invert(this.inverseTransform,this.transform),l.getTransformNoRotation(this.transformNoRotation,g,h,a),this.worldScreenWidth=l.getWorldScreenWidth(this.spatialReference,this.resolution),this};var u;n([g.property({readOnly:!0})],c.prototype,"id",void 0);n([g.property({value:1,json:{write:!0}})],c.prototype,
"pixelRatio",null);n([g.property({json:{write:!0}})],c.prototype,"size",null);n([g.property({type:w,json:{write:!0}})],c.prototype,"viewpoint",null);return c=u=n([g.subclass("esri.views.2d.ViewState")],c)}(g.declared(A.JSONSupport))});