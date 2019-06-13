// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/ObjectPool","./TileAgent"],function(f,g,c,d,e){return function(b){function a(){var a=b.call(this)||this;a._scaleRangeEnabled=!0;return a}c(a,b);a.prototype._desiredMinLevelDelta=function(){return 0};a.Pool=new d(a);return a}(e)});