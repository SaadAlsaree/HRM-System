namespace HRM.Hub.Application.Features.Attachment.Commands.CreateAttachment;
public class CreateAttachmentValidator : AbstractValidator<CreateAttachmentCommend>
{
    public CreateAttachmentValidator()
    {
        RuleFor(p => p.TableName).NotEmpty().NotNull().WithMessage("يجب ان لا يكون الحقل فارغ");
        RuleFor(p => p.File).NotEmpty().NotNull().WithMessage("يجب ان لا يكون الحقل فارغ");
    }
}