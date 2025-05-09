using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.RetirementHandler.Commands.UpdateRetirement
{
    public class UpdateRetirementHandler :
        UpdateHandler<Retirement, UpdateRetirementCommend>,
        IRequestHandler<UpdateRetirementCommend, Response<bool>>
    {
        public UpdateRetirementHandler(IBaseRepository<Retirement> repositoryRetirement)
            : base(repositoryRetirement)
        {
        }

        public override Expression<Func<Retirement, bool>>
            EntityPredicate(UpdateRetirementCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateRetirementCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}