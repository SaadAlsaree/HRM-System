using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Commands.CreateTypeOfJob
{
    public class CreateTypeOfJobHandler : CreateHandler<TypeOfJob, CreateTypeOfJobCommend>, IRequestHandler<CreateTypeOfJobCommend, Response<bool>>
    {
        public CreateTypeOfJobHandler(IBaseRepository<TypeOfJob> repositoryTypeOfJob)
            : base(repositoryTypeOfJob) { }

        protected override Expression<Func<TypeOfJob, bool>> ExistencePredicate(CreateTypeOfJobCommend request) => x => x.Name == request.Name;

        protected override TypeOfJob MapToEntity(CreateTypeOfJobCommend request)
        {
            return new TypeOfJob
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateTypeOfJobCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
