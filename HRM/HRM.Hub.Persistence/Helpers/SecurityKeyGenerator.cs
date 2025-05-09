using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace HRM.Hub.Persistence.Helpers
{
    public class SecurityKeyGenerator
    {
        public static SecurityKey GetSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Guid.NewGuid().ToString()));
        }
    }
}
