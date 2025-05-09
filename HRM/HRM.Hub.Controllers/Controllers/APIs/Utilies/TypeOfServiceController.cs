using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Commands.CreateTypeOfService;
using HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Commands.UpdateTypeOfService;
using HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Queries.GetTypeOfService;
using HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Queries.GetTypeOfServiceById;
using HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Queries.GetTypeOfServiceList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("TypeOfService")]
public class TypeOfServiceController : Base<TypeOfServiceController>
{
    private readonly IMediator _mediator;

    public TypeOfServiceController(IMediator mediator, ILogger<TypeOfServiceController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfServiceViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfServiceViewModel>>>> GetAll(
        [FromQuery] GetTypeOfServiceQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{TypeOfServiceId:int}")]
    [ProducesResponseType(typeof(Response<GetTypeOfServiceByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetTypeOfServiceByIdViewModel>>> GetById(int TypeOfServiceId)
    {
        var query = new GetTypeOfServiceByIdQuery
        {
            Id = TypeOfServiceId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfServiceViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfServiceViewModel>>>> Create(
        [FromBody] CreateTypeOfServiceCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{TypeOfServiceId:int}")]
    [ProducesResponseType(typeof(Response<GetTypeOfServiceViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetTypeOfServiceViewModel>>> Update(
        int TypeOfServiceId,
        [FromBody] UpdateTypeOfServiceCommend command)
    {
        command.Id = TypeOfServiceId;
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
            TableName = TableNames.TypeOfService
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.TypeOfService;
        return await Okey(() => _mediator.Send(command));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfServiceListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfServiceListViewModel>>>> GetList(
        [FromQuery] GetTypeOfServiceListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}