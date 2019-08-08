// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/maybe"],function(e,f,d){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function c(a,b,g){var c=this;this._textureRep=a;this._textureId=b;this._options=g;this._textureRef=d.applySome(this._textureId,function(a){return c._textureRep.acquire(a,!!c._options.initTransparent)})}c.prototype.dispose=function(){var a=this;this._textureRef=d.applySome(this._textureId,function(b){a._textureRep.release(b)})};c.prototype.bind=function(a,b){d.isSome(this._textureRef)&&
(b.setUniform1i(this._options.textureUniform,this._options.textureUnit),a.bindTexture(this._textureRef.getGLTexture(),this._options.textureUnit),this._options.textureSizeUniform&&(a=this._textureRef.getGLTexture(),b.setUniform2f(this._options.textureSizeUniform,a.descriptor.width,a.descriptor.height)))};c.prototype.update=function(a){var b=this;a!==this._textureId&&(d.applySome(this._textureId,function(a){b._textureRep.release(a)}),this._textureRef=d.applySome(a,function(a){return b._textureRep.acquire(a,
!!b._options.initTransparent)}))};return c}();f.TextureBinding=e});