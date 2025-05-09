namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Commands.CreateTypeOfDisciplinary
{
    public class CreateTypeOfDisciplinaryHandler : CreateHandler<TypeOfDisciplinary, CreateTypeOfDisciplinaryCommend>, IRequestHandler<CreateTypeOfDisciplinaryCommend, Response<bool>>
    {
        public CreateTypeOfDisciplinaryHandler(IBaseRepository<TypeOfDisciplinary> repositoryTypeOfBook)
            : base(repositoryTypeOfBook) { }

        protected override Expression<Func<TypeOfDisciplinary, bool>> ExistencePredicate(CreateTypeOfDisciplinaryCommend request) => x => x.Name == request.Name;

        protected override TypeOfDisciplinary MapToEntity(CreateTypeOfDisciplinaryCommend request)
        {
            return new TypeOfDisciplinary
            {
                Name = request.Name,
                CountOfDayDelay = request.CountOfDayDelay,
            };
        }

        public async Task<Response<bool>> Handle(CreateTypeOfDisciplinaryCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
