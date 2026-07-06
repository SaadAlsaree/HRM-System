using HRM.Hub.Application.Features.TeamNotification.Commands.CreateTeamNotification;
using HRM.Hub.Application.Features.TeamNotification.Commands.MarkAsRead;
using HRM.Hub.Application.Features.TeamNotification.Queries.GetTeamNotifications;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Features.TeamNotification.Queries.GetUnreadCount;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace HRM.Hub.Controllers.Controllers.APIs
{
    [ApiController]
    [Produces("application/json")]
    [Route("hub/hrm/v1/api/[controller]")]
    [Tags("TeamNotification")]
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

        [HttpGet]
        [ProducesResponseType(typeof(Response<PagedResult<GetTeamNotificationsViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<PagedResult<GetTeamNotificationsViewModel>>>> GetAll(
            [FromQuery] GetTeamNotificationsQuery query)
        {
            return await Okey(() => _mediator.Send(query));
        }

        [HttpPut("[action]/{id:Guid}")]
        [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<bool>>> MarkAsRead(Guid id)
        {
            var command = new MarkAsReadCommand { Id = id };
            return await Okey(() => _mediator.Send(command));
        }

        [HttpGet("[action]")]
        [ProducesResponseType(typeof(Response<int>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<int>>> GetUnreadCount([FromQuery] GetUnreadCountQuery query)
        {
            return await Okey(() => _mediator.Send(query));
        }
    }
}
