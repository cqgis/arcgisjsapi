// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/declared ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass".split(" "),function(r,t,l,b,m,d,n,p,c,q){var f=new d.default({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),
g=new d.default({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),h=new d.default({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),k=new d.default({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),e=new d.default({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",
esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"});return function(d){function a(a){a=d.call(this)||this;a.accumulateAttributes=null;a.attributeParameterValues=null;a.defaultBreaks=null;a.doNotLocateOnRestrictedElements=!0;a.excludeSourcesFromPolygons=null;a.facilities=null;a.impedanceAttribute=null;a.mergeSimilarPolygonRanges=
!1;a.outputGeometryPrecision=null;a.outputGeometryPrecisionUnits=null;a.outputLines=null;a.outputPolygons=null;a.outSpatialReference=null;a.overlapLines=!1;a.overlapPolygons=!1;a.pointBarriers=null;a.polygonBarriers=null;a.polylineBarriers=null;a.restrictionAttributes=null;a.restrictUTurns=null;a.returnFacilities=!1;a.returnPointBarriers=!1;a.returnPolygonBarriers=!1;a.returnPolylineBarriers=!1;a.splitLinesAtBreaks=!1;a.splitPolygonsAtBreaks=!1;a.timeOfDay=null;a.travelDirection=null;a.travelMode=
null;a.trimOuterPolygon=!1;a.trimPolygonDistance=null;a.trimPolygonDistanceUnits=null;a.useHierarchy=null;return a}l(a,d);b([c.property({type:[String],json:{write:!0}})],a.prototype,"accumulateAttributes",void 0);b([c.property({json:{write:!0}})],a.prototype,"attributeParameterValues",void 0);b([c.property({type:[Number],json:{write:!0}})],a.prototype,"defaultBreaks",void 0);b([c.property({type:Boolean,json:{write:!0}})],a.prototype,"doNotLocateOnRestrictedElements",void 0);b([c.property({type:[String],
json:{write:!0}})],a.prototype,"excludeSourcesFromPolygons",void 0);b([c.property({json:{write:!0}})],a.prototype,"facilities",void 0);b([c.property({type:String,json:{write:!0}})],a.prototype,"impedanceAttribute",void 0);b([c.property({type:Boolean,json:{write:!0}})],a.prototype,"mergeSimilarPolygonRanges",void 0);b([c.property({type:Number,json:{write:!0}})],a.prototype,"outputGeometryPrecision",void 0);b([c.property({type:e.apiValues,json:{read:{reader:e.read},write:{writer:e.write}}})],a.prototype,
"outputGeometryPrecisionUnits",void 0);b([c.property({type:f.apiValues,json:{read:{reader:f.read},write:{writer:f.write}}})],a.prototype,"outputLines",void 0);b([c.property({type:g.apiValues,json:{read:{reader:g.read},write:{writer:g.write}}})],a.prototype,"outputPolygons",void 0);b([c.property({type:m.SpatialReference,json:{write:!0}})],a.prototype,"outSpatialReference",void 0);b([c.property({type:Boolean,json:{write:!0}})],a.prototype,"overlapLines",void 0);b([c.property({type:Boolean,json:{write:!0}})],
a.prototype,"overlapPolygons",void 0);b([c.property({json:{write:!0}})],a.prototype,"pointBarriers",void 0);b([c.property({json:{write:!0}})],a.prototype,"polygonBarriers",void 0);b([c.property({json:{write:!0}})],a.prototype,"polylineBarriers",void 0);b([c.property({type:[String],json:{write:!0}})],a.prototype,"restrictionAttributes",void 0);b([c.property({type:h.apiValues,json:{read:{reader:h.read},write:{writer:h.write}}})],a.prototype,"restrictUTurns",void 0);b([c.property({type:Boolean,json:{write:!0}})],
a.prototype,"returnFacilities",void 0);b([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnPointBarriers",void 0);b([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnPolygonBarriers",void 0);b([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnPolylineBarriers",void 0);b([c.property({type:Boolean,json:{write:!0}})],a.prototype,"splitLinesAtBreaks",void 0);b([c.property({type:Boolean,json:{write:!0}})],a.prototype,"splitPolygonsAtBreaks",void 0);b([c.property({type:Date,
json:{type:Number,write:!0}})],a.prototype,"timeOfDay",void 0);b([c.property({type:k.apiValues,json:{read:{reader:k.read},write:{writer:k.write}}})],a.prototype,"travelDirection",void 0);b([c.property({json:{write:!0}})],a.prototype,"travelMode",void 0);b([c.property({type:Boolean,json:{write:!0}})],a.prototype,"trimOuterPolygon",void 0);b([c.property({type:Number,json:{write:!0}})],a.prototype,"trimPolygonDistance",void 0);b([c.property({type:e.apiValues,json:{read:{reader:e.read},write:{writer:e.write}}})],
a.prototype,"trimPolygonDistanceUnits",void 0);b([c.property({type:Boolean,json:{write:!0}})],a.prototype,"useHierarchy",void 0);return a=b([q.subclass("esri.tasks.support.ServiceAreaParameters")],a)}(p.declared(n.JSONSupport))});