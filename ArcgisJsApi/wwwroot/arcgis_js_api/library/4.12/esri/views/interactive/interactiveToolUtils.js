// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Collection","../../core/maybe"],function(h,d,g,e){function f(b,a){var c=b.view;a&&c.ready&&c.activeTool!==b?(c.activeTool=b,c&&c.focus&&c.focus()):a||c.activeTool!==b||(c.activeTool=null)}Object.defineProperty(d,"__esModule",{value:!0});d.setActive=f;d.swap=function(b,a,c){b=b.activeTool;a!==b&&(e.isSome(b)&&b.deactivate&&b.deactivate(),c(a),e.isSome(a)&&a.activate&&a.activate())};d.newToolCollection=function(){var b=new g;b.on("after-add",function(a){a=a.item;
a.view&&a.view.ready&&a.attach&&a.attach()});b.on("after-remove",function(a){a=a.item;f(a,!1);a.detach&&a.detach()});return b}});