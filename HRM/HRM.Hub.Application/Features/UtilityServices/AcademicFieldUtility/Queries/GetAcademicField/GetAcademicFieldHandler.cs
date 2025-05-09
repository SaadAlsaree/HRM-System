using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicFieldUtility.Queries.GetAcademicField
{
    public class GetAcademicFieldHandler : GetAllWithCountHandler<AcademicField, GetAcademicFieldViewModel, GetAcademicFieldQuery>,
        IRequestHandler<GetAcademicFieldQuery, Response<PagedResult<GetAcademicFieldViewModel>>>
    {
        public GetAcademicFieldHandler(IBaseRepository<AcademicField> repositoryAcademicField)
            : base(repositoryAcademicField) { }

        public override Expression<Func<AcademicField, GetAcademicFieldViewModel>> Selector => z => new GetAcademicFieldViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<AcademicField>, IOrderedQueryable<AcademicField>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetAcademicFieldViewModel>>> Handle(GetAcademicFieldQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}

