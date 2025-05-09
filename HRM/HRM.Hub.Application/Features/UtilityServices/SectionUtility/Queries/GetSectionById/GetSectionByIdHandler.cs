namespace HRM.Hub.Application.Features.UtilityServices.SectionUtility.Queries.GetSectionById;
public class GetSectionByIdHandler : GetByIdHandler<Sections, GetSectionByIdViewModel, GetSectionByIdQuery>, IRequestHandler<GetSectionByIdQuery, Response<GetSectionByIdViewModel>>
{
    public GetSectionByIdHandler(IBaseRepository<Sections> repositorySection)
        : base(repositorySection) { }

    public override Expression<Func<Sections, bool>> IdPredicate(GetSectionByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Sections, GetSectionByIdViewModel>> Selector => a => new GetSectionByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        ShortKey = a.ShortKey,
        Status = a.StatusId,
        DepartmentId = a.DepartmentId,
        DepartmentName = a.Department.Name,
        SubDirectorateId = a.SubDirectorateId,
        SubDirectorateName = a.SubDirectorate.Name,
        DirectorateId = a.DirectorateId,
        DirectorateName = a.Directorate.Name,
    };
    public async Task<Response<GetSectionByIdViewModel>> Handle(GetSectionByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
