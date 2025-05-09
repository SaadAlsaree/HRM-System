namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.UpdateSocialStatus
{
    public class UpdateSocialStatusHandler : IRequestHandler<UpdateSocialStatusCommand, Response<bool>>
    {

        private readonly IBaseRepository<Employees> _repositoryEmployees;
        public UpdateSocialStatusHandler(IBaseRepository<Employees> repositoryEmployees)
        {
            _repositoryEmployees = repositoryEmployees;
        }

        public async Task<Response<bool>> Handle(UpdateSocialStatusCommand request, CancellationToken cancellationToken)
        {
            var employee = await _repositoryEmployees.Find(x => x.Id == request.EmployeeId);
            if (employee == null)
                return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

            // Explicitly cast the int to SocialStatusEnum?
            employee.SocialStatus = (SocialStatusEnum?)request.SocialStatus;

            _repositoryEmployees.Update(employee);
            return SuccessMessage.Update.ToSuccessMessage(true);
        }
    }

}
