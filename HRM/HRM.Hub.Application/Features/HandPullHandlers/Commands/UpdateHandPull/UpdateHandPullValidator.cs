namespace HRM.Hub.Application.Features.HandPullHandlers.Commands.UpdateHandPull;
public sealed class UpdateHandPullValidator : AbstractValidator<UpdateHandPullCommand>
{
    public UpdateHandPullValidator()
    {
        RuleFor(x => x.Id).NotEmpty();

        RuleFor(x => x.EmployeeId).NotEmpty();

        RuleFor(x => x.WithdrawHandPullOrderNo).NotEmpty().MaximumLength(15);

        RuleFor(x => x.WithdrawHandPullOrderDate).NotEmpty();

        RuleFor(x => x.RaiseHandPullOrderNo).NotEmpty().MaximumLength(15);

        RuleFor(x => x.RaiseHandPullOrderDate).NotEmpty();

        RuleFor(x => x.Note).NotEmpty().MaximumLength(1000);

    }
}