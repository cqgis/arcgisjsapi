// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/asyncUtils ../../../../core/promiseUtils ../../../../geometry/support/webMercatorUtils ../../../../portal/support/geometryServiceUtils".split(" "),function(l,f,h,c,g,k){Object.defineProperty(f,"__esModule",{value:!0});f.toViewIfLocal=function(b){var d=b.view.spatialReference,a=b.layer.fullExtent,e=a&&a.spatialReference;return e?e.equals(d)?c.resolve(a.clone()):g.canProject(e,d)?c.resolve(g.project(a,d)):b.view.state.isLocal?h.safeCast(k.projectGeometry(a,d,
b.layer.portalItem).then(function(a){if(!b.destroyed&&a)return a}).catch(function(){return null})):c.resolve(null):c.resolve(null)}});