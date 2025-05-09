using System.Net;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.CountryUtility.Commands.CreateCountry;
using HRM.Hub.Application.Features.UtilityServices.CountryUtility.Commands.UpdateCountry;
using HRM.Hub.Application.Features.UtilityServices.CountryUtility.Queries.GetCountry;
using HRM.Hub.Application.Features.UtilityServices.CountryUtility.Queries.GetCountryById;
using HRM.Hub.Application.Features.UtilityServices.CountryUtility.Queries.GetCountryList;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.APIs.Utilies;



[ApiController]
[Produces("application/json")]
[Route("hub/hrm/v1/api/[controller]")]
[Tags("Country")]
public class CountryController : Base<CountryController>
{
    private readonly IMediator _mediator;

    public CountryController(IMediator mediator, ILogger<CountryController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetCountryViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetCountryViewModel>>>> GetAll(
        [FromQuery] GetCountryQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{CountryId:int}")]
    [ProducesResponseType(typeof(Response<GetCountryByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetCountryByIdViewModel>>> GetById(int CountryId)
    {
        var query = new GetCountryByIdQuery
        {
            Id = CountryId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<IEnumerable<GetCountryViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetCountryViewModel>>>> Create(
        [FromBody] CreateCountryCommend commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPut("{CountryId:int}")]
    [ProducesResponseType(typeof(Response<GetCountryViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetCountryViewModel>>> Update(
        int CountryId,
        [FromBody] UpdateCountryCommend command)
    {
        command.Id = CountryId;
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
            TableName = TableNames.Country
        }));
    }
    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPatch]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
    {
        command.TableName = TableNames.Country;
        return await Okey(() => _mediator.Send(command));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<IEnumerable<GetCountryListViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetCountryListViewModel>>>> GetList(
        [FromQuery] GetCountryListQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }
}