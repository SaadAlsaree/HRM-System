namespace HRM.Hub.Application.Features.MarriageInformationHandlers.Commands.CreateMarriageInformation
{
    public class CreateMarriageInformationHandler : CreateHandler<MarriageInformation,
            CreateMarriageInformationCommend>,
        IRequestHandler<CreateMarriageInformationCommend,
            Response<bool>>
    {
        private readonly IBaseRepository<MarriageInformation> _repositoryMarriageInformation;

        public CreateMarriageInformationHandler(IBaseRepository<MarriageInformation> repositoryMarriageInformation)
            : base(repositoryMarriageInformation)
        {
            _repositoryMarriageInformation = repositoryMarriageInformation;
        }

        protected override Expression<Func<MarriageInformation, bool>> ExistencePredicate(
            CreateMarriageInformationCommend request)
            => x => false;

        private async Task ChangeStatusToOld(
            CreateMarriageInformationCommend request,
            CancellationToken cancellationToken)
        {
            // check if this new employee position 
            // get all old employee positions 
            var oldMarriageInformation = await _repositoryMarriageInformation
                .Query(x => x.EmployeeId == request.EmployeeId)
                .ToListAsync(cancellationToken: cancellationToken);

            if (oldMarriageInformation.Count > 0)
            {
                // change status and type of old employee position 
                foreach (var position in oldMarriageInformation)
                {
                    position.IsCurrent = false;
                }

                await _repositoryMarriageInformation.UpdateRange(oldMarriageInformation,
                    cancellationToken: cancellationToken);
            }
        }

        protected override MarriageInformation MapToEntity(
            CreateMarriageInformationCommend request)
        {
            return new MarriageInformation
            {
                EmployeeId = request.EmployeeId,
                FirstName = request.FirstName,
                SecondName = request.SecondName,
                ThirdName = request.ThirdName,
                SurName = request.SurName,
                FullName = request.FirstName + ' ' + request.SecondName + ' ' + request.ThirdName + ' ' + request.SurName,
                MarriageDate = request.MarriageDate,
                ChildrenCount = request.ChildrenCount,
                Notes = request.Notes,
            };
        }

        public async Task<Response<bool>> Handle(
            CreateMarriageInformationCommend request,
            CancellationToken cancellationToken)
        {
            await ChangeStatusToOld(request, cancellationToken);
            return await HandleBase(request, cancellationToken);
        }
    }
}