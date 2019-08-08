// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","./rasterFormats/RasterCodec"],function(g,h,d,e,f){return function(){function a(){}a.prototype.decode=function(a){return e(this,void 0,void 0,function(){var b;return d(this,function(c){switch(c.label){case 0:return[4,f.decode(a.data,a.options)];case 1:return b=c.sent(),[2,b&&b.toJSON()]}})})};return a}()});