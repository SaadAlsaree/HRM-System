namespace HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Queries.GetStudyExtensionOrderTypeById;

public class GetStudyExtensionOrderTypeByIdQuery : IRequest<Response<GetStudyExtensionOrderTypeByIdViewModel>>
{
    public int Id { get; set; }
}