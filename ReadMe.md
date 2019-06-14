![Build](https://cqgis.visualstudio.com/ArcgisAPIDocker/_apis/build/status/ArcgisAPIDocker-ASP.NET%20Core-CI)

## 说明

本项目在 Docker 中部署 arcgis api for javascript

参考地址：https://developers.arcgis.com/javascript/latest/guide/get-api/

本项目使用 asp.net core 2.2，启动时检查 api 地址是否正常

### Docker 镜像使用方法

Docker镜像地址：https://hub.docker.com/r/cqgis/arcgisjsapi

需要设置 host 环境变量，在值中，使用 http

`docker run -d -p 8080:80 -e host=http://***:8080 cqgis/arcgisjsapi:4.11`

### 使用方法

```
<link rel="stylesheet" href="http://***/arcgis_js_api/library/4.11/dijit/themes/claro/claro.css" />
<link rel="stylesheet" href="http://***/arcgis_js_api/library/4.11/esri/themes/light/main.css" />
<script src="http://***/arcgis_js_api/library/4.11/dojo/dojo.js"></script>
```

### 测试方法

```
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no" />
    <title>测试地址</title>
    <link rel="stylesheet" href="https://www.example.com/arcgis_js_api/library/4.11/dijit/themes/claro/claro.css" />
    <link rel="stylesheet" href="https://www.example.com/arcgis_js_api/library/4.11/esri/themes/light/main.css" />
    <style>
      html,
      body,
      #viewDiv {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <script src="https://www.example.com/arcgis_js_api/library/4.11/dojo/dojo.js"></script>
    <script>
      var myMap, view;
      require([
        "esri/Basemap",
        "esri/layers/TileLayer",
        "esri/Map",
        "esri/views/MapView"
      ], function (Basemap, TileLayer, Map, MapView){
        var layer = new TileLayer({
          url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
        });
        var customBasemap = new Basemap({
          baseLayers: [layer],
          title: "Custom Basemap",
          id: "myBasemap"
        });
        myMap = new Map({
          basemap: customBasemap
        });
        view = new MapView({
          center: [108.87, 29], // long, lat
          container: "viewDiv",
          map: myMap,
          zoom: 6
        });
      });
    </script>
  </head>
  <body class="claro">
    <div id="viewDiv"></div>
  </body>
</html>

```
