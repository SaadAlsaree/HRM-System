using MediatR;
using HRM.Hub.Domain.Common;
using Microsoft.AspNetCore.Mvc;
using HRM.Hub.Persistence.Helpers;
using HRM.Hub.Application.Features.AbsenceHandlers.Queries.GetAllAbsences;
using HRM.Hub.Application.Features.AbsenceHandlers.Queries.GetAbsenceById;
using HRM.Hub.Application.Features.AbsenceHandlers.Commands.CreateAbsence;
using HRM.Hub.Application.Features.AbsenceHandlers.Commands.UpdateAbsence;
using HRM.Hub.Application.Features.AbsenceHandlers.Queries.ExportFileAbsence;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Domain.Common.Enums;
using System.Net;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("Absences")]
//[Authorize(AuthenticationSchemes = "Bearer", Policy = "")]
[Permission]
public sealed class AbsencesController : Base<AbsencesController>
{
    private readonly IMediator _mediator;
    public AbsencesController(IMediator mediator, ILogger<AbsencesController> logger) : base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAllAbsencesViewModel>>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetAllAbsencesViewModel>>>> GetList([FromQuery] GetAllAbsencesQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
    
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{id:Guid}")]
    [ProducesResponseType(typeof(Response<GetAbsenceByIdViewModel>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<GetAbsenceByIdViewModel>>> GetById(Guid id)
    {
        return await Okey(() => _mediator.Send(new GetAbsenceByIdQuery
        {
            Id = id
        }));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
   


    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{id}")]
    [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<bool>>> Update(Guid id,[FromBody] UpdateAbsenceCommand command)
    {
        command.AbsenceId = id;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpDelete("{id}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus(Guid id)
    {
        return await Okey(() => _mediator.Send(new DeleteRecordCommand<Guid>()
        {
            Id = id,
            TableName = TableNames.Absence
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<Guid> command)
    {
        command.TableName = TableNames.Absence;
        return await Okey(() => _mediator.Send(command));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
    {
        commend.TableName = TableNames.Absence;
        return await Okey(() => _mediator.Send(commend));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
    [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] ExportFileAbsenceQuery query)
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
