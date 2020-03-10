// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ./core/Warning ./renderers/ClassBreaksRenderer ./renderers/RasterColormapRenderer ./renderers/RasterStretchRenderer ./renderers/UniqueValueRenderer".split(" "),function(m,a,e,f,g,h,k){function d(a,b){if(!a)return null;var c;c=a?l[a.type]||null:null;if(c)return c=new c,c.read(a,b),c;b&&b.messages&&a&&b.messages.push(new e("renderer:unsupported","Renderers of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:b}));return null}Object.defineProperty(a,"__esModule",
{value:!0});a.ClassBreaksRenderer=f;a.RasterColormapRenderer=g;a.RasterStretchRenderer=h;a.UniqueValueRenderer=k;a.rasterRendererTypes={key:"type",base:null,typeMap:{"unique-value":a.UniqueValueRenderer,"class-breaks":a.ClassBreaksRenderer,"raster-colormap":a.RasterColormapRenderer,"raster-stretch":a.RasterStretchRenderer}};var l={uniqueValue:a.UniqueValueRenderer,classBreaks:a.ClassBreaksRenderer,rasterStretch:a.RasterStretchRenderer,rasterColormap:a.RasterColormapRenderer};a.read=d;a.fromJSON=function(a,
b){return d(a,b)}});