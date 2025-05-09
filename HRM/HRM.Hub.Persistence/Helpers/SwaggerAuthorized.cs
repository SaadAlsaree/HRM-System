namespace HRM.Hub.Persistence.Helpers
{
    public static class SwaggerAuthorized
    {
        public static IApplicationBuilder UseSwaggerAuthorized(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<SwaggerBasicAuthMiddleware>();
        }
    }
}
