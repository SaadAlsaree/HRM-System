using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Commands.CreateTypeOfBook;
using HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Commands.UpdateTypeOfBook;
using HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Queries.GetTypeOfBook;
using HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Queries.GetTypeOfBookById;
using HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Queries.GetTypeOfBookList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;


[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("TypeOfBook")]
public class TypeOfBookController : Base<TypeOfBookController>
{
    private readonly IMediator _mediator;

    public TypeOfBookController(IMediator mediator, ILogger<TypeOfBookController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfBookViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfBookViewModel>>>> GetAll(
        [FromQuery] GetTypeOfBookQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{TypeOfBookId:int}")]
    [ProducesResponseType(typeof(Response<GetTypeOfBookByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetTypeOfBookByIdViewModel>>> GetById(int TypeOfBookId)
    {
        var query = new GetTypeOfBookByIdQuery
        {
            Id = TypeOfBookId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfBookViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfBookViewModel>>>> Create(
        [FromBody] CreateTypeOfBookCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{TypeOfBookId:int}")]
    [ProducesResponseType(typeof(Response<GetTypeOfBookViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetTypeOfBookViewModel>>> Update(
        int TypeOfBookId,
        [FromBody] UpdateTypeOfBookCommend command)
    {
        command.Id = TypeOfBookId;
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
            TableName = TableNames.TypeOfBook
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.TypeOfBook;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetTypeOfBookListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetTypeOfBookListViewModel>>>> GetList(
        [FromQuery] GetTypeOfBookListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}