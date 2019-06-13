// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["../promiseUtils"],function(d){return function(h,k,p,b){var c=null;return d.create(function(l,e){function m(a){try{f(b.next(a))}catch(g){e(g)}}function n(a){try{f(b["throw"](a))}catch(g){e(g)}}function f(a){a.done?(c=d.when(a.value),c.then(l,e)):(c=d.when(a.value),c.then(m,n))}f((b=b.apply(h,k||[])).next())},function(b){c&&c.cancel(b)})}});