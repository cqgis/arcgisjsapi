// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../Graphic ../support/FeatureSet ../support/IdSet ../support/shared ../../../core/promiseUtils ../../../tasks/support/RelationshipQuery".split(" "),function(x,y,u,v,w,q,p,h,r){return function(t){function b(a){var c=t.call(this,a)||this;c.declaredClass="esri.arcade.featureset.sources.FeatureLayerRelated";c._findObjectId=-1;c._requestStandardised=!1;c._removeGeometry=!1;c._overrideFields=null;c.featureObjectId=null;c.relatedLayer=null;
c.relationship=null;a.spatialReference&&(c.spatialReference=a.spatialReference);c._transparent=!0;c._maxProcessing=1E3;c._layer=a.layer;c._wset=null;c._findObjectId=a.objectId;c.featureObjectId=a.objectId;c.relationship=a.relationship;c.relatedLayer=a.relatedLayer;void 0!==a.outFields&&(c._overrideFields=a.outFields);void 0!==a.includeGeometry&&(c._removeGeometry=!1===a.includeGeometry);return c}u(b,t);b.prototype._maxQueryRate=function(){return p.defaultMaxRecords};b.prototype.end=function(){return this._layer};
b.prototype.optimisePagingFeatureQueries=function(a){};b.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=h.create(function(c,g){h.all([a._layer.load(),a.relatedLayer.load()]).then(function(){a._initialiseFeatureSet();c(a)},g)}));return this._loadPromise};b.prototype.nativeCapabilities=function(){return this.relatedLayer.nativeCapabilities()};b.prototype._initialiseFeatureSet=function(){null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference);
this.geometryType=this.relatedLayer.geometryType;this.fields=this.relatedLayer.fields.slice(0);if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{for(var a=[],c=[],g=0,f=this.fields;g<f.length;g++){var b=f[g];if("oid"===b.type)a.push(b),c.push(b.name);else for(var d=0,e=this._overrideFields;d<e.length;d++)if(e[d].toLowerCase()===b.name.toLowerCase()){a.push(b);c.push(b.name);break}}this.fields=a;this._overrideFields=c}if(a=
this._layer.nativeCapabilities())this._databaseType=a.databaseType,this._requestStandardised=a.requestStandardised;this.objectIdField=this.relatedLayer.objectIdField;this.hasM=this.relatedLayer.supportsM;this.hasZ=this.relatedLayer.supportsZ;this.typeIdField=this.relatedLayer.typeIdField;this.types=this.relatedLayer.types};b.prototype.databaseType=function(){var a=this;return this.relatedLayer.databaseType().then(function(){a._databaseType=a.relatedLayer._databaseType;return a._databaseType})};b.prototype.isTable=
function(){return this.relatedLayer.isTable()};b.prototype._isInFeatureSet=function(a){return p.IdState.InFeatureSet};b.prototype._transformSetWithIdChanges=function(a){};b.prototype._candidateIdTransform=function(a){return a};b.prototype._getSet=function(a){var c=this;return null===this._wset?this._ensureLoaded().then(function(){return c._getFilteredSet("",null,null,null,a)}).then(function(a){return c._wset=a}):h.resolve(this._wset)};b.prototype._changeFeature=function(a){for(var c={},b=0,f=this.fields;b<
f.length;b++){var m=f[b];c[m.name]=a.attributes[m.name]}return new v({geometry:!0===this._removeGeometry?null:a.geometry,attributes:c})};b.prototype._getFilteredSet=function(a,c,b,f,m){var d=this;return this.databaseType().then(function(e){if(d.isTable()&&c&&null!==a&&""!==a)return e=new q([],[],!0,null);e=d._layer.nativeCapabilities();if(!1===e.canQueryRelated)return e=new q([],[],!0,null);if(e.capabilities.queryRelated&&e.capabilities.queryRelated.supportsPagination)return d._getFilteredSetUsingPaging(a,
c,b,f,m);var g="",n=!1;null!==f&&e.capabilities&&e.capabilities.queryRelated&&!0===e.capabilities.queryRelated.supportsOrderBy&&(g=f.constructClause(),n=!0);var k=new r;k.objectIds=[d._findObjectId];var h=null!==d._overrideFields?d._overrideFields:d._fieldsIncludingObjectId(d.relatedLayer.fields?d.relatedLayer.fields.map(function(a){return a.name}):["*"]);k.outFields=h;k.relationshipId=d.relationship.id;k.where="1\x3d1";h=!0;!0===d._removeGeometry&&(h=!1);k.returnGeometry=h;d._requestStandardised&&
(k.sqlFormat="standard");k.outSpatialReference=d.spatialReference;k.orderByFields=""!==g?g.split(","):null;return e.source.queryRelatedFeatures(k).then(function(e){d._checkCancelled(m);var f=e[d._findObjectId]?e[d._findObjectId].features:[];e=[];for(var g=0;g<f.length;g++)d._featureCache[f[g].attributes[d._layer.objectIdField]]=f[g],e.push(f[g].attributes[d._layer.objectIdField]);f=c&&null!==a&&""!==a;g=null!==b&&void 0!==b;return new q(f||g?e:[],f||g?[]:e,n,null)})})};b.prototype._fieldsIncludingObjectId=
function(a){if(null===a)return[this.objectIdField];a=a.slice(0);if(-1<a.indexOf("*"))return a;for(var c=!1,b=0;b<a.length;b++)if(a[b].toUpperCase()===this.objectIdField.toUpperCase()){c=!0;break}!1===c&&a.push(this.objectIdField);return a};b.prototype._getFilteredSetUsingPaging=function(a,c,b,f,m){var d=this;try{var e="",g=!1,n=this._layer.nativeCapabilities();null!==f&&n&&n.capabilities.queryRelated&&!0===n.capabilities.queryRelated.supportsOrderBy&&(e=f.constructClause(),g=!0);return this.databaseType().then(function(f){f=
d._maxQueryRate();void 0!==n.maxRecordCount&&n.maxRecordCount<f&&(f=n.maxRecordCount);var k=c&&null!==a&&""!==a,h=null!==b&&void 0!==b,l=null,p=!0;!0===d._removeGeometry&&(p=!1);var r=null!==d._overrideFields?d._overrideFields:d._fieldsIncludingObjectId(d.relatedLayer.fields?d.relatedLayer.fields.map(function(a){return a.name}):["*"]),l=new q(k||h?["GETPAGES"]:[],k||h?[]:["GETPAGES"],g,{outFields:r.join(","),resultRecordCount:f,resultOffset:0,objectIds:[d._findObjectId],where:"1\x3d1",orderByFields:e,
returnGeometry:p,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}});return d._expandPagedSet(l,f,0,0,m).then(function(){return l})})}catch(k){return h.reject(k)}};b.prototype._expandPagedSet=function(a,c,b,f,h){return this._expandPagedSetFeatureSet(a,c,b,f,h)};b.prototype._clonePageDefinition=function(a){return null===a?null:!0!==a.groupbypage?{groupbypage:!1,outFields:a.outFields,resultRecordCount:a.resultRecordCount,resultOffset:a.resultOffset,where:a.where,objectIds:a.objectIds,
orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}:{groupbypage:!0,outFields:a.outFields,resultRecordCount:a.resultRecordCount,useOIDpagination:a.useOIDpagination,generatedOid:a.generatedOid,groupByFieldsForStatistics:a.groupByFieldsForStatistics,resultOffset:a.resultOffset,outStatistics:a.outStatistics,geometry:a.geometry,where:a.where,objectIds:a.objectIds,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,
internal:a.internal}};b.prototype._getPhysicalPage=function(a,c,b){var f=this;try{var g=a.pagesDefinition.internal.lastRetrieved,d=this._layer.nativeCapabilities(),e=new r;!0===this._requestStandardised&&(e.sqlFormat="standard");e.relationshipId=this.relationship.id;e.objectIds=a.pagesDefinition.objectIds;e.resultOffset=a.pagesDefinition.internal.lastRetrieved;e.resultRecordCount=a.pagesDefinition.resultRecordCount;e.outFields=a.pagesDefinition.outFields.split(",");e.where=a.pagesDefinition.where;
e.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;e.returnGeometry=a.pagesDefinition.returnGeometry;e.outSpatialReference=this.spatialReference;return d.source.queryRelatedFeatures(e).then(function(c){f._checkCancelled(b);if(a.pagesDefinition.internal.lastRetrieved!==g)return 0;for(var e=c[f._findObjectId]?c[f._findObjectId].features:[],d=0;d<e.length;d++)a.pagesDefinition.internal.set[g+d]=e[d].attributes[f._layer.objectIdField];for(d=0;d<e.length;d++)f._featureCache[e[d].attributes[f._layer.objectIdField]]=
e[d];c=c[f._findObjectId]?!1===c[f._findObjectId].exceededTransferLimit:!0;e.length!==a.pagesDefinition.resultRecordCount&&c&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=g+e.length;return e.length})}catch(l){return h.reject(l)}};b.prototype._getFeatures=function(a,c,b,f){var g=this,d=[];-1!==c&&void 0===this._featureCache[c]&&d.push(c);var e=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(a,e,f))return this._expandPagedSet(a,e,0,0,f).then(function(d){return g._getFeatures(a,
c,b,f)});for(var e=0,l=a._lastFetchedIndex;l<a._known.length;l++){e++;e<=b&&(a._lastFetchedIndex+=1);if("GETPAGES"!==a._known[l]&&void 0===this._featureCache[a._known[l]]&&(a._known[l]!==c&&d.push(a._known[l]),d.length>b))break;if(e>=b&&0===d.length)break}return 0===d.length?h.resolve("success"):h.reject(Error("Unaccounted for Features. Not in Feature Collection"))};b.prototype._refineSetBlock=function(a,c,b){return h.resolve(a)};b.prototype._stat=function(a,c,b,f,m,d,e){return h.resolve({calculated:!1})};
b.prototype._canDoAggregates=function(a,c,b,f,m){return h.resolve(!1)};b.prototype.relationshipMetaData=function(){return this.relatedLayer.relationshipMetaData()};b.prototype.serviceUrl=function(){return this.relatedLayer.serviceUrl()};b.prototype.queryAttachments=function(a,c,b,f){return this.relatedLayer.queryAttachments(a,c,b,f)};b.prototype.getFeatureByObjectId=function(a,b){return this.relatedLayer.getFeatureByObjectId(a,b)};return b}(w)});