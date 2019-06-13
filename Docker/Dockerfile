FROM microsoft/dotnet:2.2-aspnetcore-runtime


WORKDIR /app
COPY . /app
EXPOSE 80

ENV host=http://127.0.0.1

CMD [ "dotnet","ArcgisJsApi.dll" ]