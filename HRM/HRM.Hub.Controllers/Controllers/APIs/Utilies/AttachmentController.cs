using System.Net;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Commands.UpdateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachmentById;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("Attachment")]
public class AttachmentController : Base<AttachmentController>
{
    private readonly IMediator _mediator;

    public AttachmentController(IMediator mediator, ILogger<AttachmentController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> GetAll(
        [FromQuery] GetAttachmentQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{AttachmentId:Guid}/{EmployeeId:Guid}")]
    [ProducesResponseType(typeof(Response<GetAttachmentByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetAttachmentByIdViewModel>>> GetById(Guid AttachmentId, Guid EmployeeId)
    {
        var query = new GetAttachmentByIdQuery
        {
            AttachmentId = AttachmentId,
            EmployeeId = EmployeeId
        };
        return await Okey(() => _mediator.Send(query));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{AttachmentId:Guid}")]
    [ProducesResponseType(typeof(Response<GetAttachmentViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetAttachmentViewModel>>> Update(
        Guid AttachmentId,
        [FromBody] UpdateAttachmentCommend command)
    {
        command.Id = AttachmentId;
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
            TableName = TableNames.Attachments
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<Guid> command)
    {
        command.TableName = TableNames.Attachments;
        return await Okey(() => _mediator.Send(command));
    }
}