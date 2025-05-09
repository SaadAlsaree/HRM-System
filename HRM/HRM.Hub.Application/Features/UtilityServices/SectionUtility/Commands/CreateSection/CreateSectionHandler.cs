using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.SectionUtility.Commands.CreateSection
{
    public class CreateSectionHandler  : CreateHandler<Sections, CreateSectionCommend>, IRequestHandler<CreateSectionCommend, Response<bool>>
    {
        public CreateSectionHandler(IBaseRepository<Sections> repositorySection)
            : base(repositorySection) { }

        protected override Expression<Func<Sections, bool>> ExistencePredicate(CreateSectionCommend request) => x => x.Name == request.Name;

        protected override Sections MapToEntity(CreateSectionCommend request)
        {
            return new Sections
            {
                DirectorateId = request.DirectorateId,
                SubDirectorateId = request.SubDirectorateId,
                DepartmentId = request.DepartmentId,
                Name = request.Name,
                ShortKey = request.ShortKey,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateSectionCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}

