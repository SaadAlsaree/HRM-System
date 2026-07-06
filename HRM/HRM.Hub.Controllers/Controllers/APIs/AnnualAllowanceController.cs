using HRM.Hub.Application.Features.AnnualAllowance.Commands.IssueAnnualAllowance;
using HRM.Hub.Application.Features.AnnualAllowance.Queries.GetAnnualAllowance;
using HRM.Hub.Application.Features.AnnualAllowance.Queries.GetAnnualAllowanceById;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("AnnualAllowance")]
public sealed class AnnualAllowanceController : Base<AnnualAllowanceController>
{
    private readonly IMediator _mediator;

    public AnnualAllowanceController(IMediator mediator, ILogger<AnnualAllowanceController> logger) : base(logger)
    {
        _mediator = mediator;
    }

    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] GetAnnualAllowanceQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var query = new GetAnnualAllowanceByIdQuery { Id = id };
        return await Okey(() => _mediator.Send(query));
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] IssueAnnualAllowanceCommand command)
    {
        return await Okey(() => _mediator.Send(command));
    }
}
