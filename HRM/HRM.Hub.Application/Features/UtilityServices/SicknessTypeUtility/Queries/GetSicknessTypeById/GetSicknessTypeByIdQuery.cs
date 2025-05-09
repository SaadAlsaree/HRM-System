namespace HRM.Hub.Application.Features.UtilityServices.SicknessTypeUtility.Queries.GetSicknessTypeById;

public class GetSicknessTypeByIdQuery : IRequest<Response<GetSicknessTypeByIdViewModel>>
{
    public int Id { get; set; }
}