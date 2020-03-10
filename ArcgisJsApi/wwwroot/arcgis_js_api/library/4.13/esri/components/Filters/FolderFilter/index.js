// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["../../Component","../../Dropdowns/AccordionDropdown/index","dojo/i18n!../../Filters/FolderFilter/nls/resources"],function(h,l,m){return function(f){function b(c){if(d[c])return d[c].exports;var e=d[c]={i:c,l:!1,exports:{}};return f[c].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var d={};return b.m=f,b.c=d,b.d=function(c,e,d){b.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:d})},b.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"});Object.defineProperty(c,"__esModule",{value:!0})},b.t=function(c,e){if((1&e&&(c=b(c)),8&e)||4&e&&"object"==typeof c&&c&&c.__esModule)return c;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var f in c)b.d(d,f,function(e){return c[e]}.bind(null,f));return d},b.n=function(c){var e=c&&c.__esModule?function(){return c.default}:function(){return c};return b.d(e,"a",e),e},b.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,
e)},b.p="",b(b.s=386)}({0:function(f,b,d){function c(c,b){function d(){this.constructor=c}e(c,b);c.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)}d.d(b,"b",function(){return c});d.d(b,"a",function(){return g});var e=function(c,b){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,b){c.__proto__=b}||function(c,b){for(var a in b)b.hasOwnProperty(a)&&(c[a]=b[a])})(c,b)},g=function(){return(g=Object.assign||function(c){for(var b,e=1,d=arguments.length;e<d;e++)for(var a in b=
arguments[e])Object.prototype.hasOwnProperty.call(b,a)&&(c[a]=b[a]);return c}).apply(this,arguments)}},100:function(f,b){f.exports=m},20:function(f,b){f.exports=l},386:function(f,b,d){d.r(b);var c=d(0),e=d(100);f=d(4);var g=d(20),h=d.n(g),k=d(87);d=function(b){function d(a){a=b.call(this,a)||this;return a.handleToggleKeyDown=Object(k.a)(a.handleToggleFilter.bind(a)),a.handleClearKeyDown=Object(k.a)(a.handleClearFilter.bind(a)),a.state={filterString:""},a.handleFilterStringChange=a.handleFilterStringChange.bind(a),
a.handleToggleFilter=a.handleToggleFilter.bind(a),a.handleClearFilter=a.handleClearFilter.bind(a),a.mapFoldersToLinks=a.mapFoldersToLinks.bind(a),a}return c.b(d,b),d.prototype.render=function(a){return a(h.a,{key:"folder-accordion",title:e.folders,clearable:!!this.props.folderFilter,onClear:this.handleClearFilter,padding:!1},a("div",{class:"ftr-folder__input-area"},a("input",{id:"filter-folder-filters",class:"ftr-folder__input",type:"search",placeholder:e.filterFolders,"aria-label":e.filterFolders,
oninput:this.handleFilterStringChange,value:this.state.filterString})),a("ul",{id:"folder-accordion-tree",class:"ftr-folder__list"},this.mapFoldersToLinks(a)))},d.prototype.handleFilterStringChange=function(a){this.setState({filterString:a.target.value})},d.prototype.handleToggleFilter=function(a){var c=a.target.dataset;a=c.id;c=c.title;this.props.folderFilter&&this.props.folderFilter.id===a||this.props.onFolderSelect({id:a,title:c})},d.prototype.handleClearFilter=function(){this.props.folderFilter&&
this.props.onFolderSelect()},d.prototype.preventCloseDropdown=function(a){a.stopPropagation()},d.prototype.mapFoldersToLinks=function(a){var b=this,d={"ftr-folder__link":!0,"ftr-folder__link--active":!this.props.folderFilter};return this.props.availableFolders?[a("li",{class:"ftr-folder__item",key:"all-user-content"},a("a",{classes:d,"data-id":"all-folder-content","data-title":e.allFolders,onclick:this.handleClearFilter,onkeydown:this.handleClearKeyDown,tabindex:"0"},this.props.folderFilter?a("svg",
{viewBox:"0 0 16 16",width:"16",height:"16"},a("path",{fill:"currentColor",d:"M7.3 3.002L5.98 2H3L1.7 3H0v11h15V3zM14 6H1V4h1.04l1.3-1h2.304l1.319 1H14zm0 7H1V7h13z"})):a("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},a("path",{fill:"currentColor",d:"M14 6V3l-6.7.002L5.98 2H3L1.7 3H0v11h14l2-8zM1 4h1.041L3.34 3h2.304l1.319 1.002L13 4v2H9L7.7 7h-5L1 11.408zm2.387 4H8.04l1.3-1h5.379l-1.5 6H1.458z"})),e.allFolders))].concat(this.props.availableFolders.filter(function(a){return-1!==a.title.toLowerCase().indexOf(b.state.filterString.toLowerCase())}).map(function(e){var f,
g=c.a({},d,{"ftr-folder__link--active":b.props.folderFilter&&b.props.folderFilter.id===e.id,"ftr-folder__link--home":"root"===e.id});return f="root"===e.id?a("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},a("path",{fill:"currentColor",d:"M8 0L6 2V0H3v5L0 8h1v8h5v-6h4v6h5V7.978h1zm6 15h-3V9H5v6H2V7.414l2-2V1h1v3.414l3.001-3L14 7.395z"})):b.props.folderFilter&&b.props.folderFilter.id===e.id?a("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},a("path",{fill:"currentColor",d:"M14 6V3l-6.7.002L5.98 2H3L1.7 3H0v11h14l2-8zM1 4h1.041L3.34 3h2.304l1.319 1.002L13 4v2H9L7.7 7h-5L1 11.408zm2.387 4H8.04l1.3-1h5.379l-1.5 6H1.458z"})):
a("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},a("path",{fill:"currentColor",d:"M7.3 3.002L5.98 2H3L1.7 3H0v11h15V3zM14 6H1V4h1.04l1.3-1h2.304l1.319 1H14zm0 7H1V7h13z"})),a("li",{class:"ftr-folder__item",key:e.id},a("a",{classes:g,"data-id":e.id,"data-title":e.title,onclick:b.handleToggleFilter,onkeydown:b.handleToggleKeyDown,tabindex:"0"},f,a("span",{class:"ftr-folder__title"},e.title)))})):null},d}(f.Component);b.default=d},4:function(f,b){f.exports=h},87:function(f,b,d){d.d(b,"a",function(){return c});
var c=function(b){return function(c){13===c.keyCode&&b(c)}}}})});