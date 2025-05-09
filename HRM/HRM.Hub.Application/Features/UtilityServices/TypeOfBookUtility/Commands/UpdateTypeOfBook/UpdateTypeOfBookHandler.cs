using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Commands.UpdateTypeOfBook
{
    public class UpdateTypeOfBookHandler :
        UpdateHandler<TypeOfBook, UpdateTypeOfBookCommend>,
        IRequestHandler<UpdateTypeOfBookCommend, Response<bool>>
    {
        public UpdateTypeOfBookHandler(IBaseRepository<TypeOfBook> repositoryTypeOfBook)
            : base(repositoryTypeOfBook)
        {
        }

        public override Expression<Func<TypeOfBook, bool>>
            EntityPredicate(UpdateTypeOfBookCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateTypeOfBookCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}