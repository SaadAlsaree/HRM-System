
namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.UpdatePinned
{
    public class UpdatePinnedHandler : IRequestHandler<UpdatePinnedCommand, Response<bool>>
    {
        private readonly IBaseRepository<Employees> _repositoryEmployees;
        public UpdatePinnedHandler(IBaseRepository<Employees> repositoryEmployees)
        {
            _repositoryEmployees = repositoryEmployees;
        }
        public async Task<Response<bool>> Handle(UpdatePinnedCommand request, CancellationToken cancellationToken)
        {
            var employee = await _repositoryEmployees.Find(x => x.Id == request.EmployeeId);
            if (employee == null)
                return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);
            employee.IsPinned = request.IsPinned;
            _repositoryEmployees.Update(employee);
            return SuccessMessage.Update.ToSuccessMessage(true);
        }
    }
}
