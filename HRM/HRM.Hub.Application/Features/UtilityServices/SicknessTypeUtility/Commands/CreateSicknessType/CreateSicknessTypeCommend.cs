namespace HRM.Hub.Application.Features.UtilityServices.SicknessTypeUtility.Commands.CreateSicknessType;

public class CreateSicknessTypeCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
