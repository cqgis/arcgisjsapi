// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../tsSupport/assignHelper","../has","../urlUtils"],function(h,b,g,d,f){Object.defineProperty(b,"__esModule",{value:!0});d=d("esri-built")?"dojo/dojo-lite.js":"dojo/dojo.js";b.DEFAULT_LOADER_URL=f.makeAbsolute(f.removeQueryParameters(h.toUrl(d)));b.DEFAULT_CONFIG={baseUrl:function(){var a=f.removeQueryParameters(h.toUrl("dojo/x.js"));return f.makeAbsolute(a.slice(0,a.length-5))}(),packages:[{name:"esri"},{name:"dojo"},{name:"dojox"},{name:"dstore"},{name:"moment",main:"moment"},
{name:"@dojo"},{name:"cldrjs",main:"dist/cldr"},{name:"globalize",main:"dist/globalize"},{name:"maquette",main:"dist/maquette.umd"},{name:"maquette-css-transitions",main:"dist/maquette-css-transitions.umd"},{name:"maquette-jsx",main:"dist/maquette-jsx.umd"},{name:"tslib",main:"tslib"}],map:{globalize:{cldr:"cldrjs/dist/cldr","cldr/event":"cldrjs/dist/cldr/event","cldr/supplemental":"cldrjs/dist/cldr/supplemental","cldr/unresolved":"cldrjs/dist/cldr/unresolved"}}};b.default=function(a){var e={async:a.async,
isDebug:a.isDebug,locale:a.locale,baseUrl:a.baseUrl,has:g({},a.has),map:g({},a.map),packages:a.packages&&a.packages.concat()||[],paths:g({},a.paths)};a.hasOwnProperty("async")||(e.async=!0);a.hasOwnProperty("isDebug")||(e.isDebug=!1);a.baseUrl||(e.baseUrl=b.DEFAULT_CONFIG.baseUrl);b.DEFAULT_CONFIG.packages.forEach(function(a){a:{for(var b=e.packages,c=0;c<b.length;c++)if(b[c].name===a.name)break a;a=g({},a);c=f.removeQueryParameters(h.toUrl(a.name+"/x.js"));c=c.slice(0,c.length-5);a.location=f.makeAbsolute(c);
b.push(a)}});a=e.map=e.map||{};for(var d=0,l=Object.keys(b.DEFAULT_CONFIG.map);d<l.length;d++){var k=l[d];a[k]||(a[k]=b.DEFAULT_CONFIG.map[k])}return e}});