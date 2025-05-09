using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Queries.GetPreciseAcademicField
{
    public class GetPreciseAcademicFieldHandler : GetAllWithCountHandler<PreciseAcademicField, GetPreciseAcademicFieldViewModel, GetPreciseAcademicFieldQuery>, IRequestHandler<GetPreciseAcademicFieldQuery, Response<PagedResult<GetPreciseAcademicFieldViewModel>>>
    {
        public GetPreciseAcademicFieldHandler(IBaseRepository<PreciseAcademicField> repositoryPreciseAcademicField)
            : base(repositoryPreciseAcademicField) { }

        public override Expression<Func<PreciseAcademicField, GetPreciseAcademicFieldViewModel>> Selector => z => new GetPreciseAcademicFieldViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<PreciseAcademicField>, IOrderedQueryable<PreciseAcademicField>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetPreciseAcademicFieldViewModel>>> Handle(GetPreciseAcademicFieldQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}

