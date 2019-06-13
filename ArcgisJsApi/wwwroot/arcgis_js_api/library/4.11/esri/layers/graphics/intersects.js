// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./contains","./utils"],function(m,a,h,l){Object.defineProperty(a,"__esModule",{value:!0});a.polygonIntersectsPoint=function(a,d,e,b){return h.polygonContainsPoint(a,d,e,b)};a.polygonIntersectsMultipoint=function(a,d,e,b,f,c){f=l.getStride(f,c);c=b.coords;b=b.lengths;for(var k=0,g=0;k<b.length;k++,g+=f)if(h.polygonContainsCoords(a,d,e,c[g],c[g+1]))return!0;return!1}});