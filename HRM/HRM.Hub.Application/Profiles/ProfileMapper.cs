using HRM.Hub.Application.Features.LeavesHandlers.Commands.CreateLeave;
using HRM.Hub.Application.Features.MovementHandlers.Commands.CreateMovement;

namespace HRM.Hub.Application.Profiles;
public sealed class ProfileMapper : Profile
{
    public ProfileMapper()
    {
        CreateMap<Leaves, CreateLeaveCommand>().ReverseMap();
        CreateMap<Movements, CreateMovementCommand>().ReverseMap();
    }
}