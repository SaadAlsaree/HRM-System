using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Commands.CreateJobDescription
{
    public class CreateJobDescriptionHandler : CreateHandler<JobDescription, CreateJobDescriptionCommend>, IRequestHandler<CreateJobDescriptionCommend, Response<bool>>
    {
        public CreateJobDescriptionHandler(IBaseRepository<JobDescription> repositoryJobDescription)
            : base(repositoryJobDescription) { }

        protected override Expression<Func<JobDescription, bool>> ExistencePredicate(CreateJobDescriptionCommend request) => x => x.Name == request.Name;

        protected override JobDescription MapToEntity(CreateJobDescriptionCommend request)
        {
            return new JobDescription
            {
                Name = request.Name
            };
        }

        public async Task<Response<bool>> Handle(CreateJobDescriptionCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
