// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../languageUtils ./shared ./sqlUtils ../../../core/promiseUtils".split(" "),function(y,d,x,p,q,l){function m(c){for(var a=0,b=0;b<c.length;b++)a+=c[b];return a/c.length}function r(c){for(var a=m(c),b=0,e=0;e<c.length;e++)b+=Math.pow(a-c[e],2);return b/c.length}function t(c){for(var a=m(c),b=0,e=0;e<c.length;e++)b+=Math.pow(a-c[e],2);return b/(c.length-1)}function u(c){for(var a=0,b=0;b<c.length;b++)a+=c[b];return a}function h(c,a,b,e){void 0===e&&(e=!1);try{var g=c.iterator(b);
return l.create(function(b,c){v(g,[],a,e,b,c)})}catch(f){return l.reject(f)}}function v(c,a,b,e,g,f){x.tick(c.next().then(function(n){try{if(null!==n){var d=b.calculateValue(n);null===d?!1===e&&(a[a.length]=d):a[a.length]=d;return v(c,a,b,e,g,f)}g(a)}catch(k){f(k)}},f))}function w(c,a,b,e,g){return c.next().then(function(f){return null!==f?(f=e.calculateValue(f),void 0!==f&&null!==f&&void 0===a[f]&&(b.push(f),a[f]=1),b.length>=g&&-1!==g?b:w(c,a,b,e,g)):b})}Object.defineProperty(d,"__esModule",{value:!0});
d.decodeStatType=function(c){switch(c.toLowerCase()){case "distinct":return"distinct";case "avg":case "mean":return"avg";case "min":return"min";case "sum":return"sum";case "max":return"max";case "stdev":case "stddev":return"stddev";case "var":case "variance":return"var";case "count":return"count"}return""};d.calculateStat=function(c,a,b){void 0===b&&(b=1E3);switch(c.toLowerCase()){case "distinct":a:{c=b;b=[];for(var e={},g=[],f=0;f<a.length;f++){if(void 0!==a[f]&&null!==a[f]){var d=a[f];if(p.isNumber(d)||
p.isString(d))void 0===e[d]&&(b.push(d),e[d]=1);else{for(var h=!1,k=0;k<g.length;k++)!0===p.equalityTest(g[k],d)&&(h=!0);!1===h&&(g.push(d),b.push(d))}}if(b.length>=c&&-1!==c){a=b;break a}}a=b}return a;case "avg":case "mean":return m(a);case "min":return Math.min.apply(Math,a);case "sum":return u(a);case "max":return Math.max.apply(Math,a);case "stdev":case "stddev":return Math.sqrt(r(a));case "var":case "variance":return r(a);case "count":return a.length}return 0};d.min=function(c,a,b){return h(c,
a,b,!0).then(function(a){return 0===a.length?null:Math.min.apply(Math,a)})};d.max=function(c,a,b){return h(c,a,b,!0).then(function(a){return 0===a.length?null:Math.max.apply(Math,a)})};d.mean=function(c,a,b){var e="";!1===q.isSingleField(a)&&(e=q.predictType(a,c.fields,null));return h(c,a,b,!0).then(function(a){if(0===a.length)return null;a=m(a);if(null===a)return a;"integer"===e&&(a=+a,a=isFinite(a)?a-a%1||(0>a?-0:0===a?a:0):a);return a})};d.variance=function(c,a,b){return h(c,a,b,!0).then(function(a){return 0===
a.length?null:t(a)})};d.stdev=function(c,a,b){return h(c,a,b,!0).then(function(a){return 0===a.length?null:Math.sqrt(t(a))})};d.sum=function(c,a,b){return h(c,a,b,!0).then(function(a){return 0===a.length?null:u(a)})};d.count=function(c,a){try{return c.iterator(a).count()}catch(b){return l.reject(b)}};d.distinct=function(c,a,b,e){void 0===b&&(b=1E3);void 0===e&&(e=null);var d;try{var f=c.iterator(e);d=w(f,{},[],a,b)}catch(n){d=l.reject(n)}return d}});