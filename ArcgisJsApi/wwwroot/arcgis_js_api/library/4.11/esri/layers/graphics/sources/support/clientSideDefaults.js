// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/has","../../../../core/lang"],function(n,b,f,h,d){Object.defineProperty(b,"__esModule",{value:!0});var k={type:"esriSMS",style:"esriSMSCircle",size:6,color:[252,146,31,255],outline:{width:.75,color:[153,153,153,255]}},l={type:"esriSLS",style:"esriSLSSolid",width:1,color:[252,146,31,255]},m={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{width:.75,color:[255,255,255,191]}};b.createDrawingInfo=
function(a){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===a||"esriGeometryMultipoint"===a?k:"esriGeometryPolyline"===a?l:m}}};b.createDefaultAttributesFunction=function(a,b){if(h("csp-restrictions"))return function(){var c;return f((c={},c[b]=null,c),a)};try{var g="this."+b+" \x3d null;",e;for(e in a)g+="this."+e+" \x3d "+JSON.stringify(a[e])+";";var d=new Function(g);return function(){return new d}}catch(c){return function(){var c;return f((c={},c[b]=null,c),a)}}};b.createDefaultTemplate=
function(a){void 0===a&&(a={});return[{name:"New Feature",description:"",prototype:{attributes:d.clone(a)}}]}});