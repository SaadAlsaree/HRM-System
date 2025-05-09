using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.EmployeeServiceHandlers.Commands.UpdateEmployeeService;
public class UpdateEmployeeServiceHandler :
        UpdateHandler<EmployeeService, UpdateEmployeeServiceCommand>,
        IRequestHandler<UpdateEmployeeServiceCommand, Response<bool>>
    {
        public UpdateEmployeeServiceHandler(IBaseRepository<EmployeeService> repositoryEmployeeService)
            : base(repositoryEmployeeService)
        {
        }

        public override Expression<Func<EmployeeService, bool>>
            EntityPredicate(UpdateEmployeeServiceCommand request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateEmployeeServiceCommand request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
