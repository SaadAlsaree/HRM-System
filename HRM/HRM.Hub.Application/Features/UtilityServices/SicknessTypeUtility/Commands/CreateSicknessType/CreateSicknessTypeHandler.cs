using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.SicknessTypeUtility.Commands.CreateSicknessType
{
    public class CreateSicknessTypeHandler : CreateHandler<SicknessType, CreateSicknessTypeCommend>, IRequestHandler<CreateSicknessTypeCommend, Response<bool>>
    {
        public CreateSicknessTypeHandler(IBaseRepository<SicknessType> repositorySicknessType)
            : base(repositorySicknessType) { }

        protected override Expression<Func<SicknessType, bool>> ExistencePredicate(CreateSicknessTypeCommend request) => x => x.Name == request.Name;

        protected override SicknessType MapToEntity(CreateSicknessTypeCommend request)
        {
            return new SicknessType
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateSicknessTypeCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
