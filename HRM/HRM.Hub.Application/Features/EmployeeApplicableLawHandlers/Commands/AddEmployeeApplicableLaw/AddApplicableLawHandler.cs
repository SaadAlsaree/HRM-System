using HRM.Hub.Application.Features.EmployeeServiceHandlers.Commands.AddEmployeeService;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Commands.AddEmployeeApplicableLaw;
public class AddApplicableLawHandler : CreateHandler<EmployeeApplicableLaws, AddApplicableLawCommand>, IRequestHandler<AddApplicableLawCommand, Response<bool>>
{
    public AddApplicableLawHandler(IBaseRepository<EmployeeApplicableLaws> repositoryApplicableLaws)
        : base(repositoryApplicableLaws) { }
    protected override Expression<Func<EmployeeApplicableLaws, bool>> ExistencePredicate(AddApplicableLawCommand request) => z => z.EmployeeId == request.EmployeeId;

    protected override EmployeeApplicableLaws MapToEntity(AddApplicableLawCommand request)
    {
        return new EmployeeApplicableLaws
        {

            Id = Guid.NewGuid(),
            LawId = request.LawId,
            EmployeeId = request.EmployeeId,
            Note = request.Note,
        };
    }

    public async Task<Response<bool>> Handle(AddApplicableLawCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }


}
