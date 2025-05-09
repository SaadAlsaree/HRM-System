using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Commands.CreateStudyStatus;
using HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Commands.UpdateStudyStatus;
using HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Queries.GetStudyStatus;
using HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Queries.GetStudyStatusById;
using HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Queries.GetStudyStatusList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;


[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("StudyStatus")]
public class StudyStatusController : Base<StudyStatusController>
{
    private readonly IMediator _mediator;

    public StudyStatusController(IMediator mediator, ILogger<StudyStatusController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetStudyStatusViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetStudyStatusViewModel>>>> GetAll(
        [FromQuery] GetStudyStatusQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{Studystatus:int}")]
    [ProducesResponseType(typeof(Response<GetStudyStatusByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetStudyStatusByIdViewModel>>> GetById(int Studystatus)
    {
        var query = new GetStudyStatusByIdQuery
        {
            Id = Studystatus
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetStudyStatusViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetStudyStatusViewModel>>>> Create(
        [FromBody] CreateStudyStatusCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{Studystatus:int}")]
    [ProducesResponseType(typeof(Response<GetStudyStatusViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetStudyStatusViewModel>>> Update(
        int Studystatus,
        [FromBody] UpdateStudyStatusCommend command)
    {
        command.Id = Studystatus;
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
            TableName = TableNames.StudyStatus
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.StudyStatus;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetStudyStatusListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetStudyStatusListViewModel>>>> GetList(
        [FromQuery] GetStudyStatusListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}