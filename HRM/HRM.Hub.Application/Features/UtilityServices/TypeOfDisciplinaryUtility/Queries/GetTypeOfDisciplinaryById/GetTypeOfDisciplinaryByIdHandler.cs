namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Queries.GetTypeOfDisciplinaryById;
public class GetTypeOfDisciplinaryByIdHandler : GetByIdHandler<TypeOfDisciplinary, GetTypeOfDisciplinaryByIdViewModel, GetTypeOfDisciplinaryByIdQuery>, IRequestHandler<GetTypeOfDisciplinaryByIdQuery, Response<GetTypeOfDisciplinaryByIdViewModel>>
{
    public GetTypeOfDisciplinaryByIdHandler(IBaseRepository<TypeOfDisciplinary> repositoryTypeOfBook)
        : base(repositoryTypeOfBook) { }

    public override Expression<Func<TypeOfDisciplinary, bool>> IdPredicate(GetTypeOfDisciplinaryByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<TypeOfDisciplinary, GetTypeOfDisciplinaryByIdViewModel>> Selector => a => new GetTypeOfDisciplinaryByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        CountOfDayDelay = a.CountOfDayDelay,
        Status = a.StatusId
    };
    public async Task<Response<GetTypeOfDisciplinaryByIdViewModel>> Handle(GetTypeOfDisciplinaryByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
