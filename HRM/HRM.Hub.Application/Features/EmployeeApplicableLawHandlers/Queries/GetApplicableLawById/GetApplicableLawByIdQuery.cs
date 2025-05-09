namespace HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Queries.GetApplicableLawById;
public class GetApplicableLawByIdQuery : IRequest<Response<GetApplicableLawByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}