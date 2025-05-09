using System.Net;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFileExcelFile;
using HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Commands.CreateStudyLeaveExtension;
using HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Commands.UpdateStudyLeaveExtension;
using HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveByFileId;
using HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveExtensionById;
using HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveExtensionExcelFile;
using HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveExtensions;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs
{
    [Route("hub/hrm/v1/api/[controller]")]
    [ApiController]
    public class StudyLeaveExtensionController : Base<StudyLeaveExtensionController>
    {
        private readonly IMediator _mediator;
        public StudyLeaveExtensionController(IMediator mediator, ILogger<StudyLeaveExtensionController> logger) : base(logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }


        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet]
        [ProducesResponseType(typeof(Response<PagedResult<StudyLeaveExtensionViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<PagedResult<StudyLeaveExtensionViewModel>>>> GetStudyLeaveExtension([FromQuery] GetStudyLeaveExtensionQuery query)
        {
            return await Okey(() => _mediator.Send(query));
        }

        
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("{StudyLeaveExtensionId:Guid}")]
        [ProducesResponseType(typeof(Response<GetStudyLeaveExtensionByIdViewModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<GetStudyLeaveExtensionByIdViewModel>>> GetById(Guid StudyLeaveExtensionId)
        {
            var query = new GetStudyLeaveExtensionByIdQuery
            {
                Id = StudyLeaveExtensionId
            };
            return await Okey(() => _mediator.Send(query));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("GetStudyLeaveByFileId/{StudyLeaveExtensionId:Guid}")]
        [ProducesResponseType(typeof(Response<GetStudyLeaveExtensionByIdViewModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<GetStudyLeaveByFileIdViewModel>>> GetStudyLeaveByFileId(Guid StudyLeaveExtensionId)
        {
            var query = new GetStudyLeaveByFileIdQuery
            {
                FileId = StudyLeaveExtensionId
            };
            return await Okey(() => _mediator.Send(query));
        }


        
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost]
        [ProducesResponseType(typeof(Response<PagedResult<StudyLeaveExtensionViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<PagedResult<StudyLeaveExtensionViewModel>>>> CreateStudyLeaveExtension([FromBody] CreateStudyLeaveExtensionCommand commend)
        {
            return await Okey(() => _mediator.Send(commend));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPut("{studyLeaveExtensionId:Guid}")]
        [ProducesResponseType(typeof(Response<PagedResult<StudyLeaveExtensionViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<PagedResult<StudyLeaveExtensionViewModel>>>> UpdateStudyLeaveExtension(Guid studyLeaveExtensionId,[FromBody] UpdateStudyLeaveExtensionCommand commend)
        {
            commend.StudyLeaveExtensionId = studyLeaveExtensionId;
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
                TableName = TableNames.StudyLeaveExtension
            }));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPatch]
        [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<Guid> command)
        {
            command.TableName = TableNames.StudyLeaveExtension;
            return await Okey(() => _mediator.Send(command));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost("[action]")]
        [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
        {
            commend.TableName = TableNames.StudyLeaveExtension;
            return await Okey(() => _mediator.Send(commend));
        }



        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("[action]")]
        [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
        [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] GetStudyLeaveExtensionExcelFileQuery query)
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
