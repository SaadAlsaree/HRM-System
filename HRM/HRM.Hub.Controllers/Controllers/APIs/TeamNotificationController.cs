using HRM.Hub.Application.Features.TeamNotification.Commands.CreateTeamNotification;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs
{
    [ApiController]
    [Produces("application/json")]
    [Route("hub/hrm/v1/api/[controller]")]
    [Tags("TeamNotification")]
    //[Authorize(AuthenticationSchemes = "Bearer", Policy = "")]
    [Permission]
    public class TeamNotificationController : Base<TeamNotificationController>
    {
        private readonly IMediator _mediator;
        public TeamNotificationController(IMediator mediator, ILogger<TeamNotificationController> logger) : base(logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost]
        [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<bool>>> Create([FromBody] CreateTeamNotificationCommand command)
        {
            return await Okey(() => _mediator.Send(command));
        }
    }
}
