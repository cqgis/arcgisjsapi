// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/mathUtils ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../support/earthUtils ../support/geometryUtils ../support/projectionUtils ./PatchGeometryFactory ./Tile".split(" "),function(l,n,r,p,g,q,f,h,k,t,u){Object.defineProperty(n,"__esModule",{value:!0});l=function(m){function d(a,b,c){var e=m.call(this,d.NumSubdivisionsAtLevel)||this;e.obb=Array(8);e.isWebMercator=!1;for(var f=0;8>f;f++)e.obb[f]=
q.vec3f64.create();void 0!==a&&e.init(a,b,c);return e}r(d,m);d.prototype.init=function(a,b,c){m.prototype.init.call(this,a,b,c);this.isWebMercator=c.tilingScheme.spatialReference.isWebMercator;b=this.extentInRadians[0];c=this.extentInRadians[1];var e=this.extentInRadians[2],d=this.extentInRadians[3];a=a[0];var h=p.lerp(c,d,.5),l=p.lerp(b,e,.5);this._edgeLen=(e-b)*Math.cos(0===a?0:Math.min(Math.abs(c),Math.abs(d)))*f.earthRadius;this._edgeLen2=this._edgeLen*this._edgeLen;this._curvatureHeight=f.earthRadius-
Math.sqrt(f.earthRadius*f.earthRadius-this._edgeLen2/4);k.wgs84ComparableLonLatToECEF(this.centerAtSeaLevel,l,h,0);b=q.vec3f64.fromArray(this.centerAtSeaLevel);g.vec3.normalize(b,b);this.up=b;this._updateOBB();this.updateRadiusAndCenter()};d.prototype.updateRadiusAndCenter=function(){if(0===this.lij[0])g.vec3.set(this._center,0,0,0),this._radius=f.earthRadius+this.elevationBounds[1];else{this._updateCenter();var a=Math.max(g.vec3.squaredDistance(this._center,this.obb[0]),g.vec3.squaredDistance(this._center,
this.obb[1]));this._radius=Math.sqrt(a)}};d.prototype._isVisible=function(){if(!this.intersectsClippingArea)return!1;var a=this.surface.frustum.planes;if(10>this.lij[0])return h.frustum.intersectsSphere(a,h.sphere.wrap(this._radius,this._center));for(var b=this.obb,c=0;6>c;c++){for(var e=void 0,e=0;8>e&&!h.plane.isPointOutside(a[c],b[e]);e++);if(8===e)return!1}return!0};d.prototype.computeElevationBounds=function(){m.prototype.computeElevationBounds.call(this);this._updateOBB()};d.prototype.createGeometry=
function(a,b){var c=this._isPole(this.lij[1],this.lij[0]);t.createSphericalGlobePatch(a,this.extent,b,this.renderData,this.extentInRadians,this.isWebMercator,c);this.setMemoryDirty()};d.prototype._updateOBB=function(){for(var a=this.extentInRadians,b=this.obb,c=0;2>c;c++){var e=this.elevationBounds[c],d=4*c;k.wgs84ComparableLonLatToECEF(b[d++],a[0],a[1],e);k.wgs84ComparableLonLatToECEF(b[d++],a[0],a[3],e);k.wgs84ComparableLonLatToECEF(b[d++],a[2],a[3],e);k.wgs84ComparableLonLatToECEF(b[d++],a[2],
a[1],e)}this.isWebMercator&&(a=this._isPole(this.lij[1],this.lij[0]),2===a?(g.vec3.set(b[1],0,0,f.earthRadius),g.vec3.set(b[2],0,0,f.earthRadius),g.vec3.set(b[5],0,0,f.earthRadius),g.vec3.set(b[6],0,0,f.earthRadius)):1===a&&(g.vec3.set(b[0],0,0,-f.earthRadius),g.vec3.set(b[3],0,0,-f.earthRadius),g.vec3.set(b[4],0,0,-f.earthRadius),g.vec3.set(b[7],0,0,-f.earthRadius)))};d.prototype._isPole=function(a,b){var c=0;a===(1<<b)-1&&(c+=1);0===a&&(c+=2);return c};d.NumSubdivisionsAtLevel=[128,64,32,16,16,
8,8,4];return d}(u.Tile);n.SphericalPatch=l});