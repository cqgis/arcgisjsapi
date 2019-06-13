// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Color ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ./ImageMeshColor ./MeshTexture ./ValueMeshColor".split(" "),function(g,m,q,e,f,r,h,t,c,n,u,d,v){function k(){p.warn('Assigning ImageMeshColor to "MeshMaterial.color" is deprecated. Assigning to "MeshMaterial.colorTexture" instead.')}Object.defineProperty(m,
"__esModule",{value:!0});var p=t.getLogger("esri.geometry.support.MeshMaterial");g=function(g){function b(a){a=g.call(this)||this;a.color=null;a.colorTexture=null;a.normalTexture=null;a.alphaMode="auto";a.alphaCutoff=.5;a.doubleSided=!0;return a}q(b,g);l=b;b.prototype.castColor=function(a){if(!a)return a;if(Array.isArray(a))return new f(a);if(a instanceof f||a instanceof d)return a;if("string"===typeof a){if(w.test(a)||f.named[a])return new f(a);k();this.colorTexture=new d({url:a});return null}return a instanceof
HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof ImageData?(k(),this.colorTexture=new d({data:a}),null):a instanceof u?(k(),this.colorTexture=new d({url:a.url,data:a.data}),null):"image"===a.type?(k(),this.colorTexture=new d(a),null):a instanceof v?(p.warn('Assigning ValueMeshColor to "MeshMaterial.color" is deprecated. Automatically converting it to esri.Color.'),new f(a.value)):n.ensureType(f,a)};b.prototype.castColorTexture=function(a){return a?"string"===typeof a?new d({url:a}):
a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof ImageData?new d({data:a}):n.ensureType(d,a):a};b.prototype.readColorTexture=function(a,b,c){if(a)return new d(a)};b.prototype.castNormalTexture=function(a){return a?"string"===typeof a?new d({url:a}):a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof ImageData?new d({data:a}):n.ensureType(d,a):a};b.prototype.readNormalTexture=function(a,b,c){if(a)return new d(a)};b.prototype.clone=function(){return new l({color:h.clone(this.color),
colorTexture:h.clone(this.colorTexture),normalTexture:h.clone(this.normalTexture),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided})};b.prototype.cloneWithSharedTextures=function(){return new l({color:h.clone(this.color),colorTexture:this.colorTexture,normalTexture:this.normalTexture,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided})};var l;e([c.property({type:f,json:{write:!0}})],b.prototype,"color",void 0);e([c.cast("color")],b.prototype,
"castColor",null);e([c.property({json:{write:!0}})],b.prototype,"colorTexture",void 0);e([c.cast("colorTexture")],b.prototype,"castColorTexture",null);e([c.reader("colorTexture")],b.prototype,"readColorTexture",null);e([c.property({json:{write:!0}})],b.prototype,"normalTexture",void 0);e([c.cast("normalTexture")],b.prototype,"castNormalTexture",null);e([c.reader("normalTexture")],b.prototype,"readNormalTexture",null);e([c.property({json:{write:!0}})],b.prototype,"alphaMode",void 0);e([c.property({json:{write:!0}})],
b.prototype,"alphaCutoff",void 0);e([c.property({json:{write:!0}})],b.prototype,"doubleSided",void 0);return b=l=e([c.subclass("esri.geometry.support.MeshMaterial")],b)}(c.declared(r));m.MeshMaterial=g;var w=/^\s*(#|rgba?\()/;m.default=g});