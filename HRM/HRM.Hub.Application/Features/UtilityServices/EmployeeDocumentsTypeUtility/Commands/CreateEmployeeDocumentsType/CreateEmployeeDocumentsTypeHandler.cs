using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Commands.CreateEmployeeDocumentsType
{
    public class CreateEmployeeDocumentsTypeHandler : CreateHandler<EmployeeDocumentsType, CreateEmployeeDocumentsTypeCommend>, IRequestHandler<CreateEmployeeDocumentsTypeCommend, Response<bool>>
    {
        public CreateEmployeeDocumentsTypeHandler(IBaseRepository<EmployeeDocumentsType> repositoryEmployeeDocumentsType)
            : base(repositoryEmployeeDocumentsType) { }

        protected override Expression<Func<EmployeeDocumentsType, bool>> ExistencePredicate(CreateEmployeeDocumentsTypeCommend request) => x => x.Name == request.Name;

        protected override EmployeeDocumentsType MapToEntity(CreateEmployeeDocumentsTypeCommend request)
        {
            return new EmployeeDocumentsType
            {
                Name = request.Name
            };
        }

        public async Task<Response<bool>> Handle(CreateEmployeeDocumentsTypeCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
