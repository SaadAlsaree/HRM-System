namespace HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

public abstract class GetByIdHandler<TEntity, TViewModel, TQuery>
    where TQuery : IRequest<Response<TViewModel>>
{
    protected readonly IBaseRepository<TEntity> _repository;

    protected GetByIdHandler(IBaseRepository<TEntity> repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public abstract Expression<Func<TEntity, bool>> IdPredicate(TQuery request);

    public abstract Expression<Func<TEntity, TViewModel>> Selector { get; }

    public async Task<Response<TViewModel>> HandleBase(TQuery request, CancellationToken cancellationToken)
    {
        var entity = await _repository
            .Query(IdPredicate(request))
            .Select(Selector)
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);
        (entity as dynamic).StatusName = ((Status)(entity as dynamic).Status).GetDisplayName();
        return SuccessMessage.Get.ToSuccessMessage(entity);
    }
}