using System.Net;
using HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Commands.AddEmployeeApplicableLaw;
using HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Commands.UpdateEmployeeApplicableLaw;
using HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Queries.GetApplicableLaw;
using HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Queries.GetApplicableLawById;
using HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievement;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("ApplicableLaw")]
public class EmployeeApplicableLawController : Base<EmployeeApplicableLawController>
{
    private readonly IMediator _mediator;

    public EmployeeApplicableLawController(IMediator mediator, ILogger<EmployeeApplicableLawController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAcademicAchievementViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetApplicableLawViewModel>>>> GetAll(
        [FromQuery] GetApplicableLawQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{ApplicableLawId}")]
    [ProducesResponseType(typeof(Response<GetApplicableLawByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetApplicableLawByIdViewModel>>> GetById(Guid ApplicableLawId)
    {
        var query = new GetApplicableLawByIdQuery
        {
            Id = ApplicableLawId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetApplicableLawViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetApplicableLawViewModel>>>> Create(
        [FromBody] AddApplicableLawCommand commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{ApplicableLawId}")]
    [ProducesResponseType(typeof(Response<GetApplicableLawViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetApplicableLawViewModel>>> Update(
        Guid ApplicableLawId,
        [FromBody] UpdateApplicableLawCommand command)
    {
        command.Id = ApplicableLawId;
        return await Okey(() => _mediator.Send(command));
    }
}