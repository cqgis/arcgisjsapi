// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/maybe ../visualVariables/support/visualVariableUtils ../../support/arcadeUtils".split(" "),function(q,f,l,m,n,p){function h(b,a){if(!b||b.symbol)return null;a=a.renderer;return b&&a&&a.getObservationRenderer?a.getObservationRenderer(b):a}function k(b,a){if(m.isSome(b.symbol))return b.symbol;var c=h(b,a);return c&&c.getSymbol(b,l({},a,{arcadeUtils:p}))}Object.defineProperty(f,"__esModule",{value:!0});f.getRenderer=h;f.getSymbol=k;
f.getRenderingInfo=function(b,a){var c=h(b,a),d=k(b,a);if(!d)return null;d={renderer:c,symbol:d};if(!(c&&"visualVariables"in c&&c.visualVariables))return d;var e=["proportional","proportional","proportional"],f=0;for(b=n.getVisualVariableValues(c,b,a);f<b.length;f++){c=b[f];a=c.variable;var g=c.value;"color"===a.type?d.color=g.toRgba():"size"===a.type?"outline"===a.target?d.outlineSize=g:(c=a.axis,a=a.useSymbolValue?"symbolValue":g,"width"===c?e[0]=a:"depth"===c?e[1]=a:"height"===c?e[2]=a:e[0]="width-and-depth"===
c?e[1]=a:e[1]=e[2]=a):"opacity"===a.type?d.opacity=g:"rotation"===a.type&&"tilt"===a.axis?d.tilt=g:"rotation"===a.type&&"roll"===a.axis?d.roll=g:"rotation"===a.type&&(d.heading=g)}if(isFinite(e[0])||isFinite(e[1])||isFinite(e[2]))d.size=e;return d}});