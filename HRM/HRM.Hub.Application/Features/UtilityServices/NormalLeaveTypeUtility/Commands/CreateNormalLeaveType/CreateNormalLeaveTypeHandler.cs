using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.NormalLeaveTypeUtility.Commands.CreateNormalLeaveType
{
    public class CreateNormalLeaveTypeHandler : CreateHandler<NormalLeaveType, CreateNormalLeaveTypeCommend>, IRequestHandler<CreateNormalLeaveTypeCommend, Response<bool>>
    {
        public CreateNormalLeaveTypeHandler(IBaseRepository<NormalLeaveType> repositoryNormalLeaveType)
            : base(repositoryNormalLeaveType) { }

        protected override Expression<Func<NormalLeaveType, bool>> ExistencePredicate(CreateNormalLeaveTypeCommend request) => x => x.Name == request.Name;

        protected override NormalLeaveType MapToEntity(CreateNormalLeaveTypeCommend request)
        {
            return new NormalLeaveType
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateNormalLeaveTypeCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
