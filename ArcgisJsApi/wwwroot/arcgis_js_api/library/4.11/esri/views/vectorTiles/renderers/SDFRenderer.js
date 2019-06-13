// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/has ../../../core/libs/gl-matrix-2/mat4 ../../../core/libs/gl-matrix-2/mat4f32 ../../../core/libs/gl-matrix-2/vec2f32 ../../../core/libs/gl-matrix-2/vec3f32 ../../../core/libs/gl-matrix-2/vec4f32 ../GeometryUtils ./rendererUtils ../../webgl/VertexArrayObject".split(" "),function(J,K,E,u,v,F,y,z,B,G,w){var H=1/65536;return function(){function d(l){this._viewProjMat=v.mat4f32.create();this._offsetVector=y.vec3f32.create();this._extrudeMat=v.mat4f32.create();this._scaleVec=
y.vec3f32.create();this._haloColor=z.vec4f32.create();this._sdfColor=z.vec4f32.create();this._initialized=!1;this._programOptions={id:!1,dd:!1};this._programCache=l}d.prototype.dispose=function(){};d.prototype.render=function(l,b,a,g,h,e,r,c,n,d,p,A,v){var y=this;if(!E("esri-vector-tiles-avoid-text")){this._initialized||this._initialize(l);var z=B.degToByte(h),x=c.getLayoutValue("text-rotation-alignment",a);2===x&&(x=1===c.getLayoutValue("symbol-placement",a)?0:1);var w=0===x,x=c.getLayoutValue("text-keep-upright",
a)&&w;g=3===g;A=.8*3/A;var I=c.hasDataDrivenTextSize?1:c.getLayoutValue("text-size",a),m=c.hasDataDrivenTextColor?[1,1,1,1]:c.getPaintValue("text-color",a),C=c.hasDataDrivenTextOpacity?1:c.getPaintValue("text-opacity",a),k=m[3]*C*v;this._sdfColor[0]=k*m[0];this._sdfColor[1]=k*m[1];this._sdfColor[2]=k*m[2];this._sdfColor[3]=k;this._glyphTextureSize||(this._glyphTextureSize=F.vec2f32.fromValues(n.width/4,n.height/4));m=r.tileTransform.transform;k=c.getPaintValue("text-translate",a);if(0!==k[0]||0!==
k[1]){u.mat4.copy(this._viewProjMat,r.tileTransform.transform);var m=k[0],k=k[1],t=0,q=0,q=(1<<r.key.level)/Math.pow(2,a)*(r.coordRange/512);if(1===c.getPaintValue("text-translate-anchor",a)){t=-B.C_DEG_TO_RAD*h;h=Math.sin(t);var D=Math.cos(t),t=q*(m*D-k*h),q=q*(m*h+k*D)}else t=q*m,q*=k;this._offsetVector[0]=t;this._offsetVector[1]=q;this._offsetVector[2]=0;u.mat4.translate(this._viewProjMat,this._viewProjMat,this._offsetVector);m=this._viewProjMat}w?u.mat4.copy(this._extrudeMat,d):u.mat4.copy(this._extrudeMat,
p);this._scaleVec[0]=1/24;this._scaleVec[1]=1/24;this._scaleVec[2]=1;u.mat4.scale(this._extrudeMat,this._extrudeMat,this._scaleVec);d=c.hasDataDrivenText;if(p=this._getSDFVAO(l,r,d)){l.bindVAO(p);p=this._programOptions;p.id=g;p.dd=d;var f=this._programCache.getProgram(6,(g?1:0)<<1|(d?1:0),p);l.bindProgram(f);f.setUniformMatrix4fv("u_transformMatrix",m);f.setUniformMatrix4fv("u_extrudeMatrix",this._extrudeMat);f.setUniform2fv("u_normalized_origin",r.tileTransform.displayCoord);f.setUniform1f("u_depth",
c.z+H);f.setUniform2fv("u_mosaicSize",this._glyphTextureSize);f.setUniform1f("u_mapRotation",z);f.setUniform1f("u_keepUpright",x?1:0);f.setUniform1f("u_level",10*a);f.setUniform1f("u_fadeSpeed",10*e.fadeSpeed);f.setUniform1f("u_minfadeLevel",10*e.minfadeLevel);f.setUniform1f("u_maxfadeLevel",10*e.maxfadeLevel);f.setUniform1f("u_fadeChange",10*(a+e.fadeChange));f.setUniform1i("u_texture",6);f.setUniform1f("u_size",I);f.setUniform1f("u_antialiasingWidth",A);g&&(e=G.int32To4Bytes(b.layerID),f.setUniform4f("u_id",
e[0],e[1],e[2],e[3]));b.glyphPerPageElementsMap.forEach(function(b,e){y._renderGlyphRange(l,b,e,c,n,f,a,C*v,3)});l.bindVAO()}}};d.prototype._renderGlyphRange=function(l,b,a,g,h,e,d,c,n){h.bind(l,9729,a,6);h=g.getPaintValue("text-halo-color",d);a=g.getPaintValue("text-halo-width",d);0<h[3]&&0<a&&(c*=h[3],this._haloColor[0]=c*h[0],this._haloColor[1]=c*h[1],this._haloColor[2]=c*h[2],this._haloColor[3]=c,g=g.getPaintValue("text-halo-blur",d)*n,n*=a,e.setUniform4fv("u_color",this._haloColor),e.setUniform1f("u_halo",
1),e.setUniform1f("u_edgeDistance",n),e.setUniform1f("u_edgeBlur",g),l.drawElements(4,b[1],5125,12*b[0]));0<this._sdfColor[3]&&(e.setUniform4fv("u_color",this._sdfColor),e.setUniform1f("u_halo",0),e.setUniform1f("u_edgeDistance",0),e.setUniform1f("u_edgeBlur",0),l.drawElements(4,b[1],5125,12*b[0]))};d.prototype._initialize=function(d){if(this._initialized)return!0;this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,
type:5122,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};this._vertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:24,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:24,normalized:!1,divisor:0},{name:"a_levelInfo",
count:4,type:5121,offset:12,stride:24,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:16,stride:24,normalized:!0,divisor:0},{name:"a_size",count:1,type:5126,offset:20,stride:24,normalized:!1,divisor:0}]};return this._initialized=!0};d.prototype._getSDFVAO=function(d,b,a){if(a){if(b.textDDVertexArrayObject)return b.textDDVertexArrayObject;a=b.textDDVertexBuffer;var g=b.textIndexBuffer;if(!a||!g)return null;b.textDDVertexArrayObject=new w(d,this._programCache.getProgramAttributes(6),
this._vertexAttributesDD,{geometry:a},g);return b.textDDVertexArrayObject}if(b.textVertexArrayObject)return b.textVertexArrayObject;a=b.textVertexBuffer;g=b.textIndexBuffer;if(!a||!g)return null;b.textVertexArrayObject=new w(d,this._programCache.getProgramAttributes(6),this._vertexAttributes,{geometry:a},g);return b.textVertexArrayObject};return d}()});