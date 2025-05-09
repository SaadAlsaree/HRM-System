using HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Commands.AddEmployeeDisciplinary;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.ResignationHandlers.Commands.AddResignation;
public class AddResignationHandler : CreateHandler<Resignation, AddResignationCommand>, IRequestHandler<AddResignationCommand, Response<bool>>
{
    public AddResignationHandler(IBaseRepository<Resignation> repositoryResignation)
        : base(repositoryResignation) { }
    protected override Expression<Func<Resignation, bool>> ExistencePredicate(AddResignationCommand request) => z => false;
    protected override Resignation MapToEntity(AddResignationCommand request)
    {
        return new Resignation
        {

            Id = Guid.NewGuid(),
            EmployeeId = request.EmployeeId,
            Reason  = request.Reason,
            RequestDate  = request.RequestDate,
            RequestNo  = request.RequestNo,
            ResignationOrderNo  = request.ResignationOrderNo,
            ResignationOrderDate  = request.ResignationOrderDate,
            SeparationOrderNo  = request.SeparationOrderNo,
            SeparationOrderDate  = request.SeparationOrderDate,
            Note = request.Note,
        };
    }

    public async Task<Response<bool>> Handle(AddResignationCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }


}
