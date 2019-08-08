// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/Accessor ../../../core/accessorSupport/decorators ../../../core/libs/gl-matrix-2/mat4".split(" "),function(l,m,d,h,k,c,e){return function(f){function a(){var b=null!==f&&f.apply(this,arguments)||this;b.from=null;b.to=null;b.duration=4E3;b.repeat=!0;b.done=!1;return b}h(a,f);g=a;a.prototype.getColorMatrix=function(){this.done=!1;if(null==this._lastTime)this._currentStep=0,this._lastTime=
Date.now();else{var b=this._lastTime,a=Date.now();this._currentStep+=a-b;2147483647<=this._currentStep&&(this._currentStep=0);this._lastTime=a}var b=this._currentStep%this.duration/(this.duration/2),b=1>=b?b:2-b,a=this.from.getColorMatrix(),c=this.to.getColorMatrix();e.mat4.multiplyScalar(a,a,1-b);e.mat4.multiplyScalar(c,c,b);!this.repeat&&this._currentStep>=this.duration&&(this.done=!0);return e.mat4.add(a,a,c)};a.prototype.getOpacity=function(){throw Error("No getOpacity definition for Transition");
};a.prototype.clone=function(){var a=new g({from:this.from.clone(),to:this.to.clone(),duration:this.duration});a._lastTime=this._lastTime;a._currentStep=this._currentStep;return a};var g;d([c.property()],a.prototype,"from",void 0);d([c.property()],a.prototype,"to",void 0);d([c.property({type:Number})],a.prototype,"duration",void 0);d([c.property({type:Boolean})],a.prototype,"repeat",void 0);return a=g=d([c.subclass("esri.views.layers.support.Transition")],a)}(c.declared(k))});