using System.ComponentModel.DataAnnotations.Schema;
using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.AttributesUtility.Commands.CreateAttributes;

public class CreateAttributesCommend : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }

    public string AttributeKey { get; set; }

    public string AttributeValue { get; set; }
}
