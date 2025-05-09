namespace HRM.Hub.Application.Features.MarriageInformationHandlers.Commands.UpdateMarriageInformation
{
    public class UpdateMarriageInformationHandler :
            UpdateHandler<MarriageInformation, UpdateMarriageInformationCommend>,
            IRequestHandler<UpdateMarriageInformationCommend, Response<bool>>
    {
        public UpdateMarriageInformationHandler(IBaseRepository<MarriageInformation> repositoryMarriageInformation)
            : base(repositoryMarriageInformation)
        {
        }

        public override Expression<Func<MarriageInformation, bool>>
            EntityPredicate(UpdateMarriageInformationCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateMarriageInformationCommend request,
            CancellationToken cancellationToken)
        {
            var DataToUpdate = new MarriageInformation
            {
                EmployeeId = request.EmployeeId,
                FirstName = request.FirstName,
                SecondName = request.SecondName,
                ThirdName = request.ThirdName,
                SurName = request.SurName,
                FullName = request.FirstName + " " + request.SecondName + " " + request.ThirdName + " " + request.SurName,
                MarriageDate = request.MarriageDate,
                ChildrenCount = request.ChildrenCount,
                Notes = request.Notes
            };
            return await HandleBase(request, cancellationToken);
        }
    }
}