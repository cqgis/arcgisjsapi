// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ../core/screenUtils ../core/accessorSupport/decorators ./MarkerSymbol ./support/urlUtils".split(" "),function(n,p,k,c,l,e,d,m,g){return function(h){function a(b,a,d){b=h.call(this,b)||this;b.color=null;b.type="picture-marker";b.url=null;b.source=null;b.height=12;b.width=12;b.size=null;return b}k(a,h);f=a;a.prototype.normalizeCtorArgs=function(b,a,d){if(b&&"string"!==typeof b&&null==b.imageData)return b;
var c={};b&&(c.url=b);null!=a&&(c.width=e.toPt(a));null!=d&&(c.height=e.toPt(d));return c};a.prototype.readHeight=function(b,a){return a.size||b};a.prototype.readWidth=function(b,a){return a.size||b};a.prototype.clone=function(){var a=new f({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});a._set("source",l.clone(this.source));return a};var f;c([d.property({json:{write:!1}})],a.prototype,"color",void 0);c([d.enumeration.serializable()({esriPMS:"picture-marker"})],
a.prototype,"type",void 0);c([d.property(g.urlPropertyDefinition)],a.prototype,"url",void 0);c([d.property(g.sourcePropertyDefinition)],a.prototype,"source",void 0);c([d.property({type:Number,cast:e.toPt,json:{write:!0}})],a.prototype,"height",void 0);c([d.reader("height",["height","size"])],a.prototype,"readHeight",null);c([d.property({type:Number,cast:e.toPt,json:{write:!0}})],a.prototype,"width",void 0);c([d.property({json:{write:!1}})],a.prototype,"size",void 0);return a=f=c([d.subclass("esri.symbols.PictureMarkerSymbol")],
a)}(d.declared(m))});