// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ../core/accessorSupport/decorators ./PointCloudRenderer".split(" "),function(l,m,f,g,c,h,b,k){return function(e){function a(a){a=e.call(this)||this;a.type="point-cloud-rgb";a.field=null;return a}g(a,e);d=a;a.prototype.clone=function(){return new d(f({},this.cloneProperties(),{field:h.clone(this.field)}))};var d;c([b.enumeration.serializable()({pointCloudRGBRenderer:"point-cloud-rgb"})],
a.prototype,"type",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);return a=d=c([b.subclass("esri.renderers.PointCloudRGBRenderer")],a)}(b.declared(k))});