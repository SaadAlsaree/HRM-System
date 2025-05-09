using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.EmployeeCourseHandlers.Commands.UpdateEmployeeCourse;
public class UpdateEmployeeCourseCommandHandler : UpdateHandler<EmployeeCourse, UpdateEmployeeCourseCommand>,
    IRequestHandler<UpdateEmployeeCourseCommand, Response<bool>>
{
    public UpdateEmployeeCourseCommandHandler(IBaseRepository<EmployeeCourse> employeeCourseRepository)
    : base(employeeCourseRepository)
    {
    }

    public override Expression<Func<EmployeeCourse, bool>> EntityPredicate(UpdateEmployeeCourseCommand request)
    {
        return x => x.Id == request.Id;
    }

    public async Task<Response<bool>> Handle(UpdateEmployeeCourseCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}