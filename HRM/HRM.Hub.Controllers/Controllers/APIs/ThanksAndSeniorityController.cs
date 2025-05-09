using HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Commands.CreateThanksAndSeniority;
using HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Commands.UpdateThanksAndSeniority;
using HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Queries.GetThanksAndSeniorityById;
using HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Queries.GetThanksAndSeniority;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Domain.Common.Enums;
using System.Net;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFileExcelFile;
using HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Queries.GetThanksAndSeniorityExcelFile;

namespace HRM.Hub.Controllers.Controllers.APIs
{
    [ApiController]
    [Produces("application/json")]
    [Route("hub/hrm/v1/api/[controller]")]
    [Tags("ThanksAndSeniority")]
    //[Authorize(AuthenticationSchemes = "Bearer", Policy = "")]
    [Permission]
    public class ThanksAndSeniorityController : Base<ThanksAndSeniorityController>
    {

        private readonly IMediator _mediator;
        public ThanksAndSeniorityController(IMediator mediator, ILogger<ThanksAndSeniorityController> logger) : base(logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet]
        [ProducesResponseType(typeof(Response<IEnumerable<GetThanksAndSeniorityViewModel>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<GetThanksAndSeniorityViewModel>>>> GetList([FromQuery] GetThanksAndSeniorityQuery query)
        {
            return await Okey(() => _mediator.Send(query));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("{id:Guid}")]
        [ProducesResponseType(typeof(Response<GetThanksAndSeniorityByIdViewModel>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<GetThanksAndSeniorityByIdViewModel>>> GetById(Guid id)
        {
            return await Okey(() => _mediator.Send(new GetThanksAndSeniorityByIdQuery
            {
                Id = id
            }));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost]
        [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<bool>>> Create([FromBody] CreateThanksAndSeniorityCommand command)
        {
            return await Okey(() => _mediator.Send(command));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPut("{id:Guid}")]
        [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<bool>>> Update(Guid id, [FromBody] UpdateThanksAndSeniorityCommand command)
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
                TableName = TableNames.ThanksAndSeniority
            }));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPatch]
        [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<Guid> command)
        {
            command.TableName = TableNames.ThanksAndSeniority;
            return await Okey(() => _mediator.Send(command));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost("[action]")]
        [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
        {
            commend.TableName = TableNames.ThanksAndSeniority;
            return await Okey(() => _mediator.Send(commend));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("[action]")]
        [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
        [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] GetThanksAndSeniorityExcelFileQuery query)
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
}
