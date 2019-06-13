// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./TerrainConst","./TilePerLayerInfo"],function(l,m,h,k){return function(){function c(b,a){this.lij=b;this._pool=a;this.layerInfo=Array(h.LayerClass.COUNT);this.parent=null}c.prototype.hasDataAvailable=function(b,a,d){return(a=this.layerInfo[d][a].tilemap)?"unavailable"!==a.getAvailability(b.lij[1],b.lij[2]):!0};c.prototype.modifyLayers=function(b,a,d){b=this.layerInfo[d];for(var c=a.length,f=Array(c),e=0;e<c;e++){var g=a[e];f[e]=-1<g?b[g]:k.TilePerLayerInfo.makeEmptyLayerInfo(d,
this._pool)}this.layerInfo[d]=f};return c}()});