// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper @dojo/framework/shim/iterator @dojo/framework/shim/Map ../../../../core/has ../../../../core/screenUtils ../../../../core/libs/rbush/rbush ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/contains ../../../../geometry/support/jsonUtils ../../../../geometry/support/normalizeUtils ./GraphicStoreItem ./graphicsUtils".split(" "),function(A,B,x,C,D,E,F,G,q,y,H,I,v,k){function w(e,a,c,b,d){t.minX=a;t.minY=c;t.maxX=b;
t.maxY=d;return e.search(t)}Object.defineProperty(B,"__esModule",{value:!0});var t={minX:0,minY:0,maxX:0,maxY:0},u=q.create(),z=[];A=function(){function e(a,c,b,d,n,g){this._graphics=d;this._onAdd=n;this._onRemove=g;this._index=G(9,E("csp-restrictions")?function(a){return{minX:a[0],minY:a[1],maxX:a[2],maxY:a[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]);this._itemByGraphic=new D.default;this._currentLevel=-Infinity;this._tileInfoView=a;this._uidFieldName=b;if(a=a.getClosestInfoForScale(c))this._currentLevel=
a.level,this._resolution=this._tileInfoView.getTileResolution(a.level)}e.prototype.hitTest=function(a,c,b,d,n){a=I.normalizeMapX(a,this._tileInfoView.spatialReference);var g=.5*d*b;u[0]=a-g;u[1]=c-g;u[2]=a+g;u[3]=c+g;b=.5*d*(b+50);b=w(this._index,a-b,c-b,a+b,c+b);if(!b||0===b.length)return[];for(var g={x:a,y:c},m=[],f,e=0;e<b.length;e++){var h=b[e];if(h.graphic.visible)switch(H.getJsonType(h.geometry)){case "esriGeometryPoint":f=h.symbol;if(!f)continue;var l=h.geometry,p=void 0;switch(f.type){case "text":p=
k.getTextSymbolBounds(l.x,l.y,f,h.size,this._resolution,n);break;case "cim":p=k.getCIMMarkerBounds(l.x,l.y,f,this._resolution,n);break;default:p=k.getMarkerSymbolBounds(l.x,l.y,f,this._resolution,n)}y.polygonContainsPoint(p,g)&&m.push(h);break;case "esriGeometryPolyline":f=h.symbol;if(!f)continue;f=1.5*d*window.devicePixelRatio*F.pt2px(f.width);k.isPointOnPolyline(h.geometry,a,c,f)&&m.push(h);break;case "esriGeometryEnvelope":f=h.geometry;f=q.fromValues(f.xmin,f.ymin,f.xmax,f.ymax);q.intersects(f,
u)&&m.push(h);break;case "esriGeometryPolygon":y.polygonContainsPoint(h.geometry,g)&&m.push(h);break;case "esriGeometryMultipoint":if(f=h.symbol)for(var l=h.geometry.points,p=void 0,r=0;r<l.length;r++)if(p="text"===f.type?k.getTextSymbolBounds(l[r][0],l[r][1],f,h.size,this._resolution,n):k.getMarkerSymbolBounds(l[r][0],l[r][1],f,this._resolution,n),y.polygonContainsPoint(p,g)){m.push(h);break}}}m.sort(function(a,b){var c=k.graphicGeometryToNumber(a.graphic),d=k.graphicGeometryToNumber(b.graphic);
return c===d?b.zorder-a.zorder:c-d});return m.map(function(a){return a.graphic})};e.prototype.getGraphicsData=function(a,c){var b=w(this._index,a.bounds[0],a.bounds[1],a.bounds[2],a.bounds[3]);if(0===b.length||0===c.length)return[];b.sort(function(a,b){return a.zorder-b.zorder});b[0].insertAfter=-1;for(var d=1;d<b.length;d++)b[d].insertAfter=b[d-1].graphic.uid;b.sort(function(a,b){return a.graphic.uid-b.graphic.uid});c.sort(function(a,b){return a.uid-b.uid});var n=d=0,g,e=[];a={originPosition:"upperLeft",
scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]};for(var f=0;f<c.length;f++){for(var k=c[f],n=-2;d<b.length;)if(g=b[d],d++,k.uid===g.graphic.uid){n=g.insertAfter;break}if(g.geometry&&-2!==n){var h=g.getGeometryQuantized(a),l=x({},g.graphic.attributes);l[this._uidFieldName]=k.uid;e.push({centroid:v.default.getCentroidQuantized(g,a,this._scale),geometry:h,attributes:l,symbol:g.symbol,insertAfter:n})}}return e};e.prototype.getGraphicData=function(a,c){var b=this._itemByGraphic.get(c);
if(!b)return null;var d=w(this._index,a.bounds[0],a.bounds[1],a.bounds[2],a.bounds[3]);d.sort(function(a,b){return a.zorder-b.zorder});var e=d.indexOf(b),d=0===e||-1===e?-1:d[e-1].graphic.uid;a={originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]};var e=b.getGeometryQuantized(a),g=x({},b.graphic.attributes);g[this._uidFieldName]=c.uid;return{centroid:v.default.getCentroidQuantized(b,a,this._scale),geometry:e,attributes:g,symbol:b.symbol,insertAfter:d}};
e.prototype.queryTileData=function(a){var c=q.pad(a.bounds,50*a.resolution,q.create()),c=w(this._index,c[0],c[1],c[2],c[3]),b=[];this._createTileGraphics(b,c,{originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]});return b};e.prototype.has=function(a){return this._itemByGraphic.has(a)};e.prototype.getBounds=function(a){return this._itemByGraphic.has(a)?this._itemByGraphic.get(a).bounds:null};e.prototype.add=function(a,c,b){if(a)return this._onAdd(a),c=v.default.acquire(a,
c,b,this._resolution,this._scale,this._tileInfoView.spatialReference),this._itemByGraphic.set(a,c),b&&this._index.insert(c),c.bounds};e.prototype.remove=function(a){if(this._itemByGraphic.has(a)){this._onRemove(a);var c=this._itemByGraphic.get(a);this._index.remove(c);this._itemByGraphic.delete(a)}};e.prototype.updateZ=function(){for(var a=this._graphics.items,c,b=0;b<a.length;b++)if(c=a[b],c=this._itemByGraphic.get(c))c.zorder=b};e.prototype.update=function(a,c,b){var d=this._itemByGraphic.get(a),
e=q.clone(d.bounds);d.size[0]=d.size[1]=0;this._index.remove(d);d.set(a,c,b,this._resolution,this._scale,this._tileInfoView.spatialReference);b&&this._index.insert(d);return{oldBounds:e,newBounds:d.bounds}};e.prototype.updateLevel=function(a){var c=this;this._currentLevel!==a&&(this._currentLevel=a,this._resolution=this._tileInfoView.getTileResolution(a),this._scale=this._tileInfoView.getTileScale({level:a,row:0,col:0,world:0}),this._index.clear(),a=this._itemByGraphic.values(),z.length=0,C.forOf(a,
function(a){a.updateBounds(a.symbol,c._resolution,c._scale,c._tileInfoView.spatialReference);a.geometry&&z.push(a)}),this._index.load(z))};e.prototype.clear=function(){this._itemByGraphic.clear();this._index.clear()};e.prototype._createTileGraphics=function(a,c,b){var d=this._uidFieldName;c.sort(function(a,b){return a.zorder-b.zorder});for(var e,g,m,f,k=0;k<c.length;k++){m=c[k];e=m.graphic;g=m.getGeometryQuantized(b);f=0===k?-1:c[k-1].graphic.uid;var h=x({},m.graphic.attributes);h[d]=e.uid;a.push({centroid:v.default.getCentroidQuantized(m,
b,this._scale),geometry:g,attributes:h,symbol:m.symbol,insertAfter:f})}};return e}();B.default=A});