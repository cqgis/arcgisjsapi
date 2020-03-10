// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../PopupTemplate ../request ../core/arrayUtils ../core/Error ../core/lang ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/object ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators ./Layer ./mixins/ArcGISService ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./mixins/SceneService ./pointCloudFilters/jsonUtils ./pointCloudFilters/typeUtils ./support/commonProperties ./support/Field ./support/fieldProperties ./support/FieldsIndex ../popup/ExpressionInfo ../renderers/support/pointCloud/jsonUtils ../renderers/support/pointCloud/typeUtils ../support/popupUtils".split(" "),
function(v,S,w,x,d,l,m,y,z,n,e,A,B,C,D,E,p,F,c,G,H,I,J,K,L,f,M,g,h,N,O,q,P,r,Q){function t(c,b,a){c&&((c=P.read(c,b,a)||void 0)||k.error("Failed to create renderer",{rendererDefinition:c,layer:this,context:a}));return c}var k=B.getLogger("esri.layers.PointCloudLayer"),R=N.defineFieldProperties();return function(u){function b(a,b){a=u.call(this)||this;a.operationalLayerType="PointCloudLayer";a.popupEnabled=!0;a.popupTemplate=null;a.opacity=1;a.filters=[];a.fields=null;a.outFields=null;a.path=null;
a.legendEnabled=!0;a.renderer=null;a.type="point-cloud";return a}x(b,u);b.prototype.normalizeCtorArgs=function(a,b){return"string"===typeof a?w({url:a},b):a};Object.defineProperty(b.prototype,"defaultPopupTemplate",{get:function(){return this.attributeStorageInfo?this.createPopupTemplate():null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fieldsIndex",{get:function(){return new O(this.fields)},enumerable:!0,configurable:!0});b.prototype.getFieldDomain=function(a){return(a=this.fieldsIndex.get(a))&&
a.domain?a.domain:null};b.prototype.readServiceFields=function(a,b,c){return Array.isArray(a)?a.map(function(a){var b=new h;"FieldTypeInteger"===a.type&&(a=A.clone(a),a.type="esriFieldTypeInteger");b.read(a,c);return b}):Array.isArray(b.attributeStorageInfo)?b.attributeStorageInfo.map(function(a){return new h({name:a.name,type:"ELEVATION"===a.name?"double":"integer"})}):null};Object.defineProperty(b.prototype,"elevationInfo",{set:function(a){this._set("elevationInfo",a);this._validateElevationInfo()},
enumerable:!0,configurable:!0});b.prototype.writeRenderer=function(a,b,c,d){E.setDeepValue("layerDefinition.drawingInfo.renderer",a.write(null,d),b)};b.prototype.load=function(a){var b=this,c=C.isSome(a)?a.signal:null;a=this.loadFromPortal({supportedTypes:["Scene Service"]},a).then(function(){return b._fetchService(c)},function(){return b._fetchService(c)});this.addResolvingPromise(a);return this.when()};b.prototype.createPopupTemplate=function(a){a=Q.createPopupTemplate(this,a);this.formatPopupTemplateReturnsField(a);
this.formatPopupTemplateRGBField(a);return a};b.prototype.formatPopupTemplateReturnsField=function(a){var b=this.fieldsIndex.get("RETURNS");if(b){var c=n.find(a.fieldInfos,function(a){return a.fieldName===b.name});if(c){var d=new q({name:"pcl-returns-decoded",title:b.alias||b.name,expression:"\n        var returnValue \x3d $feature."+b.name+';\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      '});a.expressionInfos=(a.expressionInfos||[]).concat([d]);c.fieldName="expression/pcl-returns-decoded"}}};
b.prototype.formatPopupTemplateRGBField=function(a){var b=this.fieldsIndex.get("RGB");if(b){var c=n.find(a.fieldInfos,function(a){return a.fieldName===b.name});if(c){var d=new q({name:"pcl-rgb-decoded",title:b.alias||b.name,expression:"\n        var rgb \x3d $feature."+b.name+';\n        var red \x3d Floor(rgb / 65536, 0);\n        var green \x3d Floor((rgb - (red * 65536)) / 256,0);\n        var blue \x3d rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      '});
a.expressionInfos=(a.expressionInfos||[]).concat([d]);c.fieldName="expression/pcl-rgb-decoded"}}};b.prototype.queryCachedStatistics=function(a,b){return m(this,void 0,void 0,function(){var c,d,f,g,h;return l(this,function(k){switch(k.label){case 0:return[4,this.load(b)];case 1:k.sent();if(!this.attributeStorageInfo)throw new e("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");c=this.fieldsIndex.get(a);if(!c)throw new e("pointcloudlayer:field-unexisting","Field '"+
a+"' does not exist on the layer");d=0;for(f=this.attributeStorageInfo;d<f.length;d++)if(g=f[d],g.name===c.name)return h=F.join(this.parsedUrl.path,"./statistics/"+g.key),[2,z(h,{query:{f:"json"},responseType:"json",signal:b?b.signal:null}).then(function(a){return a.data})];throw new e("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available");}})})};b.prototype.importLayerViewModule=function(a){return m(this,void 0,void 0,function(){return l(this,function(b){switch(a.type){case "2d":return[2,
p.reject(new e("point-cloud-layer:view-not-supported","PointCloudLayer is only supported in 3D"))];case "3d":return[2,p.create(function(a){return v(["../views/3d/layers/PointCloudLayerView3D"],a)})]}return[2]})})};b.prototype._validateLayer=function(a){if(a.layerType&&"PointCloud"!==a.layerType)throw new e("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:a.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new e("layer:service-version-not-supported",
"Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(2<this.version.major)throw new e("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});};b.prototype.hasCachedStatistics=function(a){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(function(b){return b.name===a})};b.prototype._validateElevationInfo=function(){var a=this.elevationInfo;
a&&("absolute-height"!==a.mode&&k.warn(".elevationInfo\x3d","Point cloud layers only support absolute-height elevation mode"),a.featureExpressionInfo&&"0"!==a.featureExpressionInfo.expression&&k.warn(".elevationInfo\x3d","Point cloud layers do not support featureExpressionInfo"))};d([c.property({type:["PointCloudLayer"]})],b.prototype,"operationalLayerType",void 0);d([c.property(g.popupEnabled)],b.prototype,"popupEnabled",void 0);d([c.property({type:y,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],
b.prototype,"popupTemplate",void 0);d([c.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo"]})],b.prototype,"defaultPopupTemplate",null);d([c.property({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],b.prototype,"opacity",void 0);d([c.property({type:["show","hide"]})],b.prototype,"listMode",void 0);d([c.property({types:[M.types],json:{origins:{service:{read:{source:"filters",reader:f.read}}},read:{source:"layerDefinition.filters",
reader:f.read},write:{target:"layerDefinition.filters",writer:f.write}}})],b.prototype,"filters",void 0);d([c.property({type:[h]})],b.prototype,"fields",void 0);d([c.property({readOnly:!0,dependsOn:["fields"]})],b.prototype,"fieldsIndex",null);d([c.reader("service","fields",["fields","attributeStorageInfo"])],b.prototype,"readServiceFields",null);d([c.property(R.outFields)],b.prototype,"outFields",void 0);d([c.property({readOnly:!0})],b.prototype,"attributeStorageInfo",void 0);d([c.property(g.elevationInfo)],
b.prototype,"elevationInfo",null);d([c.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],b.prototype,"path",void 0);d([c.property(g.legendEnabled)],b.prototype,"legendEnabled",void 0);d([c.property({types:r.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:t}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:t},write:{target:{"layerDefinition.drawingInfo.renderer":{types:r.types},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],
b.prototype,"renderer",void 0);d([c.writer("renderer")],b.prototype,"writeRenderer",null);d([c.property({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0);return b=d([c.subclass("esri.layers.PointCloudLayer")],b)}(c.declared(K.ScaleRangeLayer(L.SceneService(H.ArcGISService(I.OperationalLayer(J.PortalLayer(D.MultiOriginJSONMixin(G))))))))});