using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Commands.UpdateJobDegree
{
    public class UpdateJobDegreeHandler :
        UpdateHandler<JobDegree, UpdateJobDegreeCommend>,
        IRequestHandler<UpdateJobDegreeCommend, Response<bool>>
    {
        public UpdateJobDegreeHandler(IBaseRepository<JobDegree> repositoryJobDegree)
            : base(repositoryJobDegree)
        {
        }

        public override Expression<Func<JobDegree, bool>>
            EntityPredicate(UpdateJobDegreeCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateJobDegreeCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}