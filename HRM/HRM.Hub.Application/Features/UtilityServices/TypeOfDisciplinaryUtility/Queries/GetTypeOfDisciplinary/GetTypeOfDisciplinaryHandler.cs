using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Queries.GetTypeOfDisciplinary
{
    public class GetTypeOfDisciplinaryHandler : GetAllWithCountHandler<TypeOfDisciplinary, GetTypeOfDisciplinaryViewModel, GetTypeOfDisciplinaryQuery>, IRequestHandler<GetTypeOfDisciplinaryQuery, Response<PagedResult<GetTypeOfDisciplinaryViewModel>>>
    {
        public GetTypeOfDisciplinaryHandler(IBaseRepository<TypeOfDisciplinary> repositoryTypeOfBook)
            : base(repositoryTypeOfBook) { }

        public override Expression<Func<TypeOfDisciplinary, GetTypeOfDisciplinaryViewModel>> Selector => z => new GetTypeOfDisciplinaryViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,
            CountOfDayDelay = z.CountOfDayDelay
        };

        public override Func<IQueryable<TypeOfDisciplinary>, IOrderedQueryable<TypeOfDisciplinary>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetTypeOfDisciplinaryViewModel>>> Handle(GetTypeOfDisciplinaryQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}

