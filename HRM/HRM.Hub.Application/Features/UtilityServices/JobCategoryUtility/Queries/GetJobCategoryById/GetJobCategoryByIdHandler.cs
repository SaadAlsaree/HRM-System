using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Queries.GetJobCategoryById;
public class GetJobCategoryByIdHandler : GetByIdHandler<JobCategory, GetJobCategoryByIdViewModel, GetJobCategoryByIdQuery>, IRequestHandler<GetJobCategoryByIdQuery, Response<GetJobCategoryByIdViewModel>>
{
    public GetJobCategoryByIdHandler(IBaseRepository<JobCategory> repositoryJobCategory)
        : base(repositoryJobCategory) { }

    public override Expression<Func<JobCategory, bool>> IdPredicate(GetJobCategoryByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<JobCategory, GetJobCategoryByIdViewModel>> Selector => a => new GetJobCategoryByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        IncreaseAmount = a.IncreaseAmount,
        
        Status = a.StatusId,
        DegreeId = a.DegreeId,
        DegreeName = a.Degree.Name,
    };
    public async Task<Response<GetJobCategoryByIdViewModel>> Handle(GetJobCategoryByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
