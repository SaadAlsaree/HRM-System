using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Commands.UpdateJobTitle
{
    public class UpdateJobTitleHandler : UpdateHandler<JobTitle, UpdateJobTitleCommend>, IRequestHandler<UpdateJobTitleCommend, Response<bool>>
    {
        public UpdateJobTitleHandler(IBaseRepository<JobTitle> repositoryJobTitle)
            : base(repositoryJobTitle)
        {
        }

        public override Expression<Func<JobTitle, bool>>
            EntityPredicate(UpdateJobTitleCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateJobTitleCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}