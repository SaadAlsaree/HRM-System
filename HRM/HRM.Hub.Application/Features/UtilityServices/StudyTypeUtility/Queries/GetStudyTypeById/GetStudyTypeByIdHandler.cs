using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.StudyTypeUtility.Queries.GetStudyTypeById;
public class GetStudyTypeByIdHandler : GetByIdHandler<StudyType, GetStudyTypeByIdViewModel, GetStudyTypeByIdQuery>, IRequestHandler<GetStudyTypeByIdQuery, Response<GetStudyTypeByIdViewModel>>
{
    public GetStudyTypeByIdHandler(IBaseRepository<StudyType> repositoryStudyType)
        : base(repositoryStudyType) { }

    public override Expression<Func<StudyType, bool>> IdPredicate(GetStudyTypeByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<StudyType, GetStudyTypeByIdViewModel>> Selector => a => new GetStudyTypeByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name
    };
    public async Task<Response<GetStudyTypeByIdViewModel>> Handle(GetStudyTypeByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
