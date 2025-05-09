using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using HRM.Hub.Application.Features.ChangeDegree.Queries.GetChangeDegree;
using HRM.Hub.Application.Features.ChangeDegree.Queries.GetByIdChangeDegree;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.ChangeDegree.Commands.UpdateChangeDegree;
using HRM.Hub.Application.Features.ChangeDegree.Commands.CreateChangeDegree;
using HRM.Hub.Application.Features.ChangeDegree.Queries.ExportFileChangeDegree;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("ChangeDegree")]

public class ChangeDegreeController : Base<ChangeDegreeController>
{
    private readonly IMediator _mediator;
    public ChangeDegreeController(IMediator mediator, ILogger<ChangeDegreeController> logger) : base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<PagedResult<GetChangeDegreeViewModel>>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<PagedResult<GetChangeDegreeViewModel>>>>
        Get([FromQuery] GetChangeDegreeQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{id:Guid}")]
    [ProducesResponseType(typeof(Response<GetByIdChangeDegreeViewModel>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<GetByIdChangeDegreeViewModel>>> GetById(Guid id)
    {
        return await Okey(() => _mediator.Send(new GetByIdChangeDegreeQuery
        {
            Id = id
        }));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<bool>>> Create([FromBody] CreateChangeDegreeCommand command)
    {
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{id}")]
    [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<bool>>> Update(Guid id, [FromBody] UpdateChangeDegreeCommand command)
    {
        command.Id = id;
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
            TableName = TableNames.ChangeDegree
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost("[action]")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
    {
        commend.TableName = TableNames.ChangeDegree;
        return await Okey(() => _mediator.Send(commend));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<Guid> command)
    {
        command.TableName = TableNames.ChangeDegree;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
    [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] ExportFileChangeDegreeQuery query)
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