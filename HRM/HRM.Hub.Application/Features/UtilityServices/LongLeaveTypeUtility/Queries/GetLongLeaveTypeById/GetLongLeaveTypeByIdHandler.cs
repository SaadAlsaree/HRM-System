namespace HRM.Hub.Application.Features.UtilityServices.LongLeaveTypeUtility.Queries.GetLongLeaveTypeById;
public class GetLongLeaveTypeByIdHandler : GetByIdHandler<LongLeaveType, GetLongLeaveTypeByIdViewModel, GetLongLeaveTypeByIdQuery>, IRequestHandler<GetLongLeaveTypeByIdQuery, Response<GetLongLeaveTypeByIdViewModel>>
{
    public GetLongLeaveTypeByIdHandler(IBaseRepository<LongLeaveType> repositoryLongLeaveType)
        : base(repositoryLongLeaveType) { }

    public override Expression<Func<LongLeaveType, bool>> IdPredicate(GetLongLeaveTypeByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<LongLeaveType, GetLongLeaveTypeByIdViewModel>> Selector => a => new GetLongLeaveTypeByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name
    };
    public async Task<Response<GetLongLeaveTypeByIdViewModel>> Handle(GetLongLeaveTypeByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
