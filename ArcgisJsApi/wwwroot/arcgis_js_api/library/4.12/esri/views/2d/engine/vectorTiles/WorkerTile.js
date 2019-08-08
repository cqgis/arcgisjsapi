// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/asyncUtils ../../../../core/executeAsync ../../../../core/maybe ../../../../core/ObjectPool ../../../../core/promiseUtils ./BackgroundBucket ./CircleBucket ./FillBucket ./GeometryUtils ./IndexMemoryBuffer ./LineBucket ./Placement ./SymbolBucket ./TileParser ./VertexMemoryBuffer ../../tiling/enums".split(" "),function(R,S,D,E,F,G,H,I,J,K,L,M,n,g,N,O,P,Q,f,l){return function(){function b(){this.rotation=
0;this.status=l.TileStatus.INITIALIZED;this._symbolBuckets=[];this.placementEngine=new O.PlacementEngine;this.fillVertexBuffer=new f.FillVertexBuffer(!1);this.fillDDVertexBuffer=new f.FillVertexBuffer(!0);this.fillIndexBuffer=new g.TriangleIndexBuffer;this.outlineVertexBuffer=new f.OutlineVertexBuffer(!1);this.outlineDDVertexBuffer=new f.OutlineVertexBuffer(!0);this.outlineIndexBuffer=new g.TriangleIndexBuffer;this.lineVertexBuffer=new f.LineVertexBuffer(!1);this.lineDDVertexBuffer=new f.LineVertexBuffer(!0);
this.lineIndexBuffer=new g.TriangleIndexBuffer;this.iconVertexBuffer=new f.SymbolVertexBuffer(!1);this.iconDDVertexBuffer=new f.SymbolVertexBuffer(!0);this.iconIndexBuffer=new g.TriangleIndexBuffer;this.textVertexBuffer=new f.SymbolVertexBuffer(!1);this.textDDVertexBuffer=new f.SymbolVertexBuffer(!0);this.textIndexBuffer=new g.TriangleIndexBuffer;this.circleVertexBuffer=new f.CircleVertexBuffer;this.circleIndexBuffer=new g.TriangleIndexBuffer}b.prototype.initialize=function(b,h,a,e){void 0===e&&(e=
0);this.tileKey=b;this.refKeys=h;this._workerTileHandler=a;this.rotation=e;this.placementEngine.setAngle(n.C_DEG_TO_RAD*e)};b.prototype.release=function(){this.tileKey="";this.refKeys=null;this.status=l.TileStatus.INITIALIZED;this.rotation=0;this.resetData();this._workerTileHandler=null};b.prototype.resetData=function(){this.fillVertexBuffer.reset();this.fillDDVertexBuffer.reset();this.fillIndexBuffer.reset();this.outlineVertexBuffer.reset();this.outlineDDVertexBuffer.reset();this.outlineIndexBuffer.reset();
this.lineVertexBuffer.reset();this.lineDDVertexBuffer.reset();this.lineIndexBuffer.reset();this.iconVertexBuffer.reset();this.iconDDVertexBuffer.reset();this.iconIndexBuffer.reset();this.textVertexBuffer.reset();this.textDDVertexBuffer.reset();this.textIndexBuffer.reset();this.circleVertexBuffer.reset();this.circleIndexBuffer.reset();this.placementEngine.reset();this._symbolBuckets.length=0};b.prototype.reparse=function(b){this.resetData();return this.setDataAndParse(this._data,b)};b.prototype.setDataAndParse=
function(b,h){var a=this,e=h&&h.signal;if(H.isSome(e)){var f=function(){e.removeEventListener("abort",f);a.status=l.TileStatus.INVALID};e.addEventListener("abort",f)}this._data=b;return F.safeCast(this._parse(b,h)).then(function(b){a.status=l.TileStatus.READY;for(var f=new Uint32Array([1,a.fillVertexBuffer.sizeInBytes,2,a.fillDDVertexBuffer.sizeInBytes,3,a.fillIndexBuffer.sizeInBytes,4,a.outlineVertexBuffer.sizeInBytes,5,a.outlineDDVertexBuffer.sizeInBytes,6,a.outlineIndexBuffer.sizeInBytes,7,a.lineVertexBuffer.sizeInBytes,
8,a.lineDDVertexBuffer.sizeInBytes,9,a.lineIndexBuffer.sizeInBytes,10,a.iconVertexBuffer.sizeInBytes,11,a.iconDDVertexBuffer.sizeInBytes,12,a.iconIndexBuffer.sizeInBytes,13,a.textVertexBuffer.sizeInBytes,14,a.textDDVertexBuffer.sizeInBytes,15,a.textIndexBuffer.sizeInBytes,16,a.circleVertexBuffer.sizeInBytes,17,a.circleIndexBuffer.sizeInBytes]),d=[],h=b.length,e=0;e<h;e++){var c=b[e];if(c instanceof M)d.push(c.layerIndex),d.push(1),d.push(c.fillIndexStart),d.push(c.fillIndexCount),d.push(c.outlineIndexStart),
d.push(c.outlineIndexCount);else if(c instanceof N)d.push(c.layerIndex),d.push(2),d.push(c.lineIndexStart),d.push(c.lineIndexCount);else if(c instanceof P){d.push(c.layerIndex);d.push(3);d.push(c.sdfMarker?1:0);var m=c.markerPageMap;d.push(m.size);m.forEach(function(a,c){d.push(c);d.push(a[0]);d.push(a[1])});c=c.glyphsPageMap;d.push(c.size);c.forEach(function(a,c){d.push(c);d.push(a[0]);d.push(a[1])})}else c instanceof L?(d.push(c.layerIndex),d.push(4),d.push(c.circleIndexStart),d.push(c.circleIndexCount)):
c instanceof K&&(d.push(c.layerIndex),d.push(0))}b=new Uint32Array(d);var h=a.fillVertexBuffer.toBuffer(),e=a.fillDDVertexBuffer.toBuffer(),c=a.fillIndexBuffer.toBuffer(),m=a.outlineVertexBuffer.toBuffer(),p=a.outlineDDVertexBuffer.toBuffer(),z=a.outlineIndexBuffer.toBuffer(),w=a.lineVertexBuffer.toBuffer(),A=a.lineDDVertexBuffer.toBuffer(),k=a.lineIndexBuffer.toBuffer(),q=a.iconVertexBuffer.toBuffer(),g=a.iconDDVertexBuffer.toBuffer(),t=a.iconIndexBuffer.toBuffer(),y=a.textVertexBuffer.toBuffer(),
x=a.textDDVertexBuffer.toBuffer(),B=a.textIndexBuffer.toBuffer(),C=a.circleVertexBuffer.toBuffer(),n=a.circleIndexBuffer.toBuffer();return{result:{bufferDataInfo:f.buffer,bucketDataInfo:b.buffer,bufferData:[h,e,c,m,p,z,w,A,k,q,g,t,y,x,B,C,n]},transferList:[h,e,c,m,p,z,w,A,k,q,g,t,y,x,B,C,n,f.buffer,b.buffer]}})};b.prototype.addBucket=function(b){this._symbolBuckets.push(b)};b.prototype.updateSymbols=function(b){var h=this,a=this._symbolBuckets;if(!a||0===a.length)return J.resolve();this.rotation=
b;var e=this.placementEngine;e.reset();e.setAngle(b/256*360*n.C_DEG_TO_RAD);var f=this.iconVertexBuffer;f.reset();var g=this.iconDDVertexBuffer;g.reset();var p=this.iconIndexBuffer;p.reset();var d=this.textVertexBuffer;d.reset();var u=this.textDDVertexBuffer;u.reset();var v=this.textIndexBuffer;v.reset();var c=[],m=a.length,r=0;return G(function(){if(h.status===l.TileStatus.INVALID||h.status===l.TileStatus.INITIALIZED)return!0;if(r<m){var b=a[r++];if(b&&b.layer){var w=b.layer;if(b=b.copy(w.hasDataDrivenIcon?
g:f,p,w.hasDataDrivenText?u:d,v,e))c.push(b),b.updateSymbols()}}return r>=m}).then(function(){if(h.status===l.TileStatus.INVALID||h.status===l.TileStatus.INITIALIZED||0===f.sizeInBytes&&0===g.sizeInBytes&&0===p.sizeInBytes&&0===d.sizeInBytes&&0===u.sizeInBytes&&0===v.sizeInBytes)return{result:null,transferList:null};var a=new Uint32Array([10,f.sizeInBytes,11,g.sizeInBytes,12,p.sizeInBytes,13,d.sizeInBytes,14,u.sizeInBytes,15,v.sizeInBytes]),b=[];m=c.length;for(var e=0;e<m;e++){var k=c[e];b.push(k.layerIndex);
b.push(3);b.push(k.sdfMarker?1:0);var q=k.markerPageMap;b.push(q.size);q.forEach(function(a,c){b.push(c);b.push(a[0]);b.push(a[1])});k=k.glyphsPageMap;b.push(k.size);k.forEach(function(a,c){b.push(c);b.push(a[0]);b.push(a[1])})}var e=new Uint32Array(b),k=f.toBuffer(),q=g.toBuffer(),n=p.toBuffer(),r=d.toBuffer(),t=u.toBuffer(),x=v.toBuffer();return{result:{bufferDataInfo:a.buffer,bucketDataInfo:e.buffer,bufferData:[k,q,n,r,t,x]},transferList:[k,q,n,r,t,x,a.buffer,e.buffer]}}).catch(function(){return null})};
b.prototype.setObsolete=function(){this.status=l.TileStatus.INVALID};b.prototype.getLayers=function(){return this._workerTileHandler.getLayers()};b.prototype.getWorkerTileHandler=function(){return this._workerTileHandler};b.prototype._parse=function(b,f){return E(this,void 0,void 0,function(){var a;return D(this,function(e){if(0===Object.keys(b).length)return[2,[]];this.status=l.TileStatus.MODIFIED;a=new Q(b,this,f.client);return[2,a.parse(f)]})})};b.pool=new I(b);return b}()});