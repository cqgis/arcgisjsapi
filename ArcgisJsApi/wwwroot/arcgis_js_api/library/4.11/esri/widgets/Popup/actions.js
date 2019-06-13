// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports dojo/i18n!../../nls/common dojo/i18n!./nls/Popup ../../core/Error ../../core/promiseUtils ../../support/actions/ActionButton".split(" "),function(m,b,k,l,e,c,f){Object.defineProperty(b,"__esModule",{value:!0});b.zoomToFeature=new f({id:"zoom-to-feature",title:l.zoom,className:"esri-icon-zoom-in-magnifying-glass"});b.removeSelectedFeature=new f({id:"remove-selected-feature",title:k.remove,className:"esri-icon-trash"});b.all=[b.zoomToFeature,b.removeSelectedFeature];b.triggerAction=
function(a){var g=a.view;a=a.event.action;var d=g&&g.popup;if(!a)return c.reject(new e("trigger-action:missing-arguments","Event has no action"));if(!d)return c.reject(new e("trigger-action:missing-arguments","view.popup is missing"));var f=a.disabled,h=a.id;if(!h)return c.reject(new e("trigger-action:invalid-action","action.id is missing"));if(f)return c.reject(new e("trigger-action:invalid-action","Action is disabled"));if(h===b.zoomToFeature.id)return d.viewModel.zoomToLocation();if(h===b.removeSelectedFeature.id){d.close();
a=d.selectedFeature;if(!a)return c.reject(new e("trigger-action:"+b.removeSelectedFeature.id,"selectedFeature is required",{selectedFeature:a}));(d=a.sourceLayer)?d.remove(a):g.graphics.remove(a);return c.resolve()}return c.reject(new e("trigger-action:unknown-action","Unable to identify action to perform",{action:a,popup:d}))}});