namespace HRM.Hub.Application.Features.JobInformationHandlers.Commands.UpdateJobInformation;
public class UpdateJobInformationCommandHandler : UpdateHandler<JobInformation, UpdateJobInformationCommand>, IRequestHandler<UpdateJobInformationCommand, Response<bool>>
{
    public UpdateJobInformationCommandHandler(IBaseRepository<JobInformation> jobInformationRepository)
        : base(jobInformationRepository)
    {
    }

    public override Expression<Func<JobInformation, bool>> EntityPredicate(UpdateJobInformationCommand request) => 
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateJobInformationCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}