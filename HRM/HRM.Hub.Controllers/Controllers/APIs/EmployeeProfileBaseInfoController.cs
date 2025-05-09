using HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetLotEmployee;
using HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetAdministrativeOrderToEmployeeProfile;
using HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetEducationInformationToEmployeeProfile;
using HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetEmployeeInformation;
using HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetManagementInfoEmployeeProfile;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]/[action]")]
[Tags("EmployeeProfile")]
public class EmployeeProfileBaseInfoController : Base<EmployeeProfileBaseInfoController>
{
    private readonly IMediator _mediator;

    public EmployeeProfileBaseInfoController(IMediator mediator, ILogger<EmployeeProfileBaseInfoController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{employeeId:Guid}")]
    [ProducesResponseType(typeof(Response<GetAdministrativeOrderToEmployeeProfileViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetAdministrativeOrderToEmployeeProfileViewModel>>> GetAdministrativeOrder(Guid employeeId)
    {
        var query = new GetAdministrativeOrderToEmployeeProfileQuery
        {
            EmployeeId = employeeId
        };
        return await Okey(() => _mediator.Send(query));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{employeeId:Guid}")]
    [ProducesResponseType(typeof(Response<GetEducationInfoToEmployeeProfileViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetEducationInfoToEmployeeProfileViewModel>>> GetEducationInfo(Guid employeeId)
    {
        var query = new GetEducationInfoToEmployeeProfileQuery
        {
            EmployeeId = employeeId
        };
        return await Okey(() => _mediator.Send(query));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{employeeId:Guid}")]
    [ProducesResponseType(typeof(Response<GetManagementInfoToEmployeeProfileViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetManagementInfoToEmployeeProfileViewModel>>> GetManagementInfo(Guid employeeId)
    {
        var query = new GetManagementInfoToEmployeeProfileQuery
        {
            EmployeeId = employeeId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{employeeId:Guid}")]
    [ProducesResponseType(typeof(Response<GetEmployeeInformationViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetEmployeeInformationViewModel>>> GetEmployeeInfo(Guid employeeId)
    {
        var query = new GetEmployeeInformationQuery
        {
            EmployeeId = employeeId
        };
        return await Okey(() => _mediator.Send(query));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<GetLotEmployeeView>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetLotEmployeeView>>> GetLotEmployee([FromQuery] GetLotEmployeeQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}