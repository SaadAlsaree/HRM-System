namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Commands.UpdateTypeOfDisciplinary
{
    public class UpdateTypeOfDisciplinaryHandler :
        UpdateHandler<TypeOfDisciplinary, UpdateTypeOfDisciplinaryCommend>,
        IRequestHandler<UpdateTypeOfDisciplinaryCommend, Response<bool>>
    {
        public UpdateTypeOfDisciplinaryHandler(IBaseRepository<TypeOfDisciplinary> repositoryTypeOfBook)
            : base(repositoryTypeOfBook)
        {
        }

        public override Expression<Func<TypeOfDisciplinary, bool>>
            EntityPredicate(UpdateTypeOfDisciplinaryCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateTypeOfDisciplinaryCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}