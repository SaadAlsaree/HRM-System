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
        var find = await _repositoryEmployee.GetAsync<FindEmployeeViewModel>(filter: x =>
                    (request.SearchBy != SearchBy.FullName || x.FullName.Contains(request.Search.Trim())) &&
                    (request.SearchBy != SearchBy.JobCode || x.JobCode.Contains(request.Search.Trim())) &&
                    (request.SearchBy != SearchBy.LotNumber || x.LotNumber.Contains(request.Search.Trim())) &&
                    (request.SearchBy != SearchBy.MotherFullName || x.MotherFullName.Contains(request.Search.Trim())), selector: x => new FindEmployeeViewModel()
                    {
                        MotherFullName = x.MotherFullName,
                        EmployeeId = x.Id,
                        FullName = x.FullName,
                        LotNumber = x.LotNumber,
                        JobCode = x.JobCode,
                        Id = x.Id,
                        JobTitleId = (x.ManagementInformation != null ? x.ManagementInformation.JobTitleId : default),
                        JobTitleName = (x.ManagementInformation.JobTitle != null ? x.ManagementInformation.JobTitle.Name : default),
                        CategoryDueDate = (x.Promotion != null ? x.Promotion.DueDateCategory : default),
                        DegreeDueDate = (x.Promotion != null ? x.Promotion.DueDateDegree : default),
                        JobCategoryId = (x.ManagementInformation != null ? x.Promotion.JobCategoryId : default),
                        JobCategoryName = (x.Promotion.JobCategory != null ? x.Promotion.JobCategory.Name : default),
                        JobDegreeId = (x.Promotion != null ? x.Promotion.JobDegreeId : default),
                        JobDegreeName = (x.Promotion.JobDegree != null ? x.Promotion.JobDegree.Name : default),
                        JobDescriptionId = (x.ManagementInformation != null ? x.ManagementInformation.JobDescriptionId : default),
                        JobDescriptionName = (x.ManagementInformation.JobDescription != null ? x.ManagementInformation.JobDescription.Name : default),
                        DirectorateId = (x.ManagementInformation != null ? x.ManagementInformation.DirectorateId : default),
                        DirectorateName = (x.ManagementInformation.Directorate != null ? x.ManagementInformation.Directorate.Name : default),
                        Balance = (x.LeavesBalances != null ? x.LeavesBalances.Balance : default),
                        MedicalBalance = (x.LeavesMedicalBalances != null ? (decimal?)x.LeavesMedicalBalances.Balance : default),
                        SubDirectorateId = (x.ManagementInformation != null ? x.ManagementInformation.SubDirectorateId : default),
                        SubDirectorateName = (x.ManagementInformation.SubDirectorate != null ? x.ManagementInformation.SubDirectorate.Name : default),
                        DepartmentId = (x.ManagementInformation != null ? x.ManagementInformation.DepartmentId : default),
                        DepartmentName = (x.ManagementInformation.Department != null ? x.ManagementInformation.Department.Name : default),

                        PositionId = (x.ManagementInformation != null ? x.ManagementInformation.PositionId : default),
                        PositionName = (x.ManagementInformation.Position != null ? x.ManagementInformation.Position.Name : default),

                    }, orderBy: order => order.OrderBy(z => z.FullName), take: 5, cancellationToken: cancellationToken);

        if (!find.Item1.Any())
            return ErrorsMessage.NotFoundData.ToErrorMessage(find.Item1);
        return SuccessMessage.Get.ToSuccessMessage(find.Item1);
    }
}