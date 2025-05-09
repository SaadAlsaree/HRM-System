using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Commands.CreateAcademicAchievement
{
    public class CreateAcademicAchievementHandler : CreateHandler<AcademicAchievement, CreateAcademicAchievementCommend>, IRequestHandler<CreateAcademicAchievementCommend, Response<bool>>
    {
        public CreateAcademicAchievementHandler(IBaseRepository<AcademicAchievement> repositoryAcademicAchievement)
            : base(repositoryAcademicAchievement) { }

        protected override Expression<Func<AcademicAchievement, bool>> ExistencePredicate(CreateAcademicAchievementCommend request) => x => x.Name == request.Name;

        protected override AcademicAchievement MapToEntity(CreateAcademicAchievementCommend request)
        {
            return new AcademicAchievement
            {
                
                Name = request.Name,
                JobDegreeId = request.JobDegreeId,
            };
        }

        public async Task<Response<bool>> Handle(CreateAcademicAchievementCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }

}
