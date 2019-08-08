// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../geometry ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ../geometry/support/aaBoundingRect ./Layer ./support/TileInfo".split(" "),function(l,w,q,e,r,t,g,m,h,b,u,v,n){var f={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(k){function a(){var c=null!==k&&k.apply(this,arguments)||this;c.tileInfo=n.create({spatialReference:g.SpatialReference.WebMercator,
size:256});c.fullExtent=new g.Extent(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,g.SpatialReference.WebMercator);c.spatialReference=g.SpatialReference.WebMercator;c.type="base-elevation";return c}q(a,k);a.prototype.getTileBounds=function(c,a,p,d){d=d||u.ZERO;f.level=c;f.row=a;f.col=p;f.extent=d;this.tileInfo.updateTileInfo(f);f.extent=null;return d};a.prototype.fetchTile=function(a,b,p,d){throw new m("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented");
};a.prototype.queryElevation=function(a,b){var c=this;return this._importElevationQuery().then(function(d){return(new d.ElevationQuery).query(c,a,b)})};a.prototype.createElevationSampler=function(a,b){var c=this;return this._importElevationQuery().then(function(d){return(new d.ElevationQuery).createSampler(c,a,b)})};a.prototype.importLayerViewModule=function(a){return t(this,void 0,void 0,function(){return r(this,function(c){switch(a.type){case "2d":return[2,h.reject(new m("base-elevation-layer:view-not-supported",
"BaseElevationLayer is only supported in 3D"))];case "3d":return[2,h.create(function(a){return l(["../views/3d/layers/ElevationLayerView3D"],a)})]}return[2]})})};a.prototype._importElevationQuery=function(){return h.create(function(a){l(["./support/ElevationQuery"],a)})};e([b.property({type:n})],a.prototype,"tileInfo",void 0);e([b.property({type:["show","hide"]})],a.prototype,"listMode",void 0);e([b.property()],a.prototype,"fullExtent",void 0);e([b.property()],a.prototype,"spatialReference",void 0);
e([b.property({readOnly:!0,value:"base-elevation"})],a.prototype,"type",void 0);return a=e([b.subclass("esri.layers.BaseElevationLayer")],a)}(b.declared(v))});