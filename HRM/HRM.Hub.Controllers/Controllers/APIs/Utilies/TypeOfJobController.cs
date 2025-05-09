using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Commands.CreateTypeOfJob;
using HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Commands.UpdateTypeOfJob;
using HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Queries.GetTypeOfJob;
using HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Queries.GetTypeOfJobById;
using HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Queries.GetTypeOfJobList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("TypeOfJob")]
public class TypeOfJobController : Base<TypeOfJobController>
{
    private readonly IMediator _mediator;

    public TypeOfJobController(IMediator mediator, ILogger<TypeOfJobController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfJobViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfJobViewModel>>>> GetAll(
        [FromQuery] GetTypeOfJobQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{TypeOfJobId:int}")]
    [ProducesResponseType(typeof(Response<GetTypeOfJobByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetTypeOfJobByIdViewModel>>> GetById(int TypeOfJobId)
    {
        var query = new GetTypeOfJobByIdQuery
        {
            Id = TypeOfJobId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfJobViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfJobViewModel>>>> Create(
        [FromBody] CreateTypeOfJobCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{TypeOfJobId:int}")]
    [ProducesResponseType(typeof(Response<GetTypeOfJobViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetTypeOfJobViewModel>>> Update(
        int TypeOfJobId,
        [FromBody] UpdateTypeOfJobCommend command)
    {
        command.Id = TypeOfJobId;
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
            TableName = TableNames.TypeOfJob
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.TypeOfJob;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfJobListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfJobListViewModel>>>> GetList(
        [FromQuery] GetTypeOfJobListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}