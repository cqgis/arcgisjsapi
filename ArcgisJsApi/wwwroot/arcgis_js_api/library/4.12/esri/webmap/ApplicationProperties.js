// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ../webdoc/applicationProperties/Viewing".split(" "),function(l,m,f,c,g,h,b,k){return function(e){function a(a){a=e.call(this,a)||this;a.editing=null;a.offline=null;a.viewing=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d(h.clone({editing:this.editing,offline:this.offline,viewing:this.viewing}))};var d;c([b.property({json:{write:!0}})],
a.prototype,"editing",void 0);c([b.property({json:{write:!0}})],a.prototype,"offline",void 0);c([b.property({type:k,json:{write:!0}})],a.prototype,"viewing",void 0);return a=d=c([b.subclass("esri.webmap.ApplicationProperties")],a)}(b.declared(g))});