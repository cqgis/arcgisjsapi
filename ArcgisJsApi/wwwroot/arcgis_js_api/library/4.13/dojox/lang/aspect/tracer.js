//>>built
define(["dojo","dijit","dojox"],function(b,g,e){b.provide("dojox.lang.aspect.tracer");(function(){var c=e.lang.aspect,d=function(a){this.method=a?"group":"log";a&&(this.after=this._after)};b.extend(d,{before:function(){var a=c.getContext(),f=a.joinPoint,b=Array.prototype.join.call(arguments,", ");console[this.method](a.instance,"\x3d\x3e",f.targetName+"("+b+")")},afterReturning:function(a){var b=c.getContext().joinPoint;"undefined"!=typeof a?console.log(b.targetName+"() returns:",a):console.log(b.targetName+
"() returns")},afterThrowing:function(a){console.log(c.getContext().joinPoint.targetName+"() throws:",a)},_after:function(a){console.groupEnd()}});c.tracer=function(a){return new d(a)}})()});