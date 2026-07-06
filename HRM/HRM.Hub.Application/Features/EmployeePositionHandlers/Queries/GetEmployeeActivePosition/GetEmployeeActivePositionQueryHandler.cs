using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Queries.GetEmployeeActivePosition;

public class GetEmployeeActivePositionQueryHandler : IRequestHandler<GetEmployeeActivePositionQuery, Response<GetEmployeeActivePositionViewModel>>
{
    private readonly IBaseRepository<EmployeePosition> _repositoryEmployeePosition;

    public GetEmployeeActivePositionQueryHandler(IBaseRepository<EmployeePosition> repositoryEmployeePosition)
    {
        _repositoryEmployeePosition = repositoryEmployeePosition ?? throw new ArgumentNullException(nameof(repositoryEmployeePosition));
    }

    public async Task<Response<GetEmployeeActivePositionViewModel>> Handle(GetEmployeeActivePositionQuery request, CancellationToken cancellationToken)
    {
        var position = await _repositoryEmployeePosition
            .Query(x => x.EmployeeId == request.EmployeeId && x.EmployeePositionType == EmployeePositionTypeEnum.New,
                include: x => x.Include(p => p.Directorate)
                               .Include(p => p.SubDirectorate)
                               .Include(p => p.Department)
                               .Include(p => p.Section)
                               .Include(p => p.Unit)
                               .Include(p => p.Position))
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        if (position == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<GetEmployeeActivePositionViewModel>(null);

        var viewModel = new GetEmployeeActivePositionViewModel
        {
            Id = position.Id,
            EmployeeId = position.EmployeeId,
            EmployeePositionType = position.EmployeePositionType,
            AssignedOrderDate = position.AssignedOrderDate,
            AssignedOrderNo = position.AssignedOrderNo,
            AssignedDate = position.AssignedDate,
            StartDate = position.StartDate,
            AdministrativeOrderDate = position.AdministrativeOrderDate,
            AdministrativeOrderNo = position.AdministrativeOrderNo,
            DirectorateId = position.DirectorateId,
            DirectorateName = position.Directorate?.Name,
            SubDirectorateId = position.SubDirectorateId,
            SubDirectorateName = position.SubDirectorate?.Name,
            DepartmentId = position.DepartmentId,
            DepartmentName = position.Department?.Name,
            SectionId = position.SectionId,
            SectionName = position.Section?.Name,
            UnitId = position.UnitId,
            UnitName = position.Unit?.Name,
            PositionId = position.PositionId,
            PositionName = position.Position?.Name,
            Note = position.Note,
        };

        return SuccessMessage.Get.ToSuccessMessage(viewModel);
    }
}
