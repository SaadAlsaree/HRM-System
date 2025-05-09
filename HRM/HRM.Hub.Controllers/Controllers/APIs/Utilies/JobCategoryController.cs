using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Commands.CreateJobCategory;
using HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Commands.UpdateJobCategory;
using HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Queries.GetJobCategory;
using HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Queries.GetJobCategoryById;
using HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Queries.GetJobCategoryList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;


[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("JobCategory")]
public class JobCategoryController : Base<JobCategoryController>
{
    private readonly IMediator _mediator;

    public JobCategoryController(IMediator mediator, ILogger<JobCategoryController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobCategoryViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobCategoryViewModel>>>> GetAll(
        [FromQuery] GetJobCategoryQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{JobCategoryId:int}")]
    [ProducesResponseType(typeof(Response<GetJobCategoryByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetJobCategoryByIdViewModel>>> GetById(int JobCategoryId)
    {
        var query = new GetJobCategoryByIdQuery
        {
            Id = JobCategoryId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobCategoryViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobCategoryViewModel>>>> Create(
        [FromBody] CreateJobCategoryCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{JobCategoryId:int}")]
    [ProducesResponseType(typeof(Response<GetJobCategoryViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetJobCategoryViewModel>>> Update(
        int JobCategoryId,
        [FromBody] UpdateJobCategoryCommend command)
    {
        command.Id = JobCategoryId;
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
            TableName = TableNames.JobCategory
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.JobCategory;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetJobCategoryListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetJobCategoryListViewModel>>>> GetList(
        [FromQuery] GetJobCategoryListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}