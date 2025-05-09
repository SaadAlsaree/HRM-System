namespace HRM.Hub.Application.Features.ChangeJobTitles.Commands.UpdateChangeJobTitles
{
    public class UpdateChangeJobTitlesHandler : UpdateHandler<ChangeJobTitle, UpdateChangeJobTitlesCommand>,
    IRequestHandler<UpdateChangeJobTitlesCommand, Response<bool>>
    {
        public UpdateChangeJobTitlesHandler(IBaseRepository<ChangeJobTitle> repository) : base(repository)
        {
        }

        public override Expression<Func<ChangeJobTitle, bool>> EntityPredicate(UpdateChangeJobTitlesCommand request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateChangeJobTitlesCommand request, CancellationToken cancellationToken) =>
            await HandleBase(request, cancellationToken);
    }
}
