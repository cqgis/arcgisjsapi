// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/_base/kernel ../../../core/Accessor ../../../core/accessorSupport/decorators ../state/Constraints".split(" "),function(b,d,h,e,f,k,c,g){Object.defineProperty(d,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.min=g.AltitudeDefault.min;a.max=g.AltitudeDefault.max;return a}h(a,b);Object.defineProperty(a.prototype,"mode",{get:function(){f.deprecated("esri.views.SceneView.constraints.altitude.mode is deprecated. The altitude constraint no longer applies to local scenes and does not have an automatic mode anymore.",
"","4.6");return"manual"},set:function(a){f.deprecated("esri.views.SceneView.constraints.altitude.mode is deprecated. The altitude constraint no longer applies to local scenes and does not have an automatic mode anymore.","","4.6")},enumerable:!0,configurable:!0});e([c.property({type:Number})],a.prototype,"min",void 0);e([c.property({type:Number})],a.prototype,"max",void 0);return a=e([c.subclass("esri.views.3d.constraints.AltitudeConstraint")],a)}(c.declared(k));d.AltitudeConstraint=b;d.default=
b});