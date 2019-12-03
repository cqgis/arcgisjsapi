// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["../../Component","dojo/i18n!../../Inputs/Tags/nls/resources"],function(l,m){return function(f){function b(c){if(e[c])return e[c].exports;var d=e[c]={i:c,l:!1,exports:{}};return f[c].call(d.exports,d,d.exports,b),d.l=!0,d.exports}var e={};return b.m=f,b.c=e,b.d=function(c,d,g){b.o(c,d)||Object.defineProperty(c,d,{enumerable:!0,get:g})},b.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"});Object.defineProperty(c,"__esModule",
{value:!0})},b.t=function(c,d){if((1&d&&(c=b(c)),8&d)||4&d&&"object"==typeof c&&c&&c.__esModule)return c;var g=Object.create(null);if(b.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:c}),2&d&&"string"!=typeof c)for(var e in c)b.d(g,e,function(d){return c[d]}.bind(null,e));return g},b.n=function(c){var d=c&&c.__esModule?function(){return c.default}:function(){return c};return b.d(d,"a",d),d},b.o=function(c,d){return Object.prototype.hasOwnProperty.call(c,d)},b.p="",b(b.s=397)}({0:function(f,
b,e){function c(c,b){function h(){this.constructor=c}d(c,b);c.prototype=null===b?Object.create(b):(h.prototype=b.prototype,new h)}e.d(b,"b",function(){return c});e.d(b,"a",function(){return g});var d=function(c,b){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,a){c.__proto__=a}||function(c,a){for(var d in a)a.hasOwnProperty(d)&&(c[d]=a[d])})(c,b)},g=function(){return(g=Object.assign||function(c){for(var d,b=1,a=arguments.length;b<a;b++)for(var k in d=arguments[b])Object.prototype.hasOwnProperty.call(d,
k)&&(c[k]=d[k]);return c}).apply(this,arguments)}},225:function(f,b,e){b.a=function(c,d){var b=c.name;return d("li",{class:"inp-tags__tag",key:b,id:"tag-"+b},d("span",{title:b,class:"inp-tags__tag-innards"},b,d("button",{class:"inp-tags__tag-remove-btn","data-value":b,onclick:c.onRemove},d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 32 32",class:"svg-icon"},d("path",{d:"M18.404 16l9.9 9.9-2.404 2.404-9.9-9.9-9.9 9.9L3.696 25.9l9.9-9.9-9.9-9.898L6.1 3.698l9.9 9.899 9.9-9.9 2.404 2.406-9.9 9.898z"})))))}},
226:function(f,b,e){var c=e(97);b.a=function(d,b){var e=d.onSuggestionFocus,f=d.onSuggestionBlur,h=d.onSuggestionClick,a=d.onSuggestionKeyDown;if(!d.visible)return null;d=d.matchingTags.map(function(d,c){return b("li",{id:"suggestion-"+c,classes:{"inp-tags__suggestion":!0,"inp-tags__suggestion--grey":0==c%2,"inp-tags__suggestion--white":0!=c%2},"data-value":d,"data-index":c,key:d,title:d,onfocus:e,onblur:f,onmousedown:h,onkeydown:a,tabindex:"0"},d)});var k=b("div",{class:"inp-tags__no-suggestions",
id:"no-matching-div"},b("h5",{class:"inp-tags__no-suggestions-text",id:"no-matching-text"},c.noTagsFound));return b("ul",{id:"tag-suggestions",class:"inp-tags__suggestions",key:"tag-suggestions"},d[0]?d:k)}},397:function(f,b,e){e.r(b);var c=e(0);f=e(4);var d=e(97),g=e(225),l=e(226);e=function(b){function e(a){a=b.call(this,a)||this;return a.state={value:"",isFocused:!1,isTyping:!1,hasBeenFocused:!1},a.handleInputBlur=a.handleInputBlur.bind(a),a.handleInputChange=a.handleInputChange.bind(a),a.handleInputFocus=
a.handleInputFocus.bind(a),a.handleInputKeyDown=a.handleInputKeyDown.bind(a),a.handleSuggestionBlur=a.handleSuggestionBlur.bind(a),a.handleSuggestionClick=a.handleSuggestionClick.bind(a),a.handleSuggestionFocus=a.handleSuggestionFocus.bind(a),a.handleSuggestionKeyDown=a.handleSuggestionKeyDown.bind(a),a.handleWidgetClick=a.handleWidgetClick.bind(a),a.spliceTag=a.spliceTag.bind(a),a}return c.b(e,b),e.prototype.render=function(a){var c=this,b=!!this.props.required&&0===this.props.activeTags.length&&
this.state.hasBeenFocused&&!this.state.isTyping,e=b&&this.props.legacyValidation,f={"inp-tags__container":!0,"inp-tags__container--required-legacy":e},h={"inp-tags__active-tags":!0,"inp-tags__active-tags--focused":this.state.isFocused,"inp-tags__active-tags--required":b&&!e},m=this.props.knownTags.filter(function(a){return-1!==a.toLowerCase().indexOf(c.state.value.toLowerCase())&&-1===c.props.activeTags.indexOf(a)});return a("div",{id:"tags-container",classes:f,style:"\n                        min-width: "+
(this.props.minWidth?this.props.minWidth:"auto")+";\n                        max-width: "+(this.props.maxWidth?this.props.maxWidth:"auto")+";\n                    ",onclick:this.handleWidgetClick,"aria-label":b||e?d.required:void 0},a("ul",{classes:h,key:"active-tags",id:"active-tags"},this.props.activeTags.map(function(b){return a(g.a,{name:b,onRemove:c.spliceTag})}),a("input",{id:"tags-input",class:"inp-tags__input",placeholder:d.addTags,value:this.state.value,onkeydown:this.handleInputKeyDown,
onfocus:this.handleInputFocus,onblur:this.handleInputBlur,oninput:this.handleInputChange,required:b||e})),b&&!e?a("div",{class:"inp-tags__required-tip"},d.required):null,a(l.a,{matchingTags:m,onSuggestionBlur:this.handleSuggestionBlur,onSuggestionClick:this.handleSuggestionClick,onSuggestionFocus:this.handleSuggestionFocus,onSuggestionKeyDown:this.handleSuggestionKeyDown,visible:this.state.isTyping}))},e.prototype.addTag=function(a){var b=this;a.split(",").forEach(function(a){(a=a.trim())&&-1===b.props.activeTags.indexOf(a)&&
b.props.onChange(b.props.activeTags.concat([a]))});(a=document.getElementById("tags-input"))&&a.focus()},e.prototype.spliceTag=function(a){var b=this.props.activeTags.slice();b.splice(this.props.activeTags.indexOf(a.target.dataset.value),1);this.props.onChange(b)},e.prototype.handleInputBlur=function(){this.setState({hasBeenFocused:!0,isFocused:!1,isTyping:!1})},e.prototype.handleInputChange=function(a){this.setState({value:a.target.value})},e.prototype.handleInputFocus=function(){this.setState({isFocused:!0})},
e.prototype.handleInputKeyDown=function(a){switch(a.key){case "Enter":a.target.value&&(this.addTag(a.target.value),this.setState({value:"",isTyping:!1}),(b=document.getElementById("tags-input"))&&(b.focus(),b.value=""));break;case "Tab":var b;a.target.value&&(a.preventDefault(),this.addTag(a.target.value),this.setState({value:"",isTyping:!1}),(b=document.getElementById("tags-input"))&&(b.focus(),b.value=""));break;case "Backspace":a.target.value||(a=this.props.activeTags.slice(),a.pop(),this.props.onChange(a),
this.setState({value:"",isTyping:!1}));break;case "Down":case "ArrowDown":b=document.getElementById("suggestion-0");this.state.isTyping&&b&&(a.preventDefault(),b.focus());break;default:this.setState({isTyping:!0})}},e.prototype.handleSuggestionBlur=function(a){a.preventDefault();this.setState({isFocused:!1,isTyping:!1})},e.prototype.handleSuggestionClick=function(a){a.preventDefault();this.addTag(a.target.dataset.value);this.setState({value:"",isFocused:!0,isTyping:!1});(a=document.getElementById("tags-input"))&&
(a.focus(),a.value="")},e.prototype.handleSuggestionFocus=function(a){a.preventDefault();this.setState({isFocused:!0,isTyping:!0})},e.prototype.handleSuggestionKeyDown=function(a){switch(a.preventDefault(),a.key){case "Up":case "ArrowUp":0===a.target["data-index"]?(b=document.getElementById("tags-input"))&&b.focus():(b=document.getElementById("suggestion-"+(a.target["data-index"]-1)))&&b.focus();break;case "Down":case "ArrowDown":var b;(a=document.getElementById("suggestion-"+(a.target["data-index"]+
1)))?a.focus():(b=document.getElementById("suggestion-0"))&&b.focus();break;case "Tab":case "Enter":this.handleSuggestionClick(a)}},e.prototype.handleWidgetClick=function(a){(a=document.getElementById("tags-input"))&&a.focus()},e}(f.Component);b.default=e},4:function(f,b){f.exports=l},97:function(f,b){f.exports=m}})});