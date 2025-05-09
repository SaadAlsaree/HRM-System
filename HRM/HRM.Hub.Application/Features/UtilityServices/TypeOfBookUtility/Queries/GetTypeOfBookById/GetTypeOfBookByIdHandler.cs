using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Queries.GetTypeOfBookById;
public class GetTypeOfBookByIdHandler : GetByIdHandler<TypeOfBook, GetTypeOfBookByIdViewModel, GetTypeOfBookByIdQuery>, IRequestHandler<GetTypeOfBookByIdQuery, Response<GetTypeOfBookByIdViewModel>>
{
    public GetTypeOfBookByIdHandler(IBaseRepository<TypeOfBook> repositoryTypeOfBook)
        : base(repositoryTypeOfBook) { }

    public override Expression<Func<TypeOfBook, bool>> IdPredicate(GetTypeOfBookByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<TypeOfBook, GetTypeOfBookByIdViewModel>> Selector => a => new GetTypeOfBookByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        
        Status = a.StatusId
    };
    public async Task<Response<GetTypeOfBookByIdViewModel>> Handle(GetTypeOfBookByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
