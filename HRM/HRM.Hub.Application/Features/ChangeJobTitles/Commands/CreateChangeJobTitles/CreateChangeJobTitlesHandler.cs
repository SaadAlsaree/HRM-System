


namespace HRM.Hub.Application.Features.ChangeJobTitles.Commands.CreateChangeJobTitles;
public class CreateChangeJobTitlesHandler : CreateHandler<ChangeJobTitle, CreateChangeJobTitlesCommand>,
    IRequestHandler<CreateChangeJobTitlesCommand, Response<bool>>
{
    public CreateChangeJobTitlesHandler(IBaseRepository<ChangeJobTitle> repository) : base(repository)
    {
    }

    public async Task<Response<bool>> Handle(CreateChangeJobTitlesCommand request, CancellationToken cancellationToken) =>
        await base.HandleBase(request, cancellationToken);

    protected override Expression<Func<ChangeJobTitle, bool>> ExistencePredicate(CreateChangeJobTitlesCommand request) => null;

    protected override ChangeJobTitle MapToEntity(CreateChangeJobTitlesCommand request)
    {
        return new ChangeJobTitle()
        {
            EmployeeId = request.EmployeeId,
            NewJobDescriptionId = request.NewJobDescriptionId,
            NewJobTitleId = request.NewJobTitleId,
            OldJobDescriptionId = request.OldJobDescriptionId,
            OldJobTitleId = request.OldJobTitleId,
            OrderDate = request.OrderDate,
            OrderNo = request.OrderNo,
            Note = request.Note,
            CreateBy = request.CreateBy,
        };
    }
}
