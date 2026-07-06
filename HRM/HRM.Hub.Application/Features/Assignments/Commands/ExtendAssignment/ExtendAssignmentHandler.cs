
namespace HRM.Hub.Application.Features.Assignments.Commands.ExtendAssignment;

public class ExtendAssignmentHandler : IRequestHandler<ExtendAssignmentCommand, Response<bool>>
{
    private readonly IBaseRepository<Domain.Entities.Assignments> _repositoryAssignments;

    public ExtendAssignmentHandler(IBaseRepository<Domain.Entities.Assignments> repositoryAssignments)
    {
        _repositoryAssignments = repositoryAssignments ?? throw new ArgumentNullException(nameof(repositoryAssignments));
    }

    public async Task<Response<bool>> Handle(ExtendAssignmentCommand request, CancellationToken cancellationToken)
    {
        var assignment = await _repositoryAssignments.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);

        if (assignment == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        assignment.DurationOfAssignment = (assignment.DurationOfAssignment ?? 0) + request.AdditionalMonths;
        assignment.ExtensionDate = request.ExtensionDate;
        assignment.ExtensionReason = request.ExtensionReason;
        assignment.ExtendedBy = request.ExtendedBy;

        if (!string.IsNullOrWhiteSpace(request.Note))
            assignment.Note = string.IsNullOrWhiteSpace(assignment.Note)
                ? request.Note
                : assignment.Note + " | " + request.Note;

        assignment.LastUpdateAt = DateTime.Now;
        assignment.LastUpdateBy = request.LastUpdateBy;

        var resp = _repositoryAssignments.Update(assignment);

        return resp ? SuccessMessage.Update.ToSuccessMessage(true) : ErrorsMessage.FailOnUpdate.ToErrorMessage(false);
    }
}
