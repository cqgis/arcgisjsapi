// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Handles ../../../core/Logger ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../../../layers/support/ExportImageParameters ../engine/BitmapContainer ./LayerView2D ./support/ExportStrategy ./support/popupUtils2D ../../layers/MapImageLayerView".split(" "),function(y,z,h,k,l,m,n,p,f,q,r,t,u,v,w){var x=n.getLogger("esri.views.2d.layers.MapImageLayerView2D");
return function(g){function a(){var a=g.call(this)||this;a._handles=new m;a.container=new r.BitmapContainer;return a}k(a,g);a.prototype.hitTest=function(a,b){return null};a.prototype.update=function(a){this.strategy.update(a);this.notifyChange("updating")};a.prototype.attach=function(){var a=this,b=this.layer,e=b.imageMaxWidth,d=b.imageMaxHeight,c=b.version,b=10.3<=c,c=10<=c;this.strategy=new u({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),
imageMaxWidth:e,imageMaxHeight:d,imageRotationSupported:b,imageNormalizationSupported:c,hidpi:!0});this._exportImageParameters=new q.ExportImageParameters({layer:this.layer});this._handles.add(this._exportImageParameters.watch("version",function(b){a._exportImageVersion!==b&&(a._exportImageVersion=b,a.requestUpdate())}))};a.prototype.detach=function(){this.strategy.destroy();this._handles.removeAll();this._exportImageParameters.layer=null;this._exportImageParameters.destroy();this._exportImageParameters=
null;this.container.removeAllChildren()};a.prototype.moveStart=function(){};a.prototype.viewChange=function(){};a.prototype.moveEnd=function(){this.requestUpdate()};a.prototype.createFetchPopupFeaturesQueryGeometry=function(a,b){return v.createQueryGeometry(a,b,this.view)};a.prototype.doRefresh=function(){this.requestUpdate()};a.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)};a.prototype.fetchImage=function(a,b,e,d){var c=this;this._exportImageParameters.scale!==
this.view.scale&&(this._exportImageParameters.scale=this.view.scale,this._exportImageVersion=this._exportImageParameters.version);d=h({timestamp:this.refreshTimestamp},d);return this.layer.fetchImage(a,b,e,d).then(function(a){c.notifyChange("updating");return a}).catch(function(a){"cancel"!==a.dojoType&&x.error(a);c.notifyChange("updating");return p.reject(a)})};return a=l([f.subclass("esri.views.2d.layers.MapImageLayerView2D")],a)}(f.declared(t,w))});