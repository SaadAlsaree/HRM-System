using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Commands.UpdateJobCategory
{
    public class UpdateJobCategoryHandler :
        UpdateHandler<JobCategory, UpdateJobCategoryCommend>,
        IRequestHandler<UpdateJobCategoryCommend, Response<bool>>
    {
        public UpdateJobCategoryHandler(IBaseRepository<JobCategory> repositoryJobCategory)
            : base(repositoryJobCategory)
        {
        }

        public override Expression<Func<JobCategory, bool>>
            EntityPredicate(UpdateJobCategoryCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateJobCategoryCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}