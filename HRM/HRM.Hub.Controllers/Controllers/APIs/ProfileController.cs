using HRM.Hub.Persistence.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("Profile")]
public sealed class ProfileController(ICurrentUserService currentUser) : ControllerBase
{
    [HttpGet("[action]")]
    public ActionResult<object> Me()
    {
        if (!currentUser.IsAuthenticated)
            return Unauthorized();

        return Ok(new
        {
            id = currentUser.UserId,
            userName = currentUser.UserName,
            email = currentUser.Email,
            roles = currentUser.Roles
        });
    }
}
