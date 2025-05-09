namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Commands.CreateStudyLeaveExtension;

public class CreateStudyLeaveExtensionHandler : IRequestHandler<CreateStudyLeaveExtensionCommand, Response<bool>>
{
    private readonly IBaseRepository<StudyLeaveExtension> _repositoryStudyLeaveExtension;

    private readonly IBaseRepository<StudyLeave> _repositoryStudyLeave;
    public CreateStudyLeaveExtensionHandler(IBaseRepository<StudyLeaveExtension> repositoryStudyLeaveExtension, IBaseRepository<StudyLeave> repositoryStudyLeave)
    {
        _repositoryStudyLeaveExtension = repositoryStudyLeaveExtension ?? throw new ArgumentNullException(nameof(repositoryStudyLeaveExtension));
        _repositoryStudyLeave = repositoryStudyLeave ?? throw new ArgumentNullException(nameof(repositoryStudyLeaveExtension));
    }
    public async Task<Response<bool>> Handle(CreateStudyLeaveExtensionCommand request, CancellationToken cancellationToken)
    {
        var studyLeave = await _repositoryStudyLeave.Find(x => x.Id == request.StudyFileId && x.StatusId != Status.InActive, cancellationToken: cancellationToken);
        if (studyLeave == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

        studyLeave.StudyPeriodTime += request.CountOfDay;
        _repositoryStudyLeave.Update(studyLeave);

        var studyLeaveExtension = new StudyLeaveExtension()
        {
            Id = Guid.NewGuid(),
            Notes = request.Notes,
            EmployeeId = request.EmployeeId,
            FromDate = request.FromDate,
            ToDate = request.ToDate,
            CountOfDay = request.CountOfDay,
            StudyFileId = request.StudyFileId,
            OrderDate = request.OrderDate,
            OrderNo = request.OrderNo,
            StudyExtensionOrderTypeId = request.StudyExtensionOrderTypeId,
        };
        await _repositoryStudyLeaveExtension.Create(studyLeaveExtension, cancellationToken);

        return SuccessMessage.Create.ToSuccessMessage(true);
    }
}