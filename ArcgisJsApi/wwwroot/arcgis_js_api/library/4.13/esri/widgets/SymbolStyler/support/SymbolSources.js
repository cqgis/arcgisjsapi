// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/i18n!../nls/SymbolStyler ../../../Color ../../../symbols ../../../core/Accessor ../../../core/devEnvironmentUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/urlUtils ../../../core/accessorSupport/decorators ../../../symbols/support/gfxUtils ../../../symbols/support/jsonUtils ../../../symbols/support/styleUtils ../../../symbols/support/Symbol3DMaterial ../../../symbols/support/symbolUtils".split(" "),
function(g,k,y,l,d,f,z,A,m,q,r,e,B,c,t,u,v,w,p){function C(b){var a=b.get("data.thumbnail.href"),h=b.data.title,c=document.createElement("div");q.isDevEnvironment()&&(a=q.adjustStaticAGOUrl(a));if(!a)return c.appendChild(x(h)),e.resolve(c);a=new A.WebStyleSymbol({name:b.data.name,styleUrl:b.portalItem.itemUrl+"/data",thumbnail:{url:a?B.makeAbsolute(a,b.get("portalItem.itemUrl")):null}});return p.renderPreviewHTML(a,{node:c,size:"flat"===b.data.dimensionality?24:48,disableUpsampling:!0}).then(function(a){return c}).catch(function(){c.appendChild(x(h));
return c})}function x(b){void 0===b&&(b=f.noTitle);var a=document.createElement("span");a.setAttribute("alt","");a.innerHTML=b;return a}function D(b,a,h,c){var d=v.styleNameFromItem(h),e=null;d||(e=h.itemUrl+"/data");return v.fetchSymbolFromStyle({data:b,baseUrl:h.itemUrl,styleName:d,styleUrl:e},a,{portal:h.portal},c)}Object.defineProperty(k,"__esModule",{value:!0});var E=[{name:"Circle",type:"esriSMS",style:"esriSMSCircle",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"Square",
type:"esriSMS",style:"esriSMSSquare",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"Diamond",type:"esriSMS",style:"esriSMSDiamond",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"Cross",type:"esriSMS",style:"esriSMSCross",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"X",type:"esriSMS",style:"esriSMSX",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"Triangle",type:"esriSMS",style:"esriSMSTriangle",
color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}}];g=[{title:f.sphere,name:"Sphere",primitive:"sphere"},{title:f.tallCylinder,name:"Tall_Cylinder",primitive:"cylinder",mixins:{width:5,height:10,depth:5}},{title:f.cylinder,name:"Cylinder",primitive:"cylinder"},{title:f.tallCube,name:"Tall_Cube",primitive:"cube",mixins:{width:5,height:10,depth:5,anchor:"bottom"}},{title:f.cube,name:"Cube",primitive:"cube"},{title:f.tallCone,name:"Tall_Cone",primitive:"cone",mixins:{width:5,height:10,
depth:5}},{title:f.cone,name:"Cone",primitive:"cone"},{title:f.invertedCone,name:"Inverted_Cone",primitive:"invertedCone"},{title:f.diamond,name:"Diamond",primitive:"diamond"},{title:f.tetrahedron,name:"Tetrahedron",primitive:"tetrahedron"}];var F=[{title:f.circle,name:"Circle",primitive:"circle"},{title:f.square,name:"Square",primitive:"square"},{title:f.cross,name:"Cross",primitive:"cross"},{title:f.x,name:"X",primitive:"x"},{title:f.kite,name:"Kite",primitive:"kite"},{title:f.triangle,name:"Triangle",
primitive:"triangle"}].map(function(b){return{dimensionality:"flat",name:b.name,title:b.title,type:"PointSymbol3D",symbolLayers:[{type:"Icon",resource:{primitive:b.primitive},material:{color:t.defaultThematicColor},outline:{color:[0,0,0]}}]}}),G=g.map(function(b){return{dimensionality:"volumetric",name:b.name,title:b.title,type:"PointSymbol3D",symbolLayers:[y({type:"Object",resource:{primitive:b.primitive}},b.mixins)]}}),H={getSymbol:function(b){return D(b.parentData,b.data.name,b.portalItem,"webRef").then(function(a){"point-3d"===
a.type&&a.symbolLayers.forEach(function(a){if(a.get("material.color"))if("icon"===a.type){var b=r.isSome(a.material)?a.material:new w.default;b.color=t.defaultThematicColor.clone();a.material=b}else"object"===a.type&&(b=r.isSome(a.material)?a.material:new w.default,b.color=b.color||new z([255,255,255]),a.material=b)});return a})},getThumbnail:function(b){return C(b)}},I={getSymbol:function(b){return e.resolve(u.fromJSON(b.data))},getThumbnail:function(b){return b.getSymbol().then(function(a){return p.renderPreviewHTML(a,
{size:24})})}},J={getSymbol:function(b){return e.resolve(u.fromJSON(b.data))},getThumbnail:function(b){return b.getSymbol().then(function(a){return p.renderPreviewHTML(a,{size:48})})}},n=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}l(a,b);a.prototype.getSymbol=function(){var a=this;return this._symbol?e.resolve(this._symbol):this.strategy.getSymbol(this).then(function(b){return a._symbol=b})};a.prototype.getThumbnail=function(a){var b=this;return this._thumbnail?(a.appendChild(this._thumbnail),
e.resolve(Function.prototype)):this.strategy.getThumbnail(this).then(function(h){b._thumbnail=h;return function(){a.appendChild(b._thumbnail)}})};d([c.property()],a.prototype,"strategy",void 0);d([c.property()],a.prototype,"data",void 0);d([c.property()],a.prototype,"parentData",void 0);d([c.property()],a.prototype,"portalItem",void 0);return a=d([c.subclass("esri.widgets.SymbolStyler.SymbolItem")],a)}(c.declared(m));k.SymbolItem=n;g=function(b){function a(){return null!==b&&b.apply(this,arguments)||
this}l(a,b);a.prototype.fetchData=function(a){var b=this;return e.isAborted(a)?e.reject(e.createAbortError()):this.data?e.resolve(this.data):this.portalItem.fetchData("json",a).then(function(a){b._set("data",a);return a})};d([c.property({readOnly:!0})],a.prototype,"data",void 0);d([c.property({aliasOf:"portalItem.id"})],a.prototype,"id",void 0);d([c.property({aliasOf:"portalItem.name"})],a.prototype,"name",void 0);d([c.property({aliasOf:"portalItem.title"})],a.prototype,"title",void 0);d([c.property()],
a.prototype,"portalItem",void 0);return a=d([c.subclass("esri.widgets.SymbolStyler.PortalItemSymbolSourceBase")],a)}(c.declared(m));var K=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.type="symbol-set";return a}l(a,b);a.prototype.getItems=function(a){return e.isAborted(a)?e.reject(e.createAbortError()):e.resolve(null)};d([c.property({readOnly:!0})],a.prototype,"type",void 0);return a=d([c.subclass("esri.widgets.SymbolStyler.SymbolSetSymbolSource")],a)}(c.declared(g));k.SymbolSetSymbolSource=
K;g=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.type="web-style";return a}l(a,b);a.prototype.getItems=function(a){var b=this;if(e.isAborted(a))return e.reject(e.createAbortError());this._items&&e.resolve(this._items);return this.fetchData(a).then(function(a){b._items=a.items.map(function(c){return new n({data:c,parentData:a,portalItem:b.portalItem,strategy:H})});return b._items})};d([c.property({readOnly:!0})],a.prototype,"type",void 0);return a=d([c.subclass("esri.widgets.SymbolStyler.WebStyleSymbolSource")],
a)}(c.declared(g));k.WebStyleSymbolSource=g;g=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.data=E;a.id="basic-symbol-set";a.name="Basic";a.title=f.basic;a.type="symbol-set";return a}l(a,b);a.prototype.getItems=function(a){return e.isAborted(a)?e.reject(e.createAbortError()):e.resolve(null)};d([c.property()],a.prototype,"data",void 0);d([c.property()],a.prototype,"id",void 0);d([c.property()],a.prototype,"name",void 0);d([c.property()],a.prototype,"title",void 0);d([c.property({readOnly:!0})],
a.prototype,"type",void 0);return a=d([c.subclass("esri.widgets.SymbolStyler.BasicSymbolSetSource")],a)}(c.declared(m));k.BasicSymbolSetSource=g;g=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.data={items:F};a.id="basic-web-style:flat";a.name="Basic";a.title=f.basic;a.type="web-style";return a}l(a,b);a.prototype.getItems=function(a){if(e.isAborted(a))return e.reject(e.createAbortError());if(this._items)return e.resolve(this._items);a=this.data.items.map(function(a){return new n({data:a,
strategy:I})});return e.resolve(this._items=a)};d([c.property()],a.prototype,"data",void 0);d([c.property()],a.prototype,"id",void 0);d([c.property()],a.prototype,"name",void 0);d([c.property()],a.prototype,"title",void 0);d([c.property({readOnly:!0})],a.prototype,"type",void 0);return a=d([c.subclass("esri.widgets.SymbolStyler.IconPrimitiveWebStyleSource")],a)}(c.declared(m));k.IconPrimitiveWebStyleSource=g;m=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.data={items:G};
a.id="basic-web-style:volumetric";a.name="Basic";a.title=f.basic;a.type="web-style";return a}l(a,b);a.prototype.getItems=function(a){var b=this;if(e.isAborted(a))return e.reject(e.createAbortError());if(this._items)return e.resolve(this._items);a=this.data.items.map(function(a){return new n({data:a,parentData:b.data,strategy:J})});return e.resolve(this._items=a)};d([c.property()],a.prototype,"data",void 0);d([c.property()],a.prototype,"id",void 0);d([c.property()],a.prototype,"name",void 0);d([c.property()],
a.prototype,"title",void 0);d([c.property({readOnly:!0})],a.prototype,"type",void 0);return a=d([c.subclass("esri.widgets.SymbolStyler.ObjectPrimitiveWebStyleSource")],a)}(c.declared(m));k.ObjectPrimitiveWebStyleSource=m});