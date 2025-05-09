using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Commands.CreateStudyResult;
using HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Commands.UpdateStudyResult;
using HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Queries.GetStudyResult;
using HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Queries.GetStudyResultById;
using HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Queries.GetStudyResultList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;


[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("StudyResult")]
public class StudyResultController : Base<StudyResultController>
{
    private readonly IMediator _mediator;

    public StudyResultController(IMediator mediator, ILogger<StudyResultController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetStudyResultViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetStudyResultViewModel>>>> GetAll(
        [FromQuery] GetStudyResultQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{StudyResultId:int}")]
    [ProducesResponseType(typeof(Response<GetStudyResultByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetStudyResultByIdViewModel>>> GetById(int StudyResultId)
    {
        var query = new GetStudyResultByIdQuery
        {
            Id = StudyResultId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetStudyResultViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetStudyResultViewModel>>>> Create(
        [FromBody] CreateStudyResultCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{StudyResultId:int}")]
    [ProducesResponseType(typeof(Response<GetStudyResultViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetStudyResultViewModel>>> Update(
        int StudyResultId,
        [FromBody] UpdateStudyResultCommend command)
    {
        command.Id = StudyResultId;
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
            TableName = TableNames.StudyResult
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.StudyResult;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetStudyResultListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetStudyResultListViewModel>>>> GetList(
        [FromQuery] GetStudyResultListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}