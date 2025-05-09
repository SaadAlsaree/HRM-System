using MediatR;
using HRM.Hub.Domain.Common;
using Microsoft.AspNetCore.Mvc;
using HRM.Hub.Persistence.Helpers;
using HRM.Hub.Application.Features.Dashboard.Queries.GetCompletedOrders;
using HRM.Hub.Application.Features.Dashboard.Queries.GetEmployeeDemographics;


namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]/[action]")]
[Tags(" Dashboard")]
//[Authorize(AuthenticationSchemes = "Bearer", Policy = "")]
[Permission]
public sealed class DashboardController : Base<DashboardController>
{
    private readonly IMediator _mediator;
    public DashboardController(IMediator mediator, ILogger<DashboardController> logger) : base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<GetEmployeeDemographicsViewModel>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<GetEmployeeDemographicsViewModel>>> GetEmployeeDemographics()
    {
        return await Okey(() => _mediator.Send(new GetEmployeeDemographicsQuery()));
    }


    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<GetCompletedOrdersViewModel>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<GetCompletedOrdersViewModel>>> GetCompletedOrders()
    {
        return await Okey(() => _mediator.Send(new GetCompletedOrdersQuery()));
    }
}
