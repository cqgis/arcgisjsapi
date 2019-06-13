// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Handles ../../../../core/scheduling ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingRect ../debugFlags ../Evented".split(" "),function(g,k,n,p,l,h,q,r){Object.defineProperty(k,"__esModule",{value:!0});g=function(){function b(a){var c=this;this.handles=new n;this.tileGeometryUpdateExtent=h.empty();this.tileGeometryUpdateSpatialReference=null;this.hasPendingTileGeometryChanges=!0;this.events=new r.Evented;this.centerOnSurfaceInstances=
a.centerOnSurfaceInstances;this.renderCoordsHelper=a.renderCoordsHelper;this.state=a.state;this.handles.add(a.surface.on("elevation-change",function(a){return c.tileGeometryChangeHandler(a)}))}b.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null)};b.prototype.forceUpdate=function(){this.handles.has("tile-geometry-update")&&this.updateCenterOnGeometryUpdate();this.hasPendingTileGeometryChanges&&(this.events.emit("request-update",m),this.hasPendingTileGeometryChanges=
!1)};b.prototype.hasPendingUpdates=function(){return this.handles.has("tile-geometry-update")};b.prototype.tileGeometryChangeHandler=function(a){var c=this;this.tileGeometryUpdateSpatialReference=a.spatialReference;h.expand(this.tileGeometryUpdateExtent,a.tile.extent);this.handles.has("tile-geometry-update")||this.handles.add(p.schedule(function(){return c.updateCenterOnGeometryUpdate()}),"tile-geometry-update")};b.prototype.updateCenterOnGeometryUpdate=function(){this.handles.remove("tile-geometry-update");
this.centerIntersectsExtent(this.tileGeometryUpdateExtent,this.tileGeometryUpdateSpatialReference)&&(q.DISABLE_POI_UPDATE_ON_SURFACE_GEOMETRY_CHANGES?this.hasPendingTileGeometryChanges=!0:this.events.emit("request-update",m));h.empty(this.tileGeometryUpdateExtent)};b.prototype.furthestCenterOnSurface=function(){for(var a=this.centerOnSurfaceInstances[0],c=1;c<this.centerOnSurfaceInstances.length;c++){var b=this.centerOnSurfaceInstances[c];b.distance>a.distance&&(a=b)}return a};b.prototype.centerIntersectsExtent=
function(a,b){var c=this.state.camera.eye,d=t,g=this.furthestCenterOnSurface();this.renderCoordsHelper.fromRenderCoords(c,e,b);this.renderCoordsHelper.fromRenderCoords(g.renderLocation,f,b);e[0]<f[0]?(d[0]=e[0],d[2]=f[0]):(d[0]=f[0],d[2]=e[0]);e[1]<f[1]?(d[1]=e[1],d[3]=f[1]):(d[1]=f[1],d[3]=e[1]);return h.intersects(d,a)};return b}();k.SurfaceGeometryUpdates=g;var m={},e=l.vec3f64.create(),f=l.vec3f64.create(),t=h.empty();k.default=g});