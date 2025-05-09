namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetLotEmployee;
public class GetLotEmployeeHandler : GetAllWithCountHandler<Attachments, GetLotEmployeeView, GetLotEmployeeQuery>, IRequestHandler<GetLotEmployeeQuery, Response<PagedResult<GetLotEmployeeView>>>
{
    public GetLotEmployeeHandler(IBaseRepository<Attachments> repository) : base(repository)
    {
    }

    public override Expression<Func<Attachments, GetLotEmployeeView>> Selector => x=> new GetLotEmployeeView
    {
        AttachmentId = x.Id,
        ExtinctionFile = x.ExtinctionFile,
        Tags = JsonConvert.DeserializeObject(x.Tags),
        Notes = x.Notes,
        Status = x.StatusId,
        StatusName = x.StatusId.GetDisplayName(),
        CreateAt = x.CreateAt,
    };

    public override Func<IQueryable<Attachments>, IOrderedQueryable<Attachments>> OrderBy => order => order.OrderBy(z => z.CreateAt);

    public Task<Response<PagedResult<GetLotEmployeeView>>> Handle(GetLotEmployeeQuery request, CancellationToken cancellationToken)=>
        HandleBase(request, cancellationToken);
}