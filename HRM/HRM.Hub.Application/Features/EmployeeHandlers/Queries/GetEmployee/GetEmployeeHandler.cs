namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetEmployee;
//public class GetEmployeeHandler : IRequestHandler<GetEmployeeQuery, Response<IEnumerable<GetEmployeeViewModel>>>
//{
//    private readonly IBaseRepository<Employees> _repositoryEmployee;
//    private readonly IStorageService _storageService;
//    public GetEmployeeHandler(IBaseRepository<Employees> repositoryEmployee, IStorageService storageService)
//    {
//        _repositoryEmployee = repositoryEmployee ?? throw new ArgumentNullException(nameof(repositoryEmployee));
//        _storageService = storageService ?? throw new ArgumentNullException(nameof(storageService));
//    }
//    public async Task<Response<IEnumerable<GetEmployeeViewModel>>> Handle(GetEmployeeQuery request, CancellationToken cancellationToken)
//    {
//        var query = _repositoryEmployee.GetQueryable();

//        if (!string.IsNullOrEmpty(request.ColumnName) && !string.IsNullOrEmpty(request.Search))
//        {
//            var validProperties = typeof(Employees).GetProperties().Select(p => p.Name).ToList();
//            if (validProperties.Contains(request.ColumnName))
//            {
//                query = query.Where(Utilities.BuildFilterExpression<Employees>(request.ColumnName, request.Search));
//            }
//        }

//        query = query.Where(z => (request.StatusWorkingId == 0 || z.StatusWorkingId == request.StatusWorkingId) && (z.JobInformation.IsStillWorking == 0 || z.JobInformation.IsStillWorking == request.IsStillWorking));

//        var result = await query.Include(z => z.Attachments).Include(z => z.ManagementInformation).ThenInclude(z => z.JobTitle).Select(z => new GetEmployeeViewModel()
//        {
//            FullName = z.FullName,
//            JobCode = z.JobCode,
//            JobTitle = z.ManagementInformation.JobTitle.Name,
//            LotNumber = z.LotNumber,
//            StatisticalIndex = z.StatisticalIndex,
//            PathOfProfile = $"/Employee/Proifile?employeeId={z.Id}",
//            AttachmentSetting = z.Attachments.Any(x => x.PrimaryTableId == z.Id && x.TableName == TableNames.Avatar.ToString() && x.Status == (int)Status.Active) ? z.Attachments.FirstOrDefault(x => x.PrimaryTableId == z.Id && x.TableName == TableNames.Employee.ToString() && x.Status == (int)Status.Active).Secret : "{\"Key\"=\"\",\"IV\"=\"\"}",
//            ExtinctionFile = z.Attachments.Any(x => x.PrimaryTableId == z.Id && x.TableName == TableNames.Avatar.ToString() && x.Status == (int)Status.Active) ? z.Attachments.FirstOrDefault(x => x.PrimaryTableId == z.Id && x.TableName == TableNames.Employee.ToString() && x.Status == (int)Status.Active).ExtinctionFile : "jpg",
//            Avatar = z.Attachments.Any(x => x.PrimaryTableId == z.Id && x.TableName == TableNames.Avatar.ToString() && x.Status == (int)Status.Active) ? z.Attachments.FirstOrDefault(x => x.PrimaryTableId == z.Id && x.TableName == TableNames.Employee.ToString() && x.Status == (int)Status.Active).Id.ToString() : "127B308E-74B4-4F5A-A3D4-3171F6AB03D2",
//        }).Skip(request.Skip).Take(request.Take).ToListAsync(cancellationToken: cancellationToken);

//        foreach (var item in result)
//        {
//            var setting = JsonConvert.DeserializeObject<AttachmentSetting>(item.AttachmentSetting);
//            item.Avatar = Utilities.ConvertImageToBase64(_storageService.DownloadFile(item.Avatar, $"{BucketName.Root}/{BucketName.Avatar}.{BucketName.ZMH}", setting.Key, setting.IV));
//            item.AttachmentSetting = string.Empty;
//        }

//        return SuccessMessage.Get.ToSuccessMessage(result.AsEnumerable());
//    }
//}
public class GetEmployeeHandler : IRequestHandler<GetEmployeeQuery, Response<PagedResult<GetEmployeeViewModel>>>
{
    private readonly IBaseRepository<Employees> _repositoryEmployee;
    private readonly IStorageService _storageService;
    private readonly IBaseRepository<Attachments> _repositoryAttachment;
    public GetEmployeeHandler(IBaseRepository<Employees> repositoryEmployee, IStorageService storageService, IBaseRepository<Attachments> repositoryAttachment)
    {
        _repositoryEmployee = repositoryEmployee;
        _storageService = storageService;
        _repositoryAttachment = repositoryAttachment;
    }

    public async Task<Response<PagedResult<GetEmployeeViewModel>>> Handle(GetEmployeeQuery request, CancellationToken cancellationToken)
    {
        var query = _repositoryEmployee.GetQueryable();

        query = query.Where(z => (request.EmployeeId == default || z.Id == request.EmployeeId) && (request.TypeOfJobId == 0 || z.JobInformation.TypeOfJobId == request.TypeOfJobId)
                                   && (request.Status == Status.None || z.StatusId == request.Status));

        var result = await query.Include(z => z.ManagementInformation).ThenInclude(z => z.JobTitle).Select(z => new GetEmployeeViewModel()
        {
            Id = z.Id,
            FullName = z.FullName,
            JobCode = z.JobCode,
            JobTitle = z.ManagementInformation.JobTitle.Name,
            LotNumber = z.LotNumber,
            StatisticalIndex = z.StatisticalIndex,
            PathOfProfile = $"/Employee/Proifile?employeeId={z.Id}",
            Status = z.StatusId,
            Nationalism = z.Nationalism,
            Religion = z.Religion,
            CountryId = z.CountryId,
            CountryName = z.Country.Name,
            EmployeeId = z.Id,
            IsPinned = z.IsPinned

        }).Skip((request.Page - 1) * 10).Take(request.PageSize).ToListAsync(cancellationToken: cancellationToken);
        var getAttachment = await _repositoryAttachment.GetQueryable().Where(x => x.TableName == TableNames.Avatar.ToString() && x.IsDeleted == false
                                         && result.Select(z => z.Id).ToList().Contains(x.PrimaryTableId.Value)).ToListAsync(cancellationToken: cancellationToken);
        foreach (var employee in result)
        {
            if (getAttachment.Any(z => z.PrimaryTableId == employee.Id))
            {
                var attachment = getAttachment.FirstOrDefault(z => z.PrimaryTableId == employee.Id);
                var setting = JsonConvert.DeserializeObject<AttachmentSetting>(attachment.Secret);
                employee.Avatar = Utilities.ConvertImageToBase64(_storageService.DownloadFile($"{attachment.Id}{attachment.ExtinctionFile}", employee.EmployeeId.ToString(), setting.Key, setting.IV));
            }
            else
            {
                var getAttachmentDefult = await _repositoryAttachment.GetQueryable().Where(x => x.TableName == TableNames.Avatar.ToString() && x.IsDeleted == false
                                         && x.PrimaryTableId == Guid.Parse("550e8400-e29b-41d4-a716-446655440000")).ToListAsync(cancellationToken: cancellationToken);
                var attachment = getAttachmentDefult.FirstOrDefault(z => z.PrimaryTableId == Guid.Parse("550e8400-e29b-41d4-a716-446655440000"));

                if (attachment != null)
                {
                    var setting = JsonConvert.DeserializeObject<AttachmentSetting>(attachment.Secret);
                    employee.Avatar = Utilities.ConvertImageToBase64(_storageService.DownloadFile($"{attachment.Id}{attachment.ExtinctionFile}", employee.EmployeeId.ToString(), setting.Key, setting.IV));
                }
                else
                {
                    // Handle the case where attachment is null
                }
            }
        }

        return SuccessMessage.Get.ToSuccessMessage(new PagedResult<GetEmployeeViewModel>()
        {
            Items = result,
            TotalCount = query.Count()
        });
    }
}