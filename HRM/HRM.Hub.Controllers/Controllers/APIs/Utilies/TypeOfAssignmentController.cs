using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Commands.CreateTypeOfAssignment;
using HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Commands.UpdateTypeOfAssignment;
using HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Queries.GetTypeOfAssignment;
using HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Queries.GetTypeOfAssignmentById;
using HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Queries.GetTypeOfAssignmentList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;


[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("TypeOfAssignment")]
public class TypeOfAssignmentController : Base<TypeOfAssignmentController>
{
    private readonly IMediator _mediator;

    public TypeOfAssignmentController(IMediator mediator, ILogger<TypeOfAssignmentController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfAssignmentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfAssignmentViewModel>>>> GetAll(
        [FromQuery] GetTypeOfAssignmentQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{TypeOfAssignmentId:int}")]
    [ProducesResponseType(typeof(Response<GetTypeOfAssignmentByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetTypeOfAssignmentByIdViewModel>>> GetById(int TypeOfAssignmentId)
    {
        var query = new GetTypeOfAssignmentByIdQuery
        {
            Id = TypeOfAssignmentId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfAssignmentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfAssignmentViewModel>>>> Create(
        [FromBody] CreateTypeOfAssignmentCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{TypeOfAssignmentId:int}")]
    [ProducesResponseType(typeof(Response<GetTypeOfAssignmentViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetTypeOfAssignmentViewModel>>> Update(
        int TypeOfAssignmentId,
        [FromBody] UpdateTypeOfAssignmentCommend command)
    {
        command.Id = TypeOfAssignmentId;
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
            TableName = TableNames.TypeOfAssignment
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.TypeOfAssignment;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfAssignmentListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfAssignmentListViewModel>>>> GetList(
        [FromQuery] GetTypeOfAssignmentListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}