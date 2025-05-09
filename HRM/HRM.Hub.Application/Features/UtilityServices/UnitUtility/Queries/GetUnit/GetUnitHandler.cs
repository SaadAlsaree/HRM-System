using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.UnitUtility.Queries.GetUnit
{
    public class GetUnitHandler : GetAllWithCountHandler<Units, GetUnitViewModel, GetUnitQuery>, IRequestHandler<GetUnitQuery, Response<PagedResult<GetUnitViewModel>>>
    {
        public GetUnitHandler(IBaseRepository<Units> repositoryUnit)
            : base(repositoryUnit) { }

        public override Expression<Func<Units, GetUnitViewModel>> Selector => z => new GetUnitViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

            DirectorateId = z.DirectorateId,
            DirectorateName = z.Directorate.Name,
            DepartmentId = z.DepartmentId,
            DepartmentName = z.Department.Name,
            SubDirectorateId = z.SubDirectorateId,
            SubDirectorateName = z.SubDirectorate.Name,
            SectionId = z.SectionId,
            SectionName = z.Section.Name,
            ShortKey = z.ShortKey,
        };

        public override Func<IQueryable<Units>, IOrderedQueryable<Units>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetUnitViewModel>>> Handle(GetUnitQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
