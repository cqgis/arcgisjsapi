// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,c){Object.defineProperty(c,"__esModule",{value:!0});c.create=function(){var a=new Float32Array(8);a[3]=1;return a};c.clone=function(a){var b=new Float32Array(8);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];return b};c.fromValues=function(a,b,c,k,f,g,h,d){var e=new Float32Array(8);e[0]=a;e[1]=b;e[2]=c;e[3]=k;e[4]=f;e[5]=g;e[6]=h;e[7]=d;return e};c.fromRotationTranslationValues=function(a,b,c,k,f,g,h){var d=new Float32Array(8);
d[0]=a;d[1]=b;d[2]=c;d[3]=k;f*=.5;g*=.5;h*=.5;d[4]=f*k+g*c-h*b;d[5]=g*k+h*a-f*c;d[6]=h*k+f*b-g*a;d[7]=-f*a-g*b-h*c;return d};c.createView=function(a,b){return new Float32Array(a,b,8)}});