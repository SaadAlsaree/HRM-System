namespace HRM.Hub.Application.Features.DocVerification.Commands.CreateDocVerification;
public class CreateDocVerificationHandler : CreateHandler<DocVerifications, CreateDocVerificationCommand>,
    IRequestHandler<CreateDocVerificationCommand, Response<bool>>
{
    public CreateDocVerificationHandler(IBaseRepository<DocVerifications> _repositoryDocVerifications)
        : base(_repositoryDocVerifications)
    {
    }
    public async Task<Response<bool>> Handle(CreateDocVerificationCommand request, CancellationToken cancellationToken)=>
        await HandleBase(request, cancellationToken);

    protected override Expression<Func<DocVerifications, bool>> ExistencePredicate(CreateDocVerificationCommand request) => x => false;

    protected override DocVerifications MapToEntity(CreateDocVerificationCommand request)
    {
        return new DocVerifications()
        {
            Answered = request.Answered,
            CreateAt = DateTime.Now,
            CreateBy = request.CreateBy,
            DocumentDate = request.DocumentDate,
            DocumentNumber = request.DocumentNumber,
            EmployeeId = request.EmployeeId,
            LastUpdateBy = request.CreateBy,
            LastUpdateAt = DateTime.Now,
            Note = request.Note,
            Recipient = request.Recipient,
            SendingDate = request.SendingDate
        };
    }
}
