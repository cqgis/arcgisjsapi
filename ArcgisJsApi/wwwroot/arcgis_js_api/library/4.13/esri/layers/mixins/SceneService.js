// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../request ../../core/Error ../../core/Logger ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators ../../geometry/Extent ../../geometry/HeightModelInfo ../../geometry/SpatialReference ../support/arcgisLayerUrl ../support/commonProperties".split(" "),function(A,g,t,d,h,k,m,n,u,v,q,e,r,w,p,l,x){Object.defineProperty(g,
"__esModule",{value:!0});var y=u.getLogger("esri.layers.mixins.SceneService");g.SceneService=function(g){return function(g){function c(){var a=null!==g&&g.apply(this,arguments)||this;a.blendMode=null;a.spatialReference=null;a.fullExtent=null;a.heightModelInfo=null;a.minScale=0;a.maxScale=0;a.version={major:Number.NaN,minor:Number.NaN,versionString:""};a.copyright=null;a.sublayerTitleMode="item-title";a.title=null;a.layerId=null;return a}t(c,g);c.prototype.readSpatialReference=function(a,b){return this._readSpatialReference(b)};
c.prototype._readSpatialReference=function(a){if(null!=a.spatialReference)return p.fromJSON(a.spatialReference);a=a.store;a=(a=a.indexCRS||a.geographicCRS)&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10);return null!=a?new p(a):null};c.prototype.readFullExtent=function(a,b){a=b.store;b=this._readSpatialReference(b);return null==b||null==a||null==a.extent||!Array.isArray(a.extent)||a.extent.some(function(a){return a<z})?null:new r({xmin:a.extent[0],ymin:a.extent[1],xmax:a.extent[2],ymax:a.extent[3],
spatialReference:b})};c.prototype.readVersion=function(a,b){a=b.store;b=null!=a.version?a.version.toString():"";a={major:Number.NaN,minor:Number.NaN,versionString:b};b=b.split(".");2<=b.length&&(a.major=parseInt(b[0],10),a.minor=parseInt(b[1],10));return a};c.prototype.readTitlePortalItem=function(a,b){return"item-title"!==this.sublayerTitleMode?void 0:a};c.prototype.readTitleService=function(a,b){a=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return l.titleFromUrlAndName(this.url,
b.name);b=b.name||l.parse(this.url).title;"item-title-and-service-name"===this.sublayerTitleMode&&a&&(b=a+" - "+b);return l.cleanTitle(b)};c.prototype.readLayerId=function(a,b){return b.id};Object.defineProperty(c.prototype,"url",{set:function(a){a=l.sanitizeUrlWithLayerId(this,a,y);this._set("url",a.url);null!=a.layerId&&this._set("layerId",a.layerId)},enumerable:!0,configurable:!0});c.prototype.writeUrl=function(a,b,c,e){l.writeUrlWithLayerId(this,a,"layers",b,e)};Object.defineProperty(c.prototype,
"parsedUrl",{get:function(){var a=this._get("url");if(!a)return null;a=q.urlToObject(a);null!=this.layerId&&l.match.test(a.path)&&(a.path=a.path+"/layers/"+this.layerId);return a},enumerable:!0,configurable:!0});c.prototype._verifyRootNodeAndUpdateExtent=function(a,b){return k(this,void 0,void 0,function(){var c,e,d;return h(this,function(f){switch(f.label){case 0:if(!a)return[3,4];f.label=1;case 1:return f.trys.push([1,3,,4]),c=this._updateExtentFromRootPage,e=[a],[4,this._fetchRootPage(a,b)];case 2:return[2,
c.apply(this,e.concat([f.sent()]))];case 3:return f.sent(),[3,4];case 4:return d=this._updateExtentFromRootNode,[4,this._fetchRootNode(b)];case 5:return[2,d.apply(this,[f.sent()])]}})})};c.prototype._fetchRootPage=function(a,b){return k(this,void 0,void 0,function(){var c,e,d;return h(this,function(f){switch(f.label){case 0:if(!a)return[2,v.reject()];c=Math.floor(a.rootIndex/a.nodesPerPage);e=this.parsedUrl.path+"/nodepages/"+c;return[4,m(e,{responseType:"json",signal:b})];case 1:return d=f.sent(),
[2,d.data]}})})};c.prototype._updateExtentFromRootPage=function(a,b){if(null==b||null==b.nodes)throw new n("sceneservice:invalid-node-page","Inavlid node page.");b=b.nodes[a.rootIndex%a.nodesPerPage];if(null==b||null==b.obb||null==b.obb.center||null==b.obb.halfSize)throw new n("sceneservice:invalid-node-page","Inavlid node page.");a=b.obb.halfSize;b=b.obb.center[2];a=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);this.fullExtent.zmin=b-a;this.fullExtent.zmax=b+a};c.prototype._updateExtentFromRootNode=function(a){if(null!=
this.fullExtent&&!this.fullExtent.hasZ&&null!=a&&Array.isArray(a.mbs)&&4===a.mbs.length){var b=a.mbs[2];a=a.mbs[3];this.fullExtent.zmin=b-a;this.fullExtent.zmax=b+a}};c.prototype._fetchRootNode=function(a){return k(this,void 0,void 0,function(){var b,c,e;return h(this,function(d){switch(d.label){case 0:if(!this.rootNode)return[2];b=q.join(this.parsedUrl.path,this.rootNode);d.label=1;case 1:return d.trys.push([1,3,,4]),[4,m(b,{query:{f:"json"},responseType:"json",signal:a})];case 2:return c=d.sent(),
[2,c.data];case 3:throw e=d.sent(),new n("sceneservice:root-node-missing","Root node missing.",{error:e,url:b});case 4:return[2]}})})};c.prototype._fetchService=function(a){return k(this,void 0,void 0,function(){var b;return h(this,function(c){switch(c.label){case 0:return null==this.layerId&&/SceneServer\/*$/i.test(this.url)?[4,this._fetchFirstLayerId(a)]:[3,2];case 1:b=c.sent(),null!=b&&(this.layerId=b),c.label=2;case 2:return[2,this._fetchServiceLayer(a)]}})})};c.prototype._fetchFirstLayerId=function(a){return k(this,
void 0,void 0,function(){var b;return h(this,function(c){switch(c.label){case 0:return[4,m(this.url,{query:{f:"json"},responseType:"json",signal:a})];case 1:return b=c.sent(),b.data&&Array.isArray(b.data.layers)&&0<b.data.layers.length?[2,b.data.layers[0].id]:[2,void 0]}})})};c.prototype._fetchServiceLayer=function(a){return k(this,void 0,void 0,function(){var b,c;return h(this,function(d){switch(d.label){case 0:return[4,m(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:a})];case 1:return b=
d.sent(),b.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),c=b.data,this.read(c,{origin:"service",url:this.parsedUrl}),this._validateLayer(c),[2]}})})};c.prototype._validateLayer=function(a){};d([e.shared({id:{json:{origins:{service:{read:!1},"portal-item":{read:!1}}}}})],c.prototype,"properties",void 0);d([e.property({type:p})],c.prototype,"spatialReference",void 0);d([e.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],c.prototype,"readSpatialReference",
null);d([e.property({type:r})],c.prototype,"fullExtent",void 0);d([e.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],c.prototype,"readFullExtent",null);d([e.property({readOnly:!0,type:w})],c.prototype,"heightModelInfo",void 0);d([e.property({type:Number,json:{read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"},origins:{service:{read:{source:"minScale"},write:!1}}}})],c.prototype,"minScale",void 0);d([e.property({type:Number,
json:{read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"},origins:{service:{read:{source:"maxScale"},write:!1}}}})],c.prototype,"maxScale",void 0);d([e.property({readOnly:!0})],c.prototype,"version",void 0);d([e.reader("version",["store.version"])],c.prototype,"readVersion",null);d([e.property({type:String,json:{read:{source:"copyrightText"}}})],c.prototype,"copyright",void 0);d([e.property({type:String,json:{read:!1}})],c.prototype,"sublayerTitleMode",void 0);d([e.property({type:String})],
c.prototype,"title",void 0);d([e.reader("portal-item","title")],c.prototype,"readTitlePortalItem",null);d([e.reader("service","title",["name"])],c.prototype,"readTitleService",null);d([e.property({type:Number})],c.prototype,"layerId",void 0);d([e.reader("service","layerId",["id"])],c.prototype,"readLayerId",null);d([e.property(x.url)],c.prototype,"url",null);d([e.writer("url")],c.prototype,"writeUrl",null);d([e.property({dependsOn:["layerId"]})],c.prototype,"parsedUrl",null);d([e.property({readOnly:!0})],
c.prototype,"store",void 0);d([e.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],c.prototype,"rootNode",void 0);return c=d([e.subclass("esri.layers.mixins.SceneService")],c)}(e.declared(g))};var z=-1E38});