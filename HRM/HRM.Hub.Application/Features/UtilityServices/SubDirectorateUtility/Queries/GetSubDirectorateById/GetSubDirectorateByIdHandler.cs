namespace HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Queries.GetSubDirectorateById;
public class GetSubDirectorateByIdHandler : GetByIdHandler<SubDirectorates, GetSubDirectorateByIdViewModel, GetSubDirectorateByIdQuery>, IRequestHandler<GetSubDirectorateByIdQuery, Response<GetSubDirectorateByIdViewModel>>
{
    public GetSubDirectorateByIdHandler(IBaseRepository<SubDirectorates> repositorySubDirectorate)
        : base(repositorySubDirectorate) { }

    public override Expression<Func<SubDirectorates, bool>> IdPredicate(GetSubDirectorateByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<SubDirectorates, GetSubDirectorateByIdViewModel>> Selector => a => new GetSubDirectorateByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        ShortKey = a.ShortKey,
        Status = a.StatusId,
        DirectorateId = a.DirectorateId ?? 0,
        DirectorateName = a.Directorate.Name,
    };
    public async Task<Response<GetSubDirectorateByIdViewModel>> Handle(GetSubDirectorateByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
