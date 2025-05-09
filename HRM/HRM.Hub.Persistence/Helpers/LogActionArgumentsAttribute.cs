using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http.Headers;

namespace HRM.Hub.Persistence.Helpers
{
    public class LogActionArguments : ActionFilterAttribute
    {
        private static ILogger<LogActionArguments> _logger;
        public LogActionArguments(ILogger<LogActionArguments> logger)
        {
            _logger = logger;
        }
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var arguments = context.ActionArguments;
            var action = new
            {
                ControllerName = context.HttpContext.Request.RouteValues["controller"],
                ActionName = context.HttpContext.Request.RouteValues["action"],
                UserId = GetInfoOfUser("sub", context)
            };
            arguments.Add("context", action);

            _logger.LogInformation($"Request Body arguments: {JsonConvert.SerializeObject(arguments)}");

            base.OnActionExecuting(context);
        }

        protected string GetInfoOfUser(string key, ActionExecutingContext context)
        {
            try
            {
                string userId = string.Empty;
                if (AuthenticationHeaderValue.TryParse(context.HttpContext.Request.Headers["Authorization"], out AuthenticationHeaderValue authenticationHeaderValue))
                {
                    if (authenticationHeaderValue?.Scheme.ToLower() == "bearer")
                    {
                        var handler = new JwtSecurityTokenHandler();
                        var tokenOfUser = handler.ReadToken(authenticationHeaderValue.Parameter) as JwtSecurityToken;
                        if (tokenOfUser != null)
                        {
                            if (tokenOfUser.Claims.Any()) userId = tokenOfUser.Claims.SingleOrDefault(x => x.Type == key)?.Value;
                            else
                                userId = null;
                        }
                        else
                            userId = null;

                    }
                    else if (authenticationHeaderValue?.Scheme.ToLower() == "basic")
                    {
                        userId = context.HttpContext.User.Claims.FirstOrDefault(x => x.Type == key)?.Value;
                    }
                    else
                    {
                        userId = null;
                    }
                }
                else
                {
                    userId = context.HttpContext.User.Claims.FirstOrDefault(x => x.Type == key)?.Value;
                }
                return userId;

            }
            catch (Exception)
            {
                Console.WriteLine("Expectation Failed");
                return null;
            }
        }
    }
}
