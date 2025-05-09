using System.Net;
using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.EducationInformationHandlers.Commands.AddEducationInfo;
using HRM.Hub.Application.Features.EducationInformationHandlers.Commands.UpdateEducationInformation;
using HRM.Hub.Application.Features.EducationInformationHandlers.Queries.ExportFileEducationInformation;
using HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEducationInformation;
using HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEducationInformationById;
using HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEmployeeEducationInformation;
using HRM.Hub.Application.Features.EmployeeCourseHandlers.Queries.ExportFileEmployeeCourse;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievement;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("EducationInfo")]
public class EducationInformationController : Base<EducationInformationController>
{
    private readonly IMediator _mediator;

    public EducationInformationController(IMediator mediator, ILogger<EducationInformationController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }
    // [ServiceFilter(typeof(LogActionArguments))]
    // [HttpGet("{employeeId:Guid}")]
    // [ProducesResponseType(typeof(Response<IEnumerable<GetEmployeeEducationInformationViewModel>>), StatusCodes.Status200OK)]
    // [ProducesResponseType(StatusCodes.Status400BadRequest)]
    // public async Task<ActionResult<Response<IEnumerable<GetEmployeeEducationInformationViewModel>>>> GetEmployeeEducationInformation(Guid employeeId, [FromQuery] GetEmployeeEducationInformationQuery query)
    // {
    //     query.EmployeeId = employeeId;
    //     return await Okey(() => _mediator.Send(query));
    // }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAcademicAchievementViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetEducationInfoViewModel>>>> GetAll(
        [FromQuery] GetEducationInfoQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{EducationInfoId}")]
    [ProducesResponseType(typeof(Response<GetEducationInfoByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetEducationInfoByIdViewModel>>> GetById(Guid EducationInfoId)
    {
        var query = new GetEducationInfoByIdQuery
        {
            Id = EducationInfoId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetEducationInfoViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetEducationInfoViewModel>>>> Create(
        [FromBody] AddEducationInfoCommand commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{EducationInfoId:Guid}")]
    [ProducesResponseType(typeof(Response<GetEducationInfoViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetEducationInfoViewModel>>> Update(
        Guid EducationInfoId,
        [FromBody] UpdateEducationInfoCommand command)
    {
        command.Id = EducationInfoId;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
    {
        commend.TableName = TableNames.EducationInformation;
        return await Okey(() => _mediator.Send(commend));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpDelete("{id}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> DeleteEducationInformation(Guid id)
    {
        return await Okey(() => _mediator.Send(new DeleteRecordCommand<Guid>()
        {
            Id = id,
            TableName = TableNames.EducationInformation
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeEducationInformationStatus([FromBody] ChangeStatusCommand<Guid> command)
    {
        command.TableName = TableNames.EducationInformation;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
    [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] ExportFileEducationInformationQuery query)
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