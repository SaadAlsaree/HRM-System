namespace HRM.Hub.Application.Features.StudyFileHandlers.Commands.UpdateStudyFile;

public class UpdateStudyFileHandler:IRequestHandler<UpdateStudyFileCommand,Response<bool>>
{

    private readonly IBaseRepository<StudyFile> _repositoryStudyFile;
    public UpdateStudyFileHandler(IBaseRepository<StudyFile> repositoryStudyFile)
    {
        _repositoryStudyFile = repositoryStudyFile ?? throw new ArgumentNullException(nameof(repositoryStudyFile));
    }
    public async Task<Response<bool>> Handle(UpdateStudyFileCommand request, CancellationToken cancellationToken)
    {
        var studyFile = await _repositoryStudyFile.Find(z => z.Id == request.StudyFileId, cancellationToken: cancellationToken);

        if (studyFile == null)
            return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);



        studyFile.Notes = request.Notes;
        studyFile.DocumentDate = request.DocumentDate;
        studyFile.DocumentNo = request.DocumentNo;


        return SuccessMessage.Update.ToSuccessMessage(_repositoryStudyFile.Update(studyFile));
    }
}