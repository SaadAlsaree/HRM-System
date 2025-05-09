using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Commands.CreateTypeOfDisciplinary;
using HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Commands.UpdateTypeOfDisciplinary;
using HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Queries.GetTypeOfDisciplinary;
using HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Queries.GetTypeOfDisciplinaryById;
using HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Queries.GetTypeOfDisciplinaryList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;

[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("TypeOfDisciplinary")]
public class TypeOfDisciplinaryController : Base<TypeOfDisciplinaryController>
{
    private readonly IMediator _mediator;

    public TypeOfDisciplinaryController(IMediator mediator, ILogger<TypeOfDisciplinaryController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<PagedResult<GetTypeOfDisciplinaryViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<PagedResult<GetTypeOfDisciplinaryViewModel>>>> GetAll(
        [FromQuery] GetTypeOfDisciplinaryQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{academicAchievementId:int}")]
    [ProducesResponseType(typeof(Response<GetTypeOfDisciplinaryByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetTypeOfDisciplinaryByIdViewModel>>> GetById(int academicAchievementId)
    {
        var query = new GetTypeOfDisciplinaryByIdQuery
        {
            Id = academicAchievementId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Create(
        [FromBody] CreateTypeOfDisciplinaryCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{academicAchievementId:int}")]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Update(
        int academicAchievementId,
        [FromBody] UpdateTypeOfDisciplinaryCommend command)
    {
        command.Id = academicAchievementId;
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
            TableName = TableNames.TypeOfDisciplinary
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.TypeOfDisciplinary;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfDisciplinaryListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfDisciplinaryViewModel>>>> GetList(
        [FromQuery] GetTypeOfDisciplinaryListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}