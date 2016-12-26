using System;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using UcherMBlog.Models;
using UcherMBlog.ViewModels.Api;

namespace UcherMBlog
{
    public class Startup
    {
        private readonly IHostingEnvironment _env;

        public Startup(IHostingEnvironment env)
        {
            _env = env;
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<BlogUser, IdentityRole>(options =>
            {
                options.User.RequireUniqueEmail = true;
                options.Password.RequiredLength = 5;
                options.Cookies.ApplicationCookie.LoginPath = "/Auth/Login";
            }).AddEntityFrameworkStores<BlogContext>();

            services.AddEntityFrameworkSqlite()
                .AddDbContext<BlogContext>();

            services.AddTransient<BlogContextDataSeeder>();
            services.AddSingleton(Configuration);
            services.AddScoped<IBlogRepository, BlogRepository>();

            // Add framework services.
            services.AddMvc(options =>
            {
                if (_env.IsProduction())
                    options.Filters.Add(new RequireHttpsAttribute());
            }).AddJsonOptions(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public async void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory, BlogContext blogContext,
            IBlogRepository blogRepository, BlogContextDataSeeder seeder)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (_env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();

                try
                {
                    blogContext.Database.Migrate();
                }
                catch (Exception)
                {
                    // ignored
                }
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseIdentity();

            Mapper.Initialize(config =>
            {
                config.CreateMap<Category, CategoryViewModel>().ReverseMap();
                config.CreateMap<Article, ArticleViewModel>().ReverseMap();

                config.CreateMap<Article, ViewModels.Web.ArticleViewModel>()
                    .ForMember(model => model.CategoryId,
                        expression => expression.MapFrom(article => article.Category.Name))
                    .ReverseMap()
                    .ForMember(article => article.Category,
                        expression =>
                            expression.MapFrom(
                                model =>
                                    blogRepository.GetAllCategories()
                                        .FirstOrDefault(category => category.Id == model.CategoryId)));
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            await seeder.SeedDataAsync();
        }
    }
}
