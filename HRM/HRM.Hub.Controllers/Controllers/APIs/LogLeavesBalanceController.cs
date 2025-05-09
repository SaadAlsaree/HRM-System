using MediatR;
using System.Net;
using HRM.Hub.Domain.Common;
using Microsoft.AspNetCore.Mvc;
using HRM.Hub.Persistence.Helpers;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Commands.CreateLogLeavesBalance;
using HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Commands.UpdateLogLeavesBalance;
using HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Queries.GetLogLeavesBalanceById;
using HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Queries.GetAllLogLeavesBalances;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
//[Authorize(AuthenticationSchemes = "Bearer", Policy = "")]
[Tags("LogLeavesBalance")]
public sealed class LogLeavesBalanceController : Base<LogLeavesBalanceController>
{
    private readonly IMediator _mediator;
    public LogLeavesBalanceController(IMediator mediator, ILogger<LogLeavesBalanceController> logger) : base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Create([FromBody] CreateLogLeavesBalanceCommand command)
    {
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{id}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Update(Guid id, [FromBody] UpdateLogLeavesBalanceCommand command)
    {
        command.Id = id;
        return await Okey(() => _mediator.Send(command));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{logBalanceId:Guid}")]
    [ProducesResponseType(typeof(Response<GetLogLeavesBalanceByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetLogLeavesBalanceByIdViewModel>>> GetById(Guid logBalanceId)
    {
        var query = new GetLogLeavesBalanceByIdQuery
        {
            Id = logBalanceId
        };
        return await Okey(() => _mediator.Send(query));
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
            TableName = TableNames.LogLeavesBalance
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<Guid> command)
    {
        command.TableName = TableNames.LogLeavesBalance;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<GetAllLogLeavesBalancesViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetAllLogLeavesBalancesViewModel>>> GetAll([FromQuery] GetAllLogLeavesBalancesQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
    {
        commend.TableName = TableNames.LogLeavesBalance;
        return await Okey(() => _mediator.Send(commend));
    }
}