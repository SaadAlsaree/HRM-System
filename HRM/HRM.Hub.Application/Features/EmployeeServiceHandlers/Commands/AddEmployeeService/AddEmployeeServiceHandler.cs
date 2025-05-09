
namespace HRM.Hub.Application.Features.EmployeeServiceHandlers.Commands.AddEmployeeService;
public class AddEmployeeServiceHandler : CreateHandler<EmployeeService, AddEmployeeServiceCommand>, IRequestHandler<AddEmployeeServiceCommand, Response<bool>>
{
    public AddEmployeeServiceHandler(IBaseRepository<EmployeeService> repositoryApplicableLaws)
        : base(repositoryApplicableLaws) { }
    protected override Expression<Func<EmployeeService, bool>> ExistencePredicate(AddEmployeeServiceCommand request) => z => z.Id == request.EmployeeId;

    protected override EmployeeService MapToEntity(AddEmployeeServiceCommand request)
    {
        return new EmployeeService
        {
            Id = Guid.NewGuid(),
            RetirementCalculation = request.RetirementCalculation,
            PromotionCalculation = request.PromotionCalculation,
            Notes = request.Notes

        };
    }

    public async Task<Response<bool>> Handle(AddEmployeeServiceCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}

    