// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../geometry ../../core/Collection ../../core/compilerUtils ../../core/Error ../../core/Handles ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../geometry/support/webMercatorUtils ../../support/actions/ActionBase ../../support/actions/ActionButton ../../support/actions/ActionToggle ../../views/support/layerViewUtils ./actions ../support/AnchorElementViewModel ../support/GoTo".split(" "),
function(I,J,u,e,v,w,x,y,l,z,A,q,k,f,c,B,C,D,E,F,g,G,H){var n=x.ofType({key:"type",defaultKeyValue:"button",base:C,typeMap:{button:D,toggle:E}}),m=A.getLogger("esri.widgets.Popup.PopupViewModel");return function(r){function b(a){a=r.call(this)||this;a._handles=new z;a._pendingPromises=new Set;a._zoomToLocation=null;a._fetchFeaturesController=null;a.actions=new n([g.zoomToFeature.clone()]);a.defaultPopupTemplateEnabled=!1;a.autoCloseEnabled=!1;a.autoOpenEnabled=!0;a.content=null;a.highlightEnabled=
!0;a.title=null;a.updateLocationEnabled=!1;a.view=null;a.visible=!1;a.zoomFactor=4;return a}u(b,r);b.prototype.initialize=function(){var a=this;this._handles.add([f.init(this,"autoOpenEnabled",this._autoOpenEnabledChange),this.on("view-change",this._autoClose),f.watch(this,["highlightEnabled","selectedFeature","visible","view"],this._highlightFeature),f.watch(this,"view.animation.state",function(d){a._zoomToLocation||(g.zoomToFeature.disabled="waiting-for-target"===d)}),f.watch(this,"location",function(d){var b=
a.selectedFeature;a.updateLocationEnabled&&d&&(!b||b.geometry)&&a.centerAtLocation()}),f.watch(this,"selectedFeature",function(d){if(d){var b=a.location,h=a.updateLocationEnabled,c=a.view;!h&&b||!d.geometry?h&&!d.geometry&&a.centerAtLocation().then(function(){a.location=c.center.clone()}):a.location=q.unwrap(a._getPointFromGeometry(d.geometry))}}),this.on("trigger-action",function(d){return g.triggerAction({event:d,view:a.view})})])};b.prototype.destroy=function(){this._cancelFetchingFeatures();this._handles.destroy();
this._handles=null;this._pendingPromises.clear();this.view=null};Object.defineProperty(b.prototype,"allActions",{get:function(){var a=this._get("allActions")||new n;a.removeAll();var d=this.selectedFeature&&("function"===typeof this.selectedFeature.getEffectivePopupTemplate&&this.selectedFeature.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled)||this.selectedFeature.popupTemplate),b=d&&d.actions;(d=d&&d.overwriteActions?b:b?b.concat(this.actions):this.actions)&&d.filter(Boolean).forEach(function(d){return a.add(d)});
return a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"featureCount",{get:function(){return this.features.length},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"features",{get:function(){return this._get("features")||[]},set:function(a){a=a||[];this._set("features",a);var d=this.pendingPromisesCount,b=this.selectedFeatureIndex,h=this.promiseCount&&a.length;h&&d&&-1===b?this.selectedFeatureIndex=0:h&&-1!==b||(this.selectedFeatureIndex=a.length?0:-1)},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"location",{get:function(){return this._get("location")||null},set:function(a){var d=this.get("view.spatialReference.isWebMercator");a&&a.get("spatialReference.isWGS84")&&d&&(a=B.geographicToWebMercator(a));this._set("location",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pendingPromisesCount",{get:function(){return this._pendingPromises.size},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"waitingForResult",
{get:function(){return 0<this.pendingPromisesCount&&0===this.featureCount},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"promiseCount",{get:function(){return this.promises.length},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"promises",{get:function(){return this._get("promises")||[]},set:function(a){var d=this;this._pendingPromises.clear();this.features=[];Array.isArray(a)&&a.length?(this._set("promises",a),a=a.slice(0),a.forEach(function(a){d._pendingPromises.add(a);
a.then(function(b){d._pendingPromises.has(a)&&d._updateFeatures(b);d._updatePendingPromises(a)},function(){return d._updatePendingPromises(a)})})):this._set("promises",[]);this.notifyChange("pendingPromisesCount")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedFeature",{get:function(){var a=this.selectedFeatureIndex;return-1===a?null:this.features[a]||null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedFeatureIndex",{get:function(){var a=this._get("selectedFeatureIndex");
return"number"===typeof a?a:-1},set:function(a){var d=this.featureCount;a=isNaN(a)||-1>a||!d?-1:(a+d)%d;this._set("selectedFeatureIndex",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0});b.prototype.centerAtLocation=function(){var a=this.view,d=this._getSelectedTarget();return d?this.callGoTo({target:{target:d,scale:a.scale}}):(a=new l("center-at-location:invalid-target-or-view",
"Cannot center at a location without a target and view.",{target:d,view:a}),m.error(a),k.reject(a))};b.prototype.clear=function(){this.set({promises:[],features:[],content:null,title:null,location:null})};b.prototype.open=function(a){var d=this;a=v({updateLocationEnabled:!1,promises:[],fetchFeatures:!1,visible:!1},a);var b=a.fetchFeatures;delete a.fetchFeatures;b=b?this._fetchFeatures(a.location||this.location):k.resolve();this.set(a);b.then(function(){d._setVisibleWhenContentExists()})};b.prototype.triggerAction=
function(a){(a=this.allActions.getItemAt(a))&&this.emit("trigger-action",{action:a})};b.prototype.next=function(){this.selectedFeatureIndex+=1;return this};b.prototype.previous=function(){--this.selectedFeatureIndex;return this};b.prototype.zoomToLocation=function(){var a=this,b=this.location,c=this.selectedFeature,h=this.view,e=this.zoomFactor,f=this._getSelectedTarget();if(!f)return b=new l("zoom-to:invalid-target-or-view","Cannot zoom to location without a target and view.",{target:f,view:h}),
m.error(b),k.reject(b);var h=h.scale/e,p=this.get("selectedFeature.geometry")||b,t=p&&"point"===p.type&&this._isScreenSize(c);g.zoomToFeature.active=!0;g.zoomToFeature.disabled=!0;return this._zoomToLocation=b=this.callGoTo({target:{target:f,scale:t?h:void 0}}).then(function(){t&&(a.location=p);g.zoomToFeature.active=!1;g.zoomToFeature.disabled=!1;a._zoomToLocation=null}).catch(function(){g.zoomToFeature.active=!1;g.zoomToFeature.disabled=!1;a._zoomToLocation=null})};b.prototype._getSelectedTarget=
function(){var a=this.selectedFeature,b=this.location,c=this.view;if(!c)return null;var c="3d"===c.type,h=this.get("selectedFeature.geometry");return c?a||b:h||b};b.prototype._fetchPopupFeatures=function(a){var b=this.view;this._cancelFetchingFeatures();if(!b||!a)return a=new l("fetch-features:invalid-screenPoint-or-view","Cannot fetch features without a screenPoint and view.",{screenPoint:a,view:b}),m.error(a),k.reject(a);var c=k.createAbortController();this._fetchFeaturesController=c;return b.fetchPopupFeatures(a,
{defaultPopupTemplateEnabled:this.defaultPopupTemplateEnabled,signal:c.signal})};b.prototype._autoOpenEnabledChange=function(){var a=this,b=this._handles,c=this.autoOpenEnabled;b.remove("auto-fetch-features");c&&(c=f.on(this,"view","click",function(b){a.view.toolViewManager.handlesClickEvent(b)||"mouse"===b.pointerType&&0!==b.button||a._fetchFeaturesAndOpen(b)}),b.add(c,"auto-fetch-features"))};b.prototype._cancelFetchingFeatures=function(){var a=this._fetchFeaturesController;a&&a.abort();this._fetchFeaturesController=
null};b.prototype._fetchFeatures=function(a){var b=this,c=this.view;if(!a||!c)return a=new l("open:invalid-location-or-view","Cannot fetch content without a location and view.",{location:a,view:c}),m.error(a),k.reject(a);a="function"===typeof c.toScreen?c.toScreen(a):null;return this._fetchPopupFeatures(a).then(function(a){b.promises=a.promises})};b.prototype._fetchFeaturesAndOpen=function(a){var b=a.mapPoint,c=this.view;this._fetchPopupFeatures(a.screenPoint).then(function(a){c.popup.open({location:a.location||
b,promises:a.promises});return a})};b.prototype._updatePendingPromises=function(a){a&&this._pendingPromises.has(a)&&(this._pendingPromises.delete(a),this.notifyChange("pendingPromisesCount"))};b.prototype._setVisibleWhenContentExists=function(){var a=this,b=this._handles,c=this.promiseCount;b.remove("pendingVisible");c?(c=f.init(this,"pendingPromisesCount",function(c){a.featureCount&&(a.set("visible",!0),b.remove("pendingVisible"));c||b.remove("pendingVisible")}),b.add(c,"pendingVisible")):this.set("visible",
!0)};b.prototype._autoClose=function(){this.autoCloseEnabled&&(this.visible=!1)};b.prototype._isScreenSize=function(a){var b=this.view;if("3d"!==b.type||!a||"esri.Graphic"!==a.declaredClass)return!0;if((b=b.getViewForGraphic(a))&&"whenGraphicBounds"in b){var c=!1;b.whenGraphicBounds(a,{useViewElevation:!0}).then(function(a){c=!a||!a.boundingBox||a.boundingBox[0]===a.boundingBox[3]&&a.boundingBox[1]===a.boundingBox[4]&&a.boundingBox[2]===a.boundingBox[5]});return c}return!0};b.prototype._getPointFromGeometry=
function(a){return q.isNone(a)?null:"point"===a.type?a:"extent"===a.type?a.center:"polygon"===a.type?a.centroid:"multipoint"===a.type||"polyline"===a.type?a.extent.center:null};b.prototype._highlightFeature=function(){var a=this;this._handles.remove("highlight");var b=this.selectedFeature,c=this.highlightEnabled,e=this.view,f=this.visible;if(b&&e&&c&&f){var g=b.layer;g&&e.when().then(function(){y.typeCast(e)().whenLayerView(g).then(function(c){if(c&&F.hasHighlight(c)){var d=g.objectIdField,e=b.attributes;
c=c.highlight(e&&e[d]||b);a._handles.add(c,"highlight")}})})}};b.prototype._updateFeatures=function(a){var b=this.features;a&&a.length&&(b.length?(a=a.filter(function(a){return-1===b.indexOf(a)}),this.features=b.concat(a)):this.features=a)};e([c.property({type:n})],b.prototype,"actions",void 0);e([c.property({dependsOn:["actions.length","selectedFeature.sourceLayer.popupTemplate.actions.length","selectedFeature.sourceLayer.popupTemplate.overwriteActions","selectedFeature.popupTemplate.actions.length",
"selectedFeature.popupTemplate.overwriteActions"],readOnly:!0})],b.prototype,"allActions",null);e([c.property({type:Boolean})],b.prototype,"defaultPopupTemplateEnabled",void 0);e([c.property()],b.prototype,"autoCloseEnabled",void 0);e([c.property()],b.prototype,"autoOpenEnabled",void 0);e([c.property()],b.prototype,"content",void 0);e([c.property({readOnly:!0,dependsOn:["features"]})],b.prototype,"featureCount",null);e([c.property()],b.prototype,"features",null);e([c.property()],b.prototype,"highlightEnabled",
void 0);e([c.property({type:w.Point})],b.prototype,"location",null);e([c.property({readOnly:!0,dependsOn:["promises"]})],b.prototype,"pendingPromisesCount",null);e([c.property({readOnly:!0,dependsOn:["featureCount","pendingPromisesCount"]})],b.prototype,"waitingForResult",null);e([c.property({readOnly:!0,dependsOn:["promises"]})],b.prototype,"promiseCount",null);e([c.property()],b.prototype,"promises",null);e([c.property({value:null,readOnly:!0,dependsOn:["features","selectedFeatureIndex","updateLocationEnabled"]})],
b.prototype,"selectedFeature",null);e([c.property({value:-1})],b.prototype,"selectedFeatureIndex",null);e([c.property({readOnly:!0,dependsOn:["view.ready"]})],b.prototype,"state",null);e([c.property()],b.prototype,"title",void 0);e([c.property()],b.prototype,"updateLocationEnabled",void 0);e([c.property()],b.prototype,"view",void 0);e([c.property()],b.prototype,"visible",void 0);e([c.property()],b.prototype,"zoomFactor",void 0);e([c.property()],b.prototype,"centerAtLocation",null);e([c.property()],
b.prototype,"clear",null);e([c.property()],b.prototype,"triggerAction",null);e([c.property()],b.prototype,"next",null);e([c.property()],b.prototype,"previous",null);e([c.property()],b.prototype,"zoomToLocation",null);return b=e([c.subclass("esri.widgets.Popup.PopupViewModel")],b)}(c.declared(G,H))});