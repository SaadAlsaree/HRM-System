using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicFieldUtility.Queries.GetAcademicFieldById;
public class GetAcademicFieldByIdHandler : GetByIdHandler<AcademicField, GetAcademicFieldByIdViewModel, GetAcademicFieldByIdQuery>, IRequestHandler<GetAcademicFieldByIdQuery, Response<GetAcademicFieldByIdViewModel>>
{
    public GetAcademicFieldByIdHandler(IBaseRepository<AcademicField> repositoryAcademicField)
        : base(repositoryAcademicField) { }

    public override Expression<Func<AcademicField, bool>> IdPredicate(GetAcademicFieldByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<AcademicField, GetAcademicFieldByIdViewModel>> Selector => a => new GetAcademicFieldByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        
        Status = a.StatusId
    };
    public async Task<Response<GetAcademicFieldByIdViewModel>> Handle(GetAcademicFieldByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
