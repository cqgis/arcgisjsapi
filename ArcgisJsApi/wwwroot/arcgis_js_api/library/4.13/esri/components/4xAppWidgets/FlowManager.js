// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/i18n!../../nls/common dojo/keys ../../core/Collection ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators ../../widgets/Widget ./FlowManager/FlowManagerViewModel ../../widgets/support/widget".split(" "),function(B,C,x,f,p,n,t,y,u,l,z,A,c){var v="active className disabled id title image visible indicator".split(" ");return function(w){function b(a){var e=w.call(this)||
this;e._handles=new y;e._menuOpen=!1;e._actionsMenuNode=null;e._focusActionsMenuButton=!1;e._focusFirstMenuAction=!1;e.viewModel=new A;e.own([e.on("trigger-form-action",function(a){"cancel"===a.action.id&&e._close()}),e.watch("activeFlow",function(){return e._closeMenu()}),e.on("trigger-menu-action",function(){return e._closeMenu()})]);return e}x(b,w);b.prototype.destroy=function(){this._handles&&this._handles.destroy()};b.prototype.render=function(){var a,e,k,d,b=this._menuOpen,g=this.activeFlow,
r=this.viewModel.flowDirection,h=!!this.parentFlow,m=(a={},a["esri-icon-left"]=!0,a["esri-icon-right"]=!1,a),m=h?c.tsx("button",{class:this.classes("esri-flow-manager__header-button","esri-flow-manager__header-previous-button"),title:p.pagination.previous,"aria-label":p.pagination.previous,bind:this,onclick:this._closeFlow,onkeydown:this._closeFlow},c.tsx("span",{"aria-hidden":"true",class:this.classes("esri-flow-manager__header-previous-icon",m)})):null,r="retreating"===r?"esri-flow-manager__frame--retreating":
"advancing"===r?"esri-flow-manager__frame--advancing":null;a=(e={},e["esri-flow-manager__frame--child"]=h,e);e=(k={},k["esri-flow-manager__header--child"]=h,k);k=(d={},d["esri-flow-manager__title--child"]=h,d);d=this._renderMenuActions(g&&g.menuActions);var f=b?p.close:p.open,f=d.length?c.tsx("button",{class:this.classes("esri-flow-manager__header-button","esri-flow-manager__header-menu-button"),title:f,"aria-label":f,bind:this,afterCreate:this._focusActionsMenuButtonNode,afterUpdate:this._focusActionsMenuButtonNode,
onclick:this._toggleActionsMenu,onkeydown:this._toggleActionsMenu},c.tsx("span",{"aria-hidden":"true",class:this.classes("esri-flow-manager__header-menu-icon","esri-icon-handle-horizontal")})):null,b=b&&d.length?c.tsx("ul",{key:"menu",class:"esri-flow-manager__menu esri-menu",bind:this,afterCreate:c.storeNode,afterUpdate:c.storeNode,"data-node-ref":"_actionsMenuNode"},d):null,b=d.length?c.tsx("div",{class:"esri-flow-manager__header-dropdown"},f,b):null;d=g&&g.title;m=c.tsx("div",{key:"header",class:this.classes("esri-flow-manager__header",
e),role:"presentation"},m,c.tsx("h2",{class:this.classes("esri-flow-manager__title",k)},d),b);b=this._renderContent(g);e=this._renderFormActions(g&&g.formActions);h=g&&h&&e.length?c.tsx("div",{key:"footer",class:"esri-flow-manager__footer"},e):null;h=g?[m,b,h]:null;return c.tsx("div",{class:"esri-flow-manager"},c.tsx("div",{key:g,class:this.classes("esri-flow-manager__frame",a,r)},h))};b.prototype._attachToNode=function(a){a.appendChild(this)};b.prototype._renderContent=function(a){var e;if(!a)return null;
a=a.content;var b=!!this.parentFlow,b=(e={},e["esri-flow-manager__content--child"]=b,e);if("string"===typeof a)return c.tsx("div",{class:this.classes("esri-flow-manager__content",b),key:a,innerHTML:a});if("object"===typeof a&&a.render&&"function"===typeof a.render)return c.tsx("div",{class:this.classes("esri-flow-manager__content",b),key:a},a.render());if(a instanceof HTMLElement)return c.tsx("div",{class:this.classes("esri-flow-manager__content",b),key:a,bind:a,afterCreate:this._attachToNode})};
b.prototype._renderMenuActions=function(a){var b=this;this._handles.remove("menu-actions");return a&&t.isCollection(a)?a.map(function(a,e){return b._renderMenuAction(a,e)}).filter(Boolean).toArray():[]};b.prototype._focusActionsMenuButtonNode=function(a){this._focusActionsMenuButton&&(this._focusActionsMenuButton=!1,a.focus())};b.prototype._renderMenuAction=function(a,b){var e=this,d,q;if(a){var g=u.watch(a,v,function(){return e.scheduleRender()});this._handles.add(g,"menu-actions");var f=a.active,
g=a.disabled,h=a.title,m=a.className,l=a.image,n=a.indicator,p=a.visible,f=(d={},d["esri-icon-loading-indicator"]=f,d[m]=!!m,d["esri-rotating"]=f,d["esri-flow-manager__action-icon--image"]=!!l,d);d=(q={},q["esri-flow-manager__action--disabled"]=g,q["esri-flow-manager__action--indicator"]=n,q);if(p)return q=0===b?this._actionsMenuNodeUpdated:null,c.tsx("li",{role:"menuitem",title:h,"aria-label":h,class:"esri-flow-manager__menu-item"},c.tsx("button",{tabIndex:0,key:a,class:this.classes("esri-flow-manager__action",
d),bind:this,"data-action":a,"data-action-index":b,afterCreate:q,afterUpdate:q,onclick:this._triggerMenuAction,onkeydown:this._triggerMenuAction,onkeyup:this._handleActionKeyup,disabled:g},c.tsx("span",{key:"icon","aria-hidden":"true",class:this.classes("esri-flow-manager__action-icon",f),styles:this._getIconStyles(l)}),c.tsx("span",{key:"text",class:"esri-flow-manager__action-title"},h)))}};b.prototype._actionsMenuNodeUpdated=function(a){a&&this._focusFirstMenuAction&&(this._focusFirstMenuAction=
!1,a.focus())};b.prototype._renderFormActions=function(a){var b=this;this._handles.remove("form-actions");return a&&t.isCollection(a)?a.map(function(a){return b._renderFormAction(a)}).filter(Boolean).toArray():[]};b.prototype._renderFormAction=function(a){var b=this,k,d;if(a){var f=u.watch(a,v,function(){return b.scheduleRender()});this._handles.add(f,"form-actions");var g=a.active,f=a.disabled,l=a.title,h=a.className,m=a.image,n=a.indicator,p=a.visible,g=(k={},k["esri-icon-loading-indicator"]=g,
k["esri-rotating"]=g,k[h]=!!h,k["esri-flow-manager__action-icon--image"]=!!m,k);k=(d={},d["esri-button"]="primary"===a.buttonType,d["esri-button--secondary"]="secondary"===a.buttonType,d["esri-button--tertiary"]="tertiary"===a.buttonType,d["esri-flow-manager__action--disabled"]=f,d["esri-flow-manager__action--indicator"]=n,d);if(p)return c.tsx("button",{key:a,tabIndex:0,title:l,"aria-label":l,class:this.classes("esri-button","esri-flow-manager__action",k),bind:this,"data-action":a,onclick:this._triggerFormAction,
onkeydown:this._triggerFormAction,disabled:f},c.tsx("span",{key:"icon","aria-hidden":"true",class:this.classes("esri-flow-manager__action-icon",g),styles:this._getIconStyles(m)}),c.tsx("span",{key:"text",class:"esri-flow-manager__action-title"},l))}};b.prototype._getIconStyles=function(a){return{"background-image":a?"url("+a+")":""}};b.prototype._closeMenu=function(){this._menuOpen=!1;this.scheduleRender()};b.prototype._close=function(){this.parentFlow&&this.flows.pop()};b.prototype._handleActionKeyup=
function(a){var b=a.keyCode;b===n.ESCAPE&&(a.stopPropagation(),this._menuOpen=!1,this._focusActionsMenuButton=!0,this.scheduleRender());var c=this._actionsMenuNode,d=this.get("activeFlow.menuActions.length"),f=a.currentTarget["data-action-index"];c&&(c=c.querySelectorAll("li"),b===n.UP_ARROW?(a.stopPropagation(),c[(f-1+d)%d].focus()):b===n.DOWN_ARROW?(a.stopPropagation(),c[(f+1+d)%d].focus()):b===n.HOME?(a.stopPropagation(),c[0].focus()):b===n.END&&(a.stopPropagation(),c[c.length-1].focus()))};b.prototype._toggleActionsMenu=
function(){var a=!this._menuOpen;(this._menuOpen=a)?this._focusFirstMenuAction=!0:this._focusActionsMenuButton=!0;this.scheduleRender()};b.prototype._closeFlow=function(){this._close()};b.prototype._triggerMenuAction=function(a){(a=a.currentTarget&&a.currentTarget["data-action"])&&this.viewModel.triggerMenuAction(a)};b.prototype._triggerFormAction=function(a){(a=a.currentTarget&&a.currentTarget["data-action"])&&this.viewModel.triggerFormAction(a)};f([c.renderable(),l.aliasOf("viewModel.activeFlow")],
b.prototype,"activeFlow",void 0);f([c.renderable(),l.aliasOf("viewModel.flows")],b.prototype,"flows",void 0);f([c.renderable(),l.aliasOf("viewModel.parentFlow")],b.prototype,"parentFlow",void 0);f([l.property(),c.renderable(["viewModel.activeFlow","viewModel.flows","viewModel.parentFlow","viewModel.flowDirection"]),c.vmEvent(["triggerMenuAction","trigger-menu-action"]),c.vmEvent(["triggerFormAction","trigger-form-action"])],b.prototype,"viewModel",void 0);f([c.accessibleHandler()],b.prototype,"_toggleActionsMenu",
null);f([c.accessibleHandler()],b.prototype,"_closeFlow",null);f([c.accessibleHandler()],b.prototype,"_triggerMenuAction",null);f([c.accessibleHandler()],b.prototype,"_triggerFormAction",null);return b=f([l.subclass("esri.widgets.FlowManager")],b)}(l.declared(z))});