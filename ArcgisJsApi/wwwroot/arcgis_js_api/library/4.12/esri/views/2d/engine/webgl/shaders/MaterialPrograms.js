// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../webgl","./sources/resolver"],function(n,h,m,k){Object.defineProperty(h,"__esModule",{value:!0});var l=function(a){var d={},b;for(b in a){for(var f=b,c=void 0,c=""+f[0].toUpperCase(),g=1;g<f.length;g++){var e=f[g];e===e.toUpperCase()?(c+="_",c+=e):c+=e.toUpperCase()}d[c]=a[b]}return m.glslifyDefineMap(d)};h.createProgramTemplate=function(a,d){return{name:a,attributes:d,shaders:function(b){return{vertexShader:l(b)+k.resolveIncludes("materials/"+a+"/"+a+".vert"),
fragmentShader:l(b)+k.resolveIncludes("materials/"+a+"/"+a+".frag")}}}}});