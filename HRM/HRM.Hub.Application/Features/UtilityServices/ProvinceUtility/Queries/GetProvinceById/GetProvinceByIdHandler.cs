using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.ProvinceUtility.Queries.GetProvinceById;
public class GetProvinceByIdHandler : GetByIdHandler<Province, GetProvinceByIdViewModel, GetProvinceByIdQuery>, IRequestHandler<GetProvinceByIdQuery, Response<GetProvinceByIdViewModel>>
{
    public GetProvinceByIdHandler(IBaseRepository<Province> repositoryProvince)
        : base(repositoryProvince) { }

    public override Expression<Func<Province, bool>> IdPredicate(GetProvinceByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Province, GetProvinceByIdViewModel>> Selector => a => new GetProvinceByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        
        Status = a.StatusId
    };
    public async Task<Response<GetProvinceByIdViewModel>> Handle(GetProvinceByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
