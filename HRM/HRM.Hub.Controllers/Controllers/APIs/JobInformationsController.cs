using MediatR;
using HRM.Hub.Domain.Common;
using Microsoft.AspNetCore.Mvc;
using HRM.Hub.Persistence.Helpers;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Domain.Common.Enums;
using System.Net;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.JobInformationHandlers.Queries.GetAllJobInformations;
using HRM.Hub.Application.Features.JobInformationHandlers.Queries.GetJobInformationById;
using HRM.Hub.Application.Features.JobInformationHandlers.Queries.GetJobInformationExcelFile;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("JobInformations")]
//[Authorize(AuthenticationSchemes = "Bearer", Policy = "")]
[Permission]
public sealed class JobInformationsController : Base<JobInformationsController>
{
    private readonly IMediator _mediator;
    public JobInformationsController(IMediator mediator, ILogger<JobInformationsController> logger) : base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAllJobInformationsViewModel>>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetAllJobInformationsViewModel>>>> GetList([FromQuery] GetAllJobInformationsQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
    
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{id:Guid}")]
    [ProducesResponseType(typeof(Response<GetJobInformationByIdViewModel>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<GetJobInformationByIdViewModel>>> GetById(Guid id)
    {
        return await Okey(() => _mediator.Send(new GetJobInformationByIdQuery
        {
            Id = id
        }));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    
    public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] GetJobInformationExcelFileQuery query)
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