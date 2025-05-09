namespace HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEducationInformationById;
public class GetEducationInfoByIdQuery : IRequest<Response<GetEducationInfoByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}