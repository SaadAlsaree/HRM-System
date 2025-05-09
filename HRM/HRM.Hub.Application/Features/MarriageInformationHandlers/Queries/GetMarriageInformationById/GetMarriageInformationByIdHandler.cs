namespace HRM.Hub.Application.Features.MarriageInformationHandlers.Queries.GetMarriageInformationById;

public class GetMarriageInformationByIdHandler : IRequestHandler<GetMarriageInformationByIdQuery,
    Response<GetMarriageInformationByIdViewModel>>
{
    private readonly IBaseRepository<MarriageInformation> _repositoryEmployeePosition;

    public GetMarriageInformationByIdHandler(IBaseRepository<MarriageInformation> repositoryEmployeePosition)
    {
        _repositoryEmployeePosition = repositoryEmployeePosition ??
                                         throw new ArgumentNullException(nameof(repositoryEmployeePosition));
    }

    public async Task<Response<GetMarriageInformationByIdViewModel>> Handle(GetMarriageInformationByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryEmployeePosition
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetMarriageInformationByIdViewModel()
            {
                Id = a.Id,
                EmployeeId = (Guid)a.EmployeeId,
                EmployeeName = a.Employee.FullName,
                FirstName = a.FirstName,
                SecondName = a.SecondName,
                ThirdName = a.ThirdName,
                SurName = a.SurName,
                FullName = a.FullName,
                MarriageDate = a.MarriageDate,
                ChildrenCount = a.ChildrenCount,
                IsCurrent = a.IsCurrent,
                Notes = a.Notes,
                Status = a.StatusId,

                JobCode = a.Employee.JobCode,
                LotNumber = a.Employee.LotNumber,
                
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}