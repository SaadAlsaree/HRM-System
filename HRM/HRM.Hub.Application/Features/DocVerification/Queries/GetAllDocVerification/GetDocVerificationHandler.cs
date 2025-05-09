namespace HRM.Hub.Application.Features.DocVerification.Queries.GetAllDocVerification;
public class GetDocVerificationHandler : GetAllWithCountHandler<DocVerifications, GetDocVerificationViewModel, GetDocVerificationQuery>,
    IRequestHandler<GetDocVerificationQuery, Response<PagedResult<GetDocVerificationViewModel>>>
{
    public GetDocVerificationHandler(IBaseRepository<DocVerifications> repository) : base(repository)
    {
    }

    public override Expression<Func<DocVerifications, GetDocVerificationViewModel>> Selector => x => new GetDocVerificationViewModel()
    {
        Id = x.Id,
        Answered = x.Answered,
        DocumentDate = x.DocumentDate,
        DocumentNumber = x.DocumentNumber,
        DocVerificationId = x.Id,
        EmployeeId = x.EmployeeId,
        FullName = x.Employee.FullName,
        Note = x.Note,
        Recipient = x.Recipient,
        SendingDate = x.SendingDate,
        Status = x.StatusId
    };

    public override Func<IQueryable<DocVerifications>, IOrderedQueryable<DocVerifications>> OrderBy => order => order.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetDocVerificationViewModel>>> Handle(GetDocVerificationQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);
}