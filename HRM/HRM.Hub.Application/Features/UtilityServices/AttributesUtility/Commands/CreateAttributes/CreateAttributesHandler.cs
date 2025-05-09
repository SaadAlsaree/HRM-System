using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.AttributesUtility.Commands.CreateAttributes
{
    public class CreateAttributesHandler : CreateHandler<Attributes, CreateAttributesCommend>, IRequestHandler<CreateAttributesCommend, Response<bool>>
    {
        public CreateAttributesHandler(IBaseRepository<Attributes> repositoryAttributes)
            : base(repositoryAttributes) { }

        protected override Expression<Func<Attributes, bool>> ExistencePredicate(CreateAttributesCommend request) => x => x.AttributeKey == request.AttributeKey;

        protected override Attributes MapToEntity(CreateAttributesCommend request)
        {
            return new Attributes
            {
                EmployeeId = request.EmployeeId,
                AttributeKey = request.AttributeKey,
                AttributeValue = request.AttributeValue
            };
        }

        public async Task<Response<bool>> Handle(CreateAttributesCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
