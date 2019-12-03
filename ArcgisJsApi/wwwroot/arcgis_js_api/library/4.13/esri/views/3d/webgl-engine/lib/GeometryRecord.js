// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/ObjectPool","./IdGen"],function(h,k,b,c){return function(){function a(d,b,c,e,f,g){this.id=a._idGen.gen(d&&d.id);this.geometry=d;this.material=b;this.transformation=c;this.instanceParameters=e;this.origin=f;this.shaderTransformation=g}a.prototype.getStaticTransformation=function(){return this.transformation};a.prototype.getShaderTransformation=function(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation};
a._idGen=new c.IdGen;a.pool=new b(a,!0);return a}()});