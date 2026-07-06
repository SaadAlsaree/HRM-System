using HRM.Hub.Domain.Entities;

namespace HRM.Hub.Application.Features.Services.ServiceDuration;

public class ServiceDurationService
{
    private const int DaysPerMonth = 30;
    private const int MonthsPerYear = 12;

    public ServiceDurationResult Compute(
        Employees employee,
        DateTime? calculationDate = null)
    {
        var result = new ServiceDurationResult();
        if (employee == null)
            return result;

        var asOf = calculationDate ?? DateTime.Today;

        var jobInfo = employee.JobInformation;
        var hireDate = jobInfo?.HireDate;
        if (hireDate == null)
            return result;

        var endDate = jobInfo!.EndOfServiceDate ?? DateOnly.FromDateTime(asOf);
        var start = hireDate.Value;
        if (endDate < start)
            return result;

        var continuousDays = (endDate.ToDateTime(TimeOnly.MinValue) - start.ToDateTime(TimeOnly.MinValue)).Days + 1;

        var interruptionDays = 0;
        if (employee.Interruptions != null)
        {
            foreach (var interruption in employee.Interruptions)
            {
                if (interruption.StartDate == null)
                    continue;

                var iStart = interruption.StartDate.Value.Date;
                var iEnd = interruption.EndDate?.Date ?? asOf;
                if (iEnd > endDate.ToDateTime(TimeOnly.MinValue))
                    iEnd = endDate.ToDateTime(TimeOnly.MinValue);
                if (iStart < start.ToDateTime(TimeOnly.MinValue))
                    iStart = start.ToDateTime(TimeOnly.MinValue);

                if (iEnd >= iStart)
                    interruptionDays += (iEnd - iStart).Days + 1;
            }
        }

        var netDays = continuousDays - interruptionDays;
        if (netDays < 0)
            netDays = 0;

        var addedMonths = 0;
        if (employee.ServiceCalculations != null)
        {
            foreach (var added in employee.ServiceCalculations)
            {
                if (added.CountOfMonth != null && added.CountOfMonth > 0)
                    addedMonths += added.CountOfMonth.Value;
            }
        }

        netDays += addedMonths * DaysPerMonth;

        result.TotalDays = netDays;
        result.Years = netDays / (DaysPerMonth * MonthsPerYear);
        var remaining = netDays % (DaysPerMonth * MonthsPerYear);
        result.Months = remaining / DaysPerMonth;
        result.Days = remaining % DaysPerMonth;
        return result;
    }
}
