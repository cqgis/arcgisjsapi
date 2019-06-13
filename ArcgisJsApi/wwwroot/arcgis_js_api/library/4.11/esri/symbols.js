// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ./core/accessorSupport/ensureType ./symbols/CIMSymbol ./symbols/ExtrudeSymbol3DLayer ./symbols/FillSymbol ./symbols/FillSymbol3DLayer ./symbols/Font ./symbols/IconSymbol3DLayer ./symbols/LabelSymbol3D ./symbols/LineSymbol3D ./symbols/LineSymbol3DLayer ./symbols/MarkerSymbol ./symbols/MeshSymbol3D ./symbols/ObjectSymbol3DLayer ./symbols/PathSymbol3DLayer ./symbols/PictureFillSymbol ./symbols/PictureMarkerSymbol ./symbols/PointSymbol3D ./symbols/PolygonSymbol3D ./symbols/SimpleFillSymbol ./symbols/SimpleLineSymbol ./symbols/SimpleMarkerSymbol ./symbols/Symbol ./symbols/Symbol3D ./symbols/Symbol3DLayer ./symbols/TextSymbol ./symbols/TextSymbol3DLayer ./symbols/WebStyleSymbol ./symbols/callouts/LineCallout3D ./symbols/callouts/LineCallout3DBorder ./symbols/support/Symbol3DVerticalOffset ./symbols/support/jsonUtils".split(" "),
function(L,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){Object.defineProperty(a,"__esModule",{value:!0});a.CIMSymbol=c;a.ExtrudeSymbol3DLayer=d;a.BaseFillSymbol=e;a.FillSymbol3DLayer=f;a.Font=g;a.IconSymbol3DLayer=h;a.LabelSymbol3D=k;a.LineSymbol3D=l;a.LineSymbol3DLayer=m;a.BaseMarkerSymbol=n;a.MeshSymbol3D=p;a.ObjectSymbol3DLayer=q;a.PathSymbol3DLayer=r;a.PictureFillSymbol=t;a.PictureMarkerSymbol=u;a.PointSymbol3D=v;a.PolygonSymbol3D=w;a.SimpleFillSymbol=x;a.SimpleLineSymbol=
y;a.SimpleMarkerSymbol=z;a.BaseSymbol=A;a.BaseSymbol3D=B;a.BaseSymbol3DLayer=C;a.TextSymbol=D;a.TextSymbol3DLayer=E;a.WebStyleSymbol=F;a.LineCallout3D=G;a.LineCallout3DBorder=H;a.Symbol3DVerticalOffset=I.Symbol3DVerticalOffset;a.fromJSON=J.fromJSON;a.isSymbol=function(K){return K instanceof a.BaseSymbol};a.isSymbol2D=function(a){if(!a)return!1;switch(a.type){case "picture-fill":case "picture-marker":case "simple-fill":case "simple-line":case "simple-marker":case "text":case "cim":return!0;default:return!1}};
a.isSymbol3D=function(a){if(!a)return!1;switch(a.type){case "label-3d":case "line-3d":case "mesh-3d":case "point-3d":case "polygon-3d":return!0;default:return!1}};a.symbolTypes={base:a.BaseSymbol,key:"type",typeMap:{"simple-fill":a.SimpleFillSymbol,"picture-fill":a.PictureFillSymbol,"picture-marker":a.PictureMarkerSymbol,"simple-line":a.SimpleLineSymbol,"simple-marker":a.SimpleMarkerSymbol,text:a.TextSymbol,"label-3d":a.LabelSymbol3D,"line-3d":a.LineSymbol3D,"mesh-3d":a.MeshSymbol3D,"point-3d":a.PointSymbol3D,
"polygon-3d":a.PolygonSymbol3D,"web-style":a.WebStyleSymbol,cim:a.CIMSymbol}};a.symbolTypesRenderer={base:a.BaseSymbol,key:"type",typeMap:{"simple-fill":a.SimpleFillSymbol,"picture-fill":a.PictureFillSymbol,"picture-marker":a.PictureMarkerSymbol,"simple-line":a.SimpleLineSymbol,"simple-marker":a.SimpleMarkerSymbol,text:a.TextSymbol,"line-3d":a.LineSymbol3D,"mesh-3d":a.MeshSymbol3D,"point-3d":a.PointSymbol3D,"polygon-3d":a.PolygonSymbol3D,"web-style":a.WebStyleSymbol,cim:a.CIMSymbol}};a.symbolTypesLabel=
{base:a.BaseSymbol,key:"type",typeMap:{text:a.TextSymbol,"label-3d":a.LabelSymbol3D}};a.symbolTypes3D={base:a.BaseSymbol,key:"type",typeMap:{"label-3d":a.LabelSymbol3D,"line-3d":a.LineSymbol3D,"mesh-3d":a.MeshSymbol3D,"point-3d":a.PointSymbol3D,"polygon-3d":a.PolygonSymbol3D,"web-style":a.WebStyleSymbol}};a.symbolTypesRenderer3D={base:a.BaseSymbol,key:"type",typeMap:{"line-3d":a.LineSymbol3D,"mesh-3d":a.MeshSymbol3D,"point-3d":a.PointSymbol3D,"polygon-3d":a.PolygonSymbol3D,"web-style":a.WebStyleSymbol}};
a.symbolTypesLabel3D={base:a.BaseSymbol,key:"type",typeMap:{"label-3d":a.LabelSymbol3D}};a.ensureType=b.ensureOneOfType(a.symbolTypes)});