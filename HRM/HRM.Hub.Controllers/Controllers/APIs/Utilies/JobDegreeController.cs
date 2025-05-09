using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Commands.CreateJobDegree;
using HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Commands.UpdateJobDegree;
using HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Queries.GetJobDegree;
using HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Queries.GetJobDegreeById;
using HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Queries.GetJobDegreeList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("JobDegree")]
public class JobDegreeController : Base<JobDegreeController>
{
    private readonly IMediator _mediator;

    public JobDegreeController(IMediator mediator, ILogger<JobDegreeController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobDegreeViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobDegreeViewModel>>>> GetAll(
        [FromQuery] GetJobDegreeQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{JobDegreeId:int}")]
    [ProducesResponseType(typeof(Response<GetJobDegreeByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetJobDegreeByIdViewModel>>> GetById(int JobDegreeId)
    {
        var query = new GetJobDegreeByIdQuery
        {
            Id = JobDegreeId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobDegreeViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobDegreeViewModel>>>> Create(
        [FromBody] CreateJobDegreeCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{JobDegreeId:int}")]
    [ProducesResponseType(typeof(Response<GetJobDegreeViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetJobDegreeViewModel>>> Update(
        int JobDegreeId,
        [FromBody] UpdateJobDegreeCommend command)
    {
        command.Id = JobDegreeId;
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
            TableName = TableNames.JobDegree
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.JobDegree;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobDegreeListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobDegreeListViewModel>>>> GetList(
        [FromQuery] GetJobDegreeListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}