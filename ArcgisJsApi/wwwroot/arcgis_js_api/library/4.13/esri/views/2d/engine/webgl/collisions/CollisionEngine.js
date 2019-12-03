// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/Error ../../../../../core/iteratorUtils ../../../../../core/Logger ../../../../../core/mathUtils ../definitions ./CollisionBucket ./LayerCollisionInfo".split(" "),function(w,x,z,y,A,q,t,B,n){Object.defineProperty(x,"__esModule",{value:!0});var u=t.TILE_SIZE/t.COLLISION_BUCKET_SIZE,C=A.getLogger("esri.views.2d.engine.webgl.collisions.CollisionEngine");w=function(){function d(a){this._layers=new Map;this._collisionBuckets=new Map;this._didError=!1;this._tilingScheme=
a}Object.defineProperty(d.prototype,"collisionInfos",{get:function(){return y.valuesOfMap(this._layers)},enumerable:!0,configurable:!0});d.prototype.registerLayerView=function(a,b){if(!this._layers.has(a)){var c=n.default.create(a,b,this.collisionInfos,this._tilingScheme);this._layers.set(a,c);this._collisionBuckets.forEach(function(a){return a.onRegisterLayer(c.index)})}};d.prototype.unregisterLayerView=function(a){var b=this;if(this._layers.has(a)){var c=this._layers.get(a);n.default.delete(c.index,
this.collisionInfos);this._layers.delete(a);this._collisionBuckets.forEach(function(a,h){var e=a.getTile(c.index);e&&(a.onUnregisterLayer(c.index),a.canDelete()&&b._collisionBuckets.delete(h),e.reference&&(e.reference.isDirty=!1))})}};d.prototype.addTile=function(a,b){var c=b.key.id;this._layers.has(a)&&(this._collisionBuckets.has(c)||this._collisionBuckets.set(c,new B.default(b.key,this._layers.size)),a=this._getIndex(a),this._collisionBuckets.get(c).getTile(a).reference=b)};d.prototype.removeTile=
function(a,b){this._layers.has(a)&&this._collisionBuckets.has(b)&&(a=this._getIndex(a),b=this._collisionBuckets.get(b).getTile(a),b.dirty=!1,b.reference=null)};d.prototype.run=function(a,b){var c=y.valuesOfMap(this._collisionBuckets).sort(function(a,b){return a.key.compareRowMajor(b.key)}),e=!0,h=a.renderingOptions.labelCollisionsEnabled&&!this._didError,d=this.collisionInfos;try{for(var k=0;k<c.length;k++)for(var l=c[k],e=e||l.isDirty,f=0;f<this._layers.size;f++){var p=n.default.find(f,d);l.computeNeighbors(this._collisionBuckets);
l.reset(a,e,p)}for(a=0;a<this._layers.size;a++)for(p=n.default.find(a,d),e=0,k=c;e<k.length;e++)l=k[e],this._run(h,l,p,b)}catch(g){C.error(z("mapview-labeling","Encountered an error during decluttering. Disabling collisions",g)),this._didError=!0}for(b=0;b<c.length;b++)l=c[b],l.ready()};d.prototype._run=function(a,b,c,e){var d=b.getReference(c.index);d&&d.hasData&&(d.key.level!==e?this._resetLabelsMinZoom(b,c):this._runVisibility(a,b,d,c,e))};d.prototype._resetLabelsMinZoom=function(a,b){if(a&&"polyline"!==
b.geometryType&&(a=a.getReference(b.index))&&a.hasData){b=b.layerView.tileRenderer.featuresView.attributeView;var c=0;for(a=a.displayObjects;c<a.length;c++)b.setLabelMinZoom(a[c].id,255)}};d.prototype._checkLabelsVisible=function(a,b){var c=!b.effect||b.effect.excludedLabelsVisible||!!(a&t.EFFECT_FLAG_0);return(!b.filter||!!(a&t.FILTER_FLAG_0))&&c};d.prototype._runVisibility=function(a,b,c,e,d){for(var m=e.layerView.tileRenderer.featuresView.attributeView,k=0,l=c.displayObjects.sort(function(a,b){a=
m.getLabelMinZoom(a.id);b=m.getLabelMinZoom(b.id);return a-b});k<l.length;k++){var f=l[k];if(f.metrics.length){var p="polyline"===e.geometryType?0:10*(d-1),g=m.getFilterFlags(f.id),h=this._checkLabelsVisible(g,e.layerView);if(a)for(var r=0;r<f.metrics.length;r++)g=f.metrics[r],g=h?-1!==g.minZoom?g.minZoom:this._computeLabelVisibility(f,g,e.index,b,c,g.baseZoom,d):255,p=Math.max(g,p);m.setLabelMinZoom(f.id,p);h=0;for(f=f.metrics;h<f.length;h++)g=f[h],g.minZoom=p}}};d.prototype._computeLabelVisibility=
function(a,b,c,e,d,m,k){for(var l=b.xBucket,f=b.yBucket,h=b.xOverflow,g=b.yOverflow,t=l-h,l=l+h+1,h=f+g+1,f=f-g;f<h;f++)for(g=t;g<l;g++)if(!(g<-u||f<-u||g>u||f>u))for(var r=0;r<=c;r++){var n=this._getRelativeSubBucket(r,e,d,g,f);if(n)for(var q=0;q<n.length;q++){var v=n[q];v.id!==a.id&&(v=this._compareLabels(b,v,m,k),m=Math.max(v,m))}}return m};d.prototype._compareLabels=function(a,b,c,e){if(-1===b.minZoom||b.minZoom>10*(e+1))return c;a=a.findCollisionDelta(b);e=q.clamp(Math.floor(10*(a+e)),0,255);
return b.minZoom>=e?c:Math.max(c,e)};d.prototype._getNeighboringTile=function(a,b,c,e,d){return(b=b.neighbors[3*(1+d)+(1+e)])&&b.getTile(a)};d.prototype._getRelativeSubBucket=function(a,b,c,e,d){var h=q.sign(Math.floor(e/4)),k=q.sign(Math.floor(d/4));return(a=this._getNeighboringTile(a,b,c,h,k))&&a.reference&&a.index&&a.reference.hasData?a.index[d-4*k][e-4*h]:null};d.prototype._getIndex=function(a){return this._layers.get(a).index};return d}();x.CollisionEngine=w});