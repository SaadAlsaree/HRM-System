namespace HRM.Hub.Persistence.Identity;

public static class AppRoles
{
    public const string Admin = "admin";
    public const string HrManager = "hr-manager";
    public const string HrOfficer = "hr-officer";
    public const string Manager = "manager";
    public const string Employee = "employee";

    public static readonly string[] All =
    {
        Admin, HrManager, HrOfficer, Manager, Employee
    };
}
