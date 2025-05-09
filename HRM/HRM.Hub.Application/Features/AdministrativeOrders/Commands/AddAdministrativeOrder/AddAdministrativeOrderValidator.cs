
namespace HRM.Hub.Application.Features.AdministrativeOrders.Commands.AddAdministrativeOrder
{
    public class AddAdministrativeOrderValidator : AbstractValidator<AddAdministrativeOrderCommand>
    {
        public AddAdministrativeOrderValidator()
        {
            // RuleFor(x => x.OrderNo)
            // .NotEmpty().NotNull()
            // .MaximumLength(255);
            // RuleFor(x => x.OrderDate).NotEmpty().NotNull();
            // RuleFor(x => x.EmployeeId).NotEqual(default(Guid));
            //
            // RuleFor(x => x.BookTitle).NotNull().NotEmpty().NotEqual(BookTitles.None);
        }
    }
}
