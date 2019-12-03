// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../Utils"],function(k,g,l){Object.defineProperty(g,"__esModule",{value:!0});var h=function(){function b(a,b,d){this.data=a;this.stride=b;this.vertexCount=d}b.decode=function(a){var c=l.allocateTypedArrayBufferwithData(a.data,a.stride);return new b(c,a.stride,a.vertexCount)};b.fromVertexVector=function(a){var c=l.allocateTypedArrayBufferwithData(a.data.buffer(),a.stride);return new b(c,a.stride,a.vertexCount)};return b}();g.default=h;k=function(){function b(a,b,d){this.geometryType=
a;this.indexBuffer=new Uint32Array(b);this.namedBuffers=d}b.decode=function(a){var c=a.geometryType,d=a.indexBuffer,f={},e;for(e in a.namedBuffers)f[e]=h.decode(a.namedBuffers[e]);return new b(c,d,f)};b.fromVertexVectors=function(a){var c=a.geometryType,d=a.indexVector.buffer(),f={},e;for(e in a.namedVectors)f[e]=h.fromVertexVector(a.namedVectors[e]);return new b(c,d,f)};return b}();g.VertexBuffers=k});