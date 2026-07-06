namespace HRM.Hub.Persistence.Configuration;

public sealed class KeycloakSettings
{
    public string BaseUrl { get; set; } = string.Empty;
    public string Realm { get; set; } = string.Empty;
    public string ClientId { get; set; } = string.Empty;
    public string Issuer { get; set; } = string.Empty;
    public string InternalIssuer { get; set; } = string.Empty;
    public string Audience { get; set; } = string.Empty;

    public string MetadataAddress => $"{BaseUrl}/realms/{Realm}/.well-known/openid-configuration";
}
