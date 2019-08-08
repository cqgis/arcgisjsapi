using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ArcgisJsApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddCors(t => t.AddPolicy("all",
                s => s.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().AllowCredentials()));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            var host = Configuration["host"];
#if DEBUG
            if (string.IsNullOrWhiteSpace(host))
                host = "http://127.0.0.1";
#else
if(string.IsNullOrWhiteSpace(host))
throw new Exception("请设置host环境变量，部署后直接访问地址，如：http://127.0.0.1或https://127.0.0.1");

#endif



            BuildJsApi(host);

            app.UseCors("all");
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }


        #region  
         
        private static void BuildJsApi(string host)
        {
            //2019-08-08 加入对多版本的支持
            var dirpath = Path.GetFullPath(Path.Combine("wwwroot/arcgis_js_api/library/"));
            var folder = new DirectoryInfo(dirpath).GetDirectories("*.*", SearchOption.TopDirectoryOnly);
            foreach (var directoryInfo in folder)
            {
                BuildJsVersion(host, directoryInfo.Name);
            }
        }

        private static void BuildJsVersion(string host, string version)
        {
            var apiDirectory = $"arcgis_js_api/library/{version}/";
            var dirpath = Path.GetFullPath(Path.Combine("wwwroot", apiDirectory));


            var jsapibaseuri = $"{host}/{apiDirectory}";

            var jsapiDojoFile = Path.Combine(dirpath, "dojo", "dojo.js");
            var jsapiInitFile = Path.Combine(dirpath, "init.js");
            var hostname = "https://[HOSTNAME_AND_PATH_TO_JSAPI]";


            var dojoinfo = ReadFile(jsapiDojoFile);
            if (dojoinfo.Contains(hostname))
            {
                var newdojoinfo = dojoinfo.Replace(hostname, jsapibaseuri);
                WriteFile(jsapiDojoFile, newdojoinfo);
            }


            var initinfo = ReadFile(jsapiInitFile);
            if (initinfo.Contains(hostname))
            {
                var newinitinfo = initinfo.Replace(hostname, jsapibaseuri);
                WriteFile(jsapiInitFile, newinitinfo);
            }

            Console.WriteLine($"完成安装，地址：{jsapibaseuri}");
        }

        static string ReadFile(string file)
        {
            return File.ReadAllText(file, Encoding.UTF8);
        }

        static void WriteFile(string file, string content)
        {
            File.WriteAllText(file, content, Encoding.UTF8);
        }

        #endregion
    }
}
