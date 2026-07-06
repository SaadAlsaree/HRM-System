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
        request.MotherFullName = $"{request.MotherFirstName} {request.MotherSecondName} {request.MotherThirdName} {request.MotherSurName}";

        if (!string.IsNullOrWhiteSpace(request.JobCode))
        {
            var byJobCode = await _repository.Find(
                z => z.JobCode == request.JobCode && z.Id != request.Id, cancellationToken: cancellationToken);
            if (byJobCode != null)
                return ErrorsMessage.JobCodeExist.ToErrorMessage(false);
        }

        if (!string.IsNullOrWhiteSpace(request.StatisticalIndex))
        {
            var byStatistical = await _repository.Find(
                z => z.StatisticalIndex == request.StatisticalIndex && z.Id != request.Id, cancellationToken: cancellationToken);
            if (byStatistical != null)
                return ErrorsMessage.StatisticalIndexExist.ToErrorMessage(false);
        }

        if (!string.IsNullOrWhiteSpace(request.LotNumber))
        {
            var byLot = await _repository.Find(
                z => z.LotNumber == request.LotNumber && z.Id != request.Id, cancellationToken: cancellationToken);
            if (byLot != null)
                return ErrorsMessage.LotNumberExist.ToErrorMessage(false);
        }

        return await HandleBase(request, cancellationToken);
    }
}