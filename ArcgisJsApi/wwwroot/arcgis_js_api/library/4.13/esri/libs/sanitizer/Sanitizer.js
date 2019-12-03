// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
!function(g,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.Sanitizer=a():g.Sanitizer=a()}(this,function(){return function(g){function a(k){if(b[k])return b[k].exports;var d=b[k]={i:k,l:!1,exports:{}};return g[k].call(d.exports,d,d.exports,a),d.l=!0,d.exports}var b={};return a.m=g,a.c=b,a.d=function(b,d,f){a.o(b,d)||Object.defineProperty(b,d,{enumerable:!0,get:f})},a.r=function(a){"undefined"!=
typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},a.t=function(b,d){if((1&d&&(b=a(b)),8&d)||4&d&&"object"==typeof b&&b&&b.__esModule)return b;var f=Object.create(null);if(a.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:b}),2&d&&"string"!=typeof b)for(var h in b)a.d(f,h,function(a){return b[a]}.bind(null,h));return f},a.n=function(b){var d=b&&b.__esModule?function(){return b.default}:function(){return b};
return a.d(d,"a",d),d},a.o=function(b,a){return Object.prototype.hasOwnProperty.call(b,a)},a.p="",a(a.s=8)}([function(g,a,b){function k(b,c){return(new h(c)).process(b)}var d=b(3),f=b(6),h=b(11),l;for(l in(a=g.exports=k).filterXSS=k,a.FilterXSS=h,d)a[l]=d[l];for(l in f)a[l]=f[l];"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=g.exports)},function(g,a,b){var k=b(4),d=b(9),f;for(f in(a=g.exports=function(b,a){return(new d(a)).process(b)}).FilterCSS=
d,k)a[f]=k[f]},function(g,a){g.exports={indexOf:function(b,a){var d,f;if(Array.prototype.indexOf)return b.indexOf(a);d=0;for(f=b.length;d<f;d++)if(b[d]===a)return d;return-1},forEach:function(b,a,d){var f,h;if(Array.prototype.forEach)return b.forEach(a,d);f=0;for(h=b.length;f<h;f++)a.call(d,b[f],f,b)},trim:function(b){return String.prototype.trim?b.trim():b.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(b){return(b=/\s|\n|\t/.exec(b))?b.index:-1}}},function(g,a,b){function k(c){return c.replace(x,
"\x26lt;").replace(m,"\x26gt;")}function d(c){return c.replace(q,"\x26quot;")}function f(c){return c.replace(v,'"')}function h(c){return c.replace(r,function(c,b){return"x"===b[0]||"X"===b[0]?String.fromCharCode(parseInt(b.substr(1),16)):String.fromCharCode(parseInt(b,10))})}function l(c){return c.replace(u,":").replace(B," ")}function e(c){for(var b="",a=0,e=c.length;a<e;a++)b+=32>c.charCodeAt(a)?" ":c.charAt(a);return p.trim(b)}function c(c){return c=e(c=l(c=h(c=f(c))))}function n(c){return c=k(c=
d(c))}g=b(1).FilterCSS;var t=b(1).getDefaultWhiteList,p=b(2),y=new g,x=/</g,m=/>/g,q=/"/g,v=/&quot;/g,r=/&#([a-zA-Z0-9]*);?/gim,u=/&colon;?/gim,B=/&newline;?/gim,w=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,z=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,A=/u\s*r\s*l\s*\(.*/gi,C=/\x3c!--[\s\S]*?--\x3e/g;a.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls",
"loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],
sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:"autoplay controls loop preload src height width".split(" ")};a.getDefaultWhiteList=function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],
audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],
small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:"autoplay controls loop preload src height width".split(" ")}};a.onTag=function(c,b,a){};a.onIgnoreTag=function(c,b,a){};a.onTagAttr=function(c,b,a){};a.onIgnoreTagAttr=function(c,b,a){};a.safeAttrValue=
function(b,a,e,d){if(e=c(e),"href"===a||"src"===a){if("#"===(e=p.trim(e)))return"#";if("http://"!==e.substr(0,7)&&"https://"!==e.substr(0,8)&&"mailto:"!==e.substr(0,7)&&"tel:"!==e.substr(0,4)&&"#"!==e[0]&&"/"!==e[0])return""}else if("background"===a){if(w.lastIndex=0,w.test(e))return""}else if("style"===a){if((z.lastIndex=0,z.test(e))||(A.lastIndex=0,A.test(e)&&(w.lastIndex=0,w.test(e))))return"";!1!==d&&(e=(d=d||y).process(e))}return e=n(e)};a.escapeHtml=k;a.escapeQuote=d;a.unescapeQuote=f;a.escapeHtmlEntities=
h;a.escapeDangerHtml5Entities=l;a.clearNonPrintableCharacter=e;a.friendlyAttrValue=c;a.escapeAttrValue=n;a.onIgnoreTagStripAll=function(){return""};a.StripTagBody=function(c,b){"function"!=typeof b&&(b=function(){});var a=!Array.isArray(c),e=[],d=!1;return{onIgnoreTag:function(n,f,l){return a||-1!==p.indexOf(c,n)?l.isClosing?(e.push([!1!==d?d:l.position,l.position+10]),d=!1,"[/removed]"):(d||(d=l.position),"[removed]"):b(n,f,l)},remove:function(c){var b="",a=0;return p.forEach(e,function(e){b+=c.slice(a,
e[0]);a=e[1]}),b+=c.slice(a)}}};a.stripCommentTag=function(c){return c.replace(C,"")};a.stripBlankChar=function(c){c=c.split("");return(c=c.filter(function(c){c=c.charCodeAt(0);return 127!==c&&(!(31>=c)||10===c||13===c)})).join("")};a.cssFilter=y;a.getDefaultCSSWhiteList=t},function(g,a){function b(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,
"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,
"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,
"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,
"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,
float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,
"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,
"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,
"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,
"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,
"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,
"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,
"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}}var k=/javascript\s*\:/gim;a.whiteList=b();a.getDefaultWhiteList=b;a.onAttr=function(b,a,h){};a.onIgnoreAttr=function(b,a,h){};a.safeAttrValue=function(b,a){return k.test(a)?"":a}},function(g,a){g.exports=
{indexOf:function(b,a){var d,f;if(Array.prototype.indexOf)return b.indexOf(a);d=0;for(f=b.length;d<f;d++)if(b[d]===a)return d;return-1},forEach:function(b,a,d){var f,h;if(Array.prototype.forEach)return b.forEach(a,d);f=0;for(h=b.length;f<h;f++)a.call(d,b[f],f,b)},trim:function(a){return String.prototype.trim?a.trim():a.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(a){return String.prototype.trimRight?a.trimRight():a.replace(/(\s*$)/g,"")}}},function(g,a,b){function k(a,c){for(;c<a.length;c++){var b=
a[c];if(" "!==b)return"\x3d"===b?c:-1}}function d(a,c){for(;0<c;c--){var b=a[c];if(" "!==b)return"\x3d"===b?c:-1}}function f(a){return'"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1]?a.substr(1,a.length-2):a}var h=b(2),l=/[^a-zA-Z0-9_:\.\-]/gim;a.parseTag=function(a,c,b){for(var d="",e=0,l=!1,f=!1,n=0,k=a.length,g="",r="",n=0;n<k;n++)r=a.charAt(n),!1===l?"\x3c"===r&&(l=n):!1===f?"\x3c"===r?(d+=b(a.slice(e,n)),e=l=n):"\x3e"===r?(d+=b(a.slice(e,l)),e=r=a.slice(l,n+1),g=h.spaceIndex(e),
e=-1===g?e.slice(1,-1):e.slice(1,g+1),g=("/"===(e=h.trim(e).toLowerCase()).slice(0,1)&&(e=e.slice(1)),"/"===e.slice(-1)&&(e=e.slice(0,-1)),e),d+=c(l,d.length,g,r,"\x3c/"===r.slice(0,2)),e=n+1,l=!1):'"'!==r&&"'"!==r||"\x3d"!==a.charAt(n-1)||(f=r):r===f&&(f=!1);return e<a.length&&(d+=b(a.substr(e))),d};a.parseAttr=function(a,c){function b(a,b){1>(a=(a=h.trim(a)).replace(l,"").toLowerCase()).length||(a=c(a,b||""))&&p.push(a)}for(var e=0,p=[],g=!1,x=a.length,m=0;m<x;m++){var q;q=a.charAt(m);if(!1!==g||
"\x3d"!==q)if(!1===g||m!==e||'"'!==q&&"'"!==q||"\x3d"!==a.charAt(m-1))/\s|\n|\t/.test(q)&&((a=a.replace(/\s|\n|\t/g," "),!1===g)?-1===(q=k(a,m))?(b(h.trim(a.slice(e,m))),g=!1,e=m+1):m=q-1:-1===(q=d(a,m-1))&&(b(g,f(h.trim(a.slice(e,m)))),g=!1,e=m+1));else{if(-1===(q=a.indexOf(q,m+1)))break;b(g,h.trim(a.slice(e+1,q)));g=!1;e=(m=q)+1}else g=a.slice(e,m),e=m+1}return e<a.length&&(!1===g?b(a.slice(e)):b(g,f(h.trim(a.slice(e))))),h.trim(p.join(" "))}},function(g,a){var b,k;a=Object.prototype;var d=Function.prototype.toString,
f=a.hasOwnProperty,h=d.call(Object),l=a.toString,e=(b=Object.getPrototypeOf,k=Object,function(a){return b(k(a))});g.exports=function(a){var b;if(!(b=!a||"object"!=typeof a||"[object Object]"!=l.call(a))&&(b=!1,null!=a&&"function"!=typeof a.toString))try{b=!!(a+"")}catch(t){}if(b)return!1;a=e(a);if(null===a)return!0;a=f.call(a,"constructor")&&a.constructor;return"function"==typeof a&&a instanceof a&&d.call(a)==h}},function(g,a,b){b.r(a);b.d(a,"Sanitizer",function(){return f});g=b(7);var k=b.n(g);g=
b(0);var d=b.n(g),f=function(){function a(a,b){var c,e=this;this.arcgisWhiteList={a:["href","target","style"],img:"src width height border alt style".split(" "),video:"autoplay controls height loop muted poster preload src width".split(" "),audio:"autoplay controls loop muted preload src".split(" "),span:["style"],table:"width height cellpadding cellspacing border style".split(" "),div:["style","align"],font:["size","color","style"],tr:["height","valign","align","style"],td:"height width valign align colspan rowspan nowrap style".split(" "),
th:"height width valign align colspan rowspan nowrap style".split(" "),p:["style"],b:[],strong:[],i:[],em:[],u:[],br:[],li:[],ul:[],ol:[],hr:[],tbody:[]};this.allowedProtocols="http https mailto iform tel flow lfmobile arcgis-navigator arcgis-appstudio-player arcgis-survey123 arcgis-collector arcgis-workforce arcgis-explorer arcgis-trek2there mspbi comgooglemaps pdfefile pdfehttp pdfehttps boxapp boxemm awb awbs gropen radarscope".split(" ");this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(a,
b,c,l){return"a"===a&&"href"===b||("img"===a||"audio"===a||"video"===a)&&"src"===b?e.sanitizeUrl(c):d.a.safeAttrValue(a,b,c,l)}};a&&!b?c=a:a&&b?(c=Object.create(this.arcgisFilterOptions),Object.keys(a).forEach(function(b){"whiteList"===b?c.whiteList=e._extendObjectOfArrays([e.arcgisWhiteList,a.whiteList||{}]):c[b]=a[b]})):(c=Object.create(this.arcgisFilterOptions)).whiteList=this.arcgisWhiteList;this.xssFilterOptions=c;this._xssFilter=new d.a.FilterXSS(c)}return a.prototype.sanitize=function(a){switch(typeof a){case "number":return isNaN(a)||
!isFinite(a)?null:a;case "boolean":return a;case "string":return this._xssFilter.process(a);case "object":return this._iterateOverObject(a);default:return null}},a.prototype.sanitizeUrl=function(a){var b=this._trim(a.substring(0,a.indexOf(":")));return"/"===a||"#"===a||"#"===a[0]||-1<this.allowedProtocols.indexOf(b.toLowerCase())?d.a.escapeAttrValue(a):""},a.prototype.validate=function(a){var b=this.sanitize(a);return{isValid:a===b,sanitized:b}},a.prototype._extendObjectOfArrays=function(a){var b=
{};return a.forEach(function(a){Object.keys(a).forEach(function(c){Array.isArray(a[c])&&Array.isArray(b[c])?b[c]=b[c].concat(a[c]):b[c]=a[c]})}),b},a.prototype._iterateOverObject=function(a){var b=this;try{var c=!1,d=void 0;if(Array.isArray(a))d=a.reduce(function(a,d){var e=b.validate(d);return e.isValid?a.concat([d]):(c=!0,a.concat([e.sanitized]))},[]);else{if(!k()(a))return null;d=Object.keys(a).reduce(function(d,e){var f=a[e],g=b.validate(f);return g.isValid?d[e]=f:(c=!0,d[e]=g.sanitized),d},{})}return c?
d:a}catch(t){return null}},a.prototype._trim=function(a){return String.prototype.trim?a.trim():a.replace(/(^\s*)|(\s*$)/g,"")},a}()},function(g,a,b){function k(a){var b=a||{},e={},c;for(c in b)e[c]=b[c];(a=e).whiteList=a.whiteList||d.whiteList;a.onAttr=a.onAttr||d.onAttr;a.onIgnoreAttr=a.onIgnoreAttr||d.onIgnoreAttr;a.safeAttrValue=a.safeAttrValue||d.safeAttrValue;this.options=a}var d=b(4),f=b(10);b(5);k.prototype.process=function(a){if(!(a=(a=a||"").toString()))return"";var b=this.options,d=b.whiteList,
c=b.onAttr,g=b.onIgnoreAttr,k=b.safeAttrValue;return f(a,function(a,b,e,f,n){var l=d[e],h=!1;if(!0===l?h=l:"function"==typeof l?h=l(f):l instanceof RegExp&&(h=l.test(f)),!0!==h&&(h=!1),f=k(e,f)){var m;a={position:b,sourcePosition:a,source:n,isWhite:h};return h?null==(m=c(e,f,a))?e+":"+f:m:null==(m=g(e,f,a))?void 0:m}})};g.exports=k},function(g,a,b){var k=b(5);g.exports=function(a,b){function d(){if(!e){var d=k.trim(a.slice(c,g)),f=d.indexOf(":");if(-1!==f){var l=k.trim(d.slice(0,f)),f=k.trim(d.slice(f+
1));l&&(d=b(c,t.length,l,f,d))&&(t+=d+"; ")}}c=g+1}";"!==(a=k.trimRight(a))[a.length-1]&&(a+=";");for(var f=a.length,e=!1,c=0,g=0,t="";g<f;g++){var p=a[g];if("/"===p&&"*"===a[g+1]){p=a.indexOf("*/",g+2);if(-1===p)break;c=(g=p+1)+1;e=!1}else"("===p?e=!0:")"===p?e=!1:";"===p?e||d():"\n"===p&&d()}return k.trim(t)}},function(g,a,b){function k(a){var b=a||{},c={},e;for(e in b)c[e]=b[e];(a=c).stripIgnoreTag&&(a.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),
a.onIgnoreTag=f.onIgnoreTagStripAll);a.whiteList=a.whiteList||f.whiteList;a.onTag=a.onTag||f.onTag;a.onTagAttr=a.onTagAttr||f.onTagAttr;a.onIgnoreTag=a.onIgnoreTag||f.onIgnoreTag;a.onIgnoreTagAttr=a.onIgnoreTagAttr||f.onIgnoreTagAttr;a.safeAttrValue=a.safeAttrValue||f.safeAttrValue;a.escapeHtml=a.escapeHtml||f.escapeHtml;this.options=a;!1===a.css?this.cssFilter=!1:(a.css=a.css||{},this.cssFilter=new d(a.css))}var d=b(1).FilterCSS,f=b(3);a=b(6);var h=a.parseTag,l=a.parseAttr,e=b(2);k.prototype.process=
function(a){if(!(a=(a=a||"").toString()))return"";var b=this.options,c=b.whiteList,d=b.onTag,g=b.onIgnoreTag,k=b.onTagAttr,m=b.onIgnoreTagAttr,q=b.safeAttrValue,v=b.escapeHtml,r=this.cssFilter;b.stripBlankChar&&(a=f.stripBlankChar(a));b.allowCommentTag||(a=f.stripCommentTag(a));var u=!1;b.stripIgnoreTagBody&&(u=f.StripTagBody(b.stripIgnoreTagBody,g),g=u.onIgnoreTag);a=h(a,function(a,b,f,h,n){b={sourcePosition:a,position:b,isClosing:n,isWhite:c.hasOwnProperty(f)};if(null!=(a=d(f,h,b)))return a;if(b.isWhite){if(b.isClosing)return"\x3c/"+
f+"\x3e";a=function(a){var b=e.spaceIndex(a);if(-1===b)return{html:"",closing:"/"===a[a.length-2]};b="/"===(a=e.trim(a.slice(b+1,-1)))[a.length-1];return b&&(a=e.trim(a.slice(0,-1))),{html:a,closing:b}}(h);var p=c[f];b=l(a.html,function(a,b){var c,d=-1!==e.indexOf(p,a);return null==(c=k(f,a,b,d))?d?(b=q(f,a,b,r))?a+'\x3d"'+b+'"':a:null==(c=m(f,a,b,d))?void 0:c:c});h="\x3c"+f;return b&&(h+=" "+b),a.closing&&(h+=" /"),h+="\x3e"}return null==(a=g(f,h,b))?v(h):a},v);return u&&(a=u.remove(a)),a};g.exports=
k}]).Sanitizer});