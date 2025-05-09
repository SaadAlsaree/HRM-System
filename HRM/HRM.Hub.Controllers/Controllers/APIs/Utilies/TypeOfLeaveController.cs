using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Commands.CreateTypeOfLeave;
using HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Commands.UpdateTypeOfLeave;
using HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Queries.GetTypeOfLeave;
using HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Queries.GetTypeOfLeaveById;
using HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Queries.GetTypeOfLeaveList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("TypeOfLeave")]
public class TypeOfLeaveController : Base<TypeOfLeaveController>
{
    private readonly IMediator _mediator;

    public TypeOfLeaveController(IMediator mediator, ILogger<TypeOfLeaveController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfLeaveViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfLeaveViewModel>>>> GetAll(
        [FromQuery] GetTypeOfLeaveQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{TypeOfLeaveId:int}")]
    [ProducesResponseType(typeof(Response<GetTypeOfLeaveByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetTypeOfLeaveByIdViewModel>>> GetById(int TypeOfLeaveId)
    {
        var query = new GetTypeOfLeaveByIdQuery
        {
            Id = TypeOfLeaveId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfLeaveViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfLeaveViewModel>>>> Create(
        [FromBody] CreateTypeOfLeaveCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{TypeOfLeaveId:int}")]
    [ProducesResponseType(typeof(Response<GetTypeOfLeaveViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetTypeOfLeaveViewModel>>> Update(
        int TypeOfLeaveId,
        [FromBody] UpdateTypeOfLeaveCommend command)
    {
        command.Id = TypeOfLeaveId;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpDelete("{id}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus(int id)
    {
        return await Okey(() => _mediator.Send(new DeleteRecordCommand<int>()
        {
            Id = id,
            TableName = TableNames.TypeOfLeave
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.TypeOfLeave;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfLeaveListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfLeaveListViewModel>>>> GetList(
        [FromQuery] GetTypeOfLeaveListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}