using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Commands.CreateEmployeeDocumentsType;
using HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Commands.UpdateEmployeeDocumentsType;
using HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Queries.GetEmployeeDocumentsById;
using HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Queries.GetEmployeeDocumentsList;
using HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Queries.GetEmployeeDocumentsType;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("EmployeeDocumentsType")]
public class EmployeeDocumentsTypeController : Base<EmployeeDocumentsTypeController>
{
    private readonly IMediator _mediator;

    public EmployeeDocumentsTypeController(IMediator mediator, ILogger<EmployeeDocumentsTypeController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetEmployeeDocumentsTypeViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetEmployeeDocumentsTypeViewModel>>>> GetAll(
        [FromQuery] GetEmployeeDocumentsTypeQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{EmployeeDocumentsTypeId:int}")]
    [ProducesResponseType(typeof(Response<GetEmployeeDocumentsByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetEmployeeDocumentsByIdViewModel>>> GetById(int EmployeeDocumentsTypeId)
    {
        var query = new GetEmployeeDocumentsByIdQuery
        {
            Id = EmployeeDocumentsTypeId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetEmployeeDocumentsTypeViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetEmployeeDocumentsTypeViewModel>>>> Create(
        [FromBody] CreateEmployeeDocumentsTypeCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{EmployeeDocumentsTypeId:int}")]
    [ProducesResponseType(typeof(Response<GetEmployeeDocumentsTypeViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetEmployeeDocumentsTypeViewModel>>> Update(
        int EmployeeDocumentsTypeId,
        [FromBody] UpdateEmployeeDocumentsTypeCommend command)
    {
        command.Id = EmployeeDocumentsTypeId;
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
            TableName = TableNames.EmployeeDocumentsType
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.EmployeeDocumentsType;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetEmployeeDocumentsListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetEmployeeDocumentsListViewModel>>>> GetList(
        [FromQuery] GetEmployeeDocumentsListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}