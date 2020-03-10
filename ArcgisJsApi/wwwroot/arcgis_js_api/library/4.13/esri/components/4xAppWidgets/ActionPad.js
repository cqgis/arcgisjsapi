// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/i18n!./ActionPad/nls/resources ../../core/Collection ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators ../../widgets/Widget ./ActionPad/ActionPadViewModel ../../widgets/support/widget".split(" "),function(r,t,m,d,k,g,n,h,e,p,q,c){return function(l){function b(a){a=l.call(this)||this;a._handles=new n;a.expandEnabled=!1;a.iconClass="";a.label=k.widgetLabel;a.selectionCount=
0;a.viewModel=new q;return a}m(b,l);b.prototype.postInitialize=function(){var a=this;this.own([h.init(this,"viewModel.actionsSections",function(){return a._watchActionsSections()}),h.on(this,"viewModel.actionsSections","change",function(){return a._watchActionsSections()})])};b.prototype.render=function(){var a=this.selectionCount,f=k.selectionCount.replace("{selectionCount}",a),a=a?c.tsx("div",{class:"esri-action-pad__section"},c.tsx("div",{title:f,"aria-label":f,class:"esri-action-pad__selection-count"},
c.tsx("span",{class:"esri-action-pad__selection-count-number"},a))):null;return c.tsx("div",{class:this.classes("esri-action-pad","esri-widget")},this._renderActionsSections(),a)};b.prototype._watchActions=function(a,f){var b=this,c=this._handles,d="actions-"+f;c.remove(d);a&&a.forEach(function(a){a=h.watch(a,["id","className","title","image","visible"],function(){return b.scheduleRender()});c.add(a,d);c.add(a,"allActions")})};b.prototype._watchActionsSections=function(){var a=this;this.scheduleRender();
var b=this._handles,c=this.actionsSections;b.remove("actionsSections");c.forEach(function(c,f){var d=c.on("change",function(){a.scheduleRender();a._watchActions(c,f)});b.add(d,"actionsSections");a._watchActions(c,f)})};b.prototype._renderActionsSections=function(){var a=this,b=this.actionsSections;if(b&&g.isCollection(b))return b.map(function(b){return c.tsx("div",{class:"esri-action-pad__section"},a._renderActions(b))}).toArray()};b.prototype._renderActions=function(a){var b=this;if(a&&g.isCollection(a))return a.map(function(a){return b._renderAction(a)}).filter(Boolean).toArray()};
b.prototype._getActionImage=function(a){if("slider"!==a.type)return a.image};b.prototype._renderAction=function(a){var b,d;if(a){var e=a.title,h=a.className,k=a.visible,g=this._getActionImage(a),l=(b={},b["esri-action-pad__action-icon--image"]=!!g,b);if(k)return b=this.expandEnabled,b=(d={},d["esri-icon-font-fallback-text"]=!b,d),c.tsx("div",{key:a,role:"button",tabIndex:0,title:e,"aria-label":e,class:"esri-action-pad__action",bind:this,"data-action":a,onclick:this._triggerAction,onkeydown:this._triggerAction},
c.tsx("span",{key:"icon","aria-hidden":"true",class:this.classes("esri-action-pad__action-icon",h,l),styles:this._getIconStyles(g)}),c.tsx("span",{key:"text",class:this.classes("esri-action-pad__action-title",b)},e))}};b.prototype._getIconStyles=function(a){return{"background-image":a?"url("+a+")":""}};b.prototype._triggerAction=function(a){(a=a.currentTarget&&a.currentTarget["data-action"])&&this.viewModel.triggerAction(a)};d([c.renderable(),e.aliasOf("viewModel.actionsSections")],b.prototype,"actionsSections",
void 0);d([c.renderable(),e.property()],b.prototype,"expandEnabled",void 0);d([e.property({readOnly:!0})],b.prototype,"iconClass",void 0);d([e.property({readOnly:!0})],b.prototype,"label",void 0);d([c.renderable(),e.property()],b.prototype,"selectionCount",void 0);d([e.property(),c.renderable(["viewModel.actionsSections"]),c.vmEvent(["triggerAction","trigger-action"])],b.prototype,"viewModel",void 0);d([c.accessibleHandler()],b.prototype,"_triggerAction",null);return b=d([e.subclass("esri.widgets.ActionPad")],
b)}(e.declared(p))});