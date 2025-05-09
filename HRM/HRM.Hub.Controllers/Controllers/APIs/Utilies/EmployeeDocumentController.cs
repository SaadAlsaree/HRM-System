using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.EmployeeDocument.Commands.AddEmployeeDocument;
using HRM.Hub.Application.Features.EmployeeDocument.Commands.UpdateEmployeeDocument;
using HRM.Hub.Application.Features.EmployeeDocument.Queries.GetEmployeeDocument;
using HRM.Hub.Application.Features.EmployeeDocument.Queries.GetEmployeeDocumentById;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("Document")]
public class DocumentController : Base<DocumentController>
{
    private readonly IMediator _mediator;

    public DocumentController(IMediator mediator, ILogger<DocumentController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetDocumentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetDocumentViewModel>>>> GetAll(
        [FromQuery] GetDocumentQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{DocumentId}")]
    [ProducesResponseType(typeof(Response<GetDocumentByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetDocumentByIdViewModel>>> GetById(Guid DocumentId)
    {
        var query = new GetDocumentByIdQuery
        {
            Id = DocumentId
        };
        return await Okey(() => _mediator.Send(query));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<Guid> command)
    {
        command.TableName = TableNames.EmployeeDocuments;
        return await Okey(() => _mediator.Send(command));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
    {
        commend.TableName = TableNames.EmployeeDocuments;
        return await Okey(() => _mediator.Send(commend));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetDocumentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetDocumentViewModel>>>> Create(
        [FromBody] AddDocumentCommand commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{DocumentId}")]
    [ProducesResponseType(typeof(Response<GetDocumentViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetDocumentViewModel>>> Update(
        Guid DocumentId,
        [FromBody] UpdateDocumentCommand command)
    {
        command.Id = DocumentId;
        return await Okey(() => _mediator.Send(command));
    }
}