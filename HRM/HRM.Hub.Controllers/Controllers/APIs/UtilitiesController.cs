using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Commands.CreateAcademicAchievement;
using HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Commands.UpdateAcademicAchievement;
using HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievement;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace HRM.Hub.Controllers.Controllers.APIs
{
    [Produces("application/json")]
    [Route("hub/hrm/v1/api/[controller]/[action]")]
    //[Authorize(AuthenticationSchemes = "Bearer", Policy = "")]
    [ApiController]
    public class UtilitiesController : Base<UtilitiesController>
    {
        private readonly IMediator _mediator;
        public UtilitiesController(IMediator mediator, ILogger<UtilitiesController> logger) : base(logger)
        {
            _mediator = mediator;
        }

        #region AcademicAchievement
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet]
        [ProducesResponseType(typeof(Response<IEnumerable<GetAcademicAchievementViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<GetAcademicAchievementViewModel>>>> GetAcademicAchievement()
        {
            return await Okey(() => _mediator.Send(new GetAcademicAchievementQuery()));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost]
        [ProducesResponseType(typeof(Response<IEnumerable<GetAcademicAchievementViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<GetAcademicAchievementViewModel>>>> CreateAcademicAchievement([FromBody] CreateAcademicAchievementCommend commend)
        {
            return await Okey(() => _mediator.Send(commend));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPut]
        [ProducesResponseType(typeof(Response<IEnumerable<GetAcademicAchievementViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<GetAcademicAchievementViewModel>>>> UpdateAcademicAchievement([FromBody] UpdateAcademicAchievementCommend commend)
        {
            return await Okey(() => _mediator.Send(commend));
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
                TableName = TableNames.AcademicAchievement
            }));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPatch]
        [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<bool>>> ChangeStatus([FromBody] ChangeStatusCommand<int> command)
        {
            command.TableName = TableNames.AcademicAchievement;
            return await Okey(() => _mediator.Send(command));
        }
        #endregion

    }
}
