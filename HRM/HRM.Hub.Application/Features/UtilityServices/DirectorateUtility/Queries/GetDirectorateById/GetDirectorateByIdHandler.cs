namespace HRM.Hub.Application.Features.UtilityServices.DirectorateUtility.Queries.GetDirectorateById;
public class GetDirectorateByIdHandler : GetByIdHandler<Directorates, GetDirectorateByIdViewModel, GetDirectorateByIdQuery>, IRequestHandler<GetDirectorateByIdQuery, Response<GetDirectorateByIdViewModel>>
{
    public GetDirectorateByIdHandler(IBaseRepository<Directorates> repositoryDirectorate)
        : base(repositoryDirectorate) { }

    public override Expression<Func<Directorates, bool>> IdPredicate(GetDirectorateByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Directorates, GetDirectorateByIdViewModel>> Selector => a => new GetDirectorateByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        ShortKey = a.ShortKey,
        Status = a.StatusId
    };
    public async Task<Response<GetDirectorateByIdViewModel>> Handle(GetDirectorateByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
