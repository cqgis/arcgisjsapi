// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(g,d,e,b,f){Object.defineProperty(d,"__esModule",{value:!0});var c=function(a){return f.glslifyDefineMap({TEXTURING:"none"!==a.textureMode,TEXTURE_ATLAS:"AtlasTextured"===a.textureMode,VERTEXCOLORS:a.vertexColors,SYMBOLVERTEXCOLORS:a.symbolColors,FLIPV:a.flipV,DOUBLESIDED:a.doubleSided,WINDINGORDERDOUBLESIDED:a.windowOrderDoubleSided,INSTANCED:a.instanced,INSTANCED_DOUBLE_PRECISION:a.instancedDoublePrecision,
INSTANCEDCOLOR:a.instancedColor,RECEIVE_SHADOWS:a.receiveShadows,RECEIVE_SSAO:a.receiveSSAO,VV_SIZE:a.vvSize,VV_COLOR:a.vvColor,VERTICAL_OFFSET:a.verticalOffset,SCREEN_SIZE_PERSPECTIVE:a.screenSizePerspective,SLICE:a.slice,SLICE_HIGHLIGHT_DISABLED:a.sliceHighlightDisabled,GROUND_NORMAL_SHADING:a.groundNormalShading,NORMALS:{value:a.normals,options:{default:"NORMALS_DEFAULT",compressed:"NORMALS_COMPRESSED",screenDerivative:"NORMALS_SCREEN_DERIVATIVE"}},COMPONENTCOLORS:a.componentColor,TEXTURE_ALPHA_MODE_MASK:"mask"===
a.textureAlphaMode,TEXTURE_ALPHA_MODE_MASK_BLEND:"maskBlend"===a.textureAlphaMode,TEXTURE_ALPHA_MODE_OPAQUE:"opaque"===a.textureAlphaMode,BIAS_SHADOWMAP:a.shadowMap,VERTEX_TANGENTS:"vertex"===a.tangents,TEXTURE_COLOR:a.colorTexture,TEXTURE_NORMALS:!!a.normalTexture,TEXTURE_COORDINATES:!!a.roughnessMetallnessTexture||!!a.emissionTexture||!!a.occlusionTexture||!!a.normalTexture||"none"!==a.textureMode,TREE_RENDERING:a.treeRendering,IOS_SAFARI_FIX:a.iosSafariFix,TEXTURE_ALPHA_PREMULTIPLIED:!!a.textureAlphaPremultiplied,
PBR_TEX_METALLNESS_ROUGHNESS:!!a.roughnessMetallnessTexture,PBR_TEX_EMISSION:!!a.emissionTexture,PBR_TEX_OCCLUSION:!!a.occlusionTexture,USE_PBR:a.usePBR})};d.colorPass={name:"default-color",shaders:function(a){return{vertexShader:c(a)+b.resolveIncludes("materials/defaultMaterial/colorPass.vert"),fragmentShader:c(a)+b.resolveIncludes("materials/defaultMaterial/colorPass.frag")}},attributes:e.Default3D};d.depthPass={name:"default-depth",shaders:function(a){return{vertexShader:c(a)+b.resolveIncludes("materials/defaultMaterial/depthPass.vert"),
fragmentShader:c(a)+b.resolveIncludes("materials/defaultMaterial/depthPass.frag")}},attributes:e.Default3D};d.normalPass={name:"default-normal",shaders:function(a){return{vertexShader:c(a)+b.resolveIncludes("materials/defaultMaterial/normalPass.vert"),fragmentShader:c(a)+b.resolveIncludes("materials/defaultMaterial/normalPass.frag")}},attributes:e.Default3D};d.highlightPass={name:"default-highlight",shaders:function(a){return{vertexShader:c(a)+b.resolveIncludes("materials/defaultMaterial/highlightPass.vert"),
fragmentShader:c(a)+b.resolveIncludes("materials/defaultMaterial/highlightPass.frag")}},attributes:e.Default3D}});