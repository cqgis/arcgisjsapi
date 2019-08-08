SET dockertag=arcgisapi:0.1

@echo %dockertag%
@echo 
@echo "publish" 
dotnet publish -c Release -o ../publish 

 @echo "dockerbuild" 
cd ./publish
docker build -t %dockertag% .