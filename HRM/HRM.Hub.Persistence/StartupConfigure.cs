namespace HRM.Hub.Persistence;

public static class StartupConfigure
{

    public static void ApplicationConfigure(IApplicationBuilder app, IWebHostEnvironment env, IConfiguration _configuration)
    {
        if (env.IsDevelopment())
        {

            app.UseExceptionHandler("/Home/Error");
            app.UseDeveloperExceptionPage();

            app.UseHsts();
        }
        app.UseHttpsRedirection();
        app.UseStaticFiles();
        //app.UseAntiXssMiddleware();
        app.UseRouting();
        app.UseCors(x => x
            .AllowAnyMethod()
            .AllowAnyHeader()
            .SetIsOriginAllowed(origin => true)
            .AllowCredentials());
        app.UseSession();


        app.UseHangfireDashboard("/hangfire", new DashboardOptions
        {
            DashboardTitle = "HRM Hangfire",
            IgnoreAntiforgeryToken = true,
            // Authorization = new[]
            // {
            //         new HangfireCustomBasicAuthenticationFilter{
            //             User = _configuration.GetSection("HangfireSettings:UserName").Value,
            //             Pass = _configuration.GetSection("HangfireSettings:Password").Value
            //         }
            // }
        });
        GlobalConfiguration.Configuration.UseLogProvider(new NoLoggingProvider());
        app.UseResponseCompression();
        app.UseStaticFiles(new StaticFileOptions
        {
            OnPrepareResponse = ctx =>
            {
                const int durationInSeconds = 60 * 60 * 24;
                ctx.Context.Response.Headers[HeaderNames.CacheControl] =
                    "public,max-age=" + durationInSeconds;
            }
        });
        //if (env.IsProduction())
        //{
        //    app.UseSwaggerAuthorized();
        //}
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/hrm/swagger.json", "API HRM");
            c.DocumentTitle = "API HRM";
            c.DefaultModelsExpandDepth(0);
        });
        app.UseCookiePolicy();
        app.UseAuthentication();
        app.UseAuthorization();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapDefaultControllerRoute();
            endpoints.MapControllers();
        });

    }
}