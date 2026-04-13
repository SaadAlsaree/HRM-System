enum Status {
    None = -1,
    Pending = 0,
    Active = 1,
    Unverified = 33,
    InActive = 2,
    UnderVerification = 44,
    Verified = 55,
    ActionTaken = 66,
    Archived = 77
}

// Mapping object for display names
const StatusDisplayNames: { [key in Status]: string } = {
    [Status.None]: "غير معرف",
    [Status.Pending]: "غير مدقق",
    [Status.Active]: "فعال",
    [Status.Unverified]: "غير مدقق",
    [Status.InActive]: "غير فعال",
    [Status.UnderVerification]: "قيد التدقيق",
    [Status.Verified]: "مدقق",
    [Status.ActionTaken]: "تم الاجراء",
    [Status.Archived]: "مؤرشف"
};

// Generate the options for the select dropdown
export const statusOptions = Object.keys(Status)
    .filter(key => !isNaN(Number(key)))  // Ensure that we only include numeric enum values
    .map(key => ({
        label: StatusDisplayNames[Number(key) as Status],
        value: (key) as string
    }));


