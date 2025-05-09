using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.SectionUtility.Queries.GetSection
{
    public class GetSectionHandler : GetAllWithCountHandler<Sections, GetSectionViewModel, GetSectionQuery>, IRequestHandler<GetSectionQuery, Response<PagedResult<GetSectionViewModel>>>
    {
        public GetSectionHandler(IBaseRepository<Sections> repositorySection)
            : base(repositorySection) { }

        public override Expression<Func<Sections, GetSectionViewModel>> Selector => z => new GetSectionViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

            ShortKey = z.ShortKey,
            DepartmentId = z.DepartmentId,
            DepartmentName = z.Department.Name,
            SubDirectorateId = z.SubDirectorateId,
            SubDirectorateName = z.SubDirectorate.Name,
            DirectorateId = z.DirectorateId,
            DirectorateName = z.Directorate.Name,
        };

        public override Func<IQueryable<Sections>, IOrderedQueryable<Sections>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetSectionViewModel>>> Handle(GetSectionQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
