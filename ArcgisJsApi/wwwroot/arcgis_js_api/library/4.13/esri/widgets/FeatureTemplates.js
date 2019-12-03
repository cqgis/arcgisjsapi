// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper @dojo/framework/shim/IntersectionObserver dojo/i18n!./FeatureTemplates/nls/FeatureTemplates ../core/HandleOwner ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./FeatureTemplates/FeatureTemplatesViewModel ./FeatureTemplates/ItemList ./support/widget".split(" "),function(u,v,w,k,e,l,g,m,n,b,p,q,r,f){function t(b){return b.items?b.uid:b.layer.id}return function(h){function c(a){a=
h.call(this)||this;a._iconIntersectionObserver=new l.default(function(a,c){a.forEach(function(a){if(a.isIntersecting){var b=a.target;if(!b["data-has-icon"]){b["data-has-icon"]=!0;var d=b["data-item"];d.fetchThumbnail().then(function(){d.thumbnail&&b.appendChild(d.thumbnail)})}c.unobserve(b)}})});a.filterEnabled=!0;a.filterFunction=null;a.filterText="";a.groupBy=null;a.layers=null;a.viewModel=new q;a.renderItemIcon=a.renderItemIcon.bind(a);a._afterItemCreateOrUpdate=a._afterItemCreateOrUpdate.bind(a);
a._afterItemRemoved=a._afterItemRemoved.bind(a);return a}k(c,h);c.prototype.postInitialize=function(){var a=this,b=function(b){b=b.label;return!a.filterText||-1<b.toLowerCase().indexOf(a.filterText.toLowerCase())};this.own(n.init(this,"viewModel",function(c,d){c&&!c.filterFunction&&(a.filterFunction=b);d&&d!==c&&d.filterFunction===b&&(d.filterFunction=null)}))};c.prototype.destroy=function(){this._iconIntersectionObserver&&(this._iconIntersectionObserver.disconnect(),this._iconIntersectionObserver=
null)};c.prototype.render=function(){var a=this,b=this.filterText,c=this.filterEnabled,d=this.viewModel,e=d.items,d=d.state;return f.tsx("div",{class:this.classes("esri-feature-templates","esri-widget"),"aria-label":g.widgetLabel},"loading"===d?this.renderLoader():"ready"===d?r.ItemList({id:this.id,identify:t,filterText:b,items:e,messages:{filterPlaceholder:g.filterPlaceholder,noItems:g.noItems,noMatches:g.noMatches},filterEnabled:c,onItemSelect:function(b){a.viewModel.select(b)},onFilterChange:function(b){a.filterText=
b;a.viewModel.refresh()},renderIcon:this.renderItemIcon}):null)};c.prototype.renderItemIcon=function(a){return f.tsx("span",{key:"icon",class:"esri-feature-templates__list-item-icon",afterCreate:this._afterItemCreateOrUpdate,afterUpdate:this._afterItemCreateOrUpdate,afterRemoved:this._afterItemRemoved,"data-item":a.item,"data-has-icon":!1})};c.prototype.renderLoader=function(){return f.tsx("div",{class:"esri-feature-templates__loader",key:"loader"})};c.prototype._afterItemCreateOrUpdate=function(a){this._iconIntersectionObserver.observe(a)};
c.prototype._afterItemRemoved=function(a){this._iconIntersectionObserver.unobserve(a)};e([b.property(),f.renderable()],c.prototype,"filterEnabled",void 0);e([b.aliasOf("viewModel.filterFunction")],c.prototype,"filterFunction",void 0);e([b.property(),f.renderable()],c.prototype,"filterText",void 0);e([b.aliasOf("viewModel.groupBy")],c.prototype,"groupBy",void 0);e([b.aliasOf("viewModel.layers")],c.prototype,"layers",void 0);e([b.property(),f.renderable(["viewModel.items","viewModel.state"]),f.vmEvent("select")],
c.prototype,"viewModel",void 0);return c=e([b.subclass("esri.widgets.FeatureTemplates")],c)}(b.declared(m.HandleOwnerMixin(p)))});