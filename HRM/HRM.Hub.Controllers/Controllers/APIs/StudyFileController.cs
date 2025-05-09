using System.Net;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.RetirementHandler.Queries.GetRetirementExcelFile;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.StudyFileHandlers.Commands.CreateStudyFile;
using HRM.Hub.Application.Features.StudyFileHandlers.Commands.UpdateStudyFile;
using HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFileExcelFile;
using HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFiles;
using HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFilesById;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs
{
    [Route("hub/hrm/v1/api/[controller]")]
    [ApiController]
    public class StudyFileController : Base<StudyFileController>
    {

        private readonly IMediator _mediator;
        public StudyFileController(IMediator mediator, ILogger<StudyFileController> logger) : base(logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }


        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet]
        [ProducesResponseType(typeof(Response<PagedResult<StudyFileViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<PagedResult<StudyFileViewModel>>>> GetStudyFile([FromQuery] GetStudyFilesQuery query)
        {
            return await Okey(() => _mediator.Send(query));
        }
        
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("{StudyFileId:Guid}")]
        [ProducesResponseType(typeof(Response<GetStudyFilesByIdViewModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<GetStudyFilesByIdViewModel>>> GetById(Guid StudyFileId)
        {
            var query = new GetStudyFilesByIdQuery
            {
                Id = StudyFileId
            };
            return await Okey(() => _mediator.Send(query));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost]
        [ProducesResponseType(typeof(Response<PagedResult<StudyFileViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<PagedResult<StudyFileViewModel>>>> CreateStudyFile([FromBody] CreateStudyFileCommand commend)
        {
            return await Okey(() => _mediator.Send(commend));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPut("{studyFileId:Guid}")]
        [ProducesResponseType(typeof(Response<PagedResult<StudyFileViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<PagedResult<StudyFileViewModel>>>> UpdateStudyFile(Guid studyFileId, [FromBody] UpdateStudyFileCommand commend)
        {
            commend.StudyFileId = studyFileId;
            return await Okey(() => _mediator.Send(commend));
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
                TableName = TableNames.StudyFile
            }));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPatch]
        [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<Guid> command)
        {
            command.TableName = TableNames.StudyFile;
            return await Okey(() => _mediator.Send(command));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost("[action]")]
        [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
        {
            commend.TableName = TableNames.StudyFile;
            return await Okey(() => _mediator.Send(commend));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("[action]")]
        [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
        [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] GetStudyFileExcelFileQuery query)
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
