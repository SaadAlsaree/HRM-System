using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfSeniorityUtility.Commands.UpdateTypeOfSeniority
{
    public class UpdateTypeOfSeniorityHandler :
        UpdateHandler<TypeOfSeniority, UpdateTypeOfSeniorityCommend>,
        IRequestHandler<UpdateTypeOfSeniorityCommend, Response<bool>>
    {
        public UpdateTypeOfSeniorityHandler(IBaseRepository<TypeOfSeniority> repositoryTypeOfSeniority)
            : base(repositoryTypeOfSeniority)
        {
        }

        public override Expression<Func<TypeOfSeniority, bool>>
            EntityPredicate(UpdateTypeOfSeniorityCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateTypeOfSeniorityCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}