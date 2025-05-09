namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveExtensionById;

public class GetStudyLeaveExtensionByIdHandler : IRequestHandler<GetStudyLeaveExtensionByIdQuery,
    Response<GetStudyLeaveExtensionByIdViewModel>>
{
    private readonly IBaseRepository<StudyLeaveExtension> _repositoryStudyLeaveExtension;

    public GetStudyLeaveExtensionByIdHandler(IBaseRepository<StudyLeaveExtension> repositoryStudyLeaveExtension)
    {
        _repositoryStudyLeaveExtension = repositoryStudyLeaveExtension ??
                                         throw new ArgumentNullException(nameof(repositoryStudyLeaveExtension));
    }

    public async Task<Response<GetStudyLeaveExtensionByIdViewModel>> Handle(GetStudyLeaveExtensionByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryStudyLeaveExtension
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetStudyLeaveExtensionByIdViewModel()
            {
                EmployeeId = a.EmployeeId,
                Status = a.StatusId,
                CountOfDay = a.CountOfDay,  
                StudyFileId = a.StudyFileId,
                Notes = a.Notes,
                Id = a.Id,
                FromDate = a.FromDate,
                OrderDate = a.OrderDate,
                StudyExtensionOrderTypeName = a.StudyExtensionOrderType.Name,
                StudyExtensionOrderTypeId = a.StudyExtensionOrderTypeId,
                OrderNo = a.OrderNo,
                ToDate = a.ToDate,
                StudyFileDocumentNo = a.StudyFile.DocumentNo,
                FullName = a.Employee.FullName,
                JobCode = a.Employee.JobCode,
                LotNumber = a.Employee.LotNumber,
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}