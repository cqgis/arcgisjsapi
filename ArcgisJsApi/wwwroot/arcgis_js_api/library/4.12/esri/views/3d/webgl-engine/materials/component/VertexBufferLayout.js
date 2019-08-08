// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../support/buffer/InterleavedLayout"],function(e,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.createVertexBufferLayout=function(b){var a=d.newLayout().vec3f("position");"compressed"===b.normals?a.vec2i16("normalCompressed",{glNormalized:!0}):"default"===b.normals&&a.vec3f("normal");b.textureCoordinates&&a.vec2f("uv0");b.textureCoordinateRegions&&a.vec4u16("region",{glNormalized:!0});b.colors&&a.vec4u8("color");b.componentData&&a.u16("componentIndex");
return a.alignTo(4)}});