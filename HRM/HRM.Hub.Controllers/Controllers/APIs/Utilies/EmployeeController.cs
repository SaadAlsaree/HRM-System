using HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
using HRM.Hub.Application.Features.Attachment.Queries.GetAttachment;
using HRM.Hub.Application.Features.EmployeeHandlers.Commands.AddAvatar;
using HRM.Hub.Application.Features.EmployeeHandlers.Commands.AddEmployee;
using HRM.Hub.Application.Features.EmployeeHandlers.Commands.ChangeStatusWorkEmploye;
using HRM.Hub.Application.Features.EmployeeHandlers.Commands.UpdateEmployee;
using HRM.Hub.Application.Features.EmployeeHandlers.Commands.UpdatePinned;
using HRM.Hub.Application.Features.EmployeeHandlers.Commands.UpdateSocialStatus;
using HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetEmployee;
using HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetEmployeeById;
using HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievement;
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
[Tags("Employee")]
public class EmployeeController : Base<EmployeeController>
{
    private readonly IMediator _mediator;

    public EmployeeController(IMediator mediator, ILogger<EmployeeController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAcademicAchievementViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetEmployeeViewModel>>>> GetAll(
        [FromQuery] GetEmployeeQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{EmployeeId}")]
    [ProducesResponseType(typeof(Response<GetEmployeeByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetEmployeeByIdViewModel>>> GetById(Guid EmployeeId)
    {
        var query = new GetEmployeeByIdQuery
        {
            Id = EmployeeId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAttachmentViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetAttachmentViewModel>>>> UploadAttachment(
        [FromForm] CreateAttachmentCommend commend)
    {
        commend.TableName = TableNames.Employees;
        return await Okey(() => _mediator.Send(commend));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetEmployeeViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetEmployeeViewModel>>>> Create(
        [FromBody] AddEmployeeCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{EmployeeId:Guid}")]
    [ProducesResponseType(typeof(Response<GetEmployeeViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetEmployeeViewModel>>> Update(
        Guid EmployeeId,
        [FromBody] UpdateEmployeeCommand command)
    {
        command.Id = EmployeeId;
        return await Okey(() => _mediator.Send(command));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("UpdateWork/{EmployeeId:Guid}")]
    [ProducesResponseType(typeof(Response<GetEmployeeViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetEmployeeViewModel>>> UpdateWork(Guid EmployeeId, WorkingStatusEnum workingStatus)
    {
        return await Okey(() => _mediator.Send(new ChangeStatusWorkEmployeCommend()
        {
            EmployeeId = EmployeeId,
            Status = workingStatus
        }));
    }


    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost("[action]")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> AddAvatar(
        [FromForm] AddAvatarCommand commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("[action]/{EmployeeId:Guid}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> UpdatePinned(Guid EmployeeId, [FromBody] UpdatePinnedCommand command)
    {
        command.EmployeeId = EmployeeId;
        return await Okey(() => _mediator.Send(command));
    }


    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("[action]/{EmployeeId:Guid}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> UpdateSocialStatus(Guid EmployeeId, [FromBody] UpdateSocialStatusCommand command)
    {
        command.EmployeeId = EmployeeId;
        return await Okey(() => _mediator.Send(command));
    }


}