using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Commands.UpdateJobDescription
{
    public class UpdateJobDescriptionHandler :
        UpdateHandler<JobDescription, UpdateJobDescriptionCommend>,
        IRequestHandler<UpdateJobDescriptionCommend, Response<bool>>
    {
        public UpdateJobDescriptionHandler(IBaseRepository<JobDescription> repositoryJobDescription)
            : base(repositoryJobDescription)
        {
        }

        public override Expression<Func<JobDescription, bool>>
            EntityPredicate(UpdateJobDescriptionCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateJobDescriptionCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}