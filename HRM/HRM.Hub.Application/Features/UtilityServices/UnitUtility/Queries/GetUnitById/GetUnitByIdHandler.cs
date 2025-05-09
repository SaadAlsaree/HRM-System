namespace HRM.Hub.Application.Features.UtilityServices.UnitUtility.Queries.GetUnitById;
public class GetUnitByIdHandler : GetByIdHandler<Units, GetUnitByIdViewModel, GetUnitByIdQuery>, IRequestHandler<GetUnitByIdQuery, Response<GetUnitByIdViewModel>>
{
    public GetUnitByIdHandler(IBaseRepository<Units> repositoryUnit)
        : base(repositoryUnit) { }

    public override Expression<Func<Units, bool>> IdPredicate(GetUnitByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Units, GetUnitByIdViewModel>> Selector => a => new GetUnitByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        ShortKey = a.ShortKey,
        Status = a.StatusId,
        DirectorateId = a.DirectorateId,
        DirectorateName = a.Directorate.Name,
        DepartmentId = a.DepartmentId,
        DepartmentName = a.Department.Name,
        SubDirectorateId = a.SubDirectorateId,
        SubDirectorateName = a.SubDirectorate.Name,
        SectionId = a.SectionId,
        SectionName = a.Section.Name
    };
    public async Task<Response<GetUnitByIdViewModel>> Handle(GetUnitByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
