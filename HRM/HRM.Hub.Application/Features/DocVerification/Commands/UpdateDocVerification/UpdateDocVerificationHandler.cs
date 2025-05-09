namespace HRM.Hub.Application.Features.DocVerification.Commands.UpdateDocVerification;
public class UpdateDocVerificationHandler : UpdateHandler<DocVerifications, UpdateDocVerificationCommand>,
    IRequestHandler<UpdateDocVerificationCommand, Response<bool>>
{
    public UpdateDocVerificationHandler(IBaseRepository<DocVerifications> repository) : base(repository)
    {
    }

    public override Expression<Func<DocVerifications, bool>> EntityPredicate(UpdateDocVerificationCommand request) =>
        x => x.Id == request.DocVerificationId;

    public async Task<Response<bool>> Handle(UpdateDocVerificationCommand request, CancellationToken cancellationToken)=>
        await HandleBase(request, cancellationToken);
}