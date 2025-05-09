using HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Queries.GetApplicableLawById;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;
namespace HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Queries.GetApplicableLawById;
public class GetApplicableLawByIdHandler : GetByIdHandler<EmployeeApplicableLaws, GetApplicableLawByIdViewModel, GetApplicableLawByIdQuery>, IRequestHandler<GetApplicableLawByIdQuery, Response<GetApplicableLawByIdViewModel>>
{
    public GetApplicableLawByIdHandler(IBaseRepository<EmployeeApplicableLaws> repositoryEmployeeApplicableLaw)
        : base(repositoryEmployeeApplicableLaw) { }

    public override Expression<Func<EmployeeApplicableLaws, bool>> IdPredicate(GetApplicableLawByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<EmployeeApplicableLaws, GetApplicableLawByIdViewModel>> Selector => z => new GetApplicableLawByIdViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        LawId = z.LawId,
        Note = z.Note,
        Status = z.StatusId
    };
    public async Task<Response<GetApplicableLawByIdViewModel>> Handle(GetApplicableLawByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
