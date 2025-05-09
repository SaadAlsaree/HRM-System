namespace HRM.Hub.Application.Features.JobInformationHandlers.Commands.CreateJobInformation;
internal sealed class CreateJobInformationCommandHandler : CreateHandler<JobInformation, CreateJobInformationCommand>, IRequestHandler<CreateJobInformationCommand, Response<bool>>
{
    public CreateJobInformationCommandHandler(IBaseRepository<JobInformation> jobInformationRepository)
        : base(jobInformationRepository)
    {
    }

    protected override Expression<Func<JobInformation, bool>> ExistencePredicate(CreateJobInformationCommand request) => x => false;

    protected override JobInformation MapToEntity(CreateJobInformationCommand request)
    {
        return new JobInformation
        {
            Id = Guid.NewGuid(),
            CreateAt = DateTime.Now,
            AssignedId = request.AssignedId,
            EndOfServiceDate = request.EndOfServiceDate,
            IsBehaviorCode = request.IsBehaviorCode,
            HireDate = request.HireDate,
            IsMovedFromOutside = request.IsMovedFromOutside,
            IsStillWorking = request.IsStillWorking,
            MedicalTest = request.MedicalTest,
            IsReEmployed = request.IsReEmployed,
            TypeOfJobId = request.TypeOfJobId,
            CreateBy = request.CreateBy,
            EmployeeId = request.EmployeeId,
        };
    }

    public async Task<Response<bool>> Handle(CreateJobInformationCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}