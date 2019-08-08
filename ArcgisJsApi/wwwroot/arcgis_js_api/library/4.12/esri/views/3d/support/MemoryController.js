// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Evented ../../../core/Logger ../../../core/MemCache ../layers/support/MemoryManagedLayerView".split(" "),function(p,e,h,k,g,l){Object.defineProperty(e,"__esModule",{value:!0});var m=k.getLogger("esri.views.3d.support.MemoryController");e.newMemoryController=function(a){return new n(a)};var n=function(){function a(b){this._view=b;this.events=new h;this.minQuality=.1;this._maxMemory=500;this._additionalCacheMemory=100;this._quality=1;this._downscaleMemoryUsed=this._stableQuality=
0;this._canFastRecover=!1;this._memoryPredicted=this._memoryUsed=0;this._cacheStorage=new g.MemCacheStorage;this._updating=!1}a.prototype.destroy=function(){this.events=null};a.prototype.getMemCache=function(b,a){return new g.MemCache(b,this._cacheStorage,a)};Object.defineProperty(a.prototype,"maxMemory",{get:function(){return this._maxMemory},set:function(b){null!=b&&0<b&&(this._stableQuality=0,this._canFastRecover=!1,this._maxMemory<b&&this._updateQuality(1),this._maxMemory=b)},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"additionalCacheMemory",{set:function(b){null!=b&&0<=b&&(this._additionalCacheMemory=b)},enumerable:!0,configurable:!0});a.prototype.disableMemCache=function(){this._additionalCacheMemory=-4096};Object.defineProperty(a.prototype,"memoryFactor",{get:function(){return this._quality},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"updating",{get:function(){return this._updating},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"usedMemory",
{get:function(){return this._memoryUsed},enumerable:!0,configurable:!0});a.prototype.notifyViewChanged=function(){this._stableQuality=0};a.prototype.update=function(){this._updateMemory();if(!(0>=this._memoryPredicted)||this._updating){var b=this._layersUpdating();if(.6>this._memoryPredicted&&this._canFastRecover)this._stableQuality=this._downscaleMemoryUsed=0,this._canFastRecover=!1,this._updateQuality(1);else if(b){if(this._quality<=this.minQuality)return;if(1.1<this._memoryPredicted||1<this._memoryUsed)0<
this._stableQuality?(this._downscaleMemoryUsed=0,this._updateQuality(this._stableQuality)):this._downscaleMemoryUsed<this._memoryUsed&&(this._updateQuality(this._quality/1.3),this._downscaleMemoryUsed=this._memoryUsed)}else this._downscaleMemoryUsed=0,1<this._memoryUsed?(this._stableQuality=0,this._canFastRecover=!1,b=this._updateQuality(this._quality/1.3),this._downscaleMemoryUsed=this._memoryPredicted):this._stableQuality!==this._quality&&(.75>this._memoryUsed&&1>this._quality?(this._stableQuality=
this._quality,b=this._updateQuality(this._quality+.1*(.75-this._memoryUsed+.1))):1>this._quality&&(this._canFastRecover=!0));this.updating!==b&&(this._updating=b,this.events.emit("updating-changed",this.updating))}};a.prototype._updateQuality=function(b){b=Math.min(Math.max(b,this.minQuality),1);if(b===this._quality)return!1;this._quality=b;this.events.emit("quality-changed",this._quality);return!0};a.prototype._layersUpdating=function(){return this._view.allLayerViews.some(function(b){return!!b.updating})};
a.prototype._updateMemory=function(){var b=this,a=0,f=0;this._view.basemapTerrain&&this._view.basemapTerrain.getUsedMemory&&(a+=this._view.basemapTerrain.getUsedMemory());var c=this._view._stage&&this._view._stage.renderView&&this._view._stage.renderView.edgeView;c&&(a+=c.getUsedMemory());this._view.allLayerViews&&this._view.allLayerViews.forEach(function(c){if(l.isMemoryManagedLayerView(c)){var d=c.ignoresMemoryFactor()?b._quality:1;a+=c.getUsedMemory()*d;f+=c.getUnloadedMemory()*d}});var d=null==
this._warnMemoryUsage||Math.round(10*a)!==Math.round(10*this._warnMemoryUsage),c=1048576*this._maxMemory;if(a>c&&d){this._warnMemoryUsage=a;var d=function(a){return(a/1048576).toLocaleString(void 0,{maximumFractionDigits:1})+" MB"},e=Math.round(100*this._quality);m.warn("Memory Limit exceeded! Limit: "+d(c)+" Current: "+d(a)+" Projected: "+d(a+f)+" Quality: "+e+"%")}this._memoryUsed=a/c;this._memoryPredicted=(a+f)/c;this._cacheStorage.maxSize=Math.max(0,c-a+1048576*this._additionalCacheMemory);this.events.emit("memory-used",
this._memoryUsed)};Object.defineProperty(a.prototype,"test",{get:function(){return{cacheStorage:this._cacheStorage}},enumerable:!0,configurable:!0});return a}()});