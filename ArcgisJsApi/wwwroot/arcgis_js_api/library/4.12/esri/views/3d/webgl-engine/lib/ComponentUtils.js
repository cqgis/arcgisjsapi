// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/arrayUtils","../../../../core/maybe"],function(n,e,E,v){function x(a,b){if(null!=a){var c=a.isVisibleBit,d=a.data,p=8*d.BYTES_PER_ELEMENT;return b<d.length*p?y(c,d,b,p):!a.isVisibleBit}return!0}function z(a){return v.isSome(a.component)?a.component:-1}function A(a,b,c,d,p){x(b,d)&&B(a,b,c,c[d],c[d+1]-1,p)}function B(a,b,c,d,p,f){c=(b=0<a.length?a[a.length-1]:null)?b.range[1]:-1;var e=b?b.options:null;c>=d||(c+1===d&&e===f?b.range[1]=p:a.push({range:[d,
p],options:f}))}function q(a){void 0===a&&(a=!0);return{isVisibleBit:!a,data:new Uint32Array(0)}}function C(a,b){return D(a,b,!0)}function r(a,b){return D(a,b,!1)}function D(a,b,c){var d=!1;a=a||F;d=a.isVisibleBit;a=a.data;b=m(b);var e=8*a.BYTES_PER_ELEMENT,f=a.length*e;c=c===d;if(0===a.length||0===b)d=!c;else if(f<b&&!c)d=!0;else{for(var l=t[e],f=t[0],g=0;g<a.length-1;g++)if(d=!c&&a[g]!==l||c&&a[g]!==f)return d;d=a.length-1;b=t[(b-1)%e+1];d=!c&&(a[d]&b)!==b||c&&(a[d]&b)!==f}return d}function u(a){return 0<
a.length}function y(a,b,c,d){var e=c/d|0;return 0!==(b[e]&1<<c-e*d)===a}function m(a){return Math.max(0,a.length-1)}Object.defineProperty(e,"__esModule",{value:!0});e.updateVisibility=function(a,b,c,d){if(c<m(b)){null==a&&(a=q());var e=a.isVisibleBit,f=a.data,l=8*f.BYTES_PER_ELEMENT,g=c/l|0,k=c-l*g;b=(m(b)-1)/l|0;var h=f;d=d===e;c<h.length*l||!d||(c=Math.max(g+1,Math.ceil(1.5*h.length)),c=Math.min(c,b+1),f=new Uint32Array(c),f.set(h));g<f.length&&(f[g]=f[g]&~(1<<k)|(d?1:0)<<k);a.data=f}return a};
e.getVisibility=x;e.hideAllComponents=function(a){if(null==a)a=q(!1);else{a.isVisibleBit=!0;for(var b=0;b<a.data.length;b++)a.data[b]=0}return a};e.unhideAllComponents=function(a){var b;if(null!=a)for(b=a,b.isVisibleBit=!1,a=0;a<b.data.length;a++)b.data[a]=0;return b};e.generateVisibleIndexRanges=function(a,b){var c;if(a)if(u(b))if(0===a.data.length)c=[],b=[[b[0],b[b.length-1]-1]],c=a.isVisibleBit?c:b;else{c=[];for(var d=a.isVisibleBit,e=a.data,f=8*e.BYTES_PER_ELEMENT,l=e.length*f,g=m(b),k=!1,h=0;h<
l&&h<g;h++){var w=y(d,e,h,f);if(w!==k){var n=b[h];w?c.push([n,0]):(k=c[c.length-1],k[1]=n-1);k=w}}a=!a.isVisibleBit;g>l&&a&&!k?c.push([b[l],b[g]-1]):k&&(k=c[c.length-1],k[1]=b[a?g:Math.min(g,l)]-1)}else c=[],c=a.isVisibleBit?c:null;else c=null;return c};e.addHighlight=function(a,b,c,d){a=a||[];b={component:b,options:c,id:d};a.push(b);c=z(b);for(d=a.length-1;0<d&&c<z(a[d-1]);)b=[a[d],a[d-1]],a[d-1]=b[0],a[d]=b[1],--d;return a};e.removeHighlight=function(a,b){if(!a)return a;a=a.filter(function(a){return a.id!==
b});return 0===a.length?null:a};e.generateHighlightedIndexRanges=function(a,b,c){if(!b)return null;if(!u(c))return a&&a.isVisibleBit?null:b.map(function(a){return{range:null,options:a.options}});for(var d=c[0],e=c[c.length-1]-1,f=[],l=!r(a,c),g=0;g<b.length;++g){var k=b[g].options,h=b[g].component;if(v.isSome(h))A(f,a,c,h,k);else if(l)B(f,a,c,d,e,k);else for(h=0;h<m(c);++h)A(f,a,c,h,k)}return 0<f.length?f:null};e.hasHighlights=function(a,b,c){if(!b)return!1;if(!u(c))return a&&a.isVisibleBit?!1:0<
b.length;a=!r(a,c);for(var d=0;d<b.length;d++)if(v.isSome(b[d].component)||a||0<m(c))return!0;return!1};e.defaultVisibilities=q;e.isAllVisible=function(a,b){return!r(a,b)};e.isAllHidden=function(a,b){return!C(a,b)};e.hasVisible=C;e.hasHidden=r;var F=q();e.createOffsets=function(a){return Array.isArray(a)?new Uint32Array(a):a};e.hasComponent=function(a,b){return b<m(a)};e.hasComponents=u;var t=[];for(n=0;65>n;n++)t.push(Math.pow(2,n)-1);e.componentCount=m;e.componentFind=function(a,b){a=E.binaryIndexOf(a,
b,!0);return 0<=a?a:null}});