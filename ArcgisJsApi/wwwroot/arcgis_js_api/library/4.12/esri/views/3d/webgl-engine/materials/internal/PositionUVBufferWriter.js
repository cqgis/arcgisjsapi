// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../support/buffer/InterleavedLayout","../../lib/Util","./bufferWriters"],function(g,h,d,c,f){var e=d.newLayout().vec3f(c.VertexAttrConstants.POSITION).vec2f(c.VertexAttrConstants.UV0);return function(){function a(){this.vertexBufferLayout=e}a.prototype.allocate=function(b){return e.createBuffer(b)};a.prototype.elementCount=function(b){return b.indices[c.VertexAttrConstants.POSITION].length};a.prototype.write=function(b,a,c,d){f.writeDefaultAttributes(a,e,b.transformation,
b.invTranspTransformation,c,d)};return a}()});