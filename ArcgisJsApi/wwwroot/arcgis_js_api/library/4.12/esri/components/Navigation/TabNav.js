// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["../Component","../Buttons/SvgButton","../Dropdowns/TextOptionDropdown"],function(h,k,l){return function(e){function b(a){if(d[a])return d[a].exports;var c=d[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,b),c.l=!0,c.exports}var d={};return b.m=e,b.c=d,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,
"__esModule",{value:!0})},b.t=function(a,c){if((1&c&&(a=b(a)),8&c)||4&c&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&c&&"string"!=typeof a)for(var g in a)b.d(d,g,function(c){return a[c]}.bind(null,g));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)},b.p="",b(b.s=
414)}({0:function(e,b,d){function a(a,b){function d(){this.constructor=a}c(a,b);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)}d.d(b,"b",function(){return a});d.d(b,"a",function(){return f});var c=function(a,b){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)},f=function(){return(f=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=
arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)}},1:function(e,b){e.exports=h},112:function(e,b){e.exports=l},38:function(e,b){e.exports=k},414:function(e,b,d){d.r(b);var a=d(0);e=d(1);var c=d(112),f=d.n(c),c=d(38),g=d.n(c);d=function(b){function c(a){a=b.call(this,a)||this;return a.handleBtnClick=a.handleBtnClick.bind(a),a.handleMobileClick=a.handleMobileClick.bind(a),a}return a.b(c,b),c.prototype.render=function(a){var b=this;if(!(1>=this.props.options.length)){var c=
this.props.options.map(function(c){return a("button",{key:c.value,classes:{"nav-tabnav__btn":!0,"nav-tabnav__btn--active":b.props.selectedOptionValue===c.value},value:c.value,onclick:b.handleBtnClick},c.text)}),d=this.props.options.filter(function(a){return a.value===b.props.selectedOptionValue})[0].text;return a("nav",{class:"nav-tabnav__nav"},c,a("div",{class:"nav-tabnav__mobile-menu"},a(f.a,{key:"ib-ex__section-dropdown",options:this.props.options,onSelect:this.handleMobileClick,selectedOptionValue:this.props.selectedOptionValue,
justify:"right"},a("h3",{key:"search-"+d+"-dropdown",id:"section-dropdown-toggle",class:"nav-tabnav__section-dropdown-text"},d,"\u00a0",a(g.a,{key:"section-dropdown-button"},a("svg",{width:"12",height:"12",viewBox:"0 0 16 16"},a("path",{d:"M1.5,4 L8,11 L14.5,4 C11.893,4 4.101,4 1.5,4 Z"})))))))}},c.prototype.handleBtnClick=function(a){a.target.value!==this.props.selectedOptionValue&&this.props.onSelect(a.target.value)},c.prototype.handleMobileClick=function(a){a!==this.props.selectedOptionValue&&
this.props.onSelect(a)},c}(e.Component);b.default=d}})});