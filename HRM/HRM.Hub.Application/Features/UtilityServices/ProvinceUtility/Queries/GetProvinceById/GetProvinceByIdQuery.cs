namespace HRM.Hub.Application.Features.UtilityServices.ProvinceUtility.Queries.GetProvinceById;

public class GetProvinceByIdQuery : IRequest<Response<GetProvinceByIdViewModel>>
{
    public int Id { get; set; }
}