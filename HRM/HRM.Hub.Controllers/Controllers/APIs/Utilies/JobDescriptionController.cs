using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Commands.CreateJobDescription;
using HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Commands.UpdateJobDescription;
using HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Queries.GetJobDescription;
using HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Queries.GetJobDescriptionById;
using HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Queries.GetJobDescriptionList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("JobDescription")]
public class JobDescriptionController : Base<JobDescriptionController>
{
    private readonly IMediator _mediator;

    public JobDescriptionController(IMediator mediator, ILogger<JobDescriptionController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobDescriptionViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobDescriptionViewModel>>>> GetAll(
        [FromQuery] GetJobDescriptionQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{JobDescriptionId:int}")]
    [ProducesResponseType(typeof(Response<GetJobDescriptionByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetJobDescriptionByIdViewModel>>> GetById(int JobDescriptionId)
    {
        var query = new GetJobDescriptionByIdQuery
        {
            Id = JobDescriptionId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobDescriptionViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobDescriptionViewModel>>>> Create(
        [FromBody] CreateJobDescriptionCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{JobDescriptionId:int}")]
    [ProducesResponseType(typeof(Response<GetJobDescriptionViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetJobDescriptionViewModel>>> Update(
        int JobDescriptionId,
        [FromBody] UpdateJobDescriptionCommend command)
    {
        command.Id = JobDescriptionId;
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
            TableName = TableNames.JobDescription
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.JobDescription;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobDescriptionListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobDescriptionListViewModel>>>> GetList(
        [FromQuery] GetJobDescriptionListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}