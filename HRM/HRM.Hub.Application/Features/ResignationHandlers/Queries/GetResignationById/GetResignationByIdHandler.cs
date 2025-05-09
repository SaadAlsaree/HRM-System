namespace HRM.Hub.Application.Features.ResignationHandlers.Queries.GetResignationById;
public class GetResignationByIdHandler : GetByIdHandler<Resignation, GetResignationByIdViewModel, GetResignationByIdQuery>, IRequestHandler<GetResignationByIdQuery, Response<GetResignationByIdViewModel>>
{
    public GetResignationByIdHandler(IBaseRepository<Resignation> repositoryEmployeeResignation)
        : base(repositoryEmployeeResignation) { }

    public override Expression<Func<Resignation, bool>> IdPredicate(GetResignationByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Resignation, GetResignationByIdViewModel>> Selector => z => new GetResignationByIdViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        FullName = z.Employee.FullName,
        LotNumber = z.Employee.LotNumber,
        JobCode = z.Employee.JobCode,
        Reason  = z.Reason,
        RequestDate  = z.RequestDate,
        RequestNo  = z.RequestNo,
        ResignationOrderNo  = z.ResignationOrderNo,
        ResignationOrderDate  = z.ResignationOrderDate,
        SeparationOrderNo  = z.SeparationOrderNo,
        SeparationOrderDate  = z.SeparationOrderDate,
        HireDate = z.Employee.JobInformation.HireDate,
        GenderName = z.Employee.Gender.GetDisplayName(),
        Note = z.Note,
        Status = z.StatusId
    };
    public async Task<Response<GetResignationByIdViewModel>> Handle(GetResignationByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
