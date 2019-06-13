// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./Collection"],function(e,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.referenceSetter=function(a,b,c){void 0===c&&(c=d);b||(b=new c);if(b===a)return b;b.removeAll();a&&(Array.isArray(a)||a.isInstanceOf&&a.isInstanceOf(d))?b.addMany(a):a&&b.add(a);return b};c.castForReferenceSetter=function(a){return a}});