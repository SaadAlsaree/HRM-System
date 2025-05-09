namespace HRM.Hub.Application.Features.DocVerification.Queries.GetByIdDocVerification;
public class GetByIdDocVerificationHandler : GetByIdHandler<DocVerifications, GetByIdDocVerificationViewModel, GetByIdDocVerificationQuery>,
        IRequestHandler<GetByIdDocVerificationQuery, Response<GetByIdDocVerificationViewModel>>
{
    public GetByIdDocVerificationHandler(IBaseRepository<DocVerifications> repository) : base(repository)
    {
    }

    public override Expression<Func<DocVerifications, GetByIdDocVerificationViewModel>> Selector => x => new GetByIdDocVerificationViewModel()
    {
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

    public async Task<Response<GetByIdDocVerificationViewModel>> Handle(GetByIdDocVerificationQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);

    public override Expression<Func<DocVerifications, bool>>
    IdPredicate(GetByIdDocVerificationQuery request) => x => x.Id == request.Id;
}