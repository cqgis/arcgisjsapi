// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../jsonMap","./property"],function(f,a,c,d){function e(a){return d.property({type:a})}Object.defineProperty(a,"__esModule",{value:!0});a.enumeration=e;(function(a){a.serializable=function(){return function(a,b){void 0===b&&(b={ignoreUnknown:!0});a=a instanceof c.JSONMap?a:new c.JSONMap(a,b);return d.property({type:b&&b.ignoreUnknown?a.apiValues:String,json:{type:a.jsonValues,read:{reader:a.read},write:{writer:a.write}}})}}})(e=a.enumeration||(a.enumeration={}))});