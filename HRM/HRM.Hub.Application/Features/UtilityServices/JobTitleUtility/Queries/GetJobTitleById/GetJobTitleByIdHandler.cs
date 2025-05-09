using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Queries.GetJobTitleById;
public class GetJobTitleByIdHandler : GetByIdHandler<JobTitle, GetJobTitleByIdViewModel, GetJobTitleByIdQuery>, IRequestHandler<GetJobTitleByIdQuery, Response<GetJobTitleByIdViewModel>>
{
    public GetJobTitleByIdHandler(IBaseRepository<JobTitle> repositoryJobTitle)
        : base(repositoryJobTitle) { }

    public override Expression<Func<JobTitle, bool>> IdPredicate(GetJobTitleByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<JobTitle, GetJobTitleByIdViewModel>> Selector => a => new GetJobTitleByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        
        Status = a.StatusId
    };
    public async Task<Response<GetJobTitleByIdViewModel>> Handle(GetJobTitleByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
