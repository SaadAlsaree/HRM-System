namespace HRM.Hub.Persistence.Identity;

public sealed class CurrentUserService(IHttpContextAccessor httpContextAccessor) : ICurrentUserService
{
    private ClaimsPrincipal? Principal => httpContextAccessor.HttpContext?.User;

    public bool IsAuthenticated => Principal?.Identity?.IsAuthenticated ?? false;

    public Guid? UserId
    {
        get
        {
            var sub = Principal?.FindFirstValue(AppClaimTypes.UserId);
            return Guid.TryParse(sub, out var id) ? id : null;
        }
    }

    public string? UserName =>
        Principal?.FindFirstValue(AppClaimTypes.UserLogin)
        ?? Principal?.FindFirstValue(AppClaimTypes.Email);

    public string? Email => Principal?.FindFirstValue(AppClaimTypes.Email);

    public IReadOnlyList<string> Roles
    {
        get
        {
            var roleClaims = Principal?.FindAll(AppClaimTypes.Role) ?? Enumerable.Empty<Claim>();
            return roleClaims
                .Select(c => c.Value)
                .Where(v => !string.IsNullOrWhiteSpace(v))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();
        }
    }

    public bool IsInRole(string role) =>
        Roles.Contains(role, StringComparer.OrdinalIgnoreCase);
}
