using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Commands.UpdateAcademicAchievement
{
    public class UpdateAcademicAchievementHandler :
        UpdateHandler<AcademicAchievement, UpdateAcademicAchievementCommend>,
        IRequestHandler<UpdateAcademicAchievementCommend, Response<bool>>
    {
        public UpdateAcademicAchievementHandler(IBaseRepository<AcademicAchievement> repositoryAcademicAchievement)
            : base(repositoryAcademicAchievement)
        {
        }

        public override Expression<Func<AcademicAchievement, bool>>
            EntityPredicate(UpdateAcademicAchievementCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateAcademicAchievementCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}