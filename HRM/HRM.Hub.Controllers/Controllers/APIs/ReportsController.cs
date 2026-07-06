using System.Net;
using HRM.Hub.Application.Features.ReportHandlers.Queries.GetExpiringAffiliationsReport;
using HRM.Hub.Application.Features.ReportHandlers.Queries.GetExpiringAssignmentsReport;
using HRM.Hub.Application.Features.ReportHandlers.Queries.GetMovementsHistoryReport;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("Reports")]
public class ReportsController : Base<ReportsController>
{
    private readonly IMediator _mediator;

    public ReportsController(IMediator mediator, ILogger<ReportsController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<PagedResult<GetExpiringAffiliationsReportViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<PagedResult<GetExpiringAffiliationsReportViewModel>>>> ExpiringAffiliations(
        [FromQuery] GetExpiringAffiliationsReportQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<PagedResult<GetExpiringAssignmentsReportViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<PagedResult<GetExpiringAssignmentsReportViewModel>>>> ExpiringAssignments(
        [FromQuery] GetExpiringAssignmentsReportQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<PagedResult<GetMovementsHistoryReportViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<PagedResult<GetMovementsHistoryReportViewModel>>>> MovementsHistory(
        [FromQuery] GetMovementsHistoryReportQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}
