namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Queries.GetTypeOfDisciplinaryList;

public class GetTypeOfDisciplinaryListHandler : GetAllHandler<TypeOfDisciplinary, GetTypeOfDisciplinaryListViewModel, GetTypeOfDisciplinaryListQuery>, IRequestHandler<GetTypeOfDisciplinaryListQuery, Response<IEnumerable<GetTypeOfDisciplinaryListViewModel>>>
{
    public GetTypeOfDisciplinaryListHandler(IBaseRepository<TypeOfDisciplinary> repositoryTypeOfBookList)
        : base(repositoryTypeOfBookList) { }

    public override Expression<Func<TypeOfDisciplinary, GetTypeOfDisciplinaryListViewModel>> Selector => z => new GetTypeOfDisciplinaryListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
        CountOfDayDelay = z.CountOfDayDelay
    };

    public override Func<IQueryable<TypeOfDisciplinary>, IOrderedQueryable<TypeOfDisciplinary>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetTypeOfDisciplinaryListViewModel>>> Handle(GetTypeOfDisciplinaryListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}