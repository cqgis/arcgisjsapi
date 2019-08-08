// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","./object","@dojo/framework/shim/string"],function(g,a,e,d){Object.defineProperty(a,"__esModule",{value:!0});var f=/\{([^\}]+)\}/g;a.replace=function(a,b){return a.replace(f,"object"===typeof b?function(a,c){return e.getDeepValue(c,b)}:function(a,c){return b(c)})};a.startsWith=d.startsWith;a.endsWith=d.endsWith});