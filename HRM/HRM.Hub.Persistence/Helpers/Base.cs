namespace HRM.Hub.Persistence.Helpers;

public class Base<T> : ControllerBase where T : Base<T>
{
    private ILogger<T> _logger;

    public Base(ILogger<T> logger)
    {
        _logger = logger;
    }
    protected string GetInfoOfUser(string key)
    {
        try
        {
            string userId = string.Empty;
            if (AuthenticationHeaderValue.TryParse(Request.Headers["Authorization"], out AuthenticationHeaderValue authenticationHeaderValue))
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
                else
                {
                    userId = null;
                }
            }
            else
            {
                userId = User.Claims.FirstOrDefault(x => x.Type == key)?.Value;
            }
            return userId;

        }
        catch (Exception)
        {
            Console.WriteLine("Expectation Failed");
            return null;
        }
    }
    protected async Task<ObjectResult> Okey<TRequest>(Func<Task<Response<TRequest>>> func)
    {
        try
        {
            var action = new
            {
                ControllerName = Request.RouteValues["controller"],
                ActionName = Request.RouteValues["action"],
                UserId = GetInfoOfUser("sub")
            };
            var result = await func();

            _logger.LogTrace("Response | Action:{0}  | ResponseBody:{1}", JsonConvert.SerializeObject(action), JsonConvert.SerializeObject(result));
            if (result.Succeeded)
                return Ok(result);
            else
                return BadRequest(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, $"Exception Caught | User Id :{GetInfoOfUser("sub")}");
            return StatusCode(StatusCodes.Status400BadRequest, Response<T>.Fail(new List<object>() { ex }, new MessageResponse() { Code = "Error2000", Message = "حدث خطا, اعد المحاولة لاحقا" }));
        }
    }
}