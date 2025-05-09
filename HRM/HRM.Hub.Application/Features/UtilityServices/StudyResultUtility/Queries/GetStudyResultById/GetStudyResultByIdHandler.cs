using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Queries.GetStudyResultById;
public class GetStudyResultByIdHandler : GetByIdHandler<StudyResult, GetStudyResultByIdViewModel, GetStudyResultByIdQuery>, IRequestHandler<GetStudyResultByIdQuery, Response<GetStudyResultByIdViewModel>>
{
    public GetStudyResultByIdHandler(IBaseRepository<StudyResult> repositoryStudyResult)
        : base(repositoryStudyResult) { }

    public override Expression<Func<StudyResult, bool>> IdPredicate(GetStudyResultByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<StudyResult, GetStudyResultByIdViewModel>> Selector => a => new GetStudyResultByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        
        Status = a.StatusId
    };
    public async Task<Response<GetStudyResultByIdViewModel>> Handle(GetStudyResultByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
