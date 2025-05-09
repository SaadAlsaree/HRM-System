using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Commands.UpdateTypeOfBook;

public class UpdateTypeOfBookCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
