// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(h,e){Object.defineProperty(e,"__esModule",{value:!0});var a=1,b=null,f=new Uint32Array([0]);e.generateDefaultIndexArray=function(c){if(1===c)return f;if(c>a||null==b){for(;c>a;)a*=2;b=new Uint32Array(a);for(var d=0;d<a;d++)b[d]=d}return new Uint32Array(b.buffer,0,c)};var g=0;e.getNewId=function(){return g++}});