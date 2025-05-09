using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.MartyrsAndWoundedHandler.Commands.CreateMartyrsAndWounded
{
    public class CreateMartyrsAndWoundedHandler : CreateHandler<MartyrsAndWounded, CreateMartyrsAndWoundedCommend>, IRequestHandler<CreateMartyrsAndWoundedCommend, Response<bool>>
    {
        public CreateMartyrsAndWoundedHandler(IBaseRepository<MartyrsAndWounded> repositoryMartyrsAndWounded)
            : base(repositoryMartyrsAndWounded) { }

        protected override Expression<Func<MartyrsAndWounded, bool>> ExistencePredicate(CreateMartyrsAndWoundedCommend request) => x => x.AdministrativeOrderNo == request.AdministrativeOrderNo;

        protected override MartyrsAndWounded MapToEntity(CreateMartyrsAndWoundedCommend request)
        {
            return new MartyrsAndWounded
            {
                EmployeeId = request.EmployeeId,
                EndDateOfService = request.EndDateOfService,
                RetirementDate = request.RetirementDate,
                AdministrativeOrderNo = request.AdministrativeOrderNo,
                AdministrativeOrderDate = request.AdministrativeOrderDate,
                IsPoliticallyDismissed = request.IsPoliticallyDismissed,
                DateOfMartyrdom = request.DateOfMartyrdom,
                Note = request.Note,
                DateOfDeath = request.DateOfDeath,
                HealthStatus = request.HealthStatus,
            };
        }

        public async Task<Response<bool>> Handle(CreateMartyrsAndWoundedCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
