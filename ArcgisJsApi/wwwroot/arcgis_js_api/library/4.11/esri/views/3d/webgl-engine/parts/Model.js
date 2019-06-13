// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports dojo/string ../../support/mathUtils ../lib/localOrigin ../lib/ModelContentType ../lib/ModelDirtySet ../lib/RenderGeometry ../lib/Util".split(" "),function(r,t,k,m,l,d,n,p,h){var g=h.assert,q=h.logWithBase;return function(){function e(){this.dirtySet=new n(this);this._uniqueIdx=0;this._id2origin={};this.content={};for(var a in d)this.content[d[a]]={}}e.prototype.getAll=function(a){a=this.content[a];g(void 0!==a);return a};e.prototype.get=function(a,b){return this.getAll(a)[b]};
e.prototype.add=function(a,b){var c=this.content[a];g(void 0!==c);var f=b.id;g(null==c[f],"Model/Stage already contains object to be added");c[f]=b;a===d.LAYER&&this.notifyDirty(a,b,"layerAdded")};e.prototype.remove=function(a,b){var c=this.content[a];g(void 0!==c);var f=c[b];g(void 0!==f,"Model/Stage doesn't contain object to be removed");delete c[b];a===d.TEXTURE&&f.unload();a===d.LAYER&&this.notifyDirty(a,f,"layerRemoved");return f};e.prototype.getDirtySet=function(){return this.dirtySet};e.prototype.notifyDirty=
function(a,b,c,f){this.dirtySet.handleUpdate(b,c,f)};e.prototype.getOrigin=function(a,b,c){void 0===c&&(c=10);var f=0;b=b*c/1E4;1<b&&(f=Math.ceil(q(b,2)));b=1E4*Math.pow(2,f);c=Math.round(a[0]/b);var e=Math.round(a[1]/b);a=Math.round(a[2]/b);var f=f+"_"+c+"_"+e+"_"+a,d=this._id2origin[f];null==d&&(d=l.fromValues(c*b,e*b,a*b,f),this._id2origin[f]=d);return d};e.prototype.getGeometryRenderGeometries=function(a,b,c){var f=a.id,d=b.geometry,e=a.getCombinedStaticTransformation(b),g=m.maxScale(e),h=b.origin,
k=b.id,l=this._uniqueIdx++;a=new p(d.data,d.boundingInfo,b.material,e,b.shaderTransformation,g,a.getCastShadow(),!!d.singleUse,f,k,l);a.origin=h||this.getOrigin(a.center,a.bsRadius);a.instanceParameters=b.instanceParameters;c.push(a)};e.prototype.updateRenderGeometryTransformation=function(a,b,c){a.getCombinedStaticTransformation(b,c.transformation);c.updateTransformation(c.transformation);a=this.getOrigin(c.center,c.bsRadius);return c.origin!==a};e.prototype.formatDebugInfo=function(a){var b=[];
if(a){b[0]="\x3ctable\x3e";for(var c in d)a=d[c],b[0]+="\x3ctr\x3e\x3ctd\x3e"+a+'\x3c/td\x3e\x3ctd style\x3d"text-align: right"\x3e'+Object.keys(this.getAll(a)).length+"\x3c/td\x3e\x3c/tr\x3e";b[0]+="\x3c/table\x3e";b[1]=this.dirtySet.formatDebugInfo(!0)}else{b[0]="";for(c in d)a=d[c],b[0]+=k.pad(String(Object.keys(this.getAll(a)).length),6," ")+" "+a+", ";b[1]=this.dirtySet.formatDebugInfo(!1)}return b};e.prototype.validateObject=function(a){a=a.geometryRecords;for(var b=0;b<a.length;++b){var c=
a[b];g(null!=this.get(d.GEOMETRY,c.geometry.id));g(null!=this.get(d.MATERIAL,c.material.id))}};e.prototype.validateLayer=function(a){a=a.getObjects();for(var b=0;b<a.length;++b){var c=this.get(d.OBJECT,a[b].id);g(null!=c)}};e.ContentType=d;return e}()});