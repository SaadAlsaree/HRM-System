using HRM.Hub.Application.Features.AddressInformationHandlers.Commands.UpdateAddressInformation;
using HRM.Hub.Application.Features.AddressInformationHandlers.Queries.GetEmployeeAddressInformation;
using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;
using HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Common;
using HRM.Hub.Persistence.Helpers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using HRM.Hub.Application.Features.AddressInformationHandlers.Commands.AddAddressInformation;
using HRM.Hub.Application.Features.AddressInformationHandlers.Queries.GetAddressInformationById;
using HRM.Hub.Application.Features.AddressInformationHandlers.Queries.GetAddressInformationExcelFile;

namespace HRM.Hub.Controllers.Controllers.APIs
{
    [ApiController]
    [Produces("application/json")]
    [Route("hub/hrm/v1/api/[controller]")]
    [Tags("AddressInformation")]
    public class AddressInformationController : Base<AddressInformationController>
    {
        private readonly IMediator _mediator;
        public AddressInformationController(IMediator mediator, ILogger<AddressInformationController> logger) : base(logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet]
        [ProducesResponseType(typeof(Response<IEnumerable<GetEmployeeAddressInformationViewModel>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<IEnumerable<GetEmployeeAddressInformationViewModel>>>> GetEmployeeAddressInformation([FromQuery] GetEmployeeAddressInformationQuery query)
        {
            return await Okey(() => _mediator.Send(query));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPost]
        [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<bool>>> CreateEmployeeAddressInformation([FromBody] CreateAddressInformationCommand command)
        {
            return await Okey(() => _mediator.Send(command));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("{addressInformation:Guid}")]
        [ProducesResponseType(typeof(Response<GetAddressInformationByIdViewModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<GetAddressInformationByIdViewModel>>> GetById(Guid addressInformation)
        {
            var query = new GetAddressInformationByIdQuery
            {
                Id = addressInformation
            };
            return await Okey(() => _mediator.Send(query));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPut("{id:Guid}")]
        [ProducesResponseType(typeof(Response<bool>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<bool>>> UpdateEmployeeAddressInformation(Guid id, [FromBody] UpdateAddressInformationCommand command)
        {
            command.Id = id;

            return await Okey(() => _mediator.Send(command));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<bool>>> DeleteAddressInformation(Guid id)
        {
            return await Okey(() => _mediator.Send(new DeleteRecordCommand<Guid>()
            {
                Id = id,
                TableName = TableNames.AddressInformation
            }));
        }
        [ServiceFilter(typeof(LogActionArguments))]
        [HttpPatch]
        [ProducesResponseType(typeof(Response<bool>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Response<bool>>> ChangeAddressInformationStatus([FromBody] ChangeStatusCommand<Guid> command)
        {
            command.TableName = TableNames.AddressInformation;
            return await Okey(() => _mediator.Send(command));
        }

        [ServiceFilter(typeof(LogActionArguments))]
        [HttpGet("[action]")]
        [ProducesResponseType(typeof(Response<byte[]>), StatusCodes.Status200OK)]
        [FileResultContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Response<byte[]>>> ExportFile([FromQuery] GetAddressInfoExcelFileQuery query)
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
