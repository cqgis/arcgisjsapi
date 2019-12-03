// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/asyncUtils ../../../../core/maybe ../../../../core/promiseUtils ./Graphics3DGraphic ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayerFactory ./Loadable ./symbolComplexity".split(" "),function(A,B,r,l,m,t,f,u,v,w,x,y,z){return function(n){function b(d,a,c){var e=n.call(this)||this;e._symbol=d;e._context=a;e._backgroundLayers=c;
e._destroyed=!1;e.symbolLayers=[];e.referenced=0;return e}r(b,n);Object.defineProperty(b.prototype,"symbol",{get:function(){return this._symbol},set:function(d){this._symbol=d;if(this.symbolLayers)for(var a=0;a<d.symbolLayers.length;a++){var c=this.symbolLayers[a];f.isNone(c)||(c.symbol=d,c.symbolLayer=d.symbolLayers.items[a])}},enumerable:!0,configurable:!0});b.prototype.doLoad=function(d){return m(this,void 0,void 0,function(){var a,c,e,h,g,b,k=this;return l(this,function(q){switch(q.label){case 0:a=
this._symbol.symbolLayers;this._backgroundLayers&&(a=this._backgroundLayers.concat(a));for(c=a.length;this.symbolLayers.length<a.length;)this.symbolLayers.push(null);this.symbolLayers.length=a.length;e=this._context.layerOrder;h=function(b){var h=a.getItemAt(b);if(!1===h.enabled)return"continue";g._context.layerOrder=e+(1-(1+b)/c);g._context.layerOrderDelta=1/c;var f=x.make(g.symbol,h,g._context,h._ignoreDrivers);u.onAbortOrThrow(d,function(){return f.destroy()});g.symbolLayers[b]=f};g=this;for(b=
0;b<c;b++)h(b);this._context.layerOrder=e;return[4,t.forEach(this.symbolLayers,function(a,c){return m(k,void 0,void 0,function(){return l(this,function(d){switch(d.label){case 0:if(!f.isSome(a))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,a.load()];case 2:return d.sent(),[3,4];case 3:return d.sent(),this.symbolLayers[c]=null,[3,4];case 4:return[2]}})})})];case 1:q.sent();if(this.symbolLayers.length&&!this.symbolLayers.some(function(a){return!!a}))throw Error();return[2]}})})};b.prototype.whenSymbolLayerSize=
function(d){return m(this,void 0,void 0,function(){var a;return l(this,function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),[4,this.load()];case 1:return c.sent(),[3,3];case 2:return c.sent(),[3,3];case 3:return a=this.symbolLayers[d],[2,f.isSome(a)?a.getCachedSize():null]}})})};b.prototype.createGraphics3DGraphic=function(d,a){for(var c=d.graphic,e=Array(this.symbolLayers.length),b=0;b<this.symbolLayers.length;b++){var g=this.symbolLayers[b];e[b]=f.isSome(g)?g.createGraphics3DGraphic(d):
null}return new v(c,a||this,e,d.layer)};Object.defineProperty(b.prototype,"complexity",{get:function(){return z.totalSymbolComplexities(this.symbolLayers.map(function(d){return f.isSome(d)&&d.complexity}))},enumerable:!0,configurable:!0});b.prototype.globalPropertyChanged=function(d,a){for(var c=this.symbolLayers.length,e=function(c){var e=b.symbolLayers[c],g=function(a){a=a._graphics[c];return a instanceof w?a:null};if(f.isSome(e)&&!e.globalPropertyChanged(d,a,g))return{value:!1}},b=this,g=0;g<c;g++){var p=
e(g);if("object"===typeof p)return p.value}return!0};b.prototype.applyRendererDiff=function(d,a){return 1!==this.loadStatus?!1:this.symbolLayers.reduce(function(c,e,b){return c&&(f.isNone(e)||e.applyRendererDiff(d,a))},!0)};b.prototype.prepareSymbolPatch=function(d){if(2!==this.loadStatus&&"partial"===d.diff.type){var a=d.diff.diff;if(a.symbolLayers&&"partial"===a.symbolLayers.type){var c=a.symbolLayers.diff;this.symbolLayers.forEach(function(a,b){var e;if(!f.isNone(a)){var h=c[b];if(h){var k={diff:h,
graphics3DGraphicPatches:[],symbolLayerStatePatches:[]};a.prepareSymbolLayerPatch(k);(e=d.symbolStatePatches).push.apply(e,k.symbolLayerStatePatches);k.graphics3DGraphicPatches.length&&d.graphics3DGraphicPatches.push(function(a,c){var d=a._graphics[b];f.isSome(d)&&k.graphics3DGraphicPatches.forEach(function(a){return a(d,c)})})}}})}}};b.prototype.updateGeometry=function(d,a){for(var c=0;c<this.symbolLayers.length;c++){var e=this.symbolLayers[c];if(!f.isNone(e)){var b=d._graphics[c];if(f.isSome(b)&&
!e.updateGeometry(b,a))return!1}}return!0};b.prototype.onRemoveGraphic=function(d){for(var a=0;a<this.symbolLayers.length;a++){var c=this.symbolLayers[a];if(!f.isNone(c)){var b=d._graphics[a];if(f.isSome(b))c.onRemoveGraphic(b)}}};b.prototype.getFastUpdateStatus=function(){var d=0,a=0,c=0;this.symbolLayers.forEach(function(b){f.isNone(b)||(0===b.loadStatus?d++:b.isFastUpdatesEnabled()?c++:a++)});return{loading:d,slow:a,fast:c}};b.prototype.setDrawOrder=function(d,a){for(var c=this.symbolLayers.length,
b=1/c,h=0;h<c;h++){var g=this.symbolLayers[h];f.isSome(g)&&g.setDrawOrder(d+(1-(1+h)/c),b,a)}};b.prototype.destroy=function(){if(this.destroyed)console.error("Graphics3DSymbol.destroy called when already destroyed!");else{this.abortLoad();for(var b=0,a=this.symbolLayers;b<a.length;b++){var c=a[b];f.isSome(c)&&c.destroy()}this.symbolLayers.length=0;this._destroyed=!0}};Object.defineProperty(b.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!0,configurable:!0});return b}(y.Loadable)});