using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Queries.GetStudyExtensionOrderTypeById;
public class GetStudyExtensionOrderTypeByIdHandler : GetByIdHandler<StudyExtensionOrderType, GetStudyExtensionOrderTypeByIdViewModel, GetStudyExtensionOrderTypeByIdQuery>, IRequestHandler<GetStudyExtensionOrderTypeByIdQuery, Response<GetStudyExtensionOrderTypeByIdViewModel>>
{
    public GetStudyExtensionOrderTypeByIdHandler(IBaseRepository<StudyExtensionOrderType> repositoryStudyExtensionOrderType)
        : base(repositoryStudyExtensionOrderType) { }

    public override Expression<Func<StudyExtensionOrderType, bool>> IdPredicate(GetStudyExtensionOrderTypeByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<StudyExtensionOrderType, GetStudyExtensionOrderTypeByIdViewModel>> Selector => a => new GetStudyExtensionOrderTypeByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name
    };
    public async Task<Response<GetStudyExtensionOrderTypeByIdViewModel>> Handle(GetStudyExtensionOrderTypeByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
