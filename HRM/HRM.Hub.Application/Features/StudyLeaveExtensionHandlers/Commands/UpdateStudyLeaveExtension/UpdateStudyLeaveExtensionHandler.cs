using HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Commands.UpdateStudyLeaveExtension;

namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Commands.UpdateStudyLeaveExtension;

public class UpdateStudyLeaveExtensionHandler : IRequestHandler<UpdateStudyLeaveExtensionCommand, Response<bool>>
{

    private readonly IBaseRepository<StudyLeaveExtension> _repositoryStudyLeaveExtension;
    public UpdateStudyLeaveExtensionHandler(IBaseRepository<StudyLeaveExtension> repositoryStudyLeaveExtension)
    {
        _repositoryStudyLeaveExtension = repositoryStudyLeaveExtension ?? throw new ArgumentNullException(nameof(repositoryStudyLeaveExtension));
    }
    public async Task<Response<bool>> Handle(UpdateStudyLeaveExtensionCommand request, CancellationToken cancellationToken)
    {
        var studyLeaveExtension = await _repositoryStudyLeaveExtension.Find(z => z.Id == request.StudyLeaveExtensionId, cancellationToken: cancellationToken);

        if (studyLeaveExtension == null)
            return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);
        
        studyLeaveExtension.EmployeeId = request.EmployeeId;
        studyLeaveExtension.Notes = request.Notes;
        studyLeaveExtension.FromDate = request.FromDate;
        studyLeaveExtension.ToDate = request.ToDate;
        studyLeaveExtension.OrderDate = request.OrderDate;
        studyLeaveExtension.CountOfDay = request.CountOfDay;
        studyLeaveExtension.OrderNo = request.OrderNo;
        studyLeaveExtension.StudyFileId = request.StudyFileId;
        studyLeaveExtension.StudyExtensionOrderTypeId = request.StudyExtensionOrderTypeId;

        return SuccessMessage.Update.ToSuccessMessage(_repositoryStudyLeaveExtension.Update(studyLeaveExtension));
    }
}