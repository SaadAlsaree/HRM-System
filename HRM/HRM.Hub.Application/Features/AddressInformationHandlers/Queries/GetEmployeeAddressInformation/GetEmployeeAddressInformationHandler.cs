using HRM.Hub.Application.Features.AddressInformationHandlers.Queries.GetEmployeeAddressInformation;
using HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetEmployee;

namespace HRM.Hub.Application.Features.AddressInformationHandlers.Queries.GetEmployeeAddressInformation;

public class GetEmployeeAddressInformationHandler:
GetAllWithCountHandler<AddressInformation, GetEmployeeAddressInformationViewModel, GetEmployeeAddressInformationQuery>,
    IRequestHandler<GetEmployeeAddressInformationQuery, Response<PagedResult<GetEmployeeAddressInformationViewModel>>>
{
public GetEmployeeAddressInformationHandler(IBaseRepository<AddressInformation> repositoryAddressInformation)
    : base(repositoryAddressInformation) { }

public override Expression<Func<AddressInformation, GetEmployeeAddressInformationViewModel>> Selector => z => new GetEmployeeAddressInformationViewModel()
{
    Id = z.Id,
    Status = z.StatusId,
    Notes = z.Notes,
    GovernorateId = z.GovernorateId,
    NearestPoint = z.NearestPoint,
    GovernorateName = z.Governorate.Name,
    HouseNo = z.HouseNo,
    Area = z.Area,
    StreetNo = z.StreetNo,
    ProvinceId = z.ProvinceId,
    ProvinceName = z.Province.Name,
    TerritoryId = z.TerritoryId,
    TerritoryName = z.Territory.Name,
    District = z.District,
    IsCurrent = z.IsCurrent,
    EmployeeId = z.EmployeeId,
    FullName = z.Employee.FullName,
    JobCode = z.Employee.JobCode


};

public override Func<IQueryable<AddressInformation>, IOrderedQueryable<AddressInformation>> OrderBy => order => order.OrderBy(z => z.Id);

public async Task<Response<PagedResult<GetEmployeeAddressInformationViewModel>>> Handle(GetEmployeeAddressInformationQuery request, CancellationToken cancellationToken)
{
    return await HandleBase(request, cancellationToken);
}
}