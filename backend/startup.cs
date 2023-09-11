using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using Telegram.Bot;
using Telegram.Bot.Types;

namespace HelloWebApi
{
    
    public class Startup
    {

        public string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddMvc();
            services.AddDbContext<ApplicationContext>(options => options.UseNpgsql(@"Server=localhost; Port=5432; Database=local;User Id=left; Password=sergey4607; Search Path=shop"));
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                builder =>
                                {
                                    builder.WithOrigins("http://localhost:3000",
                                                        "http://www.contoso.com");
                                });
            });
            services.AddTransient<IFurnitureService, FurnitureService>();
            services.AddTransient<IBaseRepository<Product>, BaseRepository<Product>>();
            services.AddTransient<IBaseRepository<Client>, BaseRepository<Client>>();
            services.AddTransient<IBaseRepository<Orders>, BaseRepository<Orders>>();
            services.AddTransient<IBaseRepository<Address>, BaseRepository<Address>>();
            services.AddTransient<IBaseRepository<ClientRequest>, BaseRepository<ClientRequest>>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                // app.UseSwagger();
                // app.UseSwaggerUI();
            }

            // app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors(MyAllowSpecificOrigins);
            // app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}