// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../2d/engine/webgl/LineTess ./Bucket ./style/StyleLayer".split(" "),function(v,w,r,x,g,t,u){var l=new g.Tessellator({distanceAlongCorrection:!0});return function(q){function c(b,a,e,d){a=q.call(this,b,a)||this;a.extrudeVectorsDoubleBuffer=[g.allocExtrudeVectors(),g.allocExtrudeVectors()];a.firstExtrudeVectors=g.allocExtrudeVectors();a.recycledTriangleBridge=g.allocTriangles(20);a.recycledTrianglePie=g.allocTriangles(20);
if(b.hasDataDrivenLine!==e.isDataDriven())throw Error("incompatible line buffer");a._lineVertexBuffer=e;a._lineIndexBuffer=d;return a}r(c,q);Object.defineProperty(c.prototype,"lineIndexStart",{get:function(){return this._lineIndexStart},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"lineIndexCount",{get:function(){return this._lineIndexCount},enumerable:!0,configurable:!0});c.prototype.assignBufferInfo=function(b){b._lineIndexStart=this._lineIndexStart;b._lineIndexCount=this._lineIndexCount};
c.prototype.processFeatures=function(b,a){this._lineIndexStart=this._lineIndexBuffer.index;this._lineIndexCount=0;a=this.layer;var e=this.zoom,d=a.hasDataDrivenLine;b&&b.setExtent(this.layerExtent);for(var h=a.getPaintValue("line-pattern",e),f=[1,1,1,1],m=1,k=1,g=0,n=this._features;g<n.length;g++){var c=n[g],l=new u.LineLayout(a,e,c);!h&&a.hasDataDrivenColor&&(f=a.getPaintValue("line-color",e,c));a.hasDataDrivenOpacity&&(m=a.getPaintValue("line-opacity",e,c));a.hasDataDrivenWidth&&(k=a.getPaintValue("line-width",
e,c));var p=void 0;if(d&&(p={color:f,opacity:m,size:Math.max(Math.min(k,256),0)},0>=p.size||0>=p.opacity||0>=p.color[3]))continue;c=c.getGeometry(b);this._processFeature(l,c,p)}};c.prototype._processFeature=function(b,a,e){if(a)for(var d=a.length,h=0;h<d;h++)this._processGeometry(a[h],b,e)};c.prototype._processGeometry=function(b,a,e){if(!(2>b.length)){for(var d=b[0],h=b[b.length-1],f=h.x-d.x,h=h.y-d.y,d=1E-6>f*f+h*h,m=b[0],k=1;k<b.length;)f=b[k].x-m.x,h=b[k].y-m.y,1E-6>f*f+h*h?b.splice(k,1):(m=b[k],
++k);if(!(2>b.length)){this.vertices=b;this.verticesLen=b.length;this.isClosed=d;this.cap=a.cap;this.join=a.join;this.almostParallelRads=.05;this.veryShallowRads=.1;this.miterSafeRads=g.MITER_SAFE_RADS;this.miterLimitMag=Math.min(a.miterLimit,g.SYSTEM_MAG_LIMIT);this.roundLimitRads=Math.min(a.roundLimit,.5);this.newRoundJoinsSafeRads=2.3;a=this._lineIndexBuffer.index;for(var f=0,c=void 0,h=this.verticesLen,m=0;m<h;++m){var k=b[m],n=b[(m+h-1)%h],l=d&&this._isClipEdge(n,k),n=c===this.extrudeVectorsDoubleBuffer[m%
2]?this.extrudeVectorsDoubleBuffer[(m+1)%2]:this.extrudeVectorsDoubleBuffer[m%2];m<h-1||!d||this.hasPattern?(this._computeExtrudeVectors(n,m),this._writeGPUVertices(k.x,k.y,f,n,e),!n.capCenter||d&&m===h-1||this._writeGPUPieElements(n,l),d&&0===m&&!this.hasPattern&&g.copyExtrudeVectors(this.firstExtrudeVectors,n)):g.copyExtrudeVectors(n,this.firstExtrudeVectors);c&&this._writeGPUBridgeElements(c,n,l);m<h-1&&(c=b[m+1],k=g.length([c.x-k.x,c.y-k.y]),f+=k);c=n}this._lineIndexCount+=3*(this._lineIndexBuffer.index-
a)}}};c.prototype._computeExtrudeVectors=function(b,a){var e=this.vertices,d=this.verticesLen,h=this.isClosed,f=e[a],c=[void 0,void 0],k=[void 0,void 0];if(0<a&&a<d-1){var l=e[(a+d-1)%d],n=e[(a+1)%d];g.normalize(c,[f.x-l.x,f.y-l.y]);g.normalize(k,[n.x-f.x,n.y-f.y])}else if(0===a)n=e[(a+1)%d],g.normalize(k,[n.x-f.x,n.y-f.y]),h?(e=e[d-2],g.normalize(c,[f.x-e.x,f.y-e.y])):c=k;else if(a===d-1)l=e[(a+d-1)%d],g.normalize(c,[f.x-l.x,f.y-l.y]),h?(e=e[1],g.normalize(k,[e.x-f.x,e.y-f.y])):k=c;else{console.error("Vertex index 'i' out of range.");
return}h||0!==a?h||a!==d-1?this._computeJoinExtrudeVectors(b,c,k):this._computeCapExtrudeVectors(b,c,k,g.CapPosition.END):this._computeCapExtrudeVectors(b,c,k,g.CapPosition.START)};c.prototype._computeCapExtrudeVectors=function(b,a,e,d){0===this.cap?l.buttCap(b,a,e):1===this.cap?l.roundCap(b,a,e,d,g.getNumberOfSlices(Math.PI),d===g.CapPosition.START?-1:1):2===this.cap?l.squareCap(b,a,e,d):l.buttCap(b,a,e)};c.prototype._computeJoinExtrudeVectors=function(b,a,e){var d=g.getRads(a,e);if(d>Math.PI-this.almostParallelRads)l.rectJoin(b,
a,e);else if(0===this.join&&d>=this.veryShallowRads)l.bevelJoin(b,a,e,1);else if(1===this.join&&d>=this.veryShallowRads){var c=g.getNumberOfSlices(d);d<this.newRoundJoinsSafeRads?2>c||d<this.roundLimitRads?l.bevelJoin(b,a,e,1):l.roundJoin(b,a,e,c):l.unitRoundJoin(b,a,e,c)}else d<this.almostParallelRads?l.fastMiterJoin(b,a,e):d<this.miterSafeRads?l.miterJoin(b,a,e):l.bevelJoin(b,a,e,this.miterLimitMag)};c.prototype._writeGPUVertices=function(b,a,e,d,c){for(var f=0;f<d.vectors.count;++f){var g=d.vectors.items[f].vector[0],
k=d.vectors.items[f].vector[1],h=d.vectors.items[f].texCoords[0],l=d.vectors.items[f].texCoords[1];d.vectors.items[f].base=this._lineVertexBuffer.index;this._lineVertexBuffer.add(b,a,g,k,h,l,e,c)}};c.prototype._writeGPUBridgeElements=function(b,a,c){l.bridge(this.recycledTriangleBridge,b,a);if(!c)for(b=0;b<this.recycledTriangleBridge.count;++b)a=this.recycledTriangleBridge.items[b],this._lineIndexBuffer.add(a.v1.base,a.v2.base,a.v3.base)};c.prototype._writeGPUPieElements=function(b,a){l.pie(this.recycledTrianglePie,
b);if(!a)for(b=0;b<this.recycledTrianglePie.count;++b)a=this.recycledTrianglePie.items[b],this._lineIndexBuffer.add(a.v1.base,a.v2.base,a.v3.base)};c.prototype._isClipEdge=function(b,a){return b.x===a.x?-64>=b.x||4160<=b.x:b.y===a.y?-64>=b.y||4160<=b.y:!1};return c}(t)});