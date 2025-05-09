using HRM.Hub.Application.Features.AddressInformationHandlers.Commands.AddAddressInformation;

namespace HRM.Hub.Application.Features.StudyFileHandlers.Commands.CreateStudyFile;

public class CreateStudyFileHandler : IRequestHandler<CreateStudyFileCommand, Response<bool>>
{
    private readonly IBaseRepository<StudyFile> _repositoryStudyFile;
    public CreateStudyFileHandler(IBaseRepository<StudyFile> repositoryStudyFile)
    {
        _repositoryStudyFile = repositoryStudyFile ?? throw new ArgumentNullException(nameof(repositoryStudyFile));
    }
    public async Task<Response<bool>> Handle(CreateStudyFileCommand request, CancellationToken cancellationToken)
    {
        var studyFile = new StudyFile()
        {
            Id = Guid.NewGuid(),
            Notes = request.Notes,
            EmployeeId = request.EmployeeId,
            DocumentDate = request.DocumentDate,
            DocumentNo = request.DocumentNo,
        };

        await _repositoryStudyFile.Create(studyFile, cancellationToken);

        return SuccessMessage.Create.ToSuccessMessage(true);
    }
}