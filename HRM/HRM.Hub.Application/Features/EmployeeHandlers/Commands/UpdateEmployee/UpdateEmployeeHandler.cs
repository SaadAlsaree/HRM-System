namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.UpdateEmployee;

public class UpdateEmployeeHandler :
        UpdateHandler<Employees, UpdateEmployeeCommand>,
        IRequestHandler<UpdateEmployeeCommand, Response<bool>>
{
    public UpdateEmployeeHandler(IBaseRepository<Employees> repositoryEmployees)
        : base(repositoryEmployees)
    {
    }

    public override Expression<Func<Employees, bool>>
        EntityPredicate(UpdateEmployeeCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateEmployeeCommand request,
        CancellationToken cancellationToken)
    {
        request.FullName = $"{request.FirstName} {request.SecondName} {request.ThirdName} {request.FourthName} {request.SurName}";
        request.MotherFirstName = $"{request.MotherFirstName} {request.MotherSecondName} {request.MotherThirdName} {request.MotherSurName}";
        return await HandleBase(request, cancellationToken);
    }
}