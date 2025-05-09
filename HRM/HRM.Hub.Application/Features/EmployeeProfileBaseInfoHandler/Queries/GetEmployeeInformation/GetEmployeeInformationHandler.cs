namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetEmployeeInformation;

public class
    GetEmployeeInformationHandler : IRequestHandler<GetEmployeeInformationQuery,
        Response<GetEmployeeInformationViewModel>>
{
    private readonly IBaseRepository<Employees> _repositoryEmployee;
    private readonly IBaseRepository<Attachments> _repositoryAttachments;
    private readonly IStorageService _storageService;
    public GetEmployeeInformationHandler(IBaseRepository<Employees> repositoryEmployee, IBaseRepository<Attachments> repositoryAttachments, IStorageService storageService)
    {
        _repositoryEmployee = repositoryEmployee ?? throw new ArgumentNullException(nameof(repositoryEmployee));
        _repositoryAttachments = repositoryAttachments ?? throw new ArgumentNullException(nameof(repositoryAttachments));
        _storageService = storageService ?? throw new ArgumentNullException(nameof(storageService));
    }

    public async Task<Response<GetEmployeeInformationViewModel>> Handle(GetEmployeeInformationQuery request,
        CancellationToken cancellationToken)
    {
        var result = await _repositoryEmployee.Query()
            .Include(x => x.Country)
            .Include(x => x.JobInformation).ThenInclude(j => j.TypeOfJob)
            .FirstOrDefaultAsync(x => x.Id == request.EmployeeId, cancellationToken: cancellationToken);



        if (result == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<GetEmployeeInformationViewModel>(null);

        var avatar = "";
        var attachment = await _repositoryAttachments.Query()
                .Where(x => x.PrimaryTableId == request.EmployeeId && x.IsDeleted == false).FirstOrDefaultAsync(cancellationToken: cancellationToken);
        if (attachment != null)
        {
            var setting = JsonConvert.DeserializeObject<AttachmentSetting>(attachment.Secret);
            var getfile = _storageService.DownloadFile($"{attachment.Id}{attachment.ExtinctionFile}", request.EmployeeId.ToString(), setting.Key, setting.IV);
            avatar = Utilities.ConvertImageToBase64(getfile);
        }
        var employeeInformation = new GetEmployeeInformationViewModel()
        {
            Id = result.Id,
            StatisticalIndex = result.LotNumber,
            JobCode = result.JobCode,
            LotNumber = result.LotNumber,
            FullName = result.FullName,
            MotherFullName = result.MotherFullName,
            Gender = result.Gender,
            BirthPlace = result.BirthPlace,
            BirthDate = result.BirthDate,
            SocialStatus = result.SocialStatus,
            Nationalism = result.Nationalism,
            Religion = result.Religion,
            StatusWorkingId = result.StatusWorkingId,
            CountryName = result.CountryId != null ? result.Country.Name : default,
            Notes = result.Notes,
            TypeOfJobName = result.JobInformation?.TypeOfJob.Name,
            MedicalTest = result.JobInformation?.MedicalTest,
            IsReEmployed = result.JobInformation?.IsReEmployed,
            IsBehaviorCode = result.JobInformation?.IsBehaviorCode,
            EndOfServiceDate = result.JobInformation?.EndOfServiceDate,
            Avatar = avatar,
            FileExtension = attachment?.ExtinctionFile,
            EmployeeId = result.Id,
            Status = result.StatusId,
            IsPinned = result.IsPinned
        };
        return SuccessMessage.Get.ToSuccessMessage(employeeInformation);
    }
}