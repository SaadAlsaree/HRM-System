namespace HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFilesById;

public class GetStudyFilesByIdHandler : IRequestHandler<GetStudyFilesByIdQuery,
    Response<GetStudyFilesByIdViewModel>>
{
    private readonly IBaseRepository<StudyFile> _repositoryStudyFiles;

    public GetStudyFilesByIdHandler(IBaseRepository<StudyFile> repositoryStudyFiles)
    {
        _repositoryStudyFiles = repositoryStudyFiles ??
                                         throw new ArgumentNullException(nameof(repositoryStudyFiles));
    }

    public async Task<Response<GetStudyFilesByIdViewModel>> Handle(GetStudyFilesByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryStudyFiles
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetStudyFilesByIdViewModel()
            {
                EmployeeId = a.EmployeeId,
                Status = a.StatusId,
                DocumentDate = a.DocumentDate,
                DocumentNo = a.DocumentNo,
                Notes = a.Notes,
                Id = a.Id,
                StatusName = a.StatusId.GetDisplayName(),
                FullName = a.Employee.FullName,
                JobCode = a.Employee.JobCode,
                LotNumber = a.Employee.LotNumber
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}