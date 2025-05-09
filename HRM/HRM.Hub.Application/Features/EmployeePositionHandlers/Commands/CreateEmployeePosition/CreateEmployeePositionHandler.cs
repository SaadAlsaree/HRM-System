namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Commands.CreateEmployeePosition
{
    public class CreateEmployeePositionHandler : CreateHandler<EmployeePosition, CreateEmployeePositionCommend>,
        IRequestHandler<CreateEmployeePositionCommend, Response<bool>>
    {
        private readonly IBaseRepository<EmployeePosition> _repositoryEmployeePosition;

        public CreateEmployeePositionHandler(IBaseRepository<EmployeePosition> repositoryEmployeePosition)
            : base(repositoryEmployeePosition)
        {
            _repositoryEmployeePosition = repositoryEmployeePosition;
        }

        protected override Expression<Func<EmployeePosition, bool>> ExistencePredicate(
            CreateEmployeePositionCommend request)
            => x => x.EmployeeId == request.EmployeeId && x.AssignedOrderNo == request.AssignedOrderNo;

        private async Task ChangeStatusToOld(CreateEmployeePositionCommend request, CancellationToken cancellationToken)
        {
           if (request.CurrentPosition.Count != 0)
            {
                var getCurrentPosition = await _repositoryEmployeePosition
                    .Query(x => x.EmployeeId == request.EmployeeId && x.EmployeePositionType == EmployeePositionTypeEnum.New
                    && request.CurrentPosition.Select(z=>z.Id).ToArray().Contains(x.Id))
                    .ToListAsync(cancellationToken: cancellationToken);
                foreach (var item in getCurrentPosition)
                {
                    item.EmployeePositionType = EmployeePositionTypeEnum.Old;
                    item.EndAssignedOrderDate = item.EndAssignedOrderDate;
                    item.EndAssignedOrderNo = item.EndAssignedOrderNo;
                    _repositoryEmployeePosition.Update(item);
                }
            }

        }

        protected override EmployeePosition MapToEntity(CreateEmployeePositionCommend request)
        {
            return new EmployeePosition
            {
                EmployeeId = request.EmployeeId,
                EmployeePositionType = request.EmployeePositionType,
                AssignedOrderDate = request.AssignedOrderDate,
                AssignedOrderNo = request.AssignedOrderNo,
                AdministrativeOrderDate = request.AdministrativeOrderDate,
                AdministrativeOrderNo = request.AdministrativeOrderNo,
                DirectorateId = request.DirectorateId,
                SubDirectorateId = request.SubDirectorateId,
                DepartmentId = request.DepartmentId,
                AssignedDate = request.AssignedDate,
                SectionId = request.SectionId,
                UnitId = request.UnitId,
                PositionId = request.PositionId,
                Note = request.Note,
                Status = request.EmployeePositionType == EmployeePositionTypeEnum.New ? Status.Active : Status.InActive,
            };
        }

        public async Task<Response<bool>> Handle(CreateEmployeePositionCommend request,
            CancellationToken cancellationToken)
        {
            await ChangeStatusToOld(request, cancellationToken);
            return await HandleBase(request, cancellationToken);
        }
    }
}