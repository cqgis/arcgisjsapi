// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./Fullscreen/nls/Fullscreen ../core/accessorSupport/decorators ./Widget ./Fullscreen/FullscreenViewModel ./support/widget".split(" "),function(n,p,l,d,g,e,m,h,f){return function(k){function a(b){b=k.call(this)||this;b.element=null;b.view=null;b.viewModel=new h;return b}l(a,k);a.prototype.render=function(){var b,a,c=this.get("viewModel.state"),d=(b={},b["esri-disabled"]="disabled"===c||"feature-unsupported"===
c,b);b=(a={},a["esri-icon-zoom-out-fixed"]="ready"===c||"disabled"===c||"feature-unsupported"===c,a["esri-icon-zoom-in-fixed"]="active"===c,a);a="active"===c?g.exit:"ready"===c?g.enter:"";return f.tsx("div",{bind:this,class:this.classes("esri-fullscreen esri-widget--button esri-widget",d),role:"button",tabIndex:0,onclick:this._toggle,onkeydown:this._toggle,"aria-label":a,title:a},f.tsx("span",{class:this.classes("esri-icon",b),"aria-hidden":"true"}),f.tsx("span",{class:"esri-icon-font-fallback-text"},
a))};a.prototype._toggle=function(){this.viewModel.toggle()};d([e.aliasOf("viewModel.element")],a.prototype,"element",void 0);d([e.aliasOf("viewModel.view")],a.prototype,"view",void 0);d([e.property({type:h}),f.renderable("viewModel.state")],a.prototype,"viewModel",void 0);d([f.accessibleHandler()],a.prototype,"_toggle",null);return a=d([e.subclass("esri.widgets.Fullscreen")],a)}(e.declared(m))});