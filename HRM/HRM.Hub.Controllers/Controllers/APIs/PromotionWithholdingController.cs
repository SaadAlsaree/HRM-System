using MediatR;
using System.Net;
using HRM.Hub.Application.Features.PromotionWithholding.Commands.CreatePromotionWithholding;
using HRM.Hub.Application.Features.PromotionWithholding.Commands.UpdatePromotionWithholding;
using HRM.Hub.Application.Features.PromotionWithholding.Commands.DeletePromotionWithholding;
using HRM.Hub.Application.Features.PromotionWithholding.Queries.GetPromotionWithholding;
using HRM.Hub.Application.Features.PromotionWithholding.Queries.GetByIdPromotionWithholding;
using HRM.Hub.Domain.Common;
using Microsoft.AspNetCore.Mvc;
using HRM.Hub.Persistence.Helpers;
using Microsoft.AspNetCore.Authorization;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("PromotionWithholding")]
//[Authorize(AuthenticationSchemes = "Bearer", Policy = "")]
public sealed class PromotionWithholdingController : Base<PromotionWithholdingController>
{
    private readonly IMediator _mediator;

    public PromotionWithholdingController(IMediator mediator, ILogger<PromotionWithholdingController> logger) : base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetPromotionWithholdingViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetPromotionWithholdingViewModel>>>> GetAll(
        [FromQuery] GetPromotionWithholdingQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{id:Guid}")]
    [ProducesResponseType(typeof(Response<GetByIdPromotionWithholdingViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetByIdPromotionWithholdingViewModel>>> GetById(Guid id)
    {
        var query = new GetByIdPromotionWithholdingQuery { Id = id };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Create([FromBody] CreatePromotionWithholdingCommand command)
    {
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{id:Guid}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Update(Guid id, [FromBody] UpdatePromotionWithholdingCommand command)
    {
        command.Id = id;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpDelete("{id:Guid}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Delete(Guid id)
    {
        var command = new DeletePromotionWithholdingCommand { Id = id };
        return await Okey(() => _mediator.Send(command));
    }
}
