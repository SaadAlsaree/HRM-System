using System.Net;
using HRM.Hub.Application.Features.ManagementInformationHandlers.Commands.AddManagementInfoServicermation;
using HRM.Hub.Application.Features.ManagementInformationHandlers.Queries.GetManagementInformation;
using HRM.Hub.Application.Features.ManagementInformationHandlers.Queries.GetManagementInformationById;
using HRM.Hub.Application.Features.ManagementInformationHandlers.Queries.GetManagementInformationExcelFile;
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
[Tags("ManagementInfo")]
public class ManagementInformationController : Base<ManagementInformationController>
{
    private readonly IMediator _mediator;

    public ManagementInformationController(IMediator mediator, ILogger<ManagementInformationController> logger) :
        base(logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet]
    [ProducesResponseType(typeof(Response<IEnumerable<GetAcademicAchievementViewModel>>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<IEnumerable<GetManagementInfoViewModel>>>> GetAll(
        [FromQuery] GetManagementInfoQuery query)
    {
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("{ManagementInfoId}")]
    [ProducesResponseType(typeof(Response<GetManagementInfoByIdViewModel>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<GetManagementInfoByIdViewModel>>> GetById(Guid ManagementInfoId)
    {
        var query = new GetManagementInfoByIdQuery
        {
            Id = ManagementInfoId
        };
        return await Okey(() => _mediator.Send(query));
    }

    [ServiceFilter(typeof(LogActionArguments))]
    [HttpPost]
    [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<ActionResult<Response<bool>>> Create(
        [FromBody] AddMangementInfoCommand commend)
    {
        return await Okey(() => _mediator.Send(commend));
    }

    //[ServiceFilter(typeof(LogActionArguments))]
    //[HttpPut("{ManagementInfoId:int}")]
    //[ProducesResponseType(typeof(Response<GetManagementInfoViewModel>), (int)HttpStatusCode.OK)]
    //[ProducesResponseType((int)HttpStatusCode.BadRequest)]
    //public async Task<ActionResult<Response<GetManagementInfoViewModel>>> Update(
    //    Guid ManagementInfoId,
    //    [FromBody] ChangeManagementInfoStatusWorkingCommand command)
    //{
    //    command.Id = ManagementInfoId;
    //    return await Okey(() => _mediator.Send(command));
    //}


    [ServiceFilter(typeof(LogActionArguments))]
    [HttpGet("[action]")]
    [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
    [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] GetManagementInformationExcelFileQuery query)
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