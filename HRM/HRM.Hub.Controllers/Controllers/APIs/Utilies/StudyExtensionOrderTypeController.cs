using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Commands.CreateStudyExtensionOrderType;
using HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Commands.UpdateStudyExtensionOrderType;
using HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Queries.GetStudyExtensionOrderType;
using HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Queries.GetStudyExtensionOrderTypeById;
using HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Queries.GetStudyExtensionOrderTypeList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("StudyExtensionOrderType")]
public class StudyExtensionOrderTypeController : Base<StudyExtensionOrderTypeController>
{
    private readonly IMediator _mediator;

    public StudyExtensionOrderTypeController(IMediator mediator, ILogger<StudyExtensionOrderTypeController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetStudyExtensionOrderTypeViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetStudyExtensionOrderTypeViewModel>>>> GetAll(
        [FromQuery] GetStudyExtensionOrderTypeQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{StudyExtensionOrderTypeId:int}")]
    [ProducesResponseType(typeof(Response<GetStudyExtensionOrderTypeByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetStudyExtensionOrderTypeByIdViewModel>>> GetById(int StudyExtensionOrderTypeId)
    {
        var query = new GetStudyExtensionOrderTypeByIdQuery
        {
            Id = StudyExtensionOrderTypeId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetStudyExtensionOrderTypeViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetStudyExtensionOrderTypeViewModel>>>> Create(
        [FromBody] CreateStudyExtensionOrderTypeCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{StudyExtensionOrderTypeId:int}")]
    [ProducesResponseType(typeof(Response<GetStudyExtensionOrderTypeViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetStudyExtensionOrderTypeViewModel>>> Update(
        int StudyExtensionOrderTypeId,
        [FromBody] UpdateStudyExtensionOrderTypeCommend command)
    {
        command.Id = StudyExtensionOrderTypeId;
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
            TableName = TableNames.StudyExtensionOrderType
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.StudyExtensionOrderType;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetStudyExtensionOrderTypeListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetStudyExtensionOrderTypeListViewModel>>>> GetList(
        [FromQuery] GetStudyExtensionOrderTypeListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}