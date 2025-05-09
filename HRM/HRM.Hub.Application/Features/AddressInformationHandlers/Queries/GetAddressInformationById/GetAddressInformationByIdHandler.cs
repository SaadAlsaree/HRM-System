namespace HRM.Hub.Application.Features.AddressInformationHandlers.Queries.GetAddressInformationById;

public class GetAddressInformationByIdHandler : GetByIdHandler<AddressInformation, GetAddressInformationByIdViewModel, GetAddressInformationByIdQuery>, IRequestHandler<GetAddressInformationByIdQuery, Response<GetAddressInformationByIdViewModel>>
{
    public GetAddressInformationByIdHandler(IBaseRepository<AddressInformation> repositoryEmployeeAddressInformation)
        : base(repositoryEmployeeAddressInformation) { }

    public override Expression<Func<AddressInformation, bool>> IdPredicate(GetAddressInformationByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<AddressInformation, GetAddressInformationByIdViewModel>> Selector => z => new GetAddressInformationByIdViewModel()
    {
        Id = z.Id,
        JobCode = z.Employee.JobCode,
        EmployeeId = z.EmployeeId,
        FullName = z.Employee.FullName,
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

    };
    public async Task<Response<GetAddressInformationByIdViewModel>> Handle(GetAddressInformationByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}