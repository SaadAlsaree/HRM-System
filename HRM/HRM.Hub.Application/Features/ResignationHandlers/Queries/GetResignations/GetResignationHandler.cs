using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;


namespace HRM.Hub.Application.Features.ResignationHandlers.Queries.GetResignations;
public class GetResignationHandler :
    GetAllWithCountHandler<Resignation, GetResignationViewModel, GetResignationQuery>,
    IRequestHandler<GetResignationQuery, Response<PagedResult<GetResignationViewModel>>>
{
    public GetResignationHandler(IBaseRepository<Resignation> repositoryResignation)
        : base(repositoryResignation) { }

    public override Expression<Func<Resignation, GetResignationViewModel>> Selector => z => new GetResignationViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        FullName = z.Employee.FullName,
        LotNumber = z.Employee.LotNumber,
        JobCode = z.Employee.JobCode,
        Reason = z.Reason,
        RequestDate = z.RequestDate,
        RequestNo = z.RequestNo,
        ResignationOrderNo = z.ResignationOrderNo,
        ResignationOrderDate = z.ResignationOrderDate,
        SeparationOrderNo = z.SeparationOrderNo,
        SeparationOrderDate = z.SeparationOrderDate,
        Note = z.Note,
        Status = z.StatusId,
        StatusName = z.StatusId.GetDisplayName(),
        EmployeeName = z.Employee.FullName
    };

    public override Func<IQueryable<Resignation>, IOrderedQueryable<Resignation>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetResignationViewModel>>> Handle(GetResignationQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}

