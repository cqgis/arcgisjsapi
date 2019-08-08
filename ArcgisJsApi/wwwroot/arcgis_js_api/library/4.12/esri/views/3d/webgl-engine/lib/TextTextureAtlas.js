// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/iteratorUtils ../../../../core/mathUtils ../../../../core/accessorSupport/decorators ./ModelContentType ./Texture ../../../webgl/Texture".split(" "),function(h,f,v,m,w,q,x,k,r,y,z){Object.defineProperty(f,"__esModule",{value:!0});h=function(h){function b(a){a=h.call(this)||this;a.dirty=!1;a.needsClear=!1;a.elementsToAdd=new Map;a.elementsToRemove=
new Map;a.elementsToRender=new Map;a.elements=new Map;a.stageObjects=new Map;return a}v(b,h);f=b;b.prototype.initialize=function(){this.id=y.idGen.gen(this.idHint);this.stage=this.view._stage;this.scheduler=this.view.resourceController.scheduler;this.canvas=this.create2DCanvas();this.ctx=this.canvas.getContext("2d");this.stage.add(r.TEXTURE,this);var a=this.computeAtlasResolution(this.view.width,this.view.height);this.createAtlasRegion(a);this.update2DCanvasSize();this.resetAtlasCursor()};b.prototype.setUnloadFunc=
function(a){this.unloadFunc=a};b.prototype.unload=function(){null!=this.unloadFunc&&(this.unloadFunc(this.id),this.unloadFunc=null)};b.prototype.deferredLoading=function(){return!1};b.prototype.getWidth=function(){return this.atlas.size.width};b.prototype.getHeight=function(){return this.atlas.size.height};b.prototype.initializeThroughRender=function(a,c){var d=this;c.wrapMode=33071;c.samplingMode=9987;c.flipped=!0;c.preMultiplyAlpha=!0;c.hasMipmap=!0;this.glTexture=new z(a,c,this.canvas);this.frameWorker=
this.scheduler.registerTask(12,function(a){return d.run(d.makeRunContext(a))},function(){return d.dirty});return this.glTexture};b.prototype.dispose=function(){this.elementsToRender=this.elementsToRemove=this.elementsToAdd=this.elements=null;this.frameWorker&&(this.frameWorker.remove(),this.frameWorker=null);this.glTexture&&(this.glTexture=null,this.stage.remove(r.TEXTURE,this.id));this.canvas.width=0;this.canvas.height=0;this.ctx=this.canvas=null};b.prototype.create2DCanvas=function(){var a=document.createElement("canvas");
a.setAttribute("id","canvas2d");a.setAttribute("style","display:none");a.setAttribute("width",(512).toString());a.setAttribute("height",(512).toString());return a};b.prototype.update2DCanvasSize=function(){this.canvas.setAttribute("width",this.atlas.size.width.toString());this.canvas.setAttribute("height",this.atlas.size.height.toString())};b.prototype.createAtlasRegion=function(a){void 0===a&&(a=512);this.atlas={size:{width:a,height:a},cursor:{x:0,y:0},lineHeight:0}};b.prototype.computeAtlasResolution=
function(a,c){a=Math.max(a,c);a=x.nextHighestPowerOfTwo(a+256);return a=Math.min(a,4096)};b.prototype.resizeAtlas=function(a,c){c=c||a;var d=this.atlas;d.size.width=a;d.size.height=c;this.glTexture&&this.glTexture.resize(a,c);this.update2DCanvasSize()};b.prototype.resetAtlasCursor=function(){var a=this.atlas;a.cursor.x=l;a.cursor.y=l+t;a.lineHeight=0;this.needsClear=!0};b.prototype.getAtlasUsage=function(){var a=this.atlas;return(a.cursor.x+a.cursor.y*a.size.width)/(a.size.width*a.size.height)};b.prototype.getExpectedAtlasUsage=
function(){var a=this.elementsToRemove.size,c=this.elementsToAdd.size,d=this.elements.size;return this.getAtlasUsage()/d*(d+c-a)};b.prototype.addAtlasElement=function(a,c,d,b){var e=this.atlas,g=a.textRenderer,u=g.renderedWidth,f=g.renderedHeight,h=g.displayWidth,g=g.displayHeight;a.placement.offset.x=e.cursor.x;a.placement.offset.y=e.cursor.y;a.placement.size.width=u;a.placement.size.height=f;a.placement.size.displayWidth=h;a.placement.size.displayHeight=g;a.placement.uvMinMax=[a.placement.offset.x/
e.size.width,1-(a.placement.offset.y+f)/e.size.height,(a.placement.offset.x+u)/e.size.width,1-a.placement.offset.y/e.size.height];e.cursor.x+=d;e.lineHeight=Math.max(e.lineHeight,b);this.elements.set(c,a)};b.prototype.removeAtlasElement=function(a){if(a&&this.elements.has(a.textId)){var c=a.placement.offset,d=a.placement.size;this.ctx.clearRect(c.x,c.y,d.width,d.height);this.elements.delete(a.textId)}};b.prototype.ensureStageObjects=function(a){var c=this.stageObjects.get(a);c||(c=new Set,this.stageObjects.set(a,
c));return c};b.prototype.addStageObject=function(a,c){this.ensureStageObjects(a).add(c)};b.prototype.removeStageObject=function(a,c){(a=this.stageObjects.get(a))&&a.delete(c)&&(c.geometries[0].data.vertexAttributes.size.data=new Float32Array([0,0]),c.geometryVertexAttrsUpdated(0))};b.prototype.processAdditionRequest=function(a,c){var d=this.atlas,b=a.textId,e=a.textRenderer.renderedWidth+l,n=a.textRenderer.renderedHeight+l+t;c=c.repackingEnabled;if(d.cursor.x+e<d.size.width&&d.cursor.y+n<d.size.height)this.addAtlasElement(a,
b,e,n),this.elementsToRender.set(b,a),this.elementsToAdd.delete(b);else if(d.cursor.y+n+d.lineHeight<d.size.height)d.cursor.x=l,d.cursor.y+=d.lineHeight,d.lineHeight=0,this.addAtlasElement(a,b,e,n),this.elementsToRender.set(b,a),this.elementsToAdd.delete(b);else{a=this.getExpectedAtlasUsage();(b=.85<a&&4096>d.size.width)&&this.resizeAtlas(2*d.size.width,2*d.size.height);if(!c||!b&&.95<a&&4096===d.size.width)return this.processRemovals(),0;this.repack();return 1}return 0};b.prototype.processRemovals=
function(){var a=this;this.elementsToRemove.forEach(function(c,d){var b=a.stageObjects.get(d);b&&0!==b.size||a.removeAtlasElement(c);b&&0===b.size&&a.stageObjects.delete(d)});this.elementsToRemove.clear()};b.prototype.repack=function(){var a=this;this.processRemovals();this.elements.forEach(function(c,b){c.rendered=!1;a.elementsToAdd.set(b,c)});this.elements.clear();this.resetAtlasCursor();this.elementsToRender.clear()};b.prototype.processRenderingRequest=function(a){this.ctx.clearRect(a.placement.offset.x,
a.placement.offset.y,a.placement.size.width,a.placement.size.height);a.textRenderer.render(this.ctx,a.placement.offset.x,a.placement.offset.y);var c=this.stageObjects.get(a.textId);c&&c.forEach(function(c){c.geometries[0].data.vertexAttributes.uv0.data=new Float32Array(a.placement.uvMinMax);c.geometries[0].data.vertexAttributes.size.data=new Float32Array([a.placement.size.displayWidth,a.placement.size.displayHeight]);c.geometryVertexAttrsUpdated(0)});a.rendered=!0};b.prototype.run=function(a){var c=
this;if(this.glTexture){var b=a.budget,g=!1;q.everyMap(this.elementsToAdd,function(b,d){return(b=c.elements.get(d))&&b.rendered?((b=c.stageObjects.get(d))&&b.forEach(function(a){var b=a.geometries[0].data.vertexAttributes,e=c.elements.get(d);b.uv0.data=new Float32Array(e.placement.uvMinMax);b.size.data=new Float32Array([e.placement.size.displayWidth,e.placement.size.displayHeight]);a.geometryVertexAttrsUpdated(0)}),c.elementsToAdd.delete(d),!0):1===c.processAdditionRequest(c.elementsToAdd.get(d),
a)?(g=!0,!1):!0});if(g)a.budget=null,a.repackingEnabled=!1,this.run(a);else{var e=!1;0<this.elementsToRender.size&&this.needsClear&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.needsClear=!1);q.everyMap(this.elementsToRender,function(a,d){c.processRenderingRequest(a);c.elementsToRender.delete(d);e=!0;return b&&(b.madeProgress(),b.done)?!1:!0});e&&this.glTexture.setData(this.canvas);this.dirty=0<this.elementsToRender.size;this.dirty||(f.test.orderedRepackingEnabled&&this.repackOrdered(),
this.notifyChange("updating"))}}};b.prototype.makeRunContext=function(a){void 0===a&&(a=null);p.budget=a;p.repackingEnabled=!0;return p};b.prototype.addTextTexture=function(a,b){var c=a.key;this.elementsToAdd.has(c)||this.elementsToAdd.set(c,{textId:c,placement:{offset:{x:0,y:0},size:{width:0,height:0,displayWidth:0,displayHeight:0},uvMinMax:[]},textRenderer:a,rendered:!1});this.addStageObject(c,b);this.elementsToRemove.delete(c);this.setDirty()};b.prototype.removeTextTexture=function(a,b){a=a.key;
this.elementsToRemove.set(a,this.elements.get(a));this.removeStageObject(a,b)};Object.defineProperty(b.prototype,"textureId",{get:function(){return this.id},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isDirty",{get:function(){return this.dirty},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updating",{get:function(){return this.isDirty},enumerable:!0,configurable:!0});b.prototype.setDirty=function(){this.dirty||(this.dirty=!0,this.notifyChange("updating"))};
Object.defineProperty(b.prototype,"test",{get:function(){return{elements:this.elements,stageObjects:this.stageObjects,elementsToRemove:this.elementsToRemove,atlas:this.atlas,resizeAtlas:this.resizeAtlas.bind(this)}},enumerable:!0,configurable:!0});b.prototype.repackOrdered=function(){if(0!==this.elements.size){var a=[];this.elements.forEach(function(b,c){return a.push({element:b,key:c})});for(var b=!0,d=0;d<a.length-1;d++)if(0<a[d].key.localeCompare(a[d+1].key)){b=!1;break}if(!b){a.sort(function(a,
b){return a.key.localeCompare(b.key)});this.elements.clear();for(b=0;b<a.length;b++)d=a[b],this.elements.set(d.key,d.element);this.repack();this.setDirty()}}};var f;b.test={orderedRepackingEnabled:!1};m([k.property({constructOnly:!0})],b.prototype,"idHint",void 0);m([k.property({constructOnly:!0})],b.prototype,"view",void 0);m([k.property({type:Boolean,readOnly:!0})],b.prototype,"updating",null);return b=f=m([k.subclass("esri.views.3d.webgl-engine.lib.TextTextureAtlas")],b)}(k.declared(w));f.TextTextureAtlas=
h;var l=2,t=2,p={budget:null,repackingEnabled:!0};f.default=h});