using HRM.Hub.Application.Helper;

namespace HRM.Hub.Persistence;

public static class StartupConfigureServices
{
    public static void ConfigureServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddHttpContextAccessor();
        services.AddSession(options =>
        {
            options.IdleTimeout = TimeSpan.FromHours(24);
            options.Cookie.IsEssential = true;
        });
        IOC.CurrentProvider = services.BuildServiceProvider();

        services.AddSignalR();
        services.AddHttpClient();
        services.AddMemoryCache();
        services.AddCors(options =>
        {
            options.AddPolicy("CorsPolicy",
                builder => builder
                .SetIsOriginAllowed((host) => true)
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());
        });
        services.AddSwaggerGen(c =>
        {
            c.OperationFilter<FileResultContentTypeOperationFilter>();
            c.SchemaFilter<IgnorePropertySchemaFilter>();
            c.DocInclusionPredicate((docName, apiDesc) =>
            {
                return docName switch
                {
                    "hrm" => apiDesc.GroupName == null || apiDesc.GroupName == "hrm",
                    _ => false,
                };
            });
            c.SwaggerDoc("hrm", new OpenApiInfo
            {
                Version = "v1",
                Title = "API HRM",
                Description = "A simple app for HRM",
                Contact = new OpenApiContact
                {
                    Name = @"GitHub Repository",
                    Email = string.Empty,
                    Url = new Uri("https://github.com")
                }
            });
            c.EnableAnnotations();

            var securityScheme = new OpenApiSecurityScheme
            {
                Name = "JWT Authentication",
                Description = "Enter JWT Bearer token **_only_**",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.Http,
                Scheme = "bearer",
                BearerFormat = "JWT",
                Reference = new OpenApiReference
                {
                    Id = JwtBearerDefaults.AuthenticationScheme,
                    Type = ReferenceType.SecurityScheme
                }
            };
            c.AddSecurityDefinition(securityScheme.Reference.Id, securityScheme);
            c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {securityScheme, new string[] { }}
                });
        });


        services.AddScoped<LogActionArguments>();

        //Hangfire
        services.AddHangfire(option => option.UsePostgreSqlStorage(configuration.GetConnectionString("HumanResourcesDb")));
        services.AddHangfireServer();
        services.AddCommandsScheduler(configuration.GetConnectionString("HumanResourcesDb"));

        services.AddControllersWithViews(options =>
        {
            options.Conventions.Add(new SwaggerFileMapperConvention());
        });

        services.AddResponseCompression();
        services.AddMvc()
            .AddNewtonsoftJson(option =>
            {
                option.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
        //Http Global Exception Filter
        //services.AddControllers(options =>
        //{
        //    options.Filters.Add(typeof(HttpGlobalExceptionFilter));
        //});

        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
        services.Configure<ForwardedHeadersOptions>(options =>
        {
            options.ForwardedHeaders =
                ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
        });
    }
}