// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../camera/constraintUtils ../Constraints ./InteractiveController ../utils/navigationUtils ../../support/mathUtils".split(" "),function(d,h,q,r,l,t,u,m,b,g,v,n,w,p,
x){Object.defineProperty(h,"__esModule",{value:!0});d=function(d){function e(f,c,b){var a=d.call(this)||this;a.view=f;a.intersectionHelper=c;a.pivot=b;a.lastPoint=m.vec2f64.create();a.tmpWorldUp=g.vec3f64.create();a.tmpViewDir=g.vec3f64.create();a.tmpRotCurPoint=m.vec2f64.create();a.tmpTransf=t.mat4f64.create();a.tmpAxis=g.vec3f64.create();a.pivotPos=g.vec3f64.create();a.constraintOptions={selection:15,interactionType:2,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0};
a.rotScale="center"===b?3:1.5;return a}q(e,d);e.prototype.begin=function(f){if(this.active){switch(this.pivot){case "eye":b.vec3.copy(this.pivotPos,this.beginCamera.eye);this.constraintOptions.interactionType=3;this.constraintOptions.tiltMode=1;this.constraintOptions.selection=0;break;case "center":this.intersectionHelper.intersectRayFreePointFallback(this.beginCamera.ray,this.pivotPos)||b.vec3.copy(this.pivotPos,this.beginCamera.center),this.beginCamera.center=this.pivotPos,this.constraintOptions.interactionType=
2,this.constraintOptions.tiltMode=0,this.constraintOptions.selection=11}this.constraintOptions.interactionStartCamera=this.beginCamera;p.normalizeCoordinate(this.beginCamera,f,this.lastPoint)}};e.prototype.update=function(b){if(this.active){var c;switch(this.pivot){case "eye":c=this.currentCamera.center;break;case "center":this.currentCamera.center=this.pivotPos,c=this.currentCamera.eye}this.applyRotation(this.currentCamera,b,c,this.pivotPos);v.applyAll(this.view,this.currentCamera,this.constraintOptions)}};
e.prototype.end=function(){this.active&&this.finishController()};e.prototype.applyRotation=function(f,c,e,a){this.view.renderCoordsHelper.worldUpAtPosition(a,this.tmpWorldUp);p.normalizeCoordinate(f,c,this.tmpRotCurPoint);c=(this.lastPoint[1]-this.tmpRotCurPoint[1])*this.rotScale;var d=(this.tmpRotCurPoint[0]-this.lastPoint[0])*this.rotScale;b.vec3.subtract(this.tmpViewDir,e,a);var k=b.vec3.length(this.tmpViewDir),k=x.acos(b.vec3.dot(this.tmpViewDir,this.tmpWorldUp)/k);if("eye"===this.pivot){var g=
.5*Math.PI-k,h=.495*Math.PI;c=g-Math.max(-h,Math.min(h,g+-.5*c))}c=r.clamp(c+k,n.TiltDefault.min,n.TiltDefault.max)-k;l.mat4.identity(this.tmpTransf);b.vec3.cross(this.tmpAxis,f.up,this.tmpViewDir);"center"===this.pivot&&(d=-d);l.mat4.rotate(this.tmpTransf,this.tmpTransf,d,this.tmpWorldUp);l.mat4.rotate(this.tmpTransf,this.tmpTransf,c,this.tmpAxis);b.vec3.transformMat4(this.tmpViewDir,this.tmpViewDir,this.tmpTransf);b.vec3.add(e,a,this.tmpViewDir);b.vec3.transformMat4(f.up,f.up,this.tmpTransf);u.vec2.copy(this.lastPoint,
this.tmpRotCurPoint);f.markViewDirty()};return e}(w.InteractiveController);h.RotateController=d});