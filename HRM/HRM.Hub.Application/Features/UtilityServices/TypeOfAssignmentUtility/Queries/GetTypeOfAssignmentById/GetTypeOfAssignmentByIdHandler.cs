using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Queries.GetTypeOfAssignmentById;
public class GetTypeOfAssignmentByIdHandler : GetByIdHandler<TypeOfAssignment, GetTypeOfAssignmentByIdViewModel, GetTypeOfAssignmentByIdQuery>, IRequestHandler<GetTypeOfAssignmentByIdQuery, Response<GetTypeOfAssignmentByIdViewModel>>
{
    public GetTypeOfAssignmentByIdHandler(IBaseRepository<TypeOfAssignment> repositoryTypeOfAssignment)
        : base(repositoryTypeOfAssignment) { }

    public override Expression<Func<TypeOfAssignment, bool>> IdPredicate(GetTypeOfAssignmentByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<TypeOfAssignment, GetTypeOfAssignmentByIdViewModel>> Selector => a => new GetTypeOfAssignmentByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name
    };
    public async Task<Response<GetTypeOfAssignmentByIdViewModel>> Handle(GetTypeOfAssignmentByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
