using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Commands.CreatePreciseAcademicField;
using HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Commands.UpdatePreciseAcademicField;
using HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Queries.GetPreciseAcademicField;
using HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Queries.GetPreciseAcademicFieldById;
using HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Queries.GetPreciseAcademicFieldList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("PreciseAcademicField")]
public class PreciseAcademicFieldController : Base<PreciseAcademicFieldController>
{
    private readonly IMediator _mediator;

    public PreciseAcademicFieldController(IMediator mediator, ILogger<PreciseAcademicFieldController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetPreciseAcademicFieldViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetPreciseAcademicFieldViewModel>>>> GetAll(
        [FromQuery] GetPreciseAcademicFieldQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{PreciseAcademicFieldId:int}")]
    [ProducesResponseType(typeof(Response<GetPreciseAcademicFieldByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetPreciseAcademicFieldByIdViewModel>>> GetById(int PreciseAcademicFieldId)
    {
        var query = new GetPreciseAcademicFieldByIdQuery
        {
            Id = PreciseAcademicFieldId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetPreciseAcademicFieldViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetPreciseAcademicFieldViewModel>>>> Create(
        [FromBody] CreatePreciseAcademicFieldCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{PreciseAcademicFieldId:int}")]
    [ProducesResponseType(typeof(Response<GetPreciseAcademicFieldViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetPreciseAcademicFieldViewModel>>> Update(
        int PreciseAcademicFieldId,
        [FromBody] UpdatePreciseAcademicFieldCommend command)
    {
        command.Id = PreciseAcademicFieldId;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpDelete("{id}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus(int id)
    {
        return await Okey(() => _mediator.Send(new DeleteRecordCommand<int>()
        {
            Id = id,
            TableName = TableNames.PreciseAcademicField
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.PreciseAcademicField;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetPreciseAcademicFieldListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetPreciseAcademicFieldListViewModel>>>> GetList(
        [FromQuery] GetPreciseAcademicFieldListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}