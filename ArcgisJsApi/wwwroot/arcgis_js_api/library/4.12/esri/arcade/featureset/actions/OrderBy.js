// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../support/FeatureSet ../support/IdSet ../support/OrderbyClause ../../../core/promiseUtils".split(" "),function(q,r,n,l,h,p,k){var m=function(g){function d(a){var b=g.call(this,a)||this;b._orderbyclause=null;b.declaredClass="esri.arcade.featureset.actions.OrderBy";b._maxProcessing=100;b._orderbyclause=a.orderbyclause;b._parent=a.parentfeatureset;return b}n(d,g);d.prototype._getSet=function(a){var b=this;return null===this._wset?this._ensureLoaded().then(function(){return b._getFilteredSet("",
null,null,b._orderbyclause,a)}).then(function(e){b._checkCancelled(a);b._wset=e;return b._wset}):k.resolve(this._wset)};d.prototype.manualOrderSet=function(a,b){var e=this;return this.getIdColumnDictionary(a,[],-1,b).then(function(a){e._orderbyclause.order(a);for(var b=new h([],[],!0,null),c=0;c<a.length;c++)b._known.push(a[c].id);return b})};d.prototype.getIdColumnDictionary=function(a,b,e,c){var d=this;if(e<a._known.length-1){var f=this._maxQueryRate();return"GETPAGES"===a._known[e+1]?this._parent._expandPagedSet(a,
f,0,0,c).then(function(f){return d.getIdColumnDictionary(a,b,e,c)}):this._parent._getFeature(a,a._known[e+1],c).then(function(f){e+=1;d._checkCancelled(c);b.push({id:a._known[e],feature:f});return d.getIdColumnDictionary(a,b,e,c)})}return 0<a._candidates.length?this._refineSetBlock(a,this._maxProcessingRate(),c).then(function(){d._checkCancelled(c);return d.getIdColumnDictionary(a,b,e,c)}):k.resolve(b)};d.prototype._isInFeatureSet=function(a){return this._parent._isInFeatureSet(a)};d.prototype._getFeatures=
function(a,b,e,c){return this._parent._getFeatures(a,b,e,c)};d.prototype._featureFromCache=function(a){if(void 0===this._featureCache[a]){var b=this._parent._featureFromCache(a);return void 0===b?void 0:null===b?null:this._featureCache[a]=b}return this._featureCache[a]};d.prototype._fetchAndRefineFeatures=function(a,b,e){return k.reject(Error("Fetch and Refine should not be called in this featureset"))};d.prototype._getFilteredSet=function(a,b,e,c,d){var f=this;return this._ensureLoaded().then(function(){return f._parent._getFilteredSet(a,
b,e,null===c?f._orderbyclause:c,d)}).then(function(a){f._checkCancelled(d);var c;c=new h(a._candidates.slice(0),a._known.slice(0),a._ordered,f._clonePageDefinition(a.pagesDefinition));var g=!0;0<a._candidates.length&&(g=!1);return!1===c._ordered?f.manualOrderSet(c,d).then(function(a){!1!==g||null===b&&null===e||(a=new h(a._candidates.slice(0).concat(a._known.slice(0)),[],a._ordered,f._clonePageDefinition(a.pagesDefinition)));return a}):c})};return d}(l);l._featuresetFunctions.orderBy=function(g){return""===
g?this:new m({parentfeatureset:this,orderbyclause:new p(g)})};return m});