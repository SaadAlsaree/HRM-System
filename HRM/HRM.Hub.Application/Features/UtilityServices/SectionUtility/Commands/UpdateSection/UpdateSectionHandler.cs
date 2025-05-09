using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.SectionUtility.Commands.UpdateSection
{
    public class UpdateSectionHandler :
        UpdateHandler<Sections, UpdateSectionCommend>,
        IRequestHandler<UpdateSectionCommend, Response<bool>>
    {
        public UpdateSectionHandler(IBaseRepository<Sections> repositorySection)
            : base(repositorySection)
        {
        }

        public override Expression<Func<Sections, bool>>
            EntityPredicate(UpdateSectionCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateSectionCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}