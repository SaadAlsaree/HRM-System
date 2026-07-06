using System.Net;
using HRM.Hub.Application.Features.AffiliationHandlers.Commands.CreateAffiliation;
using HRM.Hub.Application.Features.AffiliationHandlers.Commands.EndAffiliation;
using HRM.Hub.Application.Features.AffiliationHandlers.Commands.RenewAffiliation;
using HRM.Hub.Application.Features.AffiliationHandlers.Commands.UpdateAffiliation;
using HRM.Hub.Application.Features.AffiliationHandlers.Queries.ExportFileAffiliation;
using HRM.Hub.Application.Features.AffiliationHandlers.Queries.GetAffiliationById;
using HRM.Hub.Application.Features.AffiliationHandlers.Queries.GetAffiliations;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("Affiliations")]
public class AffiliationsController : Base<AffiliationsController>
{
    private readonly IMediator _mediator;

    public AffiliationsController(IMediator mediator, ILogger<AffiliationsController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<PagedResult<GetAffiliationsViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<PagedResult<GetAffiliationsViewModel>>>> GetAll(
        [FromQuery] GetAffiliationsQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{affiliationId:Guid}")]
    [ProducesResponseType(typeof(Response<GetAffiliationByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetAffiliationByIdViewModel>>> GetById(Guid affiliationId)
    {
        var query = new GetAffiliationByIdQuery
        {
            Id = affiliationId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Create(
        [FromBody] CreateAffiliationCommand command)
    {
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{affiliationId:Guid}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Update(
        Guid affiliationId,
        [FromBody] UpdateAffiliationCommand command)
    {
        command.Id = affiliationId;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("[action]/{affiliationId:Guid}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> End(
        Guid affiliationId,
        [FromBody] EndAffiliationCommand command)
    {
        command.Id = affiliationId;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("[action]/{affiliationId:Guid}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Renew(
        Guid affiliationId,
        [FromBody] RenewAffiliationCommand command)
    {
        command.Id = affiliationId;
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
            TableName = TableNames.Affiliations
        }));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
    {
        commend.TableName = TableNames.Affiliations;
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<Guid> command)
    {
        command.TableName = TableNames.Affiliations;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
    [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] ExportFileAffiliationQuery query)
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
