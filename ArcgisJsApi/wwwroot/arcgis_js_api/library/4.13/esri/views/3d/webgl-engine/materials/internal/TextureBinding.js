// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/maybe"],function(e,f,c){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function a(d,b,g){var a=this;this._textureRep=d;this._textureId=b;this._options=g;this._textureRef=c.applySome(this._textureId,function(b){return a._textureRep.acquire(b,!!a._options.initTransparent)})}a.prototype.dispose=function(){var d=this;this._textureRef=c.applySome(this._textureId,function(b){d._textureRep.release(b)})};a.prototype.bind=function(d,b){c.isSome(this._textureRef)&&
(b.setUniform1i(this._options.textureUniform,this._options.textureUnit),d.bindTexture(this._textureRef.getGLTexture(),this._options.textureUnit))};a.prototype.bindSize=function(d,b){if(c.isSome(this._textureRef)){var a=this._textureRef.getGLTexture();b.setUniform2f(d,a.descriptor.width,a.descriptor.height)}};a.prototype.update=function(a){var b=this;a!==this._textureId&&(c.applySome(this._textureId,function(a){b._textureRep.release(a)}),this._textureRef=c.applySome(a,function(a){return b._textureRep.acquire(a,
!!b._options.initTransparent)}))};a.prototype.isValid=function(){return c.isSome(this._textureRef)};return a}();f.TextureBinding=e});