using System.Net;
using HRM.Hub.Application.Features.PromotionRules;
using HRM.Hub.Application.Features.PromotionRules.Commands.CreatePromotionRule;
using HRM.Hub.Application.Features.PromotionRules.Commands.DeletePromotionRule;
using HRM.Hub.Application.Features.PromotionRules.Commands.UpdatePromotionRule;
using HRM.Hub.Application.Features.PromotionRules.Queries.GetPromotionRules;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

// Promotion and annual allowance period rules used by the promotion/allowance calculation.
[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("PromotionRules")]
public class PromotionRulesController : Base<PromotionRulesController>
{
    private readonly IMediator _mediator;

    public PromotionRulesController(IMediator mediator, ILogger<PromotionRulesController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<PagedResult<GetPromotionRulesViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<PagedResult<GetPromotionRulesViewModel>>>> GetAll(
        [FromQuery] GetPromotionRulesQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Create([FromBody] CreatePromotionRuleCommand command)
    {
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{RuleId:int}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Update(int RuleId, [FromBody] UpdatePromotionRuleCommand command)
    {
        command.Id = RuleId;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpDelete("{RuleId:int}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Delete(int RuleId, [FromQuery] PromotionRuleType ruleType)
    {
        return await Okey(() => _mediator.Send(new DeletePromotionRuleCommand { Id = RuleId, RuleType = ruleType }));
    }
}
