namespace HRM.Hub.Application.Features.CorrectingAcademicAchievement.Queries.GetById;
public class GetByIdCorrectingAcademicAchievementQuery : IRequest<Response<GetByIdCorrectingAcademicAchievementViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}