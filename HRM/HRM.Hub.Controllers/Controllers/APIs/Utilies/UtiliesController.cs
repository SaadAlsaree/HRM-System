using HRM.Hub.Application.Features.EmployeeHandlers.Queries.FindEmployee;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies
{
    [ApiController]
    [Produces("application/json")]
    [Route("hub/hrm/v1/api/[controller]/[action]")]
    [Tags("Utilies")]
    public class UtiliesController : Base<UtiliesController>
    {
        private readonly IMediator _mediator;

        public UtiliesController(IMediator mediator, ILogger<UtiliesController> logger) :
            base(logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet]
        [ProducesResponseType(typeof(Response<IEnumerable<FindEmployeeViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<FindEmployeeViewModel>>>> FindEmployee([FromQuery] FindEmployeeQuery query)
        {
            return await Okey(() => _mediator.Send(query));
        }
        [HttpGet]
        [ProducesResponseType(typeof(Response<Dictionary<int, string>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public ActionResult<Response<Dictionary<int,string>>> GetStatus()
        {
            return Ok(SuccessMessage.Get.ToSuccessMessage(default(Status).ToDictionary<Status>()));
        }
    }
}
