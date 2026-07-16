namespace HRM.Hub.Application.Behaviors;


public sealed class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse> where TRequest : IRequest<TResponse>
{
    private readonly IEnumerable<IValidator<TRequest>> _validators;

    public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators) => _validators = validators;

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        if (!_validators.Any())
        {
            return await next();
        }

        var context = new ValidationContext<TRequest>(request);

        var failures = _validators
            .Select(x => x.Validate(context))
            .SelectMany(x => x.Errors)
            .Where(x => x != null)
            .ToList();

        if (failures.Any())
        {
            // Throwing DomainException (instead of a plain Exception) routes validation failures
            // through the 400 ProblemDetails branch of HttpGlobalExceptionFilter, so the user-facing
            // Arabic message set via .WithMessage(...) is preserved and surfaced to the client.
            // A plain Exception would otherwise be swallowed as a generic 500 "An error occur".
            throw new DomainException(failures.First().ErrorMessage);
        }

        return await next();
    }
}
