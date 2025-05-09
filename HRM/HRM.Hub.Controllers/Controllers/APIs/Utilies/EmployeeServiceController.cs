using System.Net;
using HRM.Hub.Application.Features.EmployeeServiceHandlers.Commands.AddEmployeeService;
using HRM.Hub.Application.Features.EmployeeServiceHandlers.Commands.UpdateEmployeeService;
using HRM.Hub.Application.Features.EmployeeServiceHandlers.Queries.GetEmployeeService;
using HRM.Hub.Application.Features.EmployeeServiceHandlers.Queries.GetEmployeeServiceById;
using HRM.Hub.Application.Features.EmployeeServiceHandlers.Queries.GetEmployeeServiceExcelFile;
using HRM.Hub.Application.Features.HandPullHandlers.Queries.GetHandPullExcelFile;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("EmployeeService")]
public class EmployeeServiceController : Base<EmployeeServiceController>
{
    private readonly IMediator _mediator;

    public EmployeeServiceController(IMediator mediator, ILogger<EmployeeServiceController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetEmployeeServiceViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetEmployeeServiceViewModel>>>> GetAll(
        [FromQuery] GetEmployeeServiceQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{employeeServiceId:Guid}")]
    [ProducesResponseType(typeof(Response<GetEmployeeServiceByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetEmployeeServiceByIdViewModel>>> GetById(Guid employeeServiceId)
    {
        var query = new GetEmployeeServiceByIdQuery
        {
            Id = employeeServiceId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetEmployeeServiceViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetEmployeeServiceViewModel>>>> Create(
        [FromBody] AddEmployeeServiceCommand commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{employeeServiceId:int}")]
    [ProducesResponseType(typeof(Response<GetEmployeeServiceViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetEmployeeServiceViewModel>>> Update(
        Guid employeeServiceId,
        [FromBody] UpdateEmployeeServiceCommand command)
    {
        command.Id = employeeServiceId;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
    [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] GetHandPullExcelFileQuery query)
    {
        try
        {
            var response = await _mediator.Send(query);

            if (response.Succeeded)
                return File(response.Data, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", $"{DateTime.Now}.xlsx");

            return BadRequest(response);
        }
        catch (Exception ex)
        {
            return BadRequest(new { ex.Message });
        }
    }
}