## 说明

本项目在Docker中部署arcgis api for javascript 

参考地址：https://developers.arcgis.com/javascript/latest/guide/get-api/ [https://developers.arcgis.com/javascript/latest/guide/get-api/]


本项目使用 asp.net core 2.2，启动时检查api地址是否正常


#### Docker镜像使用方法

需要设置 host 环境变量，在值中，使用http

`docker run -d -p 8080:80 -e host=http://***：8080  cqgis/arcgisjsapi:4.11`