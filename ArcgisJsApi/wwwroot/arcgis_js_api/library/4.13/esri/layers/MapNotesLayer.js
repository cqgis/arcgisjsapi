// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../core/Collection ../core/Error ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/accessorSupport/decorators ./FeatureLayer ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer".split(" "),function(h,v,k,d,l,m,n,p,q,f,b,e,r,t,u){return function(g){function a(){var c=g.call(this)||this;c.title=null;c.type="map-notes";return c}
k(a,g);Object.defineProperty(a.prototype,"fullExtent",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(c,a){return c?c.union(a.fullExtent):a.fullExtent},null):null},enumerable:!0,configurable:!0});a.prototype.readFeatureCollectionsFromItem=function(c,a,b){return a.layers.map(function(a){var c=new e;c.read(a,b);return c})};a.prototype.readFeatureCollectionsFromWebMap=function(c,a,b){return a.featureCollection.layers.map(function(a){var c=new e;c.read(a,b);return c})};
Object.defineProperty(a.prototype,"minScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(a,b){return null==a?b.minScale:Math.min(a,b.minScale)},null):0},set:function(a){this.featureCollections.forEach(function(c){c.minScale=a});this._set("minScale",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"maxScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(a,b){return null==a?b.maxScale:Math.min(a,
b.maxScale)},null):0},set:function(a){this.featureCollections.forEach(function(b){b.maxScale=a});this._set("maxScale",a)},enumerable:!0,configurable:!0});a.prototype.load=function(a){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},a));return this.when()};a.prototype.importLayerViewModule=function(a){return m(this,void 0,void 0,function(){return l(this,function(b){switch(a.type){case "2d":return[2,f.create(function(a){return h(["../views/2d/layers/MapNotesLayerView2D"],
a)})];case "3d":return[2,f.reject(new p("map-notes-layer:view-not-supported","MapNotesLayer is only supported in 2D"))]}return[2]})})};d([b.property()],a.prototype,"title",void 0);d([b.property({dependsOn:["featureCollections"],readOnly:!0})],a.prototype,"fullExtent",null);d([b.property({type:["show","hide"]})],a.prototype,"listMode",void 0);d([b.property({type:n.ofType(e)})],a.prototype,"featureCollections",void 0);d([b.reader("portal-item","featureCollections",["layers"])],a.prototype,"readFeatureCollectionsFromItem",
null);d([b.reader("web-map","featureCollections",["featureCollection.layers"])],a.prototype,"readFeatureCollectionsFromWebMap",null);d([b.property({dependsOn:["featureCollections"]})],a.prototype,"minScale",null);d([b.property({dependsOn:["featureCollections"]})],a.prototype,"maxScale",null);d([b.property({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0);return a=d([b.subclass("esri.layers.MapNotesLayer")],a)}(b.declared(t.OperationalLayer(u.PortalLayer(q.MultiOriginJSONMixin(r)))))});