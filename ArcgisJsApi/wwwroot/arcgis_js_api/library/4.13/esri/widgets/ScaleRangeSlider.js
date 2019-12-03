// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/decorateHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/assignHelper dojo/i18n!./ScaleRangeSlider/nls/ScaleRangeSlider ../intl ../core/domUtils ../core/events ../core/HandleOwner ../core/watchUtils ../core/accessorSupport/decorators ../libs/sanitizer/Sanitizer ./Slider ./Widget ./ScaleRangeSlider/scalePreviewUtils ./ScaleRangeSlider/ScaleRanges ./ScaleRangeSlider/ScaleRangeSliderViewModel ./support/Popover ./support/widget".split(" "),function(F,
G,e,v,w,g,l,x,k,y,n,f,z,A,B,r,p,C,q,d){var D=new z,t={preview:!0};return function(u){function c(b){var a=u.call(this,b)||this;a._activeMenu=null;a._activeMenuNode=null;a._activeMenuToggleNode=null;a._activeThumb=null;a._customMaxScale=-1;a._customMinScale=-1;a._focusedMenuItemIndex=-1;a._previewAutoCloseTimeoutId=null;a._previewPopover=new q({owner:a,placement:"top",anchorElement:function(){return 0===a._activeThumb?a._minThumbNode:a._maxThumbNode},renderContentFunction:a.renderScalePreview});a._maxScaleMenuPopover=
new q({owner:a,placement:"bottom-end",anchorElement:function(){return a._activeMenuToggleNode},renderContentFunction:a.renderMaxScaleMenu});a._minScaleMenuPopover=new q({owner:a,placement:"bottom-start",anchorElement:function(){return a._activeMenuToggleNode},renderContentFunction:a.renderMinScaleMenu});a._scaleMenuNode=null;a._slider=new A({thumbCreatedFunction:function(b,c,d){0===b&&(a._minThumbNode=d);1===b&&(a._maxThumbNode=d);a.own([k.on(d,"mouseenter",function(){a._activeThumb=b;a._previewPopover.open=
!0;a.scheduleRender()}),k.on(d,"mouseleave",function(){a._previewAutoCloseTimeoutId||(a._activeThumb=null,a._previewPopover.open=!1,a.scheduleRender())})])}});a.disabled=!1;a.label=g.widgetLabel;a.layer=null;a.maxScale=null;a.maxScaleLimit=null;a.minScale=null;a.minScaleLimit=null;a.region="US";a.view=null;a.viewModel=new C;a.visibleElements=t;a._handleScaleMenuToggleClick=function(b){b=b.currentTarget;var c=b.getAttribute("data-type");a.handles.remove("menu-closing-click-handle");c===a._activeMenu?
(a._setActiveMenu(null),a._activeMenuToggleNode=null):(a._setActiveMenu(c),a._activeMenuToggleNode=b,a.handles.add(k.on(document,"mousedown",function(b){b=b.target;var c=x.closest(b,".esri-scale-range-slider__scale-menu-toggle"),d=c&&c.getAttribute("data-type");c&&d===a._activeMenu||d||!a._scaleMenuNode||a._scaleMenuNode.contains(b)||(a._setActiveMenu(null),a.handles.remove("menu-closing-click-handle"),a.scheduleRender())}),"menu-closing-click-handle"))};a._afterMenuListCreate=function(b){a._activeMenuNode=
b;b.children[0].focus({preventScroll:!0})};a._handleCustomScaleEntry=function(b){a._setScaleFromMenuSelection(b);a._customMaxScale=-1;a._customMinScale=-1};a._handleCustomScaleInputBlur=function(){"max"===a._activeMenu?a._customMaxScale=-1:a._customMinScale=-1};a.handleCustomScaleInputKeyDown=function(b){var c=b.currentTarget,d=c["data-render-props"].handleCustomScaleSelect,E=a.viewModel.scaleRanges;"Enter"===b.key&&(c=D.sanitize(c.value).replace(/.*\(/,"").replace(/\).*$/,"").replace(/.*:/,"").replace(/[^0-9.\s]/g,
""),c=parseFloat(c),d(isNaN(c)?-1:E.clampScale(c)),b.preventDefault(),b.stopPropagation())};a._handleScaleMenuKeyDown=function(b){var c=k.eventKey(b);if("Escape"===c||"Tab"===c)a._setActiveMenu(null),a._activeMenuToggleNode.focus();else if("ArrowUp"===c||"ArrowDown"===c){var d=a._activeMenuNode.children,e=a._focusedMenuItemIndex,c="ArrowUp"===c?(0===e?d.length:e)-1:(e+1)%d.length;b.preventDefault();b.stopPropagation();d[c].focus();a._focusedMenuItemIndex=c}};return a}v(c,u);c.prototype.postInitialize=
function(){var b=this;this.own([n.init(this,"viewModel",function(a){return b._slider.viewModel=a?a.sliderViewModel:null}),n.init(this,"_interactive",function(a){b._slider.disabled=!a;a||b._setActiveMenu(null)}),this._slider.on("thumb-drag",function(a){b._activeThumb=a.index;b._previewPopover.open=!0;clearTimeout(b._previewAutoCloseTimeoutId);b._previewAutoCloseTimeoutId=setTimeout(function(){b._previewAutoCloseTimeoutId=null;b._activeThumb=null;b._previewPopover.open=!1;b.scheduleRender()},250)}),
n.whenTrue(this,"view.stationary",function(){return b.scheduleRender()})])};c.prototype.destroy=function(){this._previewPopover.destroy();this._previewPopover=null;this._maxScaleMenuPopover.destroy();this._maxScaleMenuPopover=null;this._minScaleMenuPopover.destroy();this._minScaleMenuPopover=null;this._slider.destroy();this._slider=null};Object.defineProperty(c.prototype,"_effectiveMaxScale",{get:function(){return 0===this.maxScale?this.maxScaleLimit:this.maxScale},enumerable:!0,configurable:!0});
Object.defineProperty(c.prototype,"_effectiveMinScale",{get:function(){return 0===this.minScale?this.minScaleLimit:this.minScale},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"_interactive",{get:function(){return"disabled"!==this.get("viewModel.state")&&!this.disabled},enumerable:!0,configurable:!0});c.prototype.castVisibleElements=function(b){return w({},t,b)};c.prototype.render=function(){var b=this._interactive,a=this._slider,c=this.label,e=this.view,f=this.viewModel,h=f.scaleRanges,
f=f.state,m=g.scaleRangeLabels[h.findScaleRangeByIndex(a.values[0]).id],h=g.scaleRangeLabels[h.findScaleRangeByIndex(a.values[1]).id];a.layout=d.isRTL()?"horizontal-reversed":"horizontal";return d.tsx("div",{"aria-label":c,class:this.classes("esri-scale-range-slider","esri-widget",b?null:"esri-disabled")},"ready"===f&&e?this.renderCurrentScaleIndicator():null,a.render(),d.tsx("div",{class:"esri-scale-range-slider__scale-menu-container",key:"scale-menu-toggles"},this.renderScaleMenuToggle("min",m),
this.renderScaleMenuToggle("max",h)))};c.prototype.renderMinScaleMenu=function(){var b=this.view,b=b?b.scale:void 0;return this.renderScaleMenu({type:"min",min:this.minScaleLimit,max:this.viewModel.scaleRanges.findScaleRange(this._effectiveMaxScale).minScale,map:b})};c.prototype.renderMaxScaleMenu=function(){var b=this.maxScaleLimit,a=this.view,a=a?a.scale:void 0;return this.renderScaleMenu({type:"max",min:this.viewModel.scaleRanges.findScaleRange(this._effectiveMinScale).maxScale,max:b,map:a})};
c.prototype.renderScalePreview=function(){var b=this._slider,a=this.region,c=this.viewModel.scaleRanges,b=0===this._activeThumb?b.values[0]:b.values[1],c=Object.keys(p.RecommendedScales).indexOf(c.findScaleRangeByIndex(b).id),a={backgroundImage:r.getScalePreviewSource(a),backgroundPosition:r.getScalePreviewSpriteBackgroundPosition(c)};return d.tsx("div",{class:"esri-scale-range-slider__scale-preview"},d.tsx("div",{class:"esri-scale-range-slider__scale-preview-thumbnail",styles:a}))};c.prototype.renderScaleMenu=
function(b){var a=this,c=b.map,e=b.type,f=p.fromScaleRange({minScale:b.min,maxScale:b.max}),h=g.featuredScaleLabels,m=p.RecommendedScales;b=Object.keys(m).filter(function(a){return f.contains(m[a])}).map(function(b){return a.renderScaleMenuItem({scaleLabel:h[b],scaleValue:m[b],valueVisible:"world"!==b,handleNamedScaleSelect:a._handleRecommendedScaleClick})});var k=this._customMaxScale,l=this._customMinScale;return d.tsx("div",{bind:this,class:"esri-scale-range-slider__scale-menu","data-type":e,id:this.id+
"__scale-menu--"+e,key:e+"-scale-menu",afterCreate:d.storeNode,"data-node-ref":"_scaleMenuNode",onkeydown:this._handleScaleMenuKeyDown},d.tsx("div",{class:"esri-scale-range-slider__scale-menu-scroller"},d.tsx("ul",{class:"esri-scale-range-slider__scale-menu-list",afterCreate:this._afterMenuListCreate},this.renderScaleMenuItem({scaleValue:"max"===e?k:l,scaleLabel:g.featuredScaleLabels.custom,valueVisible:!1,handleNamedScaleSelect:this._handleScaleSelection,handleCustomScaleSelect:this._handleCustomScaleEntry}),
null!=c?this.renderScaleMenuItem({scaleValue:c,scaleLabel:g.featuredScaleLabels.current,valueVisible:!0,handleNamedScaleSelect:this._handleRecommendedScaleClick}):null,b)))};c.prototype._handleScaleSelection=function(){"max"===this._activeMenu?this._customMaxScale=this._effectiveMaxScale:this._customMinScale=this._effectiveMinScale};c.prototype.renderScaleMenuToggle=function(b,a){var c=this._interactive,e=this._activeMenu===b;return d.tsx("button",{"aria-controls":e?this.id+"__scale-menu--"+b:"",
"aria-pressed":e?"true":"false",class:this.classes("esri-scale-range-slider__scale-menu-toggle",e?"esri-scale-range-slider__scale-menu-toggle--active":null),"data-type":b,key:b+"-scale-menu-toggle",onclick:this._handleScaleMenuToggleClick,disabled:!c},a,d.tsx("span",{class:this.classes("esri-scale-range-slider__scale-menu-toggle-icon","esri-icon-down"),"aria-hidden":"true"}))};c.prototype.renderScaleMenuItem=function(b){var a=b.scaleValue,c=b.scaleLabel,e=b.valueVisible,f=b.handleNamedScaleSelect,
h=b.handleCustomScaleSelect,h=void 0===h?null:h,g=this.id+"__custom-scale-input";return d.tsx("li",{bind:this,class:"esri-scale-range-slider__scale-menu-item","data-scale":a,key:c,onclick:f,onkeydown:f,tabIndex:-1},d.tsx("label",{class:"esri-scale-range-slider__scale-item-label",for:g},c),-1<a?h?d.tsx("input",{afterCreate:this.focusAndSelectInputOnCreate,class:this.classes("esri-scale-range-slider__scale-item-value","esri-scale-range-slider__scale-item-value--editable"),"data-render-props":b,id:g,
key:"value",value:"1:"+l.formatNumber(a),onkeydown:this.handleCustomScaleInputKeyDown,onblur:this._handleCustomScaleInputBlur}):e?d.tsx("div",{class:"esri-scale-range-slider__scale-item-value",key:"value"},"1:"+l.formatNumber(a)):null:null)};c.prototype.focusAndSelectInputOnCreate=function(b){b.focus();b.select()};c.prototype.renderCurrentScaleIndicator=function(){var b=this._slider,a=this.viewModel.scaleRanges,c=a.clampScale(this.view.scale),c=this.viewModel.mapScaleToSlider(c),b=c/b.max,a=g.scaleRangeLabels[a.findScaleRangeByIndex(c).id],
a=l.substitute(g.currentScaleTooltip,{scaleLabel:a});return d.tsx("div",{class:"esri-scale-range-slider__scale-indicator-container",key:"scale-indicator"},d.tsx("div",{"aria-label":a,class:"esri-scale-range-slider__scale-indicator",styles:{left:(d.isRTL()?-1:1)*b*100+"%"},title:a},this.renderCurrentScaleIndicatorIcon()))};c.prototype.renderCurrentScaleIndicatorIcon=function(){return d.tsx("svg",{class:"esri-scale-range-slider__scale-indicator-icon",height:"8",width:"8",viewBox:"0 0 8 8",version:"1.1",
xmlns:"http://www.w3.org/2000/svg"},d.tsx("polygon",{points:"4 0 8 8 0 8"}))};c.prototype._handleRecommendedScaleClick=function(b){this._setScaleFromMenuSelection(Number(b.currentTarget["data-scale"]))};c.prototype._setScaleFromMenuSelection=function(b){"max"===this._activeMenu?this.maxScale=Math.min(b,this._effectiveMinScale-1):this.minScale=Math.max(b,this._effectiveMaxScale+1);this._setActiveMenu(null)};c.prototype._setActiveMenu=function(b){this._activeMenu=b;this._maxScaleMenuPopover.open="max"===
b;this._minScaleMenuPopover.open="min"===b;this._focusedMenuItemIndex=b?0:-1};e([f.property()],c.prototype,"_slider",void 0);e([f.property({dependsOn:["viewModel.maxScaleLimit","viewModel.maxScale"]})],c.prototype,"_effectiveMaxScale",null);e([f.property({dependsOn:["viewModel.minScaleLimit","viewModel.minScale"]})],c.prototype,"_effectiveMinScale",null);e([f.property({dependsOn:["disabled","viewModel.state"],readOnly:!0})],c.prototype,"_interactive",null);e([f.property(),d.renderable()],c.prototype,
"disabled",void 0);e([f.property()],c.prototype,"label",void 0);e([f.property({aliasOf:"viewModel.layer"})],c.prototype,"layer",void 0);e([f.property({aliasOf:"viewModel.maxScale"})],c.prototype,"maxScale",void 0);e([f.property({aliasOf:"viewModel.maxScaleLimit"})],c.prototype,"maxScaleLimit",void 0);e([f.property({aliasOf:"viewModel.minScale"})],c.prototype,"minScale",void 0);e([f.property({aliasOf:"viewModel.minScaleLimit"})],c.prototype,"minScaleLimit",void 0);e([f.property(),d.renderable()],c.prototype,
"region",void 0);e([f.property({aliasOf:"viewModel.view"})],c.prototype,"view",void 0);e([f.property(),d.renderable("viewModel.state")],c.prototype,"viewModel",void 0);e([f.property(),d.renderable()],c.prototype,"visibleElements",void 0);e([f.cast("visibleElements")],c.prototype,"castVisibleElements",null);e([d.accessibleHandler()],c.prototype,"_handleScaleMenuToggleClick",void 0);e([d.accessibleHandler()],c.prototype,"_handleScaleSelection",null);e([d.accessibleHandler()],c.prototype,"_handleRecommendedScaleClick",
null);return c=e([f.subclass("esri.widgets.ScaleRangeSlider")],c)}(f.declared(y.HandleOwnerMixin(B)))});