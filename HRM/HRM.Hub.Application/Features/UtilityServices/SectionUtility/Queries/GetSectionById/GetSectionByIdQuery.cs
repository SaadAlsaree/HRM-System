namespace HRM.Hub.Application.Features.UtilityServices.SectionUtility.Queries.GetSectionById;

public class GetSectionByIdQuery : IRequest<Response<GetSectionByIdViewModel>>
{
    public int Id { get; set; }
}