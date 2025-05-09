using MediatR;
using System.Net;
using HRM.Hub.Domain.Common;
using Microsoft.AspNetCore.Mvc;
using HRM.Hub.Persistence.Helpers;
using HRM.Hub.Application.Features.LeavesBalanceHandlers.Commands.UpdateLeavesBalance;
using HRM.Hub.Application.Features.LeavesBalanceHandlers.Queries.GetLeavesBalanceById;
using HRM.Hub.Application.Features.LeavesBalanceHandlers.Queries.GetLeavesBalance;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
//[Authorize(AuthenticationSchemes = "Bearer", Policy = "")]
[Tags("LeavesBalance")]
public sealed class LeavesBalanceController : Base<LeavesBalanceController>
{
    private readonly IMediator _mediator;
    public LeavesBalanceController(IMediator mediator, ILogger<LeavesBalanceController> logger) : base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{id}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Update(Guid id, [FromBody] UpdateLeavesBalanceCommand command)
    {
        command.Id = id;
        return await Okey(() => _mediator.Send(command));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{employeeId:Guid}")]
    [ProducesResponseType(typeof(Response<GetLeavesBalanceByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetLeavesBalanceByIdViewModel>>> GetById(Guid employeeId)
    {
        var query = new GetLeavesBalanceByIdQuery
        {
            Id = employeeId
        };
        return await Okey(() => _mediator.Send(query));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<GetLeavesBalanceViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetLeavesBalanceViewModel>>> GetAll([FromQuery] GetLeavesBalanceQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}