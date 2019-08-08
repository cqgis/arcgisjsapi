// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/generatorHelper ../../../Color ../../../request ../../../symbols ../../../core/Accessor ../../../core/arrayUtils ../../../core/Collection ../../../core/Handles ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/urlUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../layers/support/ExportImageParameters ../../../layers/support/fieldUtils ../../../renderers/support/jsonUtils ../../../symbols/support/gfxUtils ../../../symbols/support/symbolUtils ../../../symbols/support/utils ./colorRampUtils ./heatmapRampUtils ./relationshipRampUtils ./sizeRampUtils @dojo/framework/shim/Promise".split(" "),
function(W,na,X,Y,m,q,x,N,Z,O,aa,ba,ca,da,ea,y,r,P,t,k,fa,ga,ha,ia,Q,ja,u,ka,R,z){function A(h){return"esri.renderers.SimpleRenderer"===h.declaredClass}function B(h){return"esri.renderers.ClassBreaksRenderer"===h.declaredClass}function F(h){return"esri.renderers.UniqueValueRenderer"===h.declaredClass}function S(h){return"esri.renderers.HeatmapRenderer"===h.declaredClass}function C(h){return"esri.renderers.PointCloudClassBreaksRenderer"===h.declaredClass}function G(h){return"esri.renderers.PointCloudStretchRenderer"===
h.declaredClass}function H(h){return"esri.renderers.PointCloudUniqueValueRenderer"===h.declaredClass}var n=ea.getLogger("esri.widgets.Legend.support.ActiveLayerInfo"),T=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,w=new O.SimpleMarkerSymbol({size:6,outline:{color:[128,128,128,.5],width:.5}}),la=new O.SimpleMarkerSymbol({style:"path",path:"M10,5 L5,0 0,5 M5,0 L5,15",outline:{width:1,color:[85,85,85,1]}});return function(h){function e(a){a=h.call(this,a)||this;a._handles=new da;a._hasColorRamp=!1;a._hasOpacityRamp=
!1;a._hasSizeRamp=!1;a._legendResponse={};a._webStyleSymbolCache=new Map;a._dotDensityUrlCache=new Map;a.children=new ca;a.layer=null;a.legendElements=[];a.parent=null;a.scale=null;a.title=null;a.view=null;return a}Y(e,h);e.prototype.initialize=function(){var a=this,b=function(){return a.notifyChange("ready")};this._handles.add([t.on(this,"children","change",function(c){var d=c.removed,f=a._handles;c.added.map(function(a){var c="activeLayerInfo-ready-watcher-"+a.layer.uid;f.add(t.init(a,"ready",b),
c)});d.forEach(function(a){return f.remove(a.layer.uid)});b()})])};e.prototype.destroy=function(){this._handles.destroy();this._dotDensityUrlCache=this._webStyleSymbolCache=this._legendResponse=this._handles=null};Object.defineProperty(e.prototype,"ready",{get:function(){return null===this.layer?!0:0<this.children.length?this._isGroupActive():0<this.legendElements.length},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"isScaleDriven",{get:function(){var a=this,b=this.layer;if(null===
b)return!1;if("renderer"in b&&b.renderer){if("dot-density"===b.renderer.type)return!0;var c=b.get("renderer.valueExpression");return T.test(c)?!0:(b=b.get("renderer.visualVariables"))&&b.some(function(b){return a._isScaleDrivenSizeVariable(b)})}return!0},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"version",{get:function(){return this._get("version")+1},enumerable:!0,configurable:!0});e.prototype.buildLegendElementsForFeatureCollections=function(a){var b=this;this.legendElements=
[];a.forEach(function(a){if("esri.layers.FeatureLayer"===a.declaredClass)b._buildRendererLegendElements(a.renderer,a.title,"append");else if(a.featureSet&&a.featureSet.features.length){var c=a.layerDefinition;(c=(c=c&&c.drawingInfo)&&ha.fromJSON(c.renderer))?b._buildRendererLegendElements(c,a.name,"append"):n.warn("drawingInfo not available!")}})};e.prototype.buildLegendElementsForRenderer=function(){this._buildRendererLegendElements("renderer"in this.layer&&this.layer.renderer,null,"replace")};e.prototype.buildLegendElementsForTools=
function(){return q(this,void 0,void 0,function(){var a,b=this;return x(this,function(c){switch(c.label){case 0:a=this.layer;if("esri.layers.WMTSLayer"!==a.declaredClass)return[3,1];this._constructLegendElementsForWMTSlayer();return[3,6];case 1:if("esri.layers.WMSLayer"!==a.declaredClass)return[3,2];this._constructLegendElementsForWMSSublayers();return[3,6];case 2:return"esri.layers.MapImageLayer"!==a.declaredClass?[3,4]:[4,this._constructLegendElementsForSublayers()];case 3:return c.sent(),[3,6];
case 4:return this._handles.remove("imageryLayers-watcher"),[4,this._getLegendLayers().then(function(c){b.legendElements=[];c.forEach(function(c){if("esri.layers.ImageryLayer"===b.layer.declaredClass){var d=a.watch("renderingRule, bandIds",function(){b._legendResponse["default"]=null;b.buildLegendElementsForTools()});b._handles.add(d,"imageryLayers-watcher")}(c=b._generateSymbolTableElementForLegendLayer(c))&&c.infos.length&&b.legendElements.push(c);b.notifyChange("ready")});b.notifyChange("ready")}).catch(function(a){n.warn("Request to server for legend has failed!",
a)})];case 5:c.sent(),c.label=6;case 6:return[2]}})})};e.prototype._isGroupActive=function(){var a=this.children;return a.length?a.some(function(a){return a.ready}):!1};e.prototype._isScaleDrivenSizeVariable=function(a){if(a&&"size"!==a.type)return!1;var b=a.minSize,c=a.maxSize;return"object"===typeof b&&b?this._isScaleDrivenSizeVariable(b):"object"===typeof c&&c?this._isScaleDrivenSizeVariable(c):!!a.expression||T.test(a.valueExpression)};e.prototype._buildRendererLegendElements=function(a,b,c){var d=
this;this._getRendererLegendElements(a,b).then(function(a){"append"===c?Array.prototype.push.apply(d.legendElements,a):d.legendElements=a;d.notifyChange("ready")}).catch(function(a){n.warn("error while building legend for layer!",a)})};e.prototype._constructLegendElementsForWMTSlayer=function(){this.legendElements=[];this._handles.remove("wmts-activeLayer-watcher");var a=this.layer,b=a.activeLayer;this._handles.add(t.watch(this.layer,"activeLayer",this._constructLegendElementsForWMTSlayer.bind(this)),
"wmts-activeLayer-watcher");if(b.styleId&&b.styles){var c=null;b.styles.some(function(a){if(b.styleId===a.id)return c=a.legendUrl,!0});c&&(this.legendElements=[{type:"symbol-table",title:b.title,infos:[{src:c,opacity:a.opacity}]}])}this.notifyChange("ready")};e.prototype._constructLegendElementsForWMSSublayers=function(){this.legendElements=[];this._handles.remove("wms-sublayers-watcher");var a=this.layer,b=null;if(a.customParameters||a.customLayerParameters)b=X({},a.customParameters,a.customLayerParameters);
this._handles.add(t.watch(this.layer,"sublayers",this._constructLegendElementsForWMSSublayers.bind(this)),"wms-sublayers-watcher");this.legendElements=this._generateLegendElementsForWMSSublayers(a.sublayers,b);this.notifyChange("ready")};e.prototype._generateLegendElementsForWMSSublayers=function(a,b){var c=this,d=[];this._handles.add(a.on("change",this._constructLegendElementsForWMSSublayers.bind(this)),"wms-sublayers-watcher");a.forEach(function(a){var f=a.watch("title, visible, legendEnabled",
function(){return c._constructLegendElementsForWMSSublayers()});c._handles.add(f,"wms-sublayers-watcher");a.visible&&a.legendEnabled&&(a=c._generateSymbolTableElementForWMSSublayer(a,b))&&a.infos.length&&d.unshift(a)});return d};e.prototype._generateSymbolTableElementForWMSSublayer=function(a,b){return!a.legendUrl&&a.sublayers?(b=this._generateLegendElementsForWMSSublayers(a.sublayers,b).filter(function(a){return a}),{type:"symbol-table",title:a.title,infos:b}):this._generateSymbolTableElementForLegendUrl(a,
b)};e.prototype._generateSymbolTableElementForLegendUrl=function(a,b){var c=a.legendUrl;if(c){var d={type:"symbol-table",title:a.title||a.name||a.id&&a.id+"",infos:[]};b&&(c+="?"+P.objectToQuery(b));d.infos.push({src:c,opacity:a.layer&&a.layer.opacity});return d}};e.prototype._getLegendLayers=function(a){var b=this,c=(a=a&&a.hasDynamicLayers?a.dynamicLayers:null)||"default",d=this._legendResponse&&this._legendResponse[c];return d?r.resolve(d):this._legendRequest(a).then(function(a){a=a.layers;return b._legendResponse[c]=
a})};e.prototype._legendRequest=function(a){var b=this.layer;a={f:"json",dynamicLayers:a};"esri.layers.ImageryLayer"===b.declaredClass&&("renderingRule"in b&&b.renderingRule&&(a.renderingRule=JSON.stringify(b.renderingRule.toJSON())),"bandIds"in b&&b.bandIds&&(a.bandIds=b.bandIds.join()));var c=b.url.replace(/(\/)+$/,"");"version"in b&&10.01<=b.version?(b=c.indexOf("?"),c=-1<b?c.substring(0,b)+"/legend"+c.substring(b):c+"/legend"):(b=c.toLowerCase().indexOf("/rest/"),c=c.substring(0,b)+c.substring(b+
5,c.length),c="https://utility.arcgis.com/sharing/tools/legend?soapUrl\x3d"+encodeURI(c)+"\x26returnbytes\x3dtrue");return Z(c,{query:a}).then(function(a){return a.data})};e.prototype._constructLegendElementsForSublayers=function(){var a=this;this.legendElements=[];this._handles.remove("sublayers-watcher");var b=this.layer,c=new fa.ExportImageParameters({layer:b});return this._getLegendLayers(c).then(function(c){var d={};c.forEach(function(a){d[a.layerId]=a});a._handles.add(t.watch(b,"sublayers",
a._constructLegendElementsForSublayers.bind(a)),"sublayers-watcher");a.legendElements=a._generateLegendElementsForSublayers(b.sublayers,d,b.opacity);a.notifyChange("ready")}).catch(function(a){n.warn("Request to server for legend has failed!",a)}).then(function(){return c.destroy()})};e.prototype._generateLegendElementsForSublayers=function(a,b,c){var d=this,f=[];this._handles.add(a.on("change",this._constructLegendElementsForSublayers.bind(this)),"sublayers-watcher");a.forEach(function(a){var g=
a.watch("renderer, opacity, title, visible",function(){return d._constructLegendElementsForSublayers()});d._handles.add(g,"sublayers-watcher");a.visible&&a.legendEnabled&&(g=a&&null!=a.opacity?a.opacity:null,(a=d._generateSymbolTableElementForSublayer(a,b,null!=g?g*c:c))&&a.infos.length&&f.unshift(a))});return f};e.prototype._generateSymbolTableElementForSublayer=function(a,b,c){var d=b[a.id];return!d&&a.sublayers?(b=this._generateLegendElementsForSublayers(a.sublayers,b,c).filter(function(a){return a}),
{type:"symbol-table",title:a.title,infos:b}):this._generateSymbolTableElementForLegendLayer(d,a,c)};e.prototype._generateSymbolTableElementForLegendLayer=function(a,b,c){var d=this;if(a){var f=b&&b.renderer,g=b&&b.title||a.layerName;f&&(f=b&&b.title||this._getRendererTitle(f,b))&&(g&&(f.title=g),g=f);g={type:"symbol-table",title:g,infos:[]};a.legendType&&(g.legendType=a.legendType);a.legend&&this._isLegendLayerInScale(a,b)&&(b=b?this._sanitizeLegendForSublayer(a.legend.slice(),b):a.legend,g.infos=
b.map(function(b){var f=b.url;if(b.imageData&&0<b.imageData.length)f="data:image/png;base64,"+b.imageData;else if(0!==f.indexOf("http"))f=P.addTokenParameter(d.layer.url+"/"+a.layerId+"/images/"+f);else return null;return{label:b.label,src:f,opacity:c,width:b.width,height:b.height}}).filter(function(a){return!!a}));return g.infos.length?g:null}};e.prototype._isLegendLayerInScale=function(a,b){b=b||this.layer;var c=null,d=null,f=!0;!b.minScale&&0!==b.minScale||!b.maxScale&&0!==b.maxScale?(0===a.minScale&&
b.tileInfo&&(c=b.tileInfo.lods[0].scale),0===a.maxScale&&b.tileInfo&&(d=b.tileInfo.lods[b.tileInfo.lods.length-1].scale)):(c=Math.min(b.minScale,a.minScale)||b.minScale||a.minScale,d=Math.max(b.maxScale,a.maxScale));if(0<c&&c<this.scale||d>this.scale)f=!1;return f};e.prototype._sanitizeLegendForSublayer=function(a,b){if("version"in this.layer&&10.1>this.layer.version||0===a.length)return a;b=b.renderer;var c=null,d=null;a.some(function(a){return a.values})&&a.some(function(a,b){a.values||(c=b,d=a,
d.label||(d.label="others"));return null!=d});b?"unique-value"===b.type?d&&(a.splice(c,1),a.push(d)):"class-breaks"===b.type&&(d&&a.splice(c,1),a.reverse(),d&&a.push(d)):d&&(a.splice(c,1),a.push(d));return a};e.prototype._getRendererLegendElements=function(a,b){return q(this,void 0,void 0,function(){return x(this,function(c){return A(a)||B(a)||F(a)||S(a)||C(a)||G(a)||H(a)||"esri.renderers.DotDensityRenderer"===a.declaredClass?C(a)||G(a)||H(a)||"esri.renderers.PointCloudRGBRenderer"===a.declaredClass?
[2,this._constructPointCloudRendererLegendElements(a,b)]:"dot-density"===a.type?[2,this._constructDotDensityRendererLegendElements(a)]:[2,this._constructRendererLegendElements(a,b)]:(n.warn("Renderer not supported!"),[2,[]])})})};e.prototype._getPointCloudRendererTitle=function(a){return a.legendOptions&&a.legendOptions.title||a.field};e.prototype._constructPointCloudRendererLegendElements=function(a,b){var c=this,d=[],f=null,g=null;if(C(a))f={type:"symbol-table",title:b||this._getPointCloudRendererTitle(a),
infos:[]},a.colorClassBreakInfos.forEach(function(a){f.infos.unshift({label:a.label||a.minValue+" - "+a.maxValue,value:[a.minValue,a.maxValue],symbol:c._getAppliedCloneSymbol(w,a.color)})});else if(G(a)){var g=a.stops,e=null;if(g.length&&(1===g.length&&(e=g[0].color),!e)){var l=g[0].value,p=g[g.length-1].value;null!=l&&null!=p&&(e=u.getColorFromPointCloudStops(l+(p-l)/2,g))}f={type:"symbol-table",title:null,infos:[{label:null,value:null,symbol:this._getAppliedCloneSymbol(w,e||w.color)}]};g={type:"color-ramp",
title:b||this._getPointCloudRendererTitle(a),borderColor:ia.getStroke(w).color,overlayColor:u.getRampOverlayColor(this.layer.opacity),infos:u.getRampStopsForPointCloud(a.stops)}}else H(a)&&(f={type:"symbol-table",title:b||this._getPointCloudRendererTitle(a),infos:[]},a.colorUniqueValueInfos.forEach(function(a){f.infos.push({label:a.label||a.values.join(", "),value:a.values.join(", "),symbol:c._getAppliedCloneSymbol(w,a.color)})}));f&&f.infos.length&&d.push(f);g&&g.infos.length&&d.push(g);a=d.reduce(function(a,
b){return a.concat(b.infos)},[]).filter(function(a){return!!a.symbol}).map(function(a){return c._getSymbolPreview(a)});return r.eachAlways(a).then(function(){return d})};e.prototype._getElementInfoForDotDensity=function(a,b){var c=a.outline,c=a.dotSize+"-"+b+"-"+a.backgroundColor+"-"+(c&&JSON.stringify(c.toJSON())),d=this._dotDensityUrlCache;a=d.has(c)?d.get(c):Q.renderDotDensityPreview(a,b);d.set(c,a);return{opacity:1,src:a.src,preview:a,width:a.width,height:a.height}};e.prototype._constructDotDensityRendererLegendElements=
function(a){var b=this,c=a.calculateDotValue(this.view.scale),d={type:"symbol-table",title:{value:c&&Math.round(c),unit:a.legendOptions&&a.legendOptions.unit||""},infos:[]};a.attributes.forEach(function(c){var f=b._getElementInfoForDotDensity(a,c.color);f.label=c.label||c.valueExpressionTitle||c.field;d.infos.push(f)});return r.resolve([d])};e.prototype._constructRendererLegendElements=function(a,b){return q(this,void 0,void 0,function(){var c,d,f,e,D,l,p,h,k,m,q,u,U,I,E,J,K,n,L,t,M,w,V,ma,v,y,z,
C=this;return x(this,function(g){switch(g.label){case 0:return[4,this._loadRenderer(a)];case 1:return c=g.sent(),this._hasSizeRamp=this._hasOpacityRamp=this._hasColorRamp=!1,[4,this._getVisualVariableLegendElements(c)];case 2:d=g.sent()||[];f={type:"symbol-table",title:b||this._getRendererTitle(c),infos:[]};e=null;D=!1;if(S(c))d.push({type:"heatmap-ramp",title:b,infos:ka.getHeatmapRampStops(c)});else if(F(c)){if(p=(l=c&&c.authoringInfo)&&"relationship"===l.type){if(h=l.focus,k=l.numClasses,m=l.field1,
q=l.field2,k&&m&&q){u=this.layer;U=[m,q];I=R.getRotationAngleForFocus(h)||0;E=0;for(J=U;E<J.length;E++)K=J[E],n=K.field,L=K.normalizationField,t={field:this._getFieldAlias(n,u),normField:L&&this._getFieldAlias(L,u)},M=la.clone(),M.angle=I,f.infos.push({label:t,symbol:M}),I+=90;w=R.getRelationshipRampElement({focus:h,numClasses:k,infos:c.uniqueValueInfos});d.unshift(w)}}else V=c.field,c.uniqueValueInfos.forEach(function(a){a.symbol&&f.infos.push({label:a.label||C._getDomainName(V,a.value)||a.value,
value:a.value,symbol:a.symbol})});c.defaultSymbol&&(f.infos.push({label:c.defaultLabel||"others",symbol:c.defaultSymbol}),D=!0)}else if(B(c)){e=this._isUnclassedRenderer(c);if(ma=!e||!this._hasSizeRamp)c.classBreakInfos.forEach(function(a){a.symbol&&f.infos.unshift({label:a.label||(e?null:a.minValue+" - "+a.maxValue),value:[a.minValue,a.maxValue],symbol:a.symbol})}),e&&(f.title=null),this._updateInfosforClassedSizeRenderer(c,f.infos);c.defaultSymbol&&!e&&(f.infos.push({label:c.defaultLabel||"others",
symbol:c.defaultSymbol}),D=!0)}else A(c)&&c.symbol&&!this._hasSizeRamp&&f.infos.push({label:c.label,symbol:c.symbol});v=c.defaultSymbol;!v||D||A(c)||e&&!this._hasColorRamp&&!this._hasSizeRamp&&!this._hasOpacityRamp||d.push({type:"symbol-table",infos:[{label:c.defaultLabel||"others",symbol:v}]});f.infos.length&&d.unshift(f);y=this._getSymbolConfig("visualVariables"in c&&c.visualVariables);z=d.reduce(function(a,b){return a.concat(b.infos)},[]).filter(function(a){return!(!a||!a.symbol)}).map(function(a){return C._getSymbolPreview(a,
y)});c=null;return[4,r.eachAlways(z)];case 3:return g.sent(),[2,d]}})})};e.prototype._updateInfosforClassedSizeRenderer=function(a,b){var c=a.authoringInfo&&"class-breaks-size"===a.authoringInfo.type,d=a.classBreakInfos.some(function(a){return ja.isVolumetricSymbol(a.symbol)});if(c&&d){var f=z.REAL_WORLD_MAX_SIZE;a=a.classBreakInfos.length;var e=(f-z.REAL_WORLD_MIN_SIZE)/(1<a?a-1:a);b.forEach(function(a,b){a.size=f-e*b})}};e.prototype._getSymbolConfig=function(a){var b=!1,c=!1;if(a)for(var d=0;d<
a.length&&(!b||!c);d++){var f=a[d];"size"===f.type&&("height"===f.axis&&(b=!0),"width-and-depth"===f.axis&&(c=!0))}return b&&c?"tall":null};e.prototype._getSymbolPreview=function(a,b){return Q.renderPreviewHTML(a.symbol,{size:a.size,opacity:this.layer.opacity,symbolConfig:b,rotation:a.symbol.angle}).then(function(b){a.preview=b;return a}).catch(function(){a.preview=null;return a})};e.prototype._loadRenderer=function(a){return q(this,void 0,void 0,function(){var b,c,d,f,e=this;return x(this,function(g){switch(g.label){case 0:return b=
[],a=a.clone(),[4,this._getMedianColor(a)];case 1:c=g.sent();if(B(a)||F(a))d=a.classBreakInfos||a.uniqueValueInfos,f=d.map(function(a){return e._fetchSymbol(a.symbol,c).then(function(b){a.symbol=b}).catch(function(){a.symbol=null})}),Array.prototype.push.apply(b,f);b.push(this._fetchSymbol(a.symbol||a.defaultSymbol,a.defaultSymbol?null:c).then(function(b){e._applySymbolToRenderer(a,b,A(a))}).catch(function(){e._applySymbolToRenderer(a,null,A(a))}));return[2,r.eachAlways(b).then(function(){return a})]}})})};
e.prototype._applySymbolToRenderer=function(a,b,c){c?a.symbol=b:a.defaultSymbol=b};e.prototype._getMedianColor=function(a){return q(this,void 0,void 0,function(){var b,c,d,f,e;return x(this,function(g){switch(g.label){case 0:if(!("visualVariables"in a&&a.visualVariables))return[2,null];b=ba.find(a.visualVariables,function(a){return"color"===a.type});if(!b)return[2,null];d=c=null;if(b.stops){if(1===b.stops.length)return[2,b.stops[0].color];c=b.stops[0].value;d=b.stops[b.stops.length-1].value}f=c+(d-
c)/2;return[4,new Promise(function(a,b){W(["../../../renderers/visualVariables/support/visualVariableUtils"],a,b)})];case 1:return e=g.sent().getColor,[2,e(b,f)]}})})};e.prototype._fetchSymbol=function(a,b){var c=this;if(!a)return r.reject();if("web-style"===a.type){var d=a.portal,d=a.name+"-"+a.styleName+"-"+a.styleUrl+"-"+(d&&d.url)+"-"+(d&&d.user&&d.user.username),f=this._webStyleSymbolCache;f.has(d)||f.set(d,a.fetchSymbol());return f.get(d).then(function(a){return c._getAppliedCloneSymbol(a,b)}).catch(function(){n.warn("Fetching web-style failed!");
return r.reject()})}return r.resolve(this._getAppliedCloneSymbol(a,b))};e.prototype._getAppliedCloneSymbol=function(a,b){if(!a)return a;a=a.clone();var c=-1<a.type.indexOf("3d");b=b&&b.toRgba();c?this._applyColorTo3dSymbol(a,b):a.color&&(a.color=new N(b||a.color));return a};e.prototype._applyColorTo3dSymbol=function(a,b){b&&a.symbolLayers.forEach(function(a){a&&(a.material||(a.material={}),a.material.color=new N(b))})};e.prototype._getVisualVariableLegendElements=function(a){return q(this,void 0,
void 0,function(){var b,c,d,f,e,h,l,p,k,m,n,t=this;return x(this,function(g){switch(g.label){case 0:if(!("visualVariables"in a&&a.visualVariables))return[2,null];b=a.visualVariables;c=[];d=[];f=[];e=this.layer;h=e.opacity;b.forEach(function(a){"color"===a.type?c.push(a):"size"===a.type?d.push(a):"opacity"===a.type&&f.push(a)});l=c.concat(d,f);0===c.length&&B(a)&&a.classBreakInfos&&1===a.classBreakInfos.length&&(p=(m=a.classBreakInfos[0])&&m.symbol);0===c.length&&A(a)&&(p=a.symbol);p&&(-1<p.type.indexOf("3d")?
(n=p.symbolLayers.getItemAt(0),"water"===n.type?y.isSome(n.color)&&(k=n.color):y.isSome(n.material)&&y.isSome(n.material.color)&&(k=n.material.color)):p.url||(k=p.color),k&&(k=k.toRgba()));return[4,r.all(l.map(function(b){return q(t,void 0,void 0,function(){var c,d,f,g,l,m,n,p,q,t,r;return x(this,function(v){switch(v.label){case 0:if(b.legendOptions&&!1===b.legendOptions.showLegend)return[3,8];c=this._getRampTitle(b,e);d=u.getRampBorderColor(a);f=u.getRampOverlayColor(h);g=null;if("color"!==b.type)return[3,
2];l={type:"color-ramp",title:c,borderColor:d,overlayColor:f};return[4,u.getRampStops(a,b)];case 1:return g=(l.infos=v.sent(),l),this._hasColorRamp||(this._hasColorRamp=!(null==g.infos||!g.infos.length)),[3,7];case 2:if("size"!==b.type)return[3,5];n=(m="getField"in e&&e.getField&&e.getField(b.field))&&ga.isDateField(m);p={type:"size-ramp",title:c};q=z.getRampStops;t=[a,b];return[4,this._getMedianColor(a)];case 3:return[4,q.apply(void 0,t.concat([v.sent(),this.scale,this.view,n]))];case 4:return g=
(p.infos=v.sent(),p),this._hasSizeRamp||(this._hasSizeRamp=!(null==g.infos||!g.infos.length)),[3,7];case 5:if("opacity"!==b.type)return[3,7];r={type:"opacity-ramp",title:c,borderColor:d,overlayColor:f};return[4,u.getRampStops(a,b,k)];case 6:g=(r.infos=v.sent(),r),this._hasOpacityRamp||(this._hasOpacityRamp=!(null==g.infos||!g.infos.length)),v.label=7;case 7:return[2,g.infos&&g];case 8:return[2]}})})}))];case 1:return[2,g.sent().filter(function(a){return!!a})]}})})};e.prototype._getDomainName=function(a,
b){if(a&&"function"!==typeof a){var c=this.layer;return(c=(a=c.getField&&c.getField(a))&&c.getFieldDomain?c.getFieldDomain(a.name):null)&&c.codedValues?c.getName(b):null}return null};e.prototype._getRampTitle=function(a,b){var c=a.field,d=a.normalizationField,e=!1,g=!1,k=!1,l=null,c="function"===typeof c?null:c,d="function"===typeof d?null:d;if(null!=(a.legendOptions&&a.legendOptions.title))l=a.legendOptions.title;else if(a.valueExpressionTitle)l=a.valueExpressionTitle;else{if("renderer"in b&&b.renderer&&
"authoringInfo"in b.renderer&&b.renderer.authoringInfo&&b.renderer.authoringInfo.visualVariables)for(a=b.renderer.authoringInfo.visualVariables,l=0;l<a.length;l++){var h=a[l];if("color"===h.type){if("ratio"===h.style){e=!0;break}if("percent"===h.style){g=!0;break}if("percent-of-total"===h.style){k=!0;break}}}l={field:c&&this._getFieldAlias(c,b),normField:d&&this._getFieldAlias(d,b),ratio:e,ratioPercent:g,ratioPercentTotal:k}}return l};e.prototype._getRendererTitle=function(a,b){if(a.legendOptions&&
a.legendOptions.title)return a.legendOptions.title;if(a.valueExpressionTitle)return a.valueExpressionTitle;var c=this.layer,d=a.field,e=null,g=null;B(a)&&(e=a.normalizationField,g="percent-of-total"===a.normalizationType);d="function"===typeof d?null:d;e="function"===typeof e?null:e;a=null;if(d||e)a={field:b?d:d&&this._getFieldAlias(d,c),normField:b?e:e&&this._getFieldAlias(e,c),normByPct:g};return a};e.prototype._getFieldAlias=function(a,b){var c="popupTemplate"in b&&b.popupTemplate,c=c&&c.fieldInfos;
b="function"===typeof a?null:"getField"in b&&b.getField&&b.getField(a);var d=null;c&&c.some(function(b){if(a===b.fieldName)return d=b,!0});var c=d||b,e=null;c&&(e=d&&d.label||b&&b.alias||"name"in c&&c.name||"fieldName"in c&&c.fieldName);return e};e.prototype._isUnclassedRenderer=function(a){var b=a.visualVariables,c=!1;B(a)&&a.classBreakInfos&&1===a.classBreakInfos.length&&b&&(c=a.field?b.some(function(b){return!(!b||a.field!==b.field||(a.normalizationField||b.normalizationField)&&a.normalizationField!==
b.normalizationField)}):!!b.length);return c};m([k.property()],e.prototype,"children",void 0);m([k.property()],e.prototype,"layer",void 0);m([k.property()],e.prototype,"legendElements",void 0);m([k.property()],e.prototype,"parent",void 0);m([k.property({readOnly:!0})],e.prototype,"ready",null);m([k.property()],e.prototype,"scale",void 0);m([k.property({dependsOn:["layer.renderer?.valueExpression?","layer.renderer?.visualVariables?"],readOnly:!0})],e.prototype,"isScaleDriven",null);m([k.property()],
e.prototype,"title",void 0);m([k.property({dependsOn:["ready"],readOnly:!0,value:0})],e.prototype,"version",null);m([k.property()],e.prototype,"view",void 0);return e=m([k.subclass("esri.widgets.Legend.support.ActiveLayerInfo")],e)}(k.declared(aa))});