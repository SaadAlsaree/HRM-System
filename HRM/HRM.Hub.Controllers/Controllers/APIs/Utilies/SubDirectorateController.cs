using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Commands.CreateSubDirectorate;
using HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Commands.UpdateSubDirectorate;
using HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Queries.GetSubDirectorate;
using HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Queries.GetSubDirectorateById;
using HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Queries.GetSubDirectorateList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("SubDirectorate")]
public class SubDirectorateController : Base<SubDirectorateController>
{
    private readonly IMediator _mediator;

    public SubDirectorateController(IMediator mediator, ILogger<SubDirectorateController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetSubDirectorateViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetSubDirectorateViewModel>>>> GetAll(
        [FromQuery] GetSubDirectorateQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{SubDirectorateId:int}")]
    [ProducesResponseType(typeof(Response<GetSubDirectorateByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetSubDirectorateByIdViewModel>>> GetById(int SubDirectorateId)
    {
        var query = new GetSubDirectorateByIdQuery
        {
            Id = SubDirectorateId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetSubDirectorateViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetSubDirectorateViewModel>>>> Create(
        [FromBody] CreateSubDirectorateCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{SubDirectorateId:int}")]
    [ProducesResponseType(typeof(Response<GetSubDirectorateViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetSubDirectorateViewModel>>> Update(
        int SubDirectorateId,
        [FromBody] UpdateSubDirectorateCommend command)
    {
        command.Id = SubDirectorateId;
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
            TableName = TableNames.SubDirectorates
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.SubDirectorates;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetSubDirectorateListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetSubDirectorateListViewModel>>>> GetList(
        [FromQuery] GetSubDirectorateListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}