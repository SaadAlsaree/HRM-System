namespace HRM.Hub.Application.Features.UtilityServices.DepartmentUtility.Queries.GetDepartmentById;
public class GetDepartmentByIdHandler : GetByIdHandler<Departments, GetDepartmentByIdViewModel, GetDepartmentByIdQuery>, IRequestHandler<GetDepartmentByIdQuery, Response<GetDepartmentByIdViewModel>>
{
    public GetDepartmentByIdHandler(IBaseRepository<Departments> repositoryDepartment)
        : base(repositoryDepartment) { }

    public override Expression<Func<Departments, bool>> IdPredicate(GetDepartmentByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Departments, GetDepartmentByIdViewModel>> Selector => a => new GetDepartmentByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        ShortKey = a.ShortKey,
        Status = a.StatusId,
        DirectorateId = a.DirectorateId ?? 0, // Fix for CS0266
        SubDirectorateId = a.SubDirectorateId ?? 0, // Fix for CS0266
        DirectorateName = a.Directorate.Name,
        SubDirectorateName = a.SubDirectorate.Name,
    };
    public async Task<Response<GetDepartmentByIdViewModel>> Handle(GetDepartmentByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
