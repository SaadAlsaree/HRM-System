using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class ThanksAndSeniority: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public int TypeOfBookId { get; set; }

    public int TypeOfSeniorityId { get; set; }

    public string BookNo { get; set; }

    public DateOnly DateOfBook { get; set; }

    public string BookIssueName { get; set; }

    public string Reason { get; set; }

    public int CountOfMonths { get; set; }

    public bool? IsDocumentVerify { get; set; }

    public DateOnly? CalculationDate { get; set; }

    public bool? IsCalculation { get; set; }

    public string Note { get; set; }

    public virtual Employees Employee { get; set; }

    public virtual TypeOfBook TypeOfBook { get; set; }

    public virtual TypeOfSeniority TypeOfSeniority { get; set; }
}
