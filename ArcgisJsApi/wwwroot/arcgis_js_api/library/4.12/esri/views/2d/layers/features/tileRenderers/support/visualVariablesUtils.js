// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/screenUtils","../../../../engine","../../../../../3d/layers/support/FastSymbolUpdates"],function(w,f,p,k,u){function l(a){return{value:a.value,size:p.toPt(a.size)}}function m(a){return a.map(function(a){return l(a)})}function q(a){return"string"===typeof a||"number"===typeof a?p.toPt(a):{type:"size",expression:a.expression,stops:m(a.stops)}}function v(a){var c={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(k.Utils.isString(a.field))if(a.stops){if(8<
a.stops.length)return null;var b=a.stops;for(a=0;8>a;++a){var r=b[Math.min(a,b.length-1)];c.values[a]=r.value;c.opacities[a]=r.opacity}}else return null;else if(a.stops&&0<=a.stops.length)for(b=a.stops&&0<=a.stops.length&&a.stops[0].opacity,a=0;8>a;a++)c.values[a]=Infinity,c.opacities[a]=b;else return null;return c}Object.defineProperty(f,"__esModule",{value:!0});var n=k.enums.WGLVVFlag;f.getVisualVariableSizeValueRepresentationRatio=function(a,c){if(!a||!c)return a;switch(c){case "radius":case "distance":return 2*
a;case "area":return Math.sqrt(a)}return a};f.stopToSizeStop=l;f.normalizeSizeStops=m;f.normalizeSizeElement=q;f.getVisualVariablesFields=function(a){var c=a&&0<a.length?{}:null;c&&a.forEach(function(a){var b=a.type;a.field&&(c[b]=a.field)});return c};f.convertVisualVariables=function(a){var c=a&&0<a.length?{}:null,b=c?{}:null;if(!c)return{vvFields:c,vvRanges:b};for(var f=0;f<a.length;f++){var d=a[f],g=d.type;d.field&&(c[g]=d.field);if("size"===g){b.size||(b.size={});var e=d;switch(k.getTypeOfSizeVisualVariable(e)){case n.SIZE_MINMAX_VALUE:b.size.minMaxValue=
{minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:q(e.minSize),maxSize:q(e.maxSize)};break;case n.SIZE_SCALE_STOPS:b.size.scaleStops={stops:m(e.stops)};break;case n.SIZE_FIELD_STOPS:for(var d=[],g=[],e=m(e.stops),l=e.length,h=0;6>h;h++){var t=e[Math.min(h,l-1)];d.push(t.value);g.push(p.pt2px(t.size))}b.size.fieldStops={values:d,sizes:g};break;case n.SIZE_UNIT_VALUE:b.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===g)for(d=u.convertVisualVariables([d],
{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null}),b.color=d.color,h=0;32>h;h+=4)k.color.premultiplyAlpha(b.color.colors,h,!0);else"opacity"===g?b.opacity=v(d):"rotation"===g&&(b.rotation={type:d.rotationType})}return{vvFields:c,vvRanges:b}}});