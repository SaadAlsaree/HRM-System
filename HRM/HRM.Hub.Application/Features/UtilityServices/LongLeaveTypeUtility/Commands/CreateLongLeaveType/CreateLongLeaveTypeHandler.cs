namespace HRM.Hub.Application.Features.UtilityServices.LongLeaveTypeUtility.Commands.CreateLongLeaveType;
public class CreateLongLeaveTypeHandler : CreateHandler<LongLeaveType, CreateLongLeaveTypeCommend>, IRequestHandler<CreateLongLeaveTypeCommend, Response<bool>>
{
    public CreateLongLeaveTypeHandler(IBaseRepository<LongLeaveType> repositoryNormalLeaveType)
        : base(repositoryNormalLeaveType) { }

    protected override Expression<Func<LongLeaveType, bool>> ExistencePredicate(CreateLongLeaveTypeCommend request) => x => x.Name == request.Name;

    protected override LongLeaveType MapToEntity(CreateLongLeaveTypeCommend request)
    {
        return new LongLeaveType
        {
            Name = request.Name,

        };
    }

    public async Task<Response<bool>> Handle(CreateLongLeaveTypeCommend request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}