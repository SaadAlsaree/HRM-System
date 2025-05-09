namespace HRM.Hub.Application.Features.ChangeJobTitles.Queries.GetChangeJobTitles
{
    public class GetChangeJobTitlesQuery : IRequest<Response<PagedResult<GetChangeJobTitlesViewModel>>>, IPaginationQuery
    {
        public Guid EmployeeId { get; set; }
        public Status Status { get; set; } = Status.None;

        public int Page { get; set; }
        public byte PageSize { get; set; }
    }
}
