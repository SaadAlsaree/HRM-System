
namespace HRM.Hub.Application.Features.AffiliationHandlers.Commands.CreateAffiliation
{
    public class CreateAffiliationHandler : CreateHandler<Domain.Entities.Affiliation, CreateAffiliationCommand>, IRequestHandler<CreateAffiliationCommand, Response<bool>>
    {
        private readonly IBaseRepository<Domain.Entities.Affiliation> _repositoryAffiliation;

        public CreateAffiliationHandler(IBaseRepository<Domain.Entities.Affiliation> repositoryAffiliation)
            : base(repositoryAffiliation)
        {
            _repositoryAffiliation = repositoryAffiliation;
        }

        protected override Expression<Func<Domain.Entities.Affiliation, bool>> ExistencePredicate(CreateAffiliationCommand request) => x =>
            x.EmployeeId == request.EmployeeId &&
            x.FromDate == request.FromDate &&
            x.AssignmentSite == request.AssignmentSite;

        protected override Domain.Entities.Affiliation MapToEntity(CreateAffiliationCommand request)
        {
            return new Domain.Entities.Affiliation
            {
                EmployeeId = request.EmployeeId,
                TypeOfAssignmentId = request.TypeOfAssignmentId,
                OrderNo = request.OrderNo,
                OrderDate = request.OrderDate,
                IssuingAuthority = request.IssuingAuthority,
                Ministry = request.Ministry,
                AssignmentSite = request.AssignmentSite,
                OriginalEntity = request.OriginalEntity,
                ReasonForJoining = request.ReasonForJoining,
                DurationMonths = request.DurationMonths,
                FromDate = request.FromDate,
                ToDate = request.ToDate,
                MaxRenewals = request.MaxRenewals,
                ReleaseOrderDate = request.ReleaseOrderDate,
                ReleaseOrderNo = request.ReleaseOrderNo,
                ReleaseDate = request.ReleaseDate,
                EndOrderNo = request.EndOrderNo,
                EndOrderDate = request.EndOrderDate,
                Note = request.Note,
                CreateBy = request.CreateBy
            };
        }

        public async Task<Response<bool>> Handle(CreateAffiliationCommand request, CancellationToken cancellationToken)
        {
            var existingActive = await _repositoryAffiliation.Find(x =>
                x.EmployeeId == request.EmployeeId &&
                x.StatusId == Status.Active &&
                !x.IsDeleted,
                cancellationToken: cancellationToken);

            if (existingActive != null)
                return Response<bool>.Fail(new MessageResponse
                {
                    Code = "10013",
                    Message = "لا يمكن أن يكون للموظف أكثر من انتساب نشط (ASN-005)"
                });

            return await HandleBase(request, cancellationToken);
        }
    }
}
