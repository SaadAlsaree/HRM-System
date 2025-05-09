using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Queries.GetPreciseAcademicFieldById;
public class GetPreciseAcademicFieldByIdHandler : GetByIdHandler<PreciseAcademicField, GetPreciseAcademicFieldByIdViewModel, GetPreciseAcademicFieldByIdQuery>, IRequestHandler<GetPreciseAcademicFieldByIdQuery, Response<GetPreciseAcademicFieldByIdViewModel>>
{
    public GetPreciseAcademicFieldByIdHandler(IBaseRepository<PreciseAcademicField> repositoryPreciseAcademicField)
        : base(repositoryPreciseAcademicField) { }

    public override Expression<Func<PreciseAcademicField, bool>> IdPredicate(GetPreciseAcademicFieldByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<PreciseAcademicField, GetPreciseAcademicFieldByIdViewModel>> Selector => a => new GetPreciseAcademicFieldByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name
    };
    public async Task<Response<GetPreciseAcademicFieldByIdViewModel>> Handle(GetPreciseAcademicFieldByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
