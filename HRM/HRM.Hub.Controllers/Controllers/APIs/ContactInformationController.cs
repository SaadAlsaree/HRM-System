using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.ContactInformationHandlers.Commands.CreateContactInformation;
using HRM.Hub.Application.Features.ContactInformationHandlers.Commands.UpdateContactInformation;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using HRM.Hub.Application.Features.ContactInformationHandlers.Queries.GetContactInformationById;
using HRM.Hub.Application.Features.ContactInformationHandlers.Queries.GetEmployeeContactInformation;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Application.Features.ContactInformationHandlers.Queries.GetEmployeeContactInfoExcelFile;

namespace HRM.Hub.Controllers.Controllers.APIs
{
    [ApiController]
    [Produces("application/json")]
    [Route("hub/hrm/v1/api/[controller]")]
    [Tags("ContactInformation")]
    //[Authorize(AuthenticationSchemes = "Bearer", Policy = "")]
    [Permission]
    public class ContactInformationController : Base<ContactInformationController>
    {
        private readonly IMediator _mediator;
        public ContactInformationController(IMediator mediator, ILogger<ContactInformationController> logger) : base(logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet]
        [ProducesResponseType(typeof(Response<IEnumerable<GetContactInformationViewModel>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<GetContactInformationViewModel>>>> GetEmployeeContactInformation( [FromQuery] GetEmployeeContactInformationQuery query)
        {
            return await Okey(() => _mediator.Send(query));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("{id:Guid}")]
        [ProducesResponseType(typeof(Response<GetContactInformationByIdViewModel>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<GetContactInformationByIdViewModel>>> GetEmployeContactInformationById(Guid id)
        {
            return await Okey(() => _mediator.Send(new GetContactInformationByIdQuery
            {
                Id = id
            }));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost]
        [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<bool>>> CreateEmployeeContactInformation( [FromBody] CreateContactInformationCommand command)
        {
            return await Okey(() => _mediator.Send(command));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPut("{id:Guid}")]
        [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<bool>>> UpdateEmployeeContactInformation(Guid id, [FromBody] UpdateContactInformationCommand command)
        {
            command.Id = id;

            return await Okey(() => _mediator.Send(command));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<bool>>> DeleteContactInformation(Guid id)
        {
            return await Okey(() => _mediator.Send(new DeleteRecordCommand<Guid>()
            {
                Id = id,
                TableName = TableNames.ContactInformation
            }));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPatch]
        [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<bool>>> ChangeContactInformationStatus([FromBody] ChangeStatusCommand<Guid> command)
        {
            command.TableName = TableNames.ContactInformation;
            return await Okey(() => _mediator.Send(command));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("[action]")]
        [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
        [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] GetContactInfoExcelFileQuery query)
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
