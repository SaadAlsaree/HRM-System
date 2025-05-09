namespace HRM.Hub.Application.Features.UtilityServices.AcademicFieldUtility.Commands.CreateAcademicField;

public class CreateAcademicFieldCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
