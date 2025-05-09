using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Commands.CreateJobTitle;
using HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Commands.UpdateJobTitle;
using HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Queries.GetJobTitle;
using HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Queries.GetJobTitleById;
using HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Queries.GetJobTitleList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("JobTitle")]
public class JobTitleController : Base<JobTitleController>
{
    private readonly IMediator _mediator;

    public JobTitleController(IMediator mediator, ILogger<JobTitleController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobTitleViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobTitleViewModel>>>> GetAll(
        [FromQuery] GetJobTitleQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{JobTitleId:int}")]
    [ProducesResponseType(typeof(Response<GetJobTitleByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetJobTitleByIdViewModel>>> GetById(int JobTitleId)
    {
        var query = new GetJobTitleByIdQuery
        {
            Id = JobTitleId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobTitleViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobTitleViewModel>>>> Create(
        [FromBody] CreateJobTitleCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{JobTitleId:int}")]
    [ProducesResponseType(typeof(Response<GetJobTitleViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetJobTitleViewModel>>> Update(
        int JobTitleId,
        [FromBody] UpdateJobTitleCommend command)
    {
        command.Id = JobTitleId;
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
            TableName = TableNames.JobTitle
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.JobTitle;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobTitleListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobTitleListViewModel>>>> GetList(
        [FromQuery] GetJobTitleListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}