namespace HRM.Hub.Application.Features.Services.Commands.DeleteRecord;
public class DeleteRecordCommand<TId> : IRequest<Response<bool>>
{
    public TId Id { get; set; }
    public TableNames TableName { get; set; }
}