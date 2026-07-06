using System.Net;
using HRM.Hub.Application.Features.DepartmentOwnerHandlers.Commands.CreateDepartmentOwner;
using HRM.Hub.Application.Features.DepartmentOwnerHandlers.Commands.UpdateDepartmentOwner;
using HRM.Hub.Application.Features.DepartmentOwnerHandlers.Queries.GetDepartmentOwner;
using HRM.Hub.Application.Features.DepartmentOwnerHandlers.Queries.GetDepartmentOwnerById;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("DepartmentOwner")]
public class DepartmentOwnerController : Base<DepartmentOwnerController>
{
    private readonly IMediator _mediator;

    public DepartmentOwnerController(IMediator mediator, ILogger<DepartmentOwnerController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<PagedResult<GetDepartmentOwnerViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<PagedResult<GetDepartmentOwnerViewModel>>>> GetAll(
        [FromQuery] GetDepartmentOwnerQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{ownerId:Guid}")]
    [ProducesResponseType(typeof(Response<GetDepartmentOwnerByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetDepartmentOwnerByIdViewModel>>> GetById(Guid ownerId)
    {
        return await Okey(() => _mediator.Send(new GetDepartmentOwnerByIdQuery { Id = ownerId }));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Create([FromBody] CreateDepartmentOwnerCommand command)
    {
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{ownerId:Guid}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Update(Guid ownerId, [FromBody] UpdateDepartmentOwnerCommand command)
    {
        command.Id = ownerId;
        return await Okey(() => _mediator.Send(command));
    }
}
