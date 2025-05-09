using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.StudyFileHandlers.Commands.UpdateStudyFile;

public class UpdateStudyFileCommand:IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid StudyFileId { get; set; }

    public string DocumentNo { get; set; }

    public DateOnly? DocumentDate { get; set; }

    public string Notes { get; set; }

}