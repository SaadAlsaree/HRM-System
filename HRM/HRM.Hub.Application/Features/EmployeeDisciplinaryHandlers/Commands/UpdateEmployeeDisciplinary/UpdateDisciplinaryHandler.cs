namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Commands.UpdateEmployeeDisciplinary;
public class UpdateDisciplinaryHandler :
        UpdateHandler<EmployeeDisciplinary, UpdateDisciplinaryCommand>,
        IRequestHandler<UpdateDisciplinaryCommand, Response<bool>>
    {
        public UpdateDisciplinaryHandler(IBaseRepository<EmployeeDisciplinary> repositoryDisciplinary)
            : base(repositoryDisciplinary)
        {
        }

        public override Expression<Func<EmployeeDisciplinary, bool>>
            EntityPredicate(UpdateDisciplinaryCommand request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateDisciplinaryCommand request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
