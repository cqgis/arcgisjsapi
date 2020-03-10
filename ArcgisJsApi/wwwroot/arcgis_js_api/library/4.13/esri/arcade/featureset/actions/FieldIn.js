// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../support/FeatureSet ../support/IdSet ../support/shared ../support/sqlUtils ../../../core/promiseUtils ../../../core/sql/WhereClause".split(" "),function(t,u,p,q,k,l,m,h,r){return function(n){function c(a){var b=n.call(this,a)||this;b.declaredClass="esri.arcade.featureset.actions.fieldin";b.isOneToOne=!1;b._inLayer=null;b._parent=a.parentfeatureset;b.isOneToOne=a.isOneToOne;b._inLayer=a.infeatures;b.sourceField=a.sourceField;b.destinationField=
a.destinationField;return b}p(c,n);c.prototype._getSet=function(a){var b=this;return null===this._wset?this._getFilteredSet("",null,null,null,a).then(function(a){b._wset=a;return b._wset}):h.resolve(this._wset)};c.prototype._getFeatures=function(a,b,d,f){var c=this,e=[];-1!==b&&void 0===this._featureCache[b]&&e.push(b);e=this._maxQuery;return!0===this._checkIfNeedToExpandKnownPage(a,e,f)?this._expandPagedSet(a,e,0,0,f).then(function(e){return c._getFeatures(a,b,d,f)}):h.resolve("success")};c.prototype._isInFeatureSet=
function(){return l.IdState.InFeatureSet};c.prototype._refineSetBlock=function(a){return h.resolve(a)};c.prototype._candidateIdTransform=function(a){return a};c.prototype._transformSetWithIdChanges=function(){};c.prototype._getFilteredSet=function(a,b,d,f,c){var e=this;return this._ensureLoaded().then(function(){return e._parent.isTable()&&b&&null!==a&&""!==a?new k([],[],!0,null):new k([],["GETPAGES"],!1,{relation:a,resultRecordCount:e._maxQueryRate(),resultOffset:0,geometry:null===b?null:b,where:d,
internal:{set:[],lastRetrieved:0,iterator:e._inLayer.iterator(c),fullyResolved:!1}})})};c.prototype._getPhysicalPage=function(a,b,d){var f=this;try{var c=a.pagesDefinition.internal.lastRetrieved;return a.pagesDefinition.internal.iterator.nextBatch(a.pagesDefinition.resultRecordCount).then(function(b){for(var e=[],g=0;g<b.length;g++)e.push(b[g].attributes[f.destinationField]);if(0===b.length)return a.pagesDefinition.internal.fullyResolved=!0,"done";b.length<a.pagesDefinition.resultRecordCount&&(a.pagesDefinition.internal.fullyResolved=
!0);b=r.WhereClause.create(f.sourceField+" IN @ids",f._parent.getFieldsIndex());b.parameters={ids:e};a.pagesDefinition.where&&(b=m.combine(b,a.pagesDefinition.where,"AND"));e=f._parent.filter(b);e=f._applySpatialFilter(a.pagesDefinition.relation,a.pagesDefinition.relationshape,e);return e.iterator(d).nextBatch(a.pagesDefinition.resultRecordCount).then(function(b){for(var d=0;d<b.length;d++)a.pagesDefinition.internal.set[c+d]=b[d].attributes[f._parent.objectIdField],f._featureCache[b[d].attributes[f._parent.objectIdField]]=
b[d];a.pagesDefinition.internal.lastRetrieved=c+b.length;return"done"})})}catch(e){return h.reject(e)}};c.prototype._expandPagedSet=function(a,b,d,c,g){return this._expandPagedSetFeatureSet(a,b,d,c,g)};c.prototype._applySpatialFilter=function(a,b,d){if(null===a||void 0===a||""===a)return d;if(0<=a.indexOf("esriSpatialRelRelation"))return d.relate(b,a.split(":")[1]);switch(a){case "esriSpatialRelIntersects":return d.intersects(b);case "esriSpatialRelContains":return d.contains(b);case "esriSpatialRelOverlaps":return d.overlaps(b);
case "esriSpatialRelWithin":return d.within(b);case "esriSpatialRelTouches":return d.touches(b);case "esriSpatialRelCrosses":return d.crosses(b);case "esriSpatialRelEnvelopeIntersects":return d.envelopeIntersects(b)}return d};c.prototype._clonePageDefinition=function(a){return null===a?null:{groupbypage:!1,relation:a.relation,resultRecordCount:a.resultRecordCount,resultOffset:0,geometry:a.geometry,where:a.where,internal:a.internal}};c.prototype._countstat=function(a,b,d,c,g){var e=this;return this._ensureLoaded().then(function(){return e.isTable()&&
d&&null!==b&&""!==b?{calculated:!0,result:0}:!0!==e.isOneToOne||null!==d||null!==c&&"1\x3d1"!==m.toWhereClause(c,l.FeatureServiceDatabaseType.Standardised)?{calculated:!1}:{calculated:!0,result:e._inLayer.count(g)}})};c.prototype._stats=function(a,b,d,c,g,e,h){var f=this;return this._ensureLoaded().then(function(){return"count"===a?f._countstat(a,d,c,g,h):{calculated:!1}})};c.prototype._stat=function(a,b,d,c,g,e,h){return this._stats(a,b,d,c,g,e,h)};c.prototype._canDoAggregates=function(a,b,c,f,g){return this._ensureLoaded().then(function(){return!1})};
return c}(q)});