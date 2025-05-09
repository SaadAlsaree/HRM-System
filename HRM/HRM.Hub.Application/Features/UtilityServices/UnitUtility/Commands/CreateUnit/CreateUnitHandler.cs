using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.UnitUtility.Commands.CreateUnit
{
    public class CreateUnitHandler : CreateHandler<Units, CreateUnitCommend>, IRequestHandler<CreateUnitCommend, Response<bool>>
    {
        public CreateUnitHandler(IBaseRepository<Units> repositoryUnit)
            : base(repositoryUnit) { }

        protected override Expression<Func<Units, bool>> ExistencePredicate(CreateUnitCommend request) => x => x.Name == request.Name;

        protected override Units MapToEntity(CreateUnitCommend request)
        {
            return new Units
            {
                DirectorateId = request.DirectorateId,
                SubDirectorateId = request.SubDirectorateId,
                DepartmentId = request.DepartmentId,
                Name = request.Name,
                SectionId = request.SectionId,
                ShortKey = request.ShortKey,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateUnitCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
