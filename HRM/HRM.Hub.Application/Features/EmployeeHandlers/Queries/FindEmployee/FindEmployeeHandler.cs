namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.FindEmployee;
public class FindEmployeeHandler : IRequestHandler<FindEmployeeQuery, Response<IEnumerable<FindEmployeeViewModel>>>
{
    private readonly IBaseRepository<Employees> _repositoryEmployee;

    public FindEmployeeHandler(IBaseRepository<Employees> repositoryEmployee)
    {
        _repositoryEmployee = repositoryEmployee ?? throw new ArgumentNullException(nameof(repositoryEmployee));
    }

    public async Task<Response<IEnumerable<FindEmployeeViewModel>>> Handle(FindEmployeeQuery request, CancellationToken cancellationToken)
    {
        var search = request.Search?.Trim();

        if (string.IsNullOrWhiteSpace(search))
            return SuccessMessage.Get.ToSuccessMessage(Enumerable.Empty<FindEmployeeViewModel>());

        System.Linq.Expressions.Expression<Func<Employees, bool>> filter = request.SearchBy switch
        {
            SearchBy.FullName => x => x.FullName != null && x.FullName.Contains(search),
            SearchBy.JobCode => x => x.JobCode != null && x.JobCode.Contains(search),
            SearchBy.LotNumber => x => x.LotNumber != null && x.LotNumber.Contains(search),
            SearchBy.MotherFullName => x => x.MotherFullName != null && x.MotherFullName.Contains(search),
            _ => x =>
                (x.FullName != null && x.FullName.Contains(search)) ||
                (x.JobCode != null && x.JobCode.Contains(search)) ||
                (x.LotNumber != null && x.LotNumber.Contains(search)) ||
                (x.MotherFullName != null && x.MotherFullName.Contains(search))
        };

        var find = await _repositoryEmployee.GetAsync<FindEmployeeViewModel>(filter: filter, selector: x => new FindEmployeeViewModel()
                    {
                        MotherFullName = x.MotherFullName,
                        EmployeeId = x.Id,
                        FullName = x.FullName,
                        LotNumber = x.LotNumber,
                        JobCode = x.JobCode,
                        Id = x.Id,
                        JobTitleId = (x.ManagementInformation != null ? x.ManagementInformation.JobTitleId : default),
                        JobTitleName = (x.ManagementInformation != null && x.ManagementInformation.JobTitle != null ? x.ManagementInformation.JobTitle.Name : default),
                        CategoryDueDate = (x.Promotion != null ? x.Promotion.DueDateCategory : default),
                        DegreeDueDate = (x.Promotion != null ? x.Promotion.DueDateDegree : default),
                        JobCategoryId = (x.Promotion != null ? x.Promotion.JobCategoryId : default),
                        JobCategoryName = (x.Promotion != null && x.Promotion.JobCategory != null ? x.Promotion.JobCategory.Name : default),
                        JobDegreeId = (x.Promotion != null ? x.Promotion.JobDegreeId : default),
                        JobDegreeName = (x.Promotion != null && x.Promotion.JobDegree != null ? x.Promotion.JobDegree.Name : default),
                        JobDescriptionId = (x.ManagementInformation != null ? x.ManagementInformation.JobDescriptionId : default),
                        JobDescriptionName = (x.ManagementInformation != null && x.ManagementInformation.JobDescription != null ? x.ManagementInformation.JobDescription.Name : default),
                        DirectorateId = (x.ManagementInformation != null ? x.ManagementInformation.DirectorateId : default),
                        DirectorateName = (x.ManagementInformation != null && x.ManagementInformation.Directorate != null ? x.ManagementInformation.Directorate.Name : default),
                        Balance = (x.LeavesBalances != null ? x.LeavesBalances.Balance : default),
                        MedicalBalance = (x.LeavesMedicalBalances != null ? (decimal?)x.LeavesMedicalBalances.Balance : default),
                        SubDirectorateId = (x.ManagementInformation != null ? x.ManagementInformation.SubDirectorateId : default),
                        SubDirectorateName = (x.ManagementInformation != null && x.ManagementInformation.SubDirectorate != null ? x.ManagementInformation.SubDirectorate.Name : default),
                        DepartmentId = (x.ManagementInformation != null ? x.ManagementInformation.DepartmentId : default),
                        DepartmentName = (x.ManagementInformation != null && x.ManagementInformation.Department != null ? x.ManagementInformation.Department.Name : default),

                        PositionId = (x.ManagementInformation != null ? x.ManagementInformation.PositionId : default),
                        PositionName = (x.ManagementInformation != null && x.ManagementInformation.Position != null ? x.ManagementInformation.Position.Name : default),

                    }, orderBy: order => order.OrderBy(z => z.FullName), take: 5, cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(find.Item1);
    }
}
