// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../renderers/support/HeatmapColorStop"],function(g,e,f){Object.defineProperty(e,"__esModule",{value:!0});e.getHeatmapRampStops=function(a){a=a.colorStops;var c=a.length-1;if(a&&a[0]){var b=a[c];b&&1!==b.ratio&&(a=a.slice(0),a.push(new f.HeatmapColorStop({ratio:1,color:b.color})),c++)}return a.map(function(a,b){var d="";0===b?d="low":b===c&&(d="high");return{color:a.color,label:d,ratio:a.ratio,offset:1-a.ratio}}).reverse()}});