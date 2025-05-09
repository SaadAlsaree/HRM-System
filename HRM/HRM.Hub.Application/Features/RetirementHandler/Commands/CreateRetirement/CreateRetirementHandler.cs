using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.RetirementHandler.Commands.CreateRetirement
{
    public class CreateRetirementHandler : CreateHandler<Retirement, CreateRetirementCommend>,
        IRequestHandler<CreateRetirementCommend, Response<bool>>
    {
        public CreateRetirementHandler(IBaseRepository<Retirement> repositoryRetirement)
            : base(repositoryRetirement)
        {
        }

        protected override Expression<Func<Retirement, bool>> ExistencePredicate(CreateRetirementCommend request) =>
            x => x.AdministrativeOrderNo == request.AdministrativeOrderNo;

        protected override Retirement MapToEntity(CreateRetirementCommend request)
        {
            return new Retirement
            {
                EmployeeId = request.EmployeeId,
                DirectorateId = request.DirectorateId,
                SubDirectorateId = request.SubDirectorateId,
                StartDate = request.StartDate,
                AcademicAchievementId = request.AcademicAchievementId,
                JobDegreeId = request.JobDegreeId,
                JobCategoryId = request.JobCategoryId,
                JobTitleId = request.JobTitleId,
                DecisionToFixAge = request.DecisionToFixAge,
                EmployeePositionId = request.EmployeePositionId,
                EndDateOfService = request.EndDateOfService,
                Birthdate = request.Birthdate,
                RetirementDate = request.RetirementDate,
                AdministrativeOrderNo = request.AdministrativeOrderNo,
                AdministrativeOrderDate = request.AdministrativeOrderDate,
                IsPoliticallyDismissed = request.IsPoliticallyDismissed,
                Note = request.Note,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateRetirementCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}