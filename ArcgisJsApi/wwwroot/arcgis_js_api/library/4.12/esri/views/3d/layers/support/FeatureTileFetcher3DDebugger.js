// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../Graphic ../../../../geometry/Polygon ../../../../symbols/FillSymbol3DLayer ../../../../symbols/PointSymbol3D ../../../../symbols/PolygonSymbol3D ../../../../symbols/TextSymbol3DLayer ../../terrain/TilingScheme".split(" "),function(k,l,m,n,f,p,g,q,r){Object.defineProperty(l,"__esModule",{value:!0});var t=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],
[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];k=function(){function c(b,a,h){this.loadingGraphics=new Map;this.loadedGraphics=new Map;this.pendingGraphics=new Map;this._enabled=!0;this.tileFetcher=b;this.view=h;this.tilingScheme=new r(a);this.loadedSymbols=t.map(function(a){return new g(new f({material:{color:[a[0],a[1],a[2],.6]},outline:{color:"black",size:1}}))});this.loadingSymbols=[new g(new f({material:{color:[200,200,200,.4]},outline:{color:[30,30,30],size:1}}))];this.pendingSymbols=
[new g(new f({material:{color:[100,100,100,.4]},outline:{color:[30,30,30],size:1}}))];this.dataExtentSymbol=new g(new f({material:{color:[0,0,0,0]},outline:{color:"green",size:4}}))}c.prototype.destroy=function(){this.enabled=!1};Object.defineProperty(c.prototype,"enabled",{get:function(){return this._enabled},set:function(b){this._enabled=b;this.update()},enumerable:!0,configurable:!0});c.prototype.update=function(){var b=this;this._enabled?(this.synchronizeMaps(this.loadingGraphics,{filter:function(a){return a.isFetching},
symbols:this.loadingSymbols}),this.synchronizeMaps(this.loadedGraphics,{filter:function(a){return!a.isFetching},symbols:this.loadedSymbols}),this.synchronizeMaps(this.pendingGraphics,{filter:function(a){return!a.isFetching},symbols:this.pendingSymbols}),this.showDataExtent(this.tileFetcher.filterExtent)):(this.loadingGraphics.forEach(function(a){b.view.graphics.removeMany(a)}),this.loadingGraphics.clear(),this.loadedGraphics.forEach(function(a){b.view.graphics.removeMany(a)}),this.loadedGraphics.clear(),
this.pendingGraphics.forEach(function(a){b.view.graphics.removeMany(a)}),this.pendingGraphics.clear(),this.dataExtentGraphic&&(this.view.graphics.remove(this.dataExtentGraphic),this.dataExtentGraphic=null))};c.prototype.showDataExtent=function(b){this.dataExtentGraphic&&(this.view.graphics.remove(this.dataExtentGraphic),this.dataExtentGraphic=null);b&&(b=n.fromExtent(b),this.dataExtentGraphic=new m({geometry:b,symbol:this.dataExtentSymbol}),this.view.graphics.add(this.dataExtentGraphic))};c.prototype.synchronizeMaps=
function(b,a){var h=this,c=[];b.forEach(function(b,e){var d=h.tileFetcher.getFeatureTileById(e);d&&a.filter(d)||(h.view.graphics.removeMany(b),c.push(e))});c.forEach(function(a){return b.delete(a)});this.tileFetcher.forEachFeatureTile(function(c){if(a.filter(c)&&!b.has(c.id)){var e=c.descriptor.lij,d=e[0],f=e[1],g=e[2];h.tilingScheme.ensureMaxLod(d);var k=h.tilingScheme.getExtentGeometry(d,f,g),e=new m({geometry:k,symbol:a.symbols[d%a.symbols.length]}),d=new m({geometry:k.center,symbol:new p({verticalOffset:{screenLength:40/
.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new q({text:d+"/"+f+"/"+g,halo:{color:"white",size:1/.75},material:{color:"black"},size:16})]})}),d=[e,d];b.set(c.id,d);h.view.graphics.addMany(d)}})};return c}();l.FeatureTileFetcher3DDebugger=k;l.default=k});