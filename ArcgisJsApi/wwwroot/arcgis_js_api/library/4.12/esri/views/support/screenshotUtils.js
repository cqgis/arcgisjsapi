// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/assignHelper","../../core/compilerUtils","../../core/mathUtils"],function(Q,h,J,K,L){function x(a,b){var c=a||{},g=c.format,d=c.quality,k=c.rotation,c=c.disableSlice,e=!a.ignorePadding&&b.padding||y,f;f=b.width-e.left-e.right;b=b.height-e.top-e.bottom;var t=e=0,m=f,p=b;if(a&&a.area){var e=Math.floor(a.area.x)||0,t=Math.floor(a.area.y)||0,n=null!=a.area.width?Math.floor(a.area.width):null,h=null!=a.area.height?Math.floor(a.area.height):null,m=m-e,p=
p-t;null!=n&&null!=h?(m=Math.min(m,n),p=Math.min(p,h)):null==n&&null!=h?(n=Math.min(m,n),p*=n/m,m=n):null!=n&&null==h&&(n=Math.min(p,h),m*=n/p,p=n)}e=M({x:e,y:t,width:m,height:p},a);t=Math.floor(Math.max(e.x,0));m=Math.floor(Math.max(e.y,0));f={x:t,y:m,width:Math.floor(Math.min(e.width,f-t)),height:Math.floor(Math.min(e.height,b-m))};b=f.width/f.height;e=e.width/e.height;e!==b&&(e>b?(b=Math.floor(f.width/e),f={x:f.x,y:Math.floor(f.y+(f.height-b)/2),width:f.width,height:b}):(b=Math.floor(f.height*
e),f={x:Math.floor(f.x+(f.width-b)/2),y:f.y,width:b,height:f.height}));b=N(a,f);a=b.width;b=b.height;a:switch(g){case "png":case "jpg":case "jpeg":break a;case null:case void 0:g=z;break a;default:K.neverReached(g),g=z}e=O[g];d=L.clamp(null!=d?d:e,0,100);return{format:g,quality:d,area:f,width:a,height:b,rotation:k,disableSlice:c||!1}}function A(a,b){return a.toDataURL(P[b.format],b.quality/100)}function B(a,b,c){c||(q||(q=document.createElement("canvas"),q.width=1,q.height=1),c=q);return c.getContext("2d").createImageData(a,
b)}function N(a,b){if(!a)return b;var c=a.width;a=a.height;if(null!=c&&null!=a)return{width:Math.floor(c),height:Math.floor(a)};if(null==c&&null==a)return b;b=b.width/b.height;return null==a?{width:Math.floor(c),height:Math.floor(c/b)}:{width:Math.floor(a*b),height:Math.floor(a)}}function M(a,b){if(!b||null==b.width||null==b.height)return a;b=b.width/b.height;var c=a.width/a.height;if(c===b)return a;if(c<b)return a.width=Math.floor(a.height*b),a.height=a.height,a;a.width=a.width;a.height=Math.floor(a.width/
b);return a}Object.defineProperty(h,"__esModule",{value:!0});h.completeUserSettings=x;h.toRenderSettings=function(a,b){var c=x(a,b),g=c.area,d=c.width/g.width,k=!a.ignorePadding&&b.padding||y,e=k.left+k.right,f=k.top+k.bottom;return{framebufferWidth:Math.floor((b.width-e)*d+e),framebufferHeight:Math.floor((b.height-f)*d+f),region:{x:Math.floor(g.x*d)+k.left,y:Math.floor(g.y*d)+k.top,width:c.width,height:c.height},format:c.format,quality:c.quality,rotation:c.rotation,pixelRatio:d,layers:a&&a.layers?
a.layers:[],disableSlice:c.disableSlice}};h.encodeResult=function(a,b,c,g){if(g.premultipliedAlpha)for(var d=a.data,k=d.length,e=0;e<k;e+=4){var f=d[e+3];0<f&&(f/=255,d[e+0]/=f,d[e+1]/=f,d[e+2]/=f)}c.width=a.width;c.height=a.height;d=c.getContext("2d");d.putImageData(a,0,0);g.flipY&&(d.save(),d.globalCompositeOperation="copy",d.scale(1,-1),d.translate(0,-d.canvas.height),d.drawImage(d.canvas,0,0),d.restore());a=d.getImageData(0,0,a.width,a.height);b=A(c,b);c.width=0;c.height=0;return{dataUrl:b,data:a}};
h.toDataUrl=A;h.createEmptyImageData=function(a,b,c){if(!a||!b)throw Error("Cannot construct image data without dimensions");if(u)try{return new ImageData(a,b)}catch(g){u=!1}return B(a,b,c)};h.wrapImageData=function(a,b,c,g){if(!b||!c)throw Error("Cannot construct image data without dimensions");if(u)try{return new ImageData(a,b,c)}catch(d){u=!1}b=B(b,c,g);b.data.set(a,0);return b};h.resampleHermite=function(a,b,c,g,d,k,e,f){void 0===g&&(g=0);void 0===d&&(d=0);void 0===k&&(k=a.width-g);void 0===e&&
(e=a.height-d);void 0===f&&(f=!1);var h=a.data,m=b.width,p=b.height,n=b.data;k/=m;e/=p;var q=Math.ceil(k/2),u=Math.ceil(e/2);a=a.width;for(var r=0;r<p;r++)for(var v=0;v<m;v++){for(var C=4*(v+(f?p-r-1:r)*m),D=0,H=0,x=0,y=0,z=0,I=0,A=(r+.5)*e,E=Math.floor(r*e);E<(r+1)*e;E++)for(var F=Math.abs(A-(E+.5))/u,B=(v+.5)*k,F=F*F,G=Math.floor(v*k);G<(v+1)*k;G++){var l=Math.abs(B-(G+.5))/q,l=Math.sqrt(F+l*l);if(!(1<=l)){var l=2*l*l*l-3*l*l+1,w=4*(g+G+(d+E)*a),I=I+l*h[w+3],H=H+l;!c&&255>h[w+3]&&(l=l*h[w+3]/255);
x+=l*h[w];y+=l*h[w+1];z+=l*h[w+2];D+=l}}n[C]=x/D;n[C+1]=y/D;n[C+2]=z/D;n[C+3]=I/H}return b};h.screenshotSuperSampleSettings=function(a,b){if(!b)return a;b=a.framebufferWidth;var c=a.framebufferHeight,g=a.region,d=Math.min(8,2048/Math.max(b,c));return 1.5>d?a:J({},a,{framebufferWidth:Math.round(b*d),framebufferHeight:Math.round(c*d),pixelRatio:a.pixelRatio*d,resample:{region:{x:Math.round(g.x*d),y:Math.round(g.y*d),width:Math.round(g.width*d),height:Math.round(g.height*d)},width:b,height:c}})};var q=
null,u=!0,P={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},z="jpg",O={png:100,jpg:98,jpeg:98},y={top:0,right:0,bottom:0,left:0}});