// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util"],function(n,e,h,m){function k(a){var g=a.length;return a[0]===a[g-3]&&a[1]===a[g-2]&&a[2]===a[g-1]}function l(a,g,d){var c,b;if(d=d&&!k(a)){d=new Float32Array(a.length+3);for(b=0;b<a.length;b++)d[b]=a[b];b=d.length;d[b-3]=a[0];d[b-2]=a[1];d[b-1]=a[2];c=a.length/3+1;b=new Uint32Array(2*(c-1))}else c=a.length/3,b=new Uint32Array(2*(c-1)),d=a;for(var e=a=0;e<c-1;e++)b[a++]=e,b[a++]=e+1;a={};c={};a[f.POSITION]=
b;c[f.POSITION]={size:3,data:d,offsetIdx:0,strideIdx:3};g&&(a.mapPos=b,c.mapPos={size:3,data:g,offsetIdx:0,strideIdx:3});return new h(c,a,h.DefaultOffsets,"line")}Object.defineProperty(e,"__esModule",{value:!0});var f=m.VertexAttrConstants;e.isClosed=k;e.createPolylineGeometryData=l;e.createPolylineGeometry=function(a,e,d,c,b){a=l(a,e,d);a.vertexAttributes[f.COLOR]={size:4,data:c,offsetIdx:0,strideIdx:4};c=new Float32Array(1);c[0]=b;a.vertexAttributes[f.SIZE]={size:1,data:c,offsetIdx:0,strideIdx:1};
b=new Uint32Array(a.vertexAttributes[f.POSITION].data.length);a.indices[f.COLOR]=b;a.indices[f.SIZE]=b;return a}});