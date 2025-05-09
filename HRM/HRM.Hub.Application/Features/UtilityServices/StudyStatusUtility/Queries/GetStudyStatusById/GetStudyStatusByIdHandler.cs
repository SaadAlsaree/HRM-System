using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Queries.GetStudyStatusById;
public class GetStudyStatusByIdHandler : GetByIdHandler<StudyStatus, GetStudyStatusByIdViewModel, GetStudyStatusByIdQuery>, IRequestHandler<GetStudyStatusByIdQuery, Response<GetStudyStatusByIdViewModel>>
{
    public GetStudyStatusByIdHandler(IBaseRepository<StudyStatus> repositoryStudyStatus)
        : base(repositoryStudyStatus) { }

    public override Expression<Func<StudyStatus, bool>> IdPredicate(GetStudyStatusByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<StudyStatus, GetStudyStatusByIdViewModel>> Selector => a => new GetStudyStatusByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name
    };
    public async Task<Response<GetStudyStatusByIdViewModel>> Handle(GetStudyStatusByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
