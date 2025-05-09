using System.Net;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.HandPullHandlers.Commands.CreateHandPull;
using HRM.Hub.Application.Features.HandPullHandlers.Commands.UpdateHandPull;
using HRM.Hub.Application.Features.HandPullHandlers.Queries.GetAllHandPulls;
using HRM.Hub.Application.Features.HandPullHandlers.Queries.GetHandPullById;
using HRM.Hub.Application.Features.HandPullHandlers.Queries.GetHandPullExcelFile;
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
[Tags("HandPull")]
public class HandPullController : Base<HandPullController>
{
    private readonly IMediator _mediator;

    public HandPullController(IMediator mediator, ILogger<HandPullController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Create(
    [FromBody] CreateHandPullCommand commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{Id:Guid}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Update(
        Guid Id,
        [FromBody] UpdateHandPullCommand command)
    {
        command.Id = Id;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpDelete("{id}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> DeleteRecord(Guid id)
    {
        return await Okey(() => _mediator.Send(new DeleteRecordCommand<Guid>()
        {
            Id = id,
            TableName = TableNames.HandPull
        }));
    }
    
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<Guid> command)
    {
        command.TableName = TableNames.HandPull;
        return await Okey(() => _mediator.Send(command));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
    {
        commend.TableName = TableNames.HandPull;
        return await Okey(() => _mediator.Send(commend));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAllHandPullsViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetAllHandPullsViewModel>>>> GetList(
    [FromQuery] GetAllHandPullsQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{Id:Guid}")]
    [ProducesResponseType(typeof(Response<GetHandPullByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetHandPullByIdViewModel>>> GetById(Guid Id,Status status = Status.None)
    {
        return await Okey(() => _mediator.Send(new GetHandPullByIdQuery
        {
            Id = Id,
            Status = status
        }));
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