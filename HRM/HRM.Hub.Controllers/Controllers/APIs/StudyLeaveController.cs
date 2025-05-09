using System.Net;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFileExcelFile;
using HRM.Hub.Application.Features.StudyLeaveHandlers.Commands.CreateStudyLeave;
using HRM.Hub.Application.Features.StudyLeaveHandlers.Commands.UpdateStudyLeave;
using HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeave;
using HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveById;
using HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveExcelFile;
using HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveNotifcation;
using HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveStatistics;
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
    public class StudyLeaveController : Base<StudyLeaveController>
    {
        private readonly IMediator _mediator;
        public StudyLeaveController(IMediator mediator, ILogger<StudyLeaveController> logger) : base(logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }


        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet]
        [ProducesResponseType(typeof(Response<IEnumerable<StudyLeaveViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<StudyLeaveViewModel>>>> GetAll(
            [FromQuery] GetStudyLeaveQuery query)
        {
            return await Okey(() => _mediator.Send(query));
        }
        
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("{StudyLeaveId:Guid}")]
        [ProducesResponseType(typeof(Response<GetStudyLeaveByIdViewModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<GetStudyLeaveByIdViewModel>>> GetById(Guid StudyLeaveId)
        {
            var query = new GetStudyLeaveByIdQuery
            {
                Id = StudyLeaveId
            };
            return await Okey(() => _mediator.Send(query));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("Statistics")]
        [ProducesResponseType(typeof(Response<GetStudyLeaveStatisticsViewModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<GetStudyLeaveStatisticsViewModel>>> GetStudyLeaveStats()
        {
            return await Okey(() => _mediator.Send(new GetStudyLeaveStatisticsQuery()));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("Notifications")]
        [ProducesResponseType(typeof(Response<PagedResult<GetStudyLeaveNotificationViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<GetStudyLeaveNotificationViewModel>>> GetStudyLeaveNotifications()
        {
            return await Okey(() => _mediator.Send(new GetStudyLeaveNotificationQuery()));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost]
        [ProducesResponseType(typeof(Response<PagedResult<StudyLeaveViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<PagedResult<StudyLeaveViewModel>>>> CreateStudyLeave([FromBody] CreateStudyLeaveCommand commend)
        {
            return await Okey(() => _mediator.Send(commend));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPut("{studyLeaveId:Guid}")]
        [ProducesResponseType(typeof(Response<PagedResult<StudyLeaveViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<PagedResult<StudyLeaveViewModel>>>> UpdateStudyLeave(Guid studyLeaveId,[FromBody] UpdateStudyLeaveCommand commend)
        {
            commend.StudyLeaveId = studyLeaveId;
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
                TableName = TableNames.StudyLeave
            }));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPatch]
        [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<Guid> command)
        {
            command.TableName = TableNames.StudyLeave;
            return await Okey(() => _mediator.Send(command));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost("[action]")]
        [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
        {
            commend.TableName = TableNames.StudyLeave;
            return await Okey(() => _mediator.Send(commend));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("[action]")]
        [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
        [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] GetStudyLeaveExcelFileQuery query)
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
