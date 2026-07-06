namespace HRM.Hub.Application.Features.Services.ServiceDuration;

public class ServiceDurationResult
{
    public int Years { get; set; }
    public int Months { get; set; }
    public int Days { get; set; }
    public int TotalDays { get; set; }

    public bool HasService => TotalDays > 0;

    public override string ToString()
    {
        if (!HasService)
            return "0";
        return $"{Years} سنة، {Months} شهر، {Days} يوم";
    }
}
