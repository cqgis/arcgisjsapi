// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/domUtils ../../core/Evented ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators ./Component ../../widgets/support/widgetUtils".split(" "),function(A,B,p,t,h,u,l,v,w,q,g,k,x){function m(d){return"object"!==typeof d||d&&d.isInstanceOf&&d.isInstanceOf(k)||!("component"in d||"index"in d||"position"in d)?null:d}
function n(d,b){var a=b.bottom,c=b.left,y=b.right;d.style.top=b.top;d.style.bottom=a;d.style.left=c;d.style.right=y}var z={left:0,top:0,bottom:0,right:0},r={bottom:30,top:15,right:15,left:15};return function(d){function b(a){a=d.call(this)||this;a._cornerNameToContainerLookup={};a._positionNameToContainerLookup={};a._components=[];a._handles=new w;a._componentToKey=new Map;a.view=null;a._initContainers();return a}t(b,d);b.prototype.initialize=function(){this._handles.add([q.init(this,"view.padding, container",
this._applyViewPadding.bind(this)),q.init(this,"padding",this._applyUIPadding.bind(this))])};b.prototype.destroy=function(){this.container=null;this._components.forEach(function(a){a.destroy()});this._components.length=0;this._handles.destroy();this._componentToKey.clear();this._componentToKey=null};Object.defineProperty(b.prototype,"container",{set:function(a){var c=this._get("container");a!==c&&(a&&(a.classList.add("esri-ui"),this._attachContainers(a)),c&&(c.classList.remove("esri-ui"),n(c,{top:"",
bottom:"",left:"",right:""}),l.empty(c)),this._set("container",a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"height",{get:function(){var a=this.get("view.height")||0;if(0===a)return a;var c=this._getViewPadding();return Math.max(a-(c.top+c.bottom),0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"padding",{get:function(){return this._get("padding")},set:function(a){a?this._override("padding",a):this._clearOverride("padding")},enumerable:!0,configurable:!0});
b.prototype.castPadding=function(a){return"number"===typeof a?{bottom:a,top:a,right:a,left:a}:p({},r,a)};Object.defineProperty(b.prototype,"width",{get:function(){var a=this.get("view.width")||0;if(0===a)return a;var c=this._getViewPadding();return Math.max(a-(c.left+c.right),0)},enumerable:!0,configurable:!0});b.prototype.add=function(a,c){var b=this,e,f;if(Array.isArray(a))a.forEach(function(a){return b.add(a,c)});else{var d=m(a);d&&(e=d.index,c=d.position,a=d.component,f=d.key);c&&"object"===typeof c&&
(e=c.index,f=c.key,c=c.position);!a||c&&!this._isValidPosition(c)||(a&&a.isInstanceOf&&a.isInstanceOf(k)||(a=new k({node:a})),this._place({component:a,position:c,index:e}),this._components.push(a),f&&this._componentToKey.set(a,f))}};b.prototype.remove=function(a,c){var b=this;if(a){if(Array.isArray(a))return a.map(function(a){return b.remove(a,c)});var e=this.find(a);if(e){var f=this._componentToKey;if(!f.has(a)||f.get(a)===c)return f=this._components.indexOf(e),e.node.parentNode&&e.node.parentNode.removeChild(e.node),
this._componentToKey.delete(a),this._components.splice(f,1)[0]}}};b.prototype.empty=function(a){var c=this;if(Array.isArray(a))return a.map(function(a){return c.empty(a)}).reduce(function(a,c){return a.concat(c)});a=a||"manual";if("manual"===a)return Array.prototype.slice.call(this._manualContainer.children).filter(function(a){return!a.classList.contains("esri-ui-corner")}).map(function(a){return c.remove(a)});if(this._isValidPosition(a))return Array.prototype.slice.call(this._cornerNameToContainerLookup[a].children).map(this.remove,
this)};b.prototype.move=function(a,c){var b=this;Array.isArray(a)&&a.forEach(function(a){return b.move(a,c)});if(a){var e,f=m(a)||m(c);f&&(e=f.index,c=f.position,a=f.component||a);(!c||this._isValidPosition(c))&&(a=this.remove(a))&&this.add(a,{position:c,index:e})}};b.prototype.find=function(a){return a?a&&a.isInstanceOf&&a.isInstanceOf(k)?this._findByComponent(a):"string"===typeof a?this._findById(a):this._findByNode(a.domNode||a):null};b.prototype._getViewPadding=function(){return this.get("view.padding")||
z};b.prototype._attachContainers=function(a){a.appendChild(this._innerContainer);a.appendChild(this._manualContainer)};b.prototype._initContainers=function(){var a=document.createElement("div");a.classList.add("esri-ui-inner-container");a.classList.add("esri-ui-corner-container");var c=document.createElement("div");c.classList.add("esri-ui-inner-container");c.classList.add("esri-ui-manual-container");var b=document.createElement("div");b.classList.add("esri-ui-top-left");b.classList.add("esri-ui-corner");
a.appendChild(b);var e=document.createElement("div");e.classList.add("esri-ui-top-right");e.classList.add("esri-ui-corner");a.appendChild(e);var f=document.createElement("div");f.classList.add("esri-ui-bottom-left");f.classList.add("esri-ui-corner");a.appendChild(f);var d=document.createElement("div");d.classList.add("esri-ui-bottom-right");d.classList.add("esri-ui-corner");a.appendChild(d);this._innerContainer=a;this._manualContainer=c;a=x.isRTL();this._cornerNameToContainerLookup={"top-left":b,
"top-right":e,"bottom-left":f,"bottom-right":d,"top-leading":a?e:b,"top-trailing":a?b:e,"bottom-leading":a?d:f,"bottom-trailing":a?f:d};this._positionNameToContainerLookup=p({manual:c},this._cornerNameToContainerLookup)};b.prototype._isValidPosition=function(a){return!!this._positionNameToContainerLookup[a]};b.prototype._place=function(a){var c=a.component,b=a.index;a=this._positionNameToContainerLookup[a.position||"manual"];var e=-1<b,d=c.widget;d&&!d._started&&"function"===typeof d.postMixInProperties&&
"function"===typeof d.buildRendering&&"function"===typeof d.postCreate&&"function"===typeof d.startup&&c.widget.startup();e?(e=Array.prototype.slice.call(a.children),0===b?a.firstChild?l.insertBefore(c.node,a.firstChild):a.appendChild(c.node):b>=e.length?a.appendChild(c.node):l.insertBefore(c.node,e[b])):a.appendChild(c.node)};b.prototype._applyViewPadding=function(){var a=this.container;a&&n(a,this._toPxPosition(this._getViewPadding()))};b.prototype._applyUIPadding=function(){var a=this._innerContainer;
a&&n(a,this._toPxPosition(this.padding))};b.prototype._toPxPosition=function(a){return{top:this._toPxUnit(a.top),left:this._toPxUnit(a.left),right:this._toPxUnit(a.right),bottom:this._toPxUnit(a.bottom)}};b.prototype._toPxUnit=function(a){return 0===a?"0":a+"px"};b.prototype._findByComponent=function(a){var c=null,b;this._components.some(function(d){(b=d===a)&&(c=d);return b});return c};b.prototype._findById=function(a){var c=null,b;this._components.some(function(d){(b=d.id===a)&&(c=d);return b});
return c};b.prototype._findByNode=function(a){var b=null,d;this._components.some(function(c){(d=c.node===a)&&(b=c);return d});return b};h([g.property()],b.prototype,"container",null);h([g.property({dependsOn:["view.height"]})],b.prototype,"height",null);h([g.property({value:r})],b.prototype,"padding",null);h([g.cast("padding")],b.prototype,"castPadding",null);h([g.property()],b.prototype,"view",void 0);h([g.property({dependsOn:["view.width"]})],b.prototype,"width",null);return b=h([g.subclass("esri.views.ui.UI")],
b)}(g.declared(u,v))});