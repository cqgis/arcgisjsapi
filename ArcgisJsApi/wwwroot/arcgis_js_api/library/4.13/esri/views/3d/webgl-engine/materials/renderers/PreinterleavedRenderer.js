// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../support/buffer/glUtil ../../lib/DefaultVertexAttributeLocations ../../lib/Util ./Instance ./utils ../../../../webgl/BufferObject ../../../../webgl/Util ../../../../webgl/VertexArrayObject".split(" "),function(m,A,v,q,w,x,p,y,l,r,t,z){m=function(){function e(a,b,h){this._material=h;this.type="PreinterleavedRenderer";this._dataByOrigin=new Map;this._highlightCount=0;this._rctx=a;this._materialRep=
b;this._glMaterials=l.acquireMaterials(this._material,this._materialRep)}e.prototype.dispose=function(){l.releaseMaterials(this._material,this._materialRep)};Object.defineProperty(e.prototype,"isEmpty",{get:function(){return 0===this._dataByOrigin.size},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"hasHighlights",{get:function(){return 0<this._highlightCount},enumerable:!0,configurable:!0});e.prototype.hasWater=function(){return!1};e.prototype.renderPriority=function(){return this._material.renderPriority};
e.prototype.modify=function(a){this.updateGeometries(a.toUpdate);this.addAndRemoveGeometries(a.toAdd,a.toRemove);this.updateHighlightCount()};e.prototype.addAndRemoveGeometries=function(a,b){var h=this,f=this._rctx,d=this._dataByOrigin;a.forEach(function(c){var a=c.data;if(a.preinterleaved)if(null==a.vertexData)p.assert(!1,"Trying to re-add preinterleaved geometry data which is no longer available.");else{var b=c.origin.id,g=c.origin.vec3,e=c.uniqueName,n=d.get(b);n||(n={origin:g,highlightCount:0,
dataByGeometry:new Map},d.set(b,n));p.setMatrixTranslation3(u,-g[0],-g[1],-g[2]);b=q.mat4f64.create();v.mat4.multiply(b,u,c.transformation);var g=l.generateRenderGeometryVisibleIndexRanges(c),m=l.generateRenderGeometryHighlightRanges(c);m&&(n.highlightCount=null);c=new y(c.name,0,a.indexCount,g,m,b,c.instanceParameters,c.idx,a.id);b=a.indexData?r.createIndex(f,35044,a.indexData):null;g=h._material.createBufferLayout();b=new z(f,x.Default3D,{geometry:w.glLayout(g)},{geometry:r.createVertex(f,35044)},
b);b.vertexBuffers.geometry.setData(a.vertexData);a.indexData=null;a.vertexData=null;n.dataByGeometry.set(e,{instance:c,vao:b})}else p.assert(!1,"Non-interleaved render geometry processed as pre-interleaved")});b.forEach(function(a){var b=a.origin.id;a=a.uniqueName;var c=d.get(b);c.dataByGeometry.get(a).vao.dispose();c.dataByGeometry.delete(a);0===c.dataByGeometry.size&&d.delete(b)})};e.prototype.updateGeometries=function(a){var b=this;a.forEach(function(a){var f=a.updateType;a=a.renderGeometry;var d=
a.uniqueName,c=b._dataByOrigin.get(a.origin.id);if(d=c&&c.dataByGeometry.get(d).instance)f&1&&(d.displayedIndexRange=l.generateRenderGeometryVisibleIndexRanges(a)),f&17&&(d.highlightedIndexRanges=l.generateRenderGeometryHighlightRanges(a),c.highlightCount=null),f&2&&console.error("Updating Preinterleaved geometry not supported"),f&4&&l.calculateTransformRelToOrigin(a,d.transformation,d.transformationNormal)})};e.prototype.updateHighlightCount=function(){var a=this;this._highlightCount=0;this._dataByOrigin.forEach(function(b){if(null==
b.highlightCount){var h=0;b.dataByGeometry.forEach(function(a){a.instance.highlightedIndexRanges&&++h});b.highlightCount=h}a._highlightCount+=b.highlightCount})};e.prototype.render=function(a,b,h,f){var d=this,c=this._rctx,k=this._glMaterials.get(b.pass),e=4===b.pass;if(!k||null!=a&&!k.beginSlot(a)||e&&0===this._highlightCount)return!1;k.bind(c,h);var g=!1;this._dataByOrigin.forEach(function(a){e&&0===a.highlightCount||(h.origin=a.origin,k.bindView(c,h),e?a.dataByGeometry.forEach(function(a){g=d.renderInstanceHighlight(k,
a,f)||g}):a.dataByGeometry.forEach(function(a){g=d.renderInstance(k,a,f)||g}))});k.release(c,h);c.bindVAO(null);return g};e.prototype.renderInstance=function(a,b,e){var f=b.instance,d=b.vao,c=f.displayedIndexRange;if(c&&0===c.length)return!1;b=this._rctx;var k=a.getProgram(),h=a.getDrawMode();t.assertCompatibleVertexAttributeLocations(d,k);b.bindVAO(d);a.bindInstance(b,f);a=d.indexBuffer&&d.indexBuffer.indexType;c?a?l.drawElementsFaceRange(b,c,f.from,h,a,e):l.drawArraysFaceRange(b,c,f.from,h,e):(c=
f.to-f.from,a?l.drawElements(b,h,a,f.from,c,e):l.drawArrays(b,h,f.from,c,e));return!0};e.prototype.renderInstanceHighlight=function(a,b,e){var f=b.instance,d=b.vao;b=f.highlightedIndexRanges;if(!b)return!1;var c=this._rctx,k=a.getProgram(),h=a.getDrawMode();t.assertCompatibleVertexAttributeLocations(d,k);c.bindVAO(d);a.bindInstance(c,f);a=d.indexBuffer&&d.indexBuffer.indexType;k=!1;for(d=0;d<b.length;d++){var g=b[d],k=g.range?g.range[0]+f.from:f.from,g=g.range?g.range[1]-g.range[0]+1:f.to-f.from;
a?l.drawElements(c,h,a,k,g,e):l.drawArrays(c,h,k,g,e);k=!0}return k};return e}();var u=q.mat4f64.create();return m});