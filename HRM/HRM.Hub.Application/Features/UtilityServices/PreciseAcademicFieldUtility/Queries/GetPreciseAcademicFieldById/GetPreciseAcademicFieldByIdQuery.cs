namespace HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Queries.GetPreciseAcademicFieldById;

public class GetPreciseAcademicFieldByIdQuery : IRequest<Response<GetPreciseAcademicFieldByIdViewModel>>
{
    public int Id { get; set; }
}