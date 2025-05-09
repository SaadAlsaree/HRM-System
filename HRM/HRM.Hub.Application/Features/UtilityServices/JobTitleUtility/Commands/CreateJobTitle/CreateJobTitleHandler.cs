using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Commands.CreateJobTitle
{
    public class CreateJobTitleHandler : CreateHandler<JobTitle, CreateJobTitleCommend>, IRequestHandler<CreateJobTitleCommend, Response<bool>>
    {
        public CreateJobTitleHandler(IBaseRepository<JobTitle> repositoryJobTitle)
            : base(repositoryJobTitle) { }

        protected override Expression<Func<JobTitle, bool>> ExistencePredicate(CreateJobTitleCommend request) => x => x.Name == request.Name;

        protected override JobTitle MapToEntity(CreateJobTitleCommend request)
        {
            return new JobTitle
            {
                DegreeId = request.DegreeId,
                Name = request.Name,
            };
        }

        public async Task<Response<bool>> Handle(CreateJobTitleCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
