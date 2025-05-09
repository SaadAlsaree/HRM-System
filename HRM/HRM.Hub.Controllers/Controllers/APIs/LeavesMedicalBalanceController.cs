using System.Net;
using Hangfire;
using HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Commands.UpdateLeavesMedicalBalance;
using HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Queries.GetLeavesMedicalBalance;
using HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Queries.GetLeavesMedicalBalanceById;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
//[Authorize(AuthenticationSchemes = "Bearer", Policy = "")]
[Tags("LeavesMedicalBalance")]
public class LeavesMedicalBalanceController : Base<LeavesMedicalBalanceController>
{
    private readonly IMediator _mediator;

    public LeavesMedicalBalanceController(IMediator mediator, ILogger<LeavesMedicalBalanceController> logger) : base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{id}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Update(Guid id, [FromBody] UpdateLeavesMedicalBalanceCommand command)
    {
        command.Id = id;

       
        return await Okey(() => _mediator.Send(command));
    }


    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{employeeId:Guid}")]
    [ProducesResponseType(typeof(Response<GetLeavesMedicalBalanceQueryByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetLeavesMedicalBalanceQueryByIdViewModel>>> GetById(Guid employeeId)
    {
        var query = new GetLeavesMedicalBalanceByIdQuery
        {
            Id = employeeId
        };
        return await Okey(() => _mediator.Send(query));
    }



    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<GetLeavesMedicalBalanceQueryViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetLeavesMedicalBalanceQueryViewModel>>> GetAll([FromQuery] GetLeavesMedicalBalanceByIdQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }



}

