namespace HRM.Hub.Persistence.Configuration;

public sealed class CorsSettings
{
    public List<string> AllowedOrigins { get; set; } = new();
}
