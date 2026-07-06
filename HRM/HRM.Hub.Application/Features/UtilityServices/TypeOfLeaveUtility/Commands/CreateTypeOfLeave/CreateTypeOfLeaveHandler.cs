using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Commands.CreateTypeOfLeave
{
    public class CreateTypeOfLeaveHandler : CreateHandler<TypeOfLeave, CreateTypeOfLeaveCommend>, IRequestHandler<CreateTypeOfLeaveCommend, Response<bool>>
    {
        public CreateTypeOfLeaveHandler(IBaseRepository<TypeOfLeave> repositoryTypeOfLeave)
            : base(repositoryTypeOfLeave) { }

        protected override Expression<Func<TypeOfLeave, bool>> ExistencePredicate(CreateTypeOfLeaveCommend request) => x => x.Name == request.Name;

        protected override TypeOfLeave MapToEntity(CreateTypeOfLeaveCommend request)
        {
            return new TypeOfLeave
            {
                Name = request.Name,
                Description = request.Description,
                MaxDurationDays = request.MaxDurationDays,
                RequiresAdministrativeOrder = request.RequiresAdministrativeOrder,
                RequiresApprovals = request.RequiresApprovals,
                AffectsService = request.AffectsService,
                AffectsPromotion = request.AffectsPromotion,
                AffectsBonus = request.AffectsBonus,
                AffectsSalary = request.AffectsSalary,
                AffectsRetirement = request.AffectsRetirement,
                AllowsExtension = request.AllowsExtension,
                AllowsTermination = request.AllowsTermination,
                AllowsCarryover = request.AllowsCarryover,
                CountsTowardsAnnualBalance = request.CountsTowardsAnnualBalance,
                IsBalanceBased = request.IsBalanceBased,
                MaxCarryoverDays = request.MaxCarryoverDays,
                DefaultSalaryStatusId = request.DefaultSalaryStatusId,
            };
        }

        public async Task<Response<bool>> Handle(CreateTypeOfLeaveCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
