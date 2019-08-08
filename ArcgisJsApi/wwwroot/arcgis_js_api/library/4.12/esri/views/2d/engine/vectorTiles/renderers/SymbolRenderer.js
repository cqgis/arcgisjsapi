// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","./IconRenderer","./SDFRenderer"],function(r,t,d,e){return function(){function a(c){this._iconRenderer=new d(c);this._sdfRenderer=new e(c)}a.prototype.dispose=function(){this._iconRenderer&&(this._iconRenderer.dispose(),this._iconRenderer=null);this._sdfRenderer&&(this._sdfRenderer.dispose(),this._sdfRenderer=null)};a.prototype.render=function(c,b,a,f,g,h,k,l,d,e,m,n,q,p){if(!b.hasData())return 0;0<b.markerPerPageElementsMap.size&&this._iconRenderer.render(c,b,a,f,g,h,
k,l,d,m,n,p);0<b.glyphPerPageElementsMap.size&&this._sdfRenderer.render(c,b,a,f,g,h,k,l,e,m,n,q,p);return b.triangleCount()};return a}()});