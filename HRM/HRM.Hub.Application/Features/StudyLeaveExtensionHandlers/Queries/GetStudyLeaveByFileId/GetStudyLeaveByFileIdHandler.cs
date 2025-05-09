namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveByFileId;

public class GetStudyLeaveByFileIdHandler : IRequestHandler<GetStudyLeaveByFileIdQuery, Response<GetStudyLeaveByFileIdViewModel>>
{
    private readonly IBaseRepository<StudyLeave> _repositoryStudyLeave;
    // create constructor
    public GetStudyLeaveByFileIdHandler(IBaseRepository<StudyLeave> repositoryStudyLeave)
    {
        _repositoryStudyLeave = repositoryStudyLeave ?? throw new ArgumentNullException(nameof(repositoryStudyLeave));
    }
    public async Task<Response<GetStudyLeaveByFileIdViewModel>> Handle(GetStudyLeaveByFileIdQuery request, CancellationToken cancellationToken)
    {
        var find = await _repositoryStudyLeave.Find(x => x.StudyFileId == request.FileId && x.StatusId != Status.InActive, cancellationToken: cancellationToken);
        if (find == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<GetStudyLeaveByFileIdViewModel>(null);
        return SuccessMessage.Get.ToSuccessMessage<GetStudyLeaveByFileIdViewModel>(new GetStudyLeaveByFileIdViewModel()
        {
            HireDate  = find.ReleaseDate.Value.AddDays(find.StudyPeriodTime.Value),
        });
    }
}
