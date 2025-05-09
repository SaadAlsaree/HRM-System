using HRM.Hub.Application.Features.MovementHandlers.Commands.AddMovement;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovementsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public MovementsController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        [HttpGet(Name = "create")]
        public async Task<IActionResult> CreateMovement([FromBody] AddMovementCommand command)
        {
            
            return Ok();
        }
    }
}