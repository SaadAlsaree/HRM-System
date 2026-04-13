/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPagination {
    Page?: number | 1;
    PageSize?: number | 1000;
}

export interface IselectType {
    label: string;
    value: string;
};


export interface BaseResponse {
    succeeded?: boolean;
    data?: any | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface UploadAttachmentPayload {
    /** @format uuid */
    EmployeeId?: string;
    /** @format uuid */
    PrimaryTableId?: string;
    /** @format binary */
    File?: File;
    TableName?: TableNames;
    "Tags.BookTitle"?: string;
    "Tags.BookNo"?: string;
    /** @format date */
    "Tags.BookDate"?: string;
    Notes?: string;
    /** @format uuid */
    CreateBy?: string;
}


export interface Absence {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format date */
    absenceDate?: string | null;
    bookNo?: string | null;
    /** @format int32 */
    countOfDays?: number;
    /** @format date */
    bookDate?: string | null;
    note?: string | null;
    employee?: Employees;
}

export interface AcademicAchievement {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    /** @format int32 */
    jobDegreeId?: number | null;
    educationInformation?: EducationInformation[] | null;
    jobDegree?: JobDegree;
    studyLeave?: StudyLeave[] | null;
}

export interface AcademicCertificateType {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    studyLeave?: StudyLeave[] | null;
}

export interface AcademicField {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    educationInformation?: EducationInformation[] | null;
    studyLeave?: StudyLeave[] | null;
}

export interface AddAdministrativeOrderCommand {
    /** @format uuid */
    employeeId?: string;
    orderNo?: string | null;
    bookTitle?: string | null;
    /** @format date */
    orderDate?: string;
    administrativeOrderType?: AdministrativeOrderEnum;
    /** @format uuid */
    createBy?: string | null;
}

export interface AddApplicableLawCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    lawId?: number | null;
    note?: string | null;
}

export interface AddDisciplinaryCommand {
    /** @format uuid */
    employeeId?: string;
    titleOfBook?: string | null;
    /** @format int32 */
    typeOfDisciplinaryId?: number;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    stopPromotion?: boolean | null;
    disciplinaryLaw?: string | null;
    /** @format int32 */
    countOfDayDelay?: number | null;
    note?: string | null;
    reason?: string | null;
}

export interface AddDocumentCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    employeeDocumentTypeId?: number;
    documentAttributes?: DocumentAttribute[] | null;
    notes?: string | null;
}

export interface AddEducationInfoCommand {
    /** @format uuid */
    employeeId?: string;
    originalDocument?: string | null;
    documentNo?: string | null;
    /** @format date */
    documentDate?: string | null;
    documentSender?: string | null;
    /** @format date */
    documentSendDate?: string | null;
    /** @format int32 */
    academicAchievementId?: number;
    /** @format int32 */
    academicFieldId?: number;
    /** @format int32 */
    preciseAcademicFieldId?: number;
    nameOfIssuingCertificate?: string | null;
    /** @format date */
    startDate?: string;
    /** @format date */
    endDate?: string;
    graduationYear?: string | null;
    isDuringRecruitment?: boolean;
    isDocumentVerify?: boolean;
    /** @format int32 */
    countryId?: number;
    /** @format int32 */
    studyTypeId?: number;
    notes?: string | null;
    isInHiring?: boolean;
}

export interface AddEmployeeCommend {
    statisticalIndex?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    firstName?: string | null;
    secondName?: string | null;
    thirdName?: string | null;
    fourthName?: string | null;
    surName?: string | null;
    motherFirstName?: string | null;
    motherSecondName?: string | null;
    motherThirdName?: string | null;
    motherSurName?: string | null;
    genderId?: GenderEnum;
    birthPlace?: string | null;
    /** @format date */
    birthDate?: string;
    socialStatus?: SocialStatusEnum;
    statusWorkingId?: WorkingStatusEnum;
    /** @format date */
    hireDate?: string;
    isBehaviorCode?: boolean;
    /** @format int32 */
    typeOfJobId?: number;
    medicalTest?: boolean;
    isReEmployed?: boolean;
    /** @format int32 */
    isStillWorking?: number | null;
    isMovedFromOutside?: boolean;
    notes?: string | null;
    nationalism?: string | null;
    religion?: string | null;
    /** @format int32 */
    countryId?: number | null;
    /** @format int32 */
    jobCategoryId?: number;
    /** @format int32 */
    jobDegreeId?: number;
    /** @format int32 */
    employmentDegreeId?: number;
    /** @format int32 */
    jobTitleId?: number;
    /** @format int32 */
    jobDescriptionId?: number;
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    /** @format int32 */
    departmentId?: number;
    /** @format int32 */
    sectionId?: number;
    /** @format int32 */
    unitId?: number;
    /** @format int32 */
    positionId?: number;
}

export interface AddEmployeeServiceCommand {
    /** @format uuid */
    employeeId?: string;
    retirementCalculation?: string | null;
    promotionCalculation?: string | null;
    notes?: string | null;
}

export interface AddMangementInfoCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format int32 */
    departmentId?: number | null;
    /** @format int32 */
    sectionId?: number | null;
    /** @format int32 */
    unitId?: number | null;
    /** @format int32 */
    positionId?: number;
    /** @format int32 */
    employmentDegreeId?: number;
    /** @format int32 */
    jobDegreeId?: number;
    /** @format int32 */
    jobCategoryId?: number;
    /** @format int32 */
    jobTitleId?: number;
    /** @format int32 */
    jobDescriptionId?: number;
    /** @format int32 */
    stopJobDegreeId?: number | null;
    notes?: string | null;
}

export interface AddResignationCommand {
    /** @format uuid */
    employeeId?: string;
    reason?: string | null;
    /** @format date-time */
    requestDate?: string | null;
    requestNo?: string | null;
    resignationOrderNo?: string | null;
    /** @format date-time */
    resignationOrderDate?: string | null;
    separationOrderNo?: string | null;
    /** @format date-time */
    separationOrderDate?: string | null;
    note?: string | null;
}

export interface AddressInformation {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    governorateId?: number;
    /** @format int32 */
    provinceId?: number;
    isCurrent?: boolean;
    /** @format int32 */
    territoryId?: number;
    area?: string | null;
    district?: string | null;
    streetNo?: string | null;
    houseNo?: string | null;
    nearestPoint?: string | null;
    notes?: string | null;
    employee?: Employees;
    governorate?: Governorate;
    province?: Province;
    territory?: Territory;
}

export interface AdministrativeOrder {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string;
    bookTitle?: string | null;
    administrativeOrderType?: AdministrativeOrderEnum;
    employee?: Employees;
}

/** @format int32 */
export enum AdministrativeOrderEnum {
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
    Value4 = 4,
}

/** @format int32 */
export enum AssignmentTypes {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
}

export interface Assignments {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    typeOfAssignmentId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    assignmentSite?: AssignmentTypes;
    assignedFromOrganization?: string | null;
    assignedToOrganization?: string | null;
    /** @format int32 */
    durationOfAssignment?: number | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    assignmentOrderDate?: string | null;
    assignmentOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    endOrderNo?: string | null;
    /** @format date */
    endOrderDate?: string | null;
    /** @format date */
    endReleaseOrderDate?: string | null;
    endReleaseOrderNo?: string | null;
    endHireNo?: string | null;
    /** @format date */
    endHireDate?: string | null;
    note?: string | null;
    employee?: Employees;
    typeOfAssignment?: TypeOfAssignment;
}

export interface AttachmentProperty {
    bookTitle?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string;
}

export interface Attachments {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    primaryTableId?: string | null;
    tags?: string | null;
    tableName?: string | null;
    notes?: string | null;
    extinctionFile?: string | null;
    secret?: string | null;
}

export interface Attributes {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    attributeKey?: string | null;
    attributeValue?: string | null;
    employee?: Employees;
}

/** @format int32 */
export enum BookTitles {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
    Value4 = 4,
    Value5 = 5,
}

export interface BooleanResponse {
    succeeded?: boolean;
    data?: boolean;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface ByteArrayResponse {
    succeeded?: boolean;
    /** @format byte */
    data?: string | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface ChangeDegrees {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    jobDegreeFromId?: number;
    /** @format int32 */
    jobDegreeToId?: number;
    /** @format int32 */
    jobCategoryFromId?: number;
    /** @format int32 */
    jobCategoryToId?: number;
    /** @format int32 */
    jobTitleFromId?: number;
    /** @format int32 */
    jobDescriptionFromId?: number;
    /** @format int32 */
    jobTitleToId?: number;
    /** @format int32 */
    jobDescriptionToId?: number;
    /** @format date */
    oldDegreeDueDate?: string;
    /** @format date */
    newDegreeDueDate?: string;
    /** @format date */
    oldCategoryDueDate?: string;
    /** @format date */
    newCategoryDueDate?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    note?: string | null;
    employee?: Employees;
    jobDegreeFrom?: JobDegree;
    jobDegreeTo?: JobDegree;
    jobCategoryFrom?: JobCategory;
    jobCategoryTo?: JobCategory;
    jobDescriptionFrom?: JobDescription;
    jobDescriptionTo?: JobDescription;
    jobTitleFrom?: JobTitle;
    jobTitleTo?: JobTitle;
}

export interface ChangeDueDates {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format date */
    currentDegreeDueDate?: string;
    /** @format date */
    newDegreeDueDate?: string;
    /** @format date */
    currentCategoryDueDate?: string;
    /** @format date */
    newCategoryDueDate?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string;
    note?: string | null;
    employee?: Employees;
}

export interface ChangeJobTitle {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    newJobTitleId?: number | null;
    /** @format int32 */
    newJobDescriptionId?: number | null;
    /** @format int32 */
    oldJobTitleId?: number | null;
    /** @format int32 */
    oldJobDescriptionId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    note?: string | null;
    newJobDescription?: JobDescription;
    employee?: Employees;
    newJobTitle?: JobTitle;
    oldJobDescription?: JobDescription;
    oldJobTitle?: JobTitle;
}

export interface ContactInformation {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    levelOfRelationshipId?: number | null;
    phoneNumber?: string | null;
    contactName?: string | null;
    notes?: string | null;
    employee?: Employees;
    levelOfRelationship?: LevelOfRelationship;
}

export interface CorrectingAcademicAchievements {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    degreeFromId?: number | null;
    /** @format int32 */
    degreeToId?: number | null;
    /** @format int32 */
    jobCategoryFromId?: number | null;
    /** @format int32 */
    jobCategoryToId?: number | null;
    /** @format int32 */
    jobTitleFromId?: number;
    /** @format int32 */
    jobDescriptionFromId?: number;
    /** @format int32 */
    jobTitleToId?: number;
    /** @format int32 */
    jobDescriptionToId?: number;
    /** @format date */
    dueDateDegree?: string | null;
    /** @format date */
    dueDateCategory?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    isCertificateCalculation?: boolean | null;
    note?: string | null;
    degreeFrom?: JobDegree;
    degreeTo?: JobDegree;
    employee?: Employees;
    jobCategoryFrom?: JobCategory;
    jobCategoryTo?: JobCategory;
    jobDescriptionFrom?: JobDescription;
    jobDescriptionTo?: JobDescription;
    jobTitleFrom?: JobTitle;
    jobTitleTo?: JobTitle;
}

export interface Country {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    employees?: Employees[] | null;
    studyLeave?: StudyLeave[] | null;
    leaves?: Leaves[] | null;
    educationInformation?: EducationInformation[] | null;
}

export interface CreateAbsenceCommand {
    /** @format uuid */
    employeeId?: string;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    /** @format date */
    absenceDate?: string | null;
    /** @format int32 */
    countOfDays?: number;
    note?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateAcademicAchievementCommend {
    name?: string | null;
    /** @format int32 */
    jobDegreeId?: number | null;
}

export interface CreateAcademicCertificateTypeCommend {
    name?: string | null;
}

export interface CreateAcademicFieldCommend {
    name?: string | null;
}

export interface CreateAddressInformationCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    governorateId?: number;
    /** @format int32 */
    provinceId?: number;
    /** @format int32 */
    territoryId?: number;
    area?: string | null;
    district?: string | null;
    streetNo?: string | null;
    houseNo?: string | null;
    nearestPoint?: string | null;
    notes?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateAssignmentsCommend {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    typeOfAssignmentId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format int32 */
    durationOfAssignment?: number | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    assignmentOrderDate?: string | null;
    assignmentOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    assignmentSite?: AssignmentTypes;
    assignedFromOrganization?: string | null;
    assignedToOrganization?: string | null;
    endOrderNo?: string | null;
    /** @format date */
    endOrderDate?: string | null;
    /** @format date */
    endReleaseOrderDate?: string | null;
    endReleaseOrderNo?: string | null;
    endHireNo?: string | null;
    /** @format date */
    endHireDate?: string | null;
    note?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateAttributesCommend {
    /** @format uuid */
    employeeId?: string;
    attributeKey?: string | null;
    attributeValue?: string | null;
}

export interface CreateChangeDegreeCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    jobDegreeFromId?: number;
    /** @format int32 */
    jobDegreeToId?: number;
    /** @format int32 */
    jobCategoryFromId?: number;
    /** @format int32 */
    jobCategoryToId?: number;
    /** @format int32 */
    jobTitleFromId?: number;
    /** @format int32 */
    jobDescriptionFromId?: number;
    /** @format int32 */
    jobTitleToId?: number;
    /** @format int32 */
    jobDescriptionToId?: number;
    /** @format date */
    oldDegreeDueDate?: string;
    /** @format date */
    newDegreeDueDate?: string;
    /** @format date */
    oldCategoryDueDate?: string;
    /** @format date */
    newCategoryDueDate?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    note?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateChangeDueDateCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format date */
    currentDegreeDueDate?: string;
    /** @format date */
    newDegreeDueDate?: string;
    /** @format date */
    currentCategoryDueDate?: string;
    /** @format date */
    newCategoryDueDate?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string;
    note?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateChangeJobTitlesCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    newJobTitleId?: number | null;
    /** @format int32 */
    newJobDescriptionId?: number | null;
    /** @format int32 */
    oldJobTitleId?: number | null;
    /** @format int32 */
    oldJobDescriptionId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    note?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateContactInformationCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    levelOfRelationshipId?: number | null;
    phoneNumber?: string | null;
    contactName?: string | null;
    notes?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateCorrectingAcademicAchievementCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    degreeFromId?: number;
    /** @format int32 */
    degreeToId?: number;
    /** @format int32 */
    jobCategoryFromId?: number;
    /** @format int32 */
    jobCategoryToId?: number;
    /** @format int32 */
    jobTitleFromId?: number;
    /** @format int32 */
    jobDescriptionFromId?: number;
    /** @format int32 */
    jobTitleToId?: number;
    /** @format int32 */
    jobDescriptionToId?: number;
    /** @format date */
    dueDateDegree?: string;
    /** @format date */
    dueDateCategory?: string;
    isCertificateCalculation?: boolean;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string;
    note?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateCountryCommend {
    name?: string | null;
}

export interface CreateDepartmentCommend {
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    name?: string | null;
    shortKey?: string | null;
}

export interface CreateDirectorateCommend {
    name?: string | null;
    shortKey?: string | null;
}

export interface CreateDocVerificationCommand {
    /** @format uuid */
    employeeId?: string;
    documentNumber?: string | null;
    /** @format date */
    documentDate?: string;
    recipient?: string | null;
    answered?: boolean;
    /** @format date */
    sendingDate?: string;
    note?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateEmployeeCourseCommand {
    /** @format uuid */
    employeeId?: string;
    title?: string | null;
    place?: string | null;
    /** @format date-time */
    startDate?: string;
    /** @format date-time */
    endDate?: string;
    evaluation?: string | null;
    residentEntity?: string | null;
    courseOrderNo?: string | null;
    /** @format date */
    courseOrderDate?: string | null;
    /** @format int32 */
    courseDurationInDays?: number;
    nominationOrderNo?: string | null;
    /** @format date */
    nominationOrderDate?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
}

export interface CreateEmployeeDocumentsTypeCommend {
    name?: string | null;
}

export interface CreateEmployeePositionCommend {
    /** @format uuid */
    employeeId?: string;
    employeePositionType?: EmployeePositionTypeEnum;
    /** @format date */
    assignedOrderDate?: string | null;
    assignedOrderNo?: string | null;
    /** @format date */
    assignedDate?: string | null;
    /** @format date */
    administrativeOrderDate?: string | null;
    administrativeOrderNo?: string | null;
    /** @format int32 */
    directorateId?: number | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format int32 */
    departmentId?: number | null;
    /** @format int32 */
    sectionId?: number | null;
    /** @format int32 */
    unitId?: number | null;
    /** @format int32 */
    positionId?: number | null;
    note?: string | null;
    currentPosition?: OldEmployeePosition[] | null;
}

export interface CreateGovernorateCommend {
    name?: string | null;
}

export interface CreateHandPullCommand {
    /** @format uuid */
    employeeId?: string;
    withdrawHandPullOrderNo?: string | null;
    /** @format date-time */
    withdrawHandPullOrderDate?: string | null;
    raiseHandPullOrderNo?: string | null;
    /** @format date-time */
    raiseHandPullOrderDate?: string | null;
    note?: string | null;
}

export interface CreateInterruptionCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format date-time */
    notificationDate?: string | null;
    reason?: string | null;
    note?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateJobCategoryCommend {
    /** @format int32 */
    degreeId?: number;
    /** @format double */
    increaseAmount?: number;
    name?: string | null;
}

export interface CreateJobDegreeCommend {
    name?: string | null;
    /** @format double */
    increaseAmount?: number;
}

export interface CreateJobDescriptionCommend {
    name?: string | null;
}

export interface CreateJobTitleCommend {
    /** @format int32 */
    degreeId?: number;
    name?: string | null;
}

export interface CreateLawCommend {
    name?: string | null;
}

export interface CreateLeaveCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    normalLeaveTypeId?: number | null;
    /** @format int32 */
    sicknessTypeId?: number | null;
    typeOfLeaveId?: LeaveTypes;
    /** @format int32 */
    longLeaveTypeId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format date */
    fromDate?: string | null;
    /** @format date */
    toDate?: string | null;
    /** @format int32 */
    countOfDays?: number | null;
    /** @format int32 */
    countOfMinutes?: number | null;
    /** @format int32 */
    countryId?: number | null;
    salaryStatusId?: SalaryStatus;
    isInside?: boolean | null;
    country?: string | null;
    note?: string | null;
    /** @format date-time */
    dateOfAssignment?: string | null;
    noOfAssignment?: string | null;
    /** @format date-time */
    releaseDate?: string | null;
    /** @format date-time */
    dateOfBirthCertificate?: string | null;
    noOfBirthCertificate?: string | null;
    /** @format date-time */
    dateOfRelease?: string | null;
    noOfRelease?: string | null;
    /** @format date-time */
    dateOfStart?: string | null;
    noOfStart?: string | null;
    /** @format date-time */
    dateOfPermission?: string | null;
    noOfPermission?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
}

export interface CreateLevelOfRelationshipCommend {
    name?: string | null;
}

export interface CreateLogLeavesBalanceCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    countOfDay?: number | null;
    nameOfIssuing?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    note?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateLongLeaveTypeCommend {
    name?: string | null;
}

export interface CreateMarriageInformationCommend {
    /** @format uuid */
    employeeId?: string | null;
    firstName?: string | null;
    secondName?: string | null;
    thirdName?: string | null;
    surName?: string | null;
    fullName?: string | null;
    /** @format date */
    marriageDate?: string | null;
    /** @format int32 */
    childrenCount?: number | null;
    notes?: string | null;
}

export interface CreateMartyrsAndWoundedCommend {
    /** @format uuid */
    employeeId?: string;
    healthStatus?: HealthStatus;
    /** @format date-time */
    endDateOfService?: string | null;
    /** @format date-time */
    retirementDate?: string | null;
    /** @format date */
    dateOfDeath?: string | null;
    administrativeOrderNo?: string | null;
    /** @format date-time */
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    /** @format date-time */
    dateOfMartyrdom?: string | null;
    note?: string | null;
}

export interface CreateMovementCommand {
    /** @format uuid */
    employeeId?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format int32 */
    fromDirectorateId?: number;
    /** @format int32 */
    fromSubDirectorateId?: number;
    /** @format int32 */
    fromDepartmentId?: number;
    /** @format int32 */
    fromSectionId?: number;
    /** @format int32 */
    fromUniteId?: number;
    /** @format int32 */
    toDirectorateId?: number;
    /** @format int32 */
    toSubDirectorateId?: number;
    /** @format int32 */
    toDepartmentId?: number;
    /** @format int32 */
    toSectionId?: number;
    /** @format int32 */
    toUnitId?: number;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    /** @format date */
    releaseDate?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    note?: string | null;
}

export interface CreateNormalLeaveTypeCommend {
    name?: string | null;
}

export interface CreatePositionCommend {
    name?: string | null;
}

export interface CreatePreciseAcademicFieldCommend {
    name?: string | null;
}

export interface CreatePromotionCommend {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    /** @format int64 */
    sentPromotionGroupId?: number | null;
    /** @format int32 */
    degreeFromId?: number | null;
    /** @format int32 */
    degreeToId?: number | null;
    /** @format int32 */
    jobCategoryFromId?: number | null;
    /** @format int32 */
    jobCategoryToId?: number | null;
    /** @format uuid */
    oldEducationInformationId?: string | null;
    /** @format uuid */
    newEducationInformationId?: string | null;
    /** @format date */
    dueDateDegree?: string | null;
    /** @format date */
    dueDateCategory?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    /** @format int32 */
    categoryPerMonth?: number | null;
    /** @format int32 */
    serviceRecycle?: number | null;
    /** @format int32 */
    typeOfChange?: number | null;
    note?: string | null;
}

export interface CreateProvinceCommend {
    name?: string | null;
}

export interface CreateRetirementCommend {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    directorateId?: number | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format date-time */
    startDate?: string | null;
    /** @format int32 */
    academicAchievementId?: number | null;
    /** @format int32 */
    jobDegreeId?: number | null;
    /** @format int32 */
    jobCategoryId?: number | null;
    /** @format int32 */
    jobTitleId?: number | null;
    decisionToFixAge?: string | null;
    /** @format uuid */
    employeePositionId?: string | null;
    /** @format date-time */
    endDateOfService?: string | null;
    /** @format date-time */
    birthdate?: string | null;
    /** @format int32 */
    retirementDate?: number;
    administrativeOrderNo?: string | null;
    /** @format date-time */
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    note?: string | null;
}

export interface CreateSectionCommend {
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    /** @format int32 */
    departmentId?: number;
    name?: string | null;
    shortKey?: string | null;
}

export interface CreateServiceCalculationCommend {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    typeOfServiceId?: number;
    /** @format int32 */
    countOfMonth?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    isPoliticalTermination?: boolean | null;
    notes?: string | null;
}

export interface CreateSicknessTypeCommend {
    name?: string | null;
}

export interface CreateStudyExtensionOrderTypeCommend {
    name?: string | null;
}

export interface CreateStudyFileCommand {
    /** @format uuid */
    employeeId?: string;
    documentNo?: string | null;
    /** @format date */
    documentDate?: string | null;
    notes?: string | null;
}

export interface CreateStudyLeaveCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format uuid */
    studyFileId?: string | null;
    /** @format int32 */
    academicCertificateTypeId?: number | null;
    /** @format int32 */
    academicAchievementId?: number | null;
    /** @format int32 */
    academicFieldId?: number | null;
    /** @format int32 */
    studyPeriodTime?: number | null;
    acceptanceYear?: string | null;
    nameOfIssuingCertificate?: string | null;
    financialInsuranceNo?: string | null;
    /** @format date */
    financialInsuranceDate?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    /** @format int32 */
    countryId?: number | null;
    /** @format int32 */
    studyStatusId?: number | null;
    /** @format int32 */
    studyResultId?: number | null;
    notes?: string | null;
}

export interface CreateStudyLeaveExtensionCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    studyExtensionOrderTypeId?: number | null;
    /** @format uuid */
    studyFileId?: string | null;
    orderNo?: string | null;
    /** @format int32 */
    countOfDay?: number;
    /** @format date */
    orderDate?: string | null;
    /** @format date */
    fromDate?: string | null;
    /** @format date */
    toDate?: string | null;
    notes?: string | null;
}

export interface CreateStudyResultCommend {
    name?: string | null;
}

export interface CreateStudyStatusCommend {
    name?: string | null;
}

export interface CreateStudyTypeCommend {
    name?: string | null;
}

export interface CreateSubDirectorateCommend {
    /** @format int32 */
    directorateId?: number;
    name?: string | null;
    shortKey?: string | null;
}

export interface CreateTeamNotificationCommand {
    /** @format uuid */
    teamId?: string;
    /** @format uuid */
    employeeId?: string;
    body?: string | null;
    note?: string | null;
    status?: Status;
    /** @format uuid */
    createBy?: string | null;
}

export interface CreateTerritoryCommend {
    name?: string | null;
}

export interface CreateThanksAndSeniorityCommand {
    employeeId?: string[] | null;
    /** @format int32 */
    createType?: number;
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format int32 */
    typeOfBook?: number;
    /** @format int32 */
    typeOfSeniority?: number;
    bookNo?: string | null;
    /** @format date */
    dateOfBook?: string;
    bookIssueName?: string | null;
    reason?: string | null;
    /** @format int32 */
    countOfMonths?: number;
    isDocumentVerify?: boolean | null;
    /** @format date */
    calculationDate?: string | null;
    note?: string | null;
}

export interface CreateTypeOfAssignmentCommend {
    name?: string | null;
}

export interface CreateTypeOfBookCommend {
    name?: string | null;
}

export interface CreateTypeOfDisciplinaryCommend {
    name?: string | null;
    /** @format int32 */
    countOfDayDelay?: number;
}

export interface CreateTypeOfJobCommend {
    name?: string | null;
}

export interface CreateTypeOfLeaveCommend {
    name?: string | null;
}

export interface CreateTypeOfSeniorityCommend {
    name?: string | null;
}

export interface CreateTypeOfServiceCommend {
    name?: string | null;
}

export interface CreateUnitCommend {
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    /** @format int32 */
    departmentId?: number;
    /** @format int32 */
    sectionId?: number;
    name?: string | null;
    shortKey?: string | null;
}

export interface CreateValuationCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format date */
    valuationDate?: string | null;
    recommendation?: string | null;
    valuationType?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string;
    notes?: string | null;
    /** @format uuid */
    createBy?: string | null;
    valuationProperties?: ValuationProperty[] | null;
}

export interface Departments {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    name?: string | null;
    shortKey?: string | null;
    directorate?: Directorates;
    managementInformation?: ManagementInformation[] | null;
    movementsFromDepartment?: Movements[] | null;
    movementsToDepartment?: Movements[] | null;
    sections?: Sections[] | null;
    subDirectorate?: SubDirectorates;
    employeePositions?: EmployeePosition[] | null;
    units?: Units[] | null;
}

export interface Directorates {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    shortKey?: string | null;
    departments?: Departments[] | null;
    managementInformation?: ManagementInformation[] | null;
    movementsFromDirectorate?: Movements[] | null;
    movementsToDirectorate?: Movements[] | null;
    sections?: Sections[] | null;
    subDirectorates?: SubDirectorates[] | null;
    units?: Units[] | null;
    employeePositions?: EmployeePosition[] | null;
}

export interface DocVerifications {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    documentNumber?: string | null;
    /** @format date */
    documentDate?: string;
    recipient?: string | null;
    answered?: boolean;
    /** @format date */
    sendingDate?: string;
    note?: string | null;
    employee?: Employees;
}

export interface DocumentAttribute {
    key?: string | null;
    value?: string | null;
}

export interface EducationInformation {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    originalDocument?: string | null;
    documentNo?: string | null;
    /** @format date */
    documentDate?: string | null;
    documentSender?: string | null;
    /** @format date */
    documentSendDate?: string | null;
    /** @format int32 */
    academicAchievementId?: number;
    /** @format int32 */
    academicFieldId?: number;
    /** @format int32 */
    preciseAcademicFieldId?: number;
    nameOfIssuingCertificate?: string | null;
    /** @format date */
    startDate?: string;
    /** @format date */
    endDate?: string;
    /** @format double */
    average?: number;
    graduationYear?: string | null;
    isDuringRecruitment?: boolean;
    isDocumentVerify?: boolean;
    isInHiring?: boolean;
    isCurrent?: boolean;
    /** @format int32 */
    countryId?: number;
    /** @format int32 */
    studyTypeId?: number;
    notes?: string | null;
    academicAchievement?: AcademicAchievement;
    academicField?: AcademicField;
    country?: Country;
    employee?: Employees;
    preciseAcademicField?: PreciseAcademicField;
    studyType?: StudyType;
}

export interface EmployeeApplicableLaws {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    lawId?: number | null;
    note?: string | null;
    employee?: Employees;
    law?: Laws;
}

export interface EmployeeCourse {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    title?: string | null;
    place?: string | null;
    /** @format date-time */
    startDate?: string;
    /** @format date-time */
    endDate?: string;
    evaluation?: string | null;
    residentEntity?: string | null;
    courseOrderNo?: string | null;
    /** @format date */
    courseOrderDate?: string | null;
    /** @format int32 */
    courseDurationInDays?: number;
    nominationOrderNo?: string | null;
    /** @format date */
    nominationOrderDate?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    employee?: Employees;
}

export interface EmployeeDisciplinary {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    titleOfBook?: string | null;
    /** @format int32 */
    typeOfDisciplinaryId?: number;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    stopPromotion?: boolean | null;
    /** @format int32 */
    countOfDayDelay?: number | null;
    disciplinaryLaw?: string | null;
    note?: string | null;
    reason?: string | null;
    typeOfDisciplinary?: TypeOfDisciplinary;
    employee?: Employees;
}

export interface EmployeeDocuments {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    employeeDocumentTypeId?: number | null;
    documentAttribute?: string | null;
    notes?: string | null;
    employee?: Employees;
    employeeDocumentType?: EmployeeDocumentsType;
}

export interface EmployeeDocumentsType {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    employeeDocuments?: EmployeeDocuments[] | null;
}

export interface EmployeePosition {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    employeePositionType?: EmployeePositionTypeEnum;
    endAssignedOrderNo?: string | null;
    /** @format date */
    endAssignedOrderDate?: string | null;
    /** @format date */
    assignedOrderDate?: string | null;
    /** @format date */
    assignedDate?: string | null;
    assignedOrderNo?: string | null;
    /** @format date */
    administrativeOrderDate?: string | null;
    administrativeOrderNo?: string | null;
    /** @format int32 */
    directorateId?: number | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format int32 */
    departmentId?: number | null;
    /** @format int32 */
    sectionId?: number | null;
    /** @format int32 */
    unitId?: number | null;
    /** @format int32 */
    positionId?: number | null;
    status?: Status;
    note?: string | null;
    directorate?: Directorates;
    subDirectorate?: SubDirectorates;
    department?: Departments;
    section?: Sections;
    unit?: Units;
    position?: Position;
    employee?: Employees;
}

/** @format int32 */
export enum EmployeePositionTypeEnum {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
}

export interface EmployeeService {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    retirementCalculation?: string | null;
    promotionCalculation?: string | null;
    notes?: string | null;
    employee?: Employees;
}

export interface Employees {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    statisticalIndex?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    firstName?: string | null;
    secondName?: string | null;
    thirdName?: string | null;
    fourthName?: string | null;
    surName?: string | null;
    fullName?: string | null;
    motherFirstName?: string | null;
    motherSecondName?: string | null;
    motherThirdName?: string | null;
    motherSurName?: string | null;
    motherFullName?: string | null;
    gender?: GenderEnum;
    birthPlace?: string | null;
    /** @format date */
    birthDate?: string | null;
    socialStatus?: SocialStatusEnum;
    notes?: string | null;
    statusWorkingId?: WorkingStatusEnum;
    nationalism?: string | null;
    religion?: string | null;
    /** @format int32 */
    countryId?: number | null;
    country?: Country;
    absence?: Absence[] | null;
    addressInformation?: AddressInformation[] | null;
    administrativeOrder?: AdministrativeOrder[] | null;
    assignments?: Assignments[] | null;
    attributes?: Attributes[] | null;
    changeDegree?: ChangeDegrees[] | null;
    changeJobTitle?: ChangeJobTitle[] | null;
    changeDueDate?: ChangeDueDates[] | null;
    contactInformation?: ContactInformation[] | null;
    educationInformation?: EducationInformation[] | null;
    employeeApplicableLaws?: EmployeeApplicableLaws[] | null;
    employeeDisciplinary?: EmployeeDisciplinary[] | null;
    employeeDocuments?: EmployeeDocuments[] | null;
    employeeService?: EmployeeService;
    jobInformation?: JobInformation;
    leaves?: Leaves[] | null;
    logLeavesBalance?: LogLeavesBalance[] | null;
    managementInformation?: ManagementInformation;
    marriageInformation?: MarriageInformation[] | null;
    movements?: Movements[] | null;
    promotion?: Promotion;
    serviceCalculation?: ServiceCalculation[] | null;
    employeePositions?: EmployeePosition[] | null;
    studyFile?: StudyFile[] | null;
    studyLeave?: StudyLeave[] | null;
    teamNotifications?: TeamNotifications[] | null;
    studyLeaveExtension?: StudyLeaveExtension[] | null;
    serviceCalculations?: ServiceCalculation[] | null;
    thanksAndSeniority?: ThanksAndSeniority[] | null;
    leavesBalances?: LeavesBalance;
    interruptions?: Interruption[] | null;
    handPulls?: HandPull[] | null;
    employeeCourses?: EmployeeCourse[] | null;
    valuation?: Valuation[] | null;
    resignations?: Resignation[] | null;
    docVerification?: DocVerifications[] | null;
    correctingAcademicAchievements?: CorrectingAcademicAchievements[] | null;
    logPromotionWithholdings?: LogPromotionWithholding[] | null;
    martyrsAndWoundeds?: MartyrsAndWounded[] | null;
}

export interface FindEmployeeViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    motherFullName?: string | null;
    /** @format int32 */
    jobDegreeId?: number | null;
    jobDegreeName?: string | null;
    /** @format int32 */
    jobCategoryId?: number | null;
    jobCategoryName?: string | null;
    /** @format int32 */
    jobTitleId?: number;
    jobTitleName?: string | null;
    /** @format int32 */
    jobDescriptionId?: number | null;
    jobDescriptionName?: string | null;
    /** @format int32 */
    directorateId?: number | null;
    directorateName?: string | null;
    /** @format int32 */
    balance?: number | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    subDirectorateName?: string | null;
    /** @format int32 */
    departmentId?: number | null;
    departmentName?: string | null;
    /** @format int32 */
    sectionId?: number | null;
    sectionName?: string | null;
    /** @format int32 */
    positionId?: number | null;
    positionName?: string | null;
    /** @format int32 */
    unitId?: number | null;
    unitName?: string | null;
    /** @format date */
    degreeDueDate?: string | null;
    /** @format date */
    categoryDueDate?: string | null;
}

export interface FindEmployeeViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: FindEmployeeViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

/** @format int32 */
export enum GenderEnum {
    Value1 = 1,
    Value2 = 2,
}

export interface GetAbsenceByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    statisticalIndex?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    /** @format date */
    absenceDate?: string | null;
    /** @format int32 */
    countOfDays?: number | null;
    note?: string | null;
}

export interface GetAbsenceByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetAbsenceByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicAchievementByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    /** @format int32 */
    jobDegreeId?: number | null;
    jobDegreeName?: string | null;
    status?: Status;
}

export interface GetAcademicAchievementByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetAcademicAchievementByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicAchievementListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    /** @format int32 */
    jobDegreeId?: number | null;
    jobDegreeName?: string | null;
}

export interface GetAcademicAchievementListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAcademicAchievementListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicAchievementViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    /** @format int32 */
    jobDegreeId?: number | null;
    jobDegreeName?: string | null;
    status?: Status;
}

export interface GetAcademicAchievementViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAcademicAchievementViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicAchievementViewModelResponse {
    succeeded?: boolean;
    data?: GetAcademicAchievementViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicCertificateTypeByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetAcademicCertificateTypeByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetAcademicCertificateTypeByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicCertificateTypeListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetAcademicCertificateTypeListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAcademicCertificateTypeListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicCertificateTypeViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetAcademicCertificateTypeViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAcademicCertificateTypeViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicCertificateTypeViewModelResponse {
    succeeded?: boolean;
    data?: GetAcademicCertificateTypeViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicFieldByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetAcademicFieldByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetAcademicFieldByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicFieldListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetAcademicFieldListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAcademicFieldListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicFieldViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetAcademicFieldViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAcademicFieldViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAcademicFieldViewModelResponse {
    succeeded?: boolean;
    data?: GetAcademicFieldViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAddressInformationByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    area?: string | null;
    district?: string | null;
    streetNo?: string | null;
    houseNo?: string | null;
    nearestPoint?: string | null;
    notes?: string | null;
    /** @format int32 */
    governorateId?: number;
    governorateName?: string | null;
    /** @format int32 */
    provinceId?: number;
    provinceName?: string | null;
    /** @format int32 */
    territoryId?: number;
    territoryName?: string | null;
    isCurrent?: boolean;
}

export interface GetAddressInformationByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetAddressInformationByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAdministrativeOrderByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    orderNo?: string | null;
    bookTitle?: string | null;
    /** @format date */
    orderDate?: string;
    administrativeOrderType?: AdministrativeOrderEnum;
    administrativeOrderTypeName?: string | null;
}

export interface GetAdministrativeOrderByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetAdministrativeOrderByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAdministrativeOrderToEmployeeProfileViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    ministerialOrderAppointingOrderNo?: string | null;
    /** @format date */
    ministerialOrderAppointingOrderDate?: string | null;
    administrativeOrderForAppointmentOrderNo?: string | null;
    /** @format date */
    administrativeOrderForAppointmentOrderDate?: string | null;
    administrativeOrderToCommenceOrderNo?: string | null;
    /** @format date */
    administrativeOrderToCommenceOrderDate?: string | null;
    administrativeOrderToConfirmAgeOrderNo?: string | null;
    /** @format date */
    administrativeOrderToConfirmAgeOrderDate?: string | null;
}

export interface GetAdministrativeOrderToEmployeeProfileViewModelResponse {
    succeeded?: boolean;
    data?: GetAdministrativeOrderToEmployeeProfileViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAdministrativeOrderViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    orderNo?: string | null;
    bookTitle?: string | null;
    /** @format date */
    orderDate?: string;
    administrativeOrderType?: AdministrativeOrderEnum;
    administrativeOrderTypeName?: string | null;
}

export interface GetAdministrativeOrderViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAdministrativeOrderViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAdministrativeOrderViewModelResponse {
    succeeded?: boolean;
    data?: GetAdministrativeOrderViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAllAbsencesViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    statisticalIndex?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    /** @format date */
    absenceDate?: string | null;
    /** @format int32 */
    countOfDays?: number | null;
    note?: string | null;
}

export interface GetAllAbsencesViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAllAbsencesViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAllEmployeeCoursesViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    title?: string | null;
    place?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    evaluation?: string | null;
    residentEntity?: string | null;
    courseOrderNo?: string | null;
    /** @format date */
    courseOrderDate?: string | null;
    /** @format int32 */
    courseDurationInDays?: number;
    nominationOrderNo?: string | null;
    /** @format date */
    nominationOrderDate?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
}

export interface GetAllEmployeeCoursesViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAllEmployeeCoursesViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAllHandPullsViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    withdrawHandPullOrderNo?: string | null;
    /** @format date-time */
    withdrawHandPullOrderDate?: string | null;
    raiseHandPullOrderNo?: string | null;
    /** @format date-time */
    raiseHandPullOrderDate?: string | null;
    note?: string | null;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface GetAllHandPullsViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAllHandPullsViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAllInterruptionsViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format date-time */
    notificationDate?: string | null;
    reason?: string | null;
    note?: string | null;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface GetAllInterruptionsViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAllInterruptionsViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAllJobInformationsViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format date */
    hireDate?: string;
    /** @format date */
    endOfServiceDate?: string | null;
    /** @format int32 */
    typeOfJobId?: number | null;
    /** @format uuid */
    assignedId?: string | null;
    medicalTest?: boolean | null;
    isReEmployed?: boolean | null;
    isMovedFromOutside?: boolean | null;
    /** @format int32 */
    isStillWorking?: number | null;
    isBehaviorCode?: boolean | null;
}

export interface GetAllJobInformationsViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAllJobInformationsViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAllLogLeavesBalancesViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    countOfDay?: number | null;
    nameOfIssuing?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    note?: string | null;
}

export interface GetAllLogLeavesBalancesViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAllLogLeavesBalancesViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAllLogLeavesBalancesViewModelResponse {
    succeeded?: boolean;
    data?: GetAllLogLeavesBalancesViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAllMovementsDataViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format int32 */
    fromDirectorateId?: number | null;
    /** @format int32 */
    fromSubDirectorateId?: number | null;
    /** @format int32 */
    fromDepartmentId?: number | null;
    /** @format int32 */
    fromSectionId?: number | null;
    /** @format int32 */
    fromUniteId?: number | null;
    /** @format int32 */
    toDirectorateId?: number | null;
    /** @format int32 */
    toSubDirectorateId?: number | null;
    /** @format int32 */
    toDepartmentId?: number | null;
    /** @format int32 */
    toSectionId?: number | null;
    /** @format int32 */
    toUnitId?: number | null;
    fromDirectorateName?: string | null;
    fromSubDirectorateName?: string | null;
    fromDepartmentName?: string | null;
    fromSectionName?: string | null;
    fromUniteName?: string | null;
    toDirectorateName?: string | null;
    toSubDirectorateName?: string | null;
    toDepartmentName?: string | null;
    toSectionName?: string | null;
    toUnitName?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    note?: string | null;
}

export interface GetAllMovementsDataViewModelResponse {
    succeeded?: boolean;
    data?: GetAllMovementsDataViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetApplicableLawByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    lawId?: number | null;
    note?: string | null;
}

export interface GetApplicableLawByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetApplicableLawByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetApplicableLawViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    lawId?: number | null;
    lawNamw?: string | null;
    note?: string | null;
}

export interface GetApplicableLawViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetApplicableLawViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetApplicableLawViewModelResponse {
    succeeded?: boolean;
    data?: GetApplicableLawViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAssignmentsByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    typeOfAssignmentId?: number | null;
    typeOfAssignmentName?: string | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    assignmentSite?: AssignmentTypes;
    assignedFromOrganization?: string | null;
    assignedToOrganization?: string | null;
    /** @format int32 */
    durationOfAssignment?: number | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    assignmentOrderDate?: string | null;
    assignmentOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    endOrderNo?: string | null;
    /** @format date */
    endOrderDate?: string | null;
    /** @format date */
    endReleaseOrderDate?: string | null;
    endReleaseOrderNo?: string | null;
    endHireNo?: string | null;
    /** @format date */
    endHireDate?: string | null;
    note?: string | null;
}

export interface GetAssignmentsByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetAssignmentsByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAssignmentsViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    typeOfAssignmentId?: number | null;
    typeOfAssignmentName?: string | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    directorateName?: string | null;
    subDirectorateName?: string | null;
    assignmentSite?: AssignmentTypes;
    assignedFromOrganization?: string | null;
    assignedToOrganization?: string | null;
    /** @format int32 */
    durationOfAssignment?: number | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    assignmentOrderDate?: string | null;
    assignmentOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    endOrderNo?: string | null;
    /** @format date */
    endOrderDate?: string | null;
    /** @format date */
    endReleaseOrderDate?: string | null;
    endReleaseOrderNo?: string | null;
    endHireNo?: string | null;
    /** @format date */
    endHireDate?: string | null;
    note?: string | null;
}

export interface GetAssignmentsViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAssignmentsViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAssignmentsViewModelResponse {
    succeeded?: boolean;
    data?: GetAssignmentsViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAttachmentByIdViewModel {
    fileBase64?: string | null;
    extinctionFile?: string | null;
}

export interface GetAttachmentByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetAttachmentByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAttachmentViewModel {
    /** @format uuid */
    id?: string;
    attachmentProperty?: any;
    tags?: string | null;
    notes?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetAttachmentViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAttachmentViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAttachmentViewModelResponse {
    succeeded?: boolean;
    data?: GetAttachmentViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAttributesByIdViewModel {
    /** @format uuid */
    id?: string;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetAttributesByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetAttributesByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAttributesListViewModel {
    /** @format uuid */
    id?: string;
    name?: string | null;
}

export interface GetAttributesListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAttributesListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAttributesViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    attributeKey?: string | null;
    attributeValue?: string | null;
    status?: Status;
    statusName?: string | null;
}

export interface GetAttributesViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetAttributesViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetAttributesViewModelResponse {
    succeeded?: boolean;
    data?: GetAttributesViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetByIdChangeDegreeViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    jobDegreeFromId?: number;
    jobDegreeFromName?: string | null;
    /** @format int32 */
    jobDegreeToId?: number;
    jobDegreeToName?: string | null;
    /** @format int32 */
    jobCategoryFromId?: number;
    jobCategoryFromName?: string | null;
    /** @format int32 */
    jobCategoryToId?: number;
    jobCategoryToName?: string | null;
    /** @format int32 */
    jobTitleFromId?: number;
    jobTitleFromName?: string | null;
    /** @format int32 */
    jobDescriptionFromId?: number;
    jobDescriptionFromName?: string | null;
    /** @format int32 */
    jobTitleToId?: number;
    jobTitleToName?: string | null;
    /** @format int32 */
    jobDescriptionToId?: number;
    jobDescriptionToName?: string | null;
    /** @format date */
    oldDegreeDueDate?: string;
    /** @format date */
    newDegreeDueDate?: string;
    /** @format date */
    oldCategoryDueDate?: string;
    /** @format date */
    newCategoryDueDate?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    note?: string | null;
}

export interface GetByIdChangeDegreeViewModelResponse {
    succeeded?: boolean;
    data?: GetByIdChangeDegreeViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetByIdChangeDueDateViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format date */
    currentDegreeDueDate?: string;
    /** @format date */
    newDegreeDueDate?: string;
    /** @format date */
    currentCategoryDueDate?: string;
    /** @format date */
    newCategoryDueDate?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string;
    note?: string | null;
}

export interface GetByIdChangeDueDateViewModelResponse {
    succeeded?: boolean;
    data?: GetByIdChangeDueDateViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetByIdChangeJobTitlesViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    newJobTitleId?: number | null;
    newJobTitleName?: string | null;
    /** @format int32 */
    newJobDescriptionId?: number | null;
    newJobDescriptionName?: string | null;
    /** @format int32 */
    oldJobTitleId?: number | null;
    oldJobTitleName?: string | null;
    /** @format int32 */
    oldJobDescriptionId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    oldJobDescriptionName?: string | null;
    note?: string | null;
}

export interface GetByIdChangeJobTitlesViewModelResponse {
    succeeded?: boolean;
    data?: GetByIdChangeJobTitlesViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetByIdCorrectingAcademicAchievementViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    degreeFromId?: number | null;
    degreeFromName?: string | null;
    /** @format int32 */
    degreeToId?: number | null;
    degreeToName?: string | null;
    /** @format int32 */
    jobCategoryFromId?: number | null;
    jobCategoryFromName?: string | null;
    /** @format int32 */
    jobCategoryToId?: number | null;
    jobCategoryToName?: string | null;
    /** @format int32 */
    jobTitleFromId?: number;
    jobTitleFromName?: string | null;
    /** @format int32 */
    jobDescriptionFromId?: number;
    jobDescriptionFromName?: string | null;
    isCertificateCalculation?: boolean | null;
    /** @format int32 */
    jobTitleToId?: number;
    jobTitleToName?: string | null;
    /** @format int32 */
    jobDescriptionToId?: number;
    jobDescriptionToName?: string | null;
    /** @format date */
    dueDateDegree?: string | null;
    /** @format date */
    dueDateCategory?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    note?: string | null;
}

export interface GetByIdCorrectingAcademicAchievementViewModelResponse {
    succeeded?: boolean;
    data?: GetByIdCorrectingAcademicAchievementViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetByIdDocVerificationViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format uuid */
    docVerificationId?: string;
    documentNumber?: string | null;
    /** @format date */
    documentDate?: string;
    recipient?: string | null;
    answered?: boolean;
    /** @format date */
    sendingDate?: string;
    note?: string | null;
}

export interface GetByIdDocVerificationViewModelResponse {
    succeeded?: boolean;
    data?: GetByIdDocVerificationViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetByIdValuationViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format uuid */
    secondaryId?: string;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string;
    recommendation?: string | null;
    /** @format int32 */
    totalPoint?: number | null;
    valuationType?: string | null;
    valuationProperties?: ValuationPropertyById[] | null;
}

export interface GetByIdValuationViewModelResponse {
    succeeded?: boolean;
    data?: GetByIdValuationViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetChangeDegreeViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    jobDegreeFromId?: number;
    jobDegreeFromName?: string | null;
    /** @format int32 */
    jobDegreeToId?: number;
    jobDegreeToName?: string | null;
    /** @format int32 */
    jobCategoryFromId?: number;
    jobCategoryFromName?: string | null;
    /** @format int32 */
    jobCategoryToId?: number;
    jobCategoryToName?: string | null;
    /** @format int32 */
    jobTitleFromId?: number;
    jobTitleFromName?: string | null;
    /** @format int32 */
    jobDescriptionFromId?: number;
    jobDescriptionFromName?: string | null;
    /** @format int32 */
    jobTitleToId?: number;
    jobTitleToName?: string | null;
    /** @format int32 */
    jobDescriptionToId?: number;
    jobDescriptionToName?: string | null;
    /** @format date */
    oldDegreeDueDate?: string;
    /** @format date */
    newDegreeDueDate?: string;
    /** @format date */
    oldCategoryDueDate?: string;
    /** @format date */
    newCategoryDueDate?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    note?: string | null;
}

export interface GetChangeDegreeViewModelPagedResult {
    items?: GetChangeDegreeViewModel[] | null;
    /** @format int32 */
    totalCount?: number;
}

export interface GetChangeDegreeViewModelPagedResultResponse {
    succeeded?: boolean;
    data?: GetChangeDegreeViewModelPagedResult;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetChangeDueDateViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format date */
    currentDegreeDueDate?: string;
    /** @format date */
    newDegreeDueDate?: string;
    /** @format date */
    currentCategoryDueDate?: string;
    /** @format date */
    newCategoryDueDate?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string;
    note?: string | null;
}

export interface GetChangeDueDateViewModelPagedResult {
    items?: GetChangeDueDateViewModel[] | null;
    /** @format int32 */
    totalCount?: number;
}

export interface GetChangeDueDateViewModelPagedResultResponse {
    succeeded?: boolean;
    data?: GetChangeDueDateViewModelPagedResult;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetChangeJobTitlesViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    newJobTitleId?: number | null;
    newJobTitleName?: string | null;
    /** @format int32 */
    newJobDescriptionId?: number | null;
    newJobDescriptionName?: string | null;
    /** @format int32 */
    oldJobTitleId?: number | null;
    oldJobTitleName?: string | null;
    /** @format int32 */
    oldJobDescriptionId?: number | null;
    oldJobDescriptionName?: string | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    note?: string | null;
}

export interface GetChangeJobTitlesViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetChangeJobTitlesViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetCompletedOrdersViewModel {
    /** @format int32 */
    countOfOrders?: number;
    teamName?: string | null;
    /** @format uuid */
    teamId?: string;
    /** @format date */
    onDate?: string;
}

export interface GetCompletedOrdersViewModelResponse {
    succeeded?: boolean;
    data?: GetCompletedOrdersViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetContactInformationByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    levelOfRelationshipId?: number | null;
    levelOfRelationshipName?: string | null;
    phoneNumber?: string | null;
    contactName?: string | null;
    notes?: string | null;
}

export interface GetContactInformationByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetContactInformationByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetContactInformationViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    levelOfRelationshipId?: number | null;
    levelOfRelationshipName?: string | null;
    phoneNumber?: string | null;
    contactName?: string | null;
    notes?: string | null;
}

export interface GetContactInformationViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetContactInformationViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetCorrectingAcademicAchievementViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    degreeFromId?: number | null;
    degreeFromName?: string | null;
    /** @format int32 */
    degreeToId?: number | null;
    degreeToName?: string | null;
    /** @format int32 */
    jobCategoryFromId?: number | null;
    jobCategoryFromName?: string | null;
    /** @format int32 */
    jobCategoryToId?: number | null;
    jobCategoryToName?: string | null;
    /** @format int32 */
    jobTitleFromId?: number;
    jobTitleFromName?: string | null;
    /** @format int32 */
    jobDescriptionFromId?: number;
    jobDescriptionFromName?: string | null;
    /** @format int32 */
    jobTitleToId?: number;
    jobTitleToName?: string | null;
    /** @format int32 */
    jobDescriptionToId?: number;
    jobDescriptionToName?: string | null;
    isCertificateCalculation?: boolean | null;
    /** @format date */
    dueDateDegree?: string | null;
    /** @format date */
    dueDateCategory?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    note?: string | null;
}

export interface GetCorrectingAcademicAchievementViewModelPagedResult {
    items?: GetCorrectingAcademicAchievementViewModel[] | null;
    /** @format int32 */
    totalCount?: number;
}

export interface GetCorrectingAcademicAchievementViewModelPagedResultResponse {
    succeeded?: boolean;
    data?: GetCorrectingAcademicAchievementViewModelPagedResult;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetCountryByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetCountryByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetCountryByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetCountryListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetCountryListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetCountryListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetCountryViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetCountryViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetCountryViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetCountryViewModelResponse {
    succeeded?: boolean;
    data?: GetCountryViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDashboardViewModel {
    /** @format int32 */
    totalEmployees?: number | null;
    /** @format int32 */
    totalAssignedTo?: number | null;
    /** @format int32 */
    totalAssignedFrom?: number | null;
    /** @format int32 */
    totalAssigned?: number | null;
    /** @format int32 */
    totalRepresentatives?: number | null;
    /** @format int32 */
    totalVacantPositions?: number | null;
    /** @format int32 */
    totalAppointedEmployees?: number | null;
    data?: any[] | null;
}

export interface GetDashboardViewModelResponse {
    succeeded?: boolean;
    data?: GetDashboardViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDepartmentByIdViewModel {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    directorateId?: number;
    directorateName?: string | null;
    /** @format int32 */
    subDirectorateId?: number;
    subDirectorateName?: string | null;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
    shortKey?: string | null;
}

export interface GetDepartmentByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetDepartmentByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDepartmentListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetDepartmentListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetDepartmentListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDepartmentViewModel {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    directorateId?: number;
    directorateName?: string | null;
    /** @format int32 */
    subDirectorateId?: number;
    subDirectorateName?: string | null;
    name?: string | null;
    shortKey?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetDepartmentViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetDepartmentViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDepartmentViewModelResponse {
    succeeded?: boolean;
    data?: GetDepartmentViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDirectorateByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    shortKey?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetDirectorateByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetDirectorateByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDirectorateListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetDirectorateListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetDirectorateListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDirectorateViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    shortKey?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetDirectorateViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetDirectorateViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDirectorateViewModelResponse {
    succeeded?: boolean;
    data?: GetDirectorateViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDisciplinaryByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    titleOfBook?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    stopPromotion?: boolean | null;
    /** @format int32 */
    countOfDayDelay?: number | null;
    disciplinaryLaw?: string | null;
    typeOfDisciplinaryName?: string | null;
    /** @format int32 */
    typeOfDisciplinaryId?: number;
    note?: string | null;
    reason?: string | null;
}

export interface GetDisciplinaryByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetDisciplinaryByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDisciplinaryViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    titleOfBook?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    stopPromotion?: boolean | null;
    /** @format int32 */
    countOfDayDelay?: number | null;
    note?: string | null;
    reason?: string | null;
    disciplinaryLaw?: string | null;
    typeOfDisciplinaryName?: string | null;
    /** @format int32 */
    typeOfDisciplinaryId?: number;
}

export interface GetDisciplinaryViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetDisciplinaryViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDisciplinaryViewModelResponse {
    succeeded?: boolean;
    data?: GetDisciplinaryViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDocVerificationViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format uuid */
    docVerificationId?: string;
    documentNumber?: string | null;
    /** @format date */
    documentDate?: string;
    recipient?: string | null;
    answered?: boolean;
    /** @format date */
    sendingDate?: string;
    note?: string | null;
}

export interface GetDocVerificationViewModelPagedResult {
    items?: GetDocVerificationViewModel[] | null;
    /** @format int32 */
    totalCount?: number;
}

export interface GetDocVerificationViewModelPagedResultResponse {
    succeeded?: boolean;
    data?: GetDocVerificationViewModelPagedResult;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDocumentByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    employeeDocumentTypeId?: number | null;
    documentAttributes?: any;
    employeeDocumentTypeName?: string | null;
    /** @format date-time */
    createdAt?: string;
    notes?: string | null;
}

export interface GetDocumentByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetDocumentByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDocumentViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    employeeDocumentTypeId?: number | null;
    employeeDocumentTypeName?: string | null;
    documentAttribute?: any;
    /** @format date-time */
    createdAt?: string;
    note?: string | null;
}

export interface GetDocumentViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetDocumentViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetDocumentViewModelResponse {
    succeeded?: boolean;
    data?: GetDocumentViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEducationInfoByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    originalDocument?: string | null;
    documentNo?: string | null;
    /** @format date */
    documentDate?: string | null;
    documentSender?: string | null;
    /** @format date */
    documentSendDate?: string | null;
    academicAchievementName?: string | null;
    academicFieldName?: string | null;
    preciseAcademicFieldName?: string | null;
    nameOfIssuingCertificate?: string | null;
    /** @format date */
    startDate?: string;
    /** @format date */
    endDate?: string;
    graduationYear?: string | null;
    isDuringRecruitment?: boolean;
    isdocumentVerify?: boolean;
    countryName?: string | null;
    studyTypeName?: string | null;
    notes?: string | null;
}

export interface GetEducationInfoByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetEducationInfoByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEducationInfoToEmployeeProfileViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    academicFieldIdIsInHiring?: number | null;
    academicFieldNameIsInHiring?: string | null;
    /** @format int32 */
    academicAchievementIdIsInHiring?: number | null;
    academicAchievementNameIsInHiring?: string | null;
    /** @format int32 */
    academicFieldIdIsCurrent?: number | null;
    academicFieldNameIsCurrent?: string | null;
    /** @format int32 */
    academicAchievementIdIsCurrent?: number | null;
    academicAchievementNameIsCurrent?: string | null;
    isDocumentVerify?: boolean | null;
}

export interface GetEducationInfoToEmployeeProfileViewModelResponse {
    succeeded?: boolean;
    data?: GetEducationInfoToEmployeeProfileViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEducationInfoViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    originalDocument?: string | null;
    documentNo?: string | null;
    /** @format date */
    documentDate?: string | null;
    documentSender?: string | null;
    /** @format date */
    documentSendDate?: string | null;
    academicAchievementName?: string | null;
    academicFieldName?: string | null;
    preciseAcademicFieldName?: string | null;
    nameOfIssuingCertificate?: string | null;
    /** @format date */
    startDate?: string;
    /** @format date */
    endDate?: string;
    graduationYear?: string | null;
    isDuringRecruitment?: boolean;
    isDocumentVerify?: boolean;
    countryName?: string | null;
    studyTypeName?: string | null;
    notes?: string | null;
}

export interface GetEducationInfoViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetEducationInfoViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEducationInfoViewModelResponse {
    succeeded?: boolean;
    data?: GetEducationInfoViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeAddressInformationViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    area?: string | null;
    district?: string | null;
    streetNo?: string | null;
    houseNo?: string | null;
    nearestPoint?: string | null;
    notes?: string | null;
    /** @format int32 */
    governorateId?: number;
    governorateName?: string | null;
    /** @format int32 */
    provinceId?: number;
    provinceName?: string | null;
    /** @format int32 */
    territoryId?: number;
    territoryName?: string | null;
    isCurrent?: boolean;
}

export interface GetEmployeeAddressInformationViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetEmployeeAddressInformationViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    notes?: string | null;
    statisticalIndex?: string | null;
    firstName?: string | null;
    secondName?: string | null;
    thirdName?: string | null;
    fourthName?: string | null;
    surName?: string | null;
    motherFirstName?: string | null;
    motherSecondName?: string | null;
    motherThirdName?: string | null;
    motherSurName?: string | null;
    genderId?: GenderEnum;
    birthPlace?: string | null;
    /** @format date */
    birthDate?: string | null;
    socialStatus?: SocialStatusEnum;
    statusWorkingId?: WorkingStatusEnum;
    nationalism?: string | null;
    religion?: string | null;
    /** @format int32 */
    countryId?: number | null;
    countryName?: string | null;
    /** @format int32 */
    directorateId?: number | null;
    /** @format int32 */
    typeOfJobId?: number | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format int32 */
    departmentId?: number | null;
    /** @format int32 */
    sectionId?: number | null;
    /** @format int32 */
    unitId?: number | null;
    /** @format int32 */
    jobDegreeId?: number | null;
    /** @format int32 */
    jobCategoryId?: number | null;
    /** @format int32 */
    jobTitleId?: number | null;
    /** @format int32 */
    jobDescriptionId?: number | null;
    motherFullName?: string | null;
}

export interface GetEmployeeByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeeByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeCourseByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    title?: string | null;
    place?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    evaluation?: string | null;
    residentEntity?: string | null;
    courseOrderNo?: string | null;
    /** @format date */
    courseOrderDate?: string | null;
    /** @format int32 */
    courseDurationInDays?: number;
    nominationOrderNo?: string | null;
    /** @format date */
    nominationOrderDate?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
}

export interface GetEmployeeCourseByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeeCourseByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeDemographicsViewModel {
    /** @format int32 */
    countPermanentEmployee?: number;
    /** @format int32 */
    countAssignmentsEmployee?: number;
    /** @format int32 */
    countAssignmentsOutEmployee?: number;
    /** @format int32 */
    countAssignmentsInEmployee?: number;
    /** @format int32 */
    countVacantPositions?: number;
    /** @format int32 */
    countOfDegreeJob?: number;
}

export interface GetEmployeeDemographicsViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeeDemographicsViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeDocVerificationViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    statisticalIndex?: string | null;
    employeeStatusName?: string | null;
    currentJobDegreeName?: string | null;
    /** @format date */
    dueDateDegree?: string;
    currentJobCategoryName?: string | null;
    /** @format date */
    dueDateCategory?: string;
    directorateName?: string | null;
    subDirectorateName?: string | null;
    jobAdministrativeOrderNo?: string | null;
    /** @format date */
    jobAdministrativeOrderDate?: string;
    hireAdministrativeOrderNo?: string | null;
    /** @format date */
    hireAdministrativeOrderDate?: string;
    academicAchievementName?: string | null;
    academicFieldName?: string | null;
    graduationYear?: string | null;
    afterJobAcademicAchievementName?: string | null;
    afterJobAcademicFieldName?: string | null;
    afterJobGraduationYear?: string | null;
}

export interface GetEmployeeDocVerificationViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeeDocVerificationViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeDocumentsByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetEmployeeDocumentsByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeeDocumentsByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeDocumentsListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetEmployeeDocumentsListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetEmployeeDocumentsListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeDocumentsTypeViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetEmployeeDocumentsTypeViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetEmployeeDocumentsTypeViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeDocumentsTypeViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeeDocumentsTypeViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeInformationViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    statisticalIndex?: string | null;
    motherFullName?: string | null;
    gender?: GenderEnum;
    birthPlace?: string | null;
    /** @format date */
    birthDate?: string | null;
    socialStatus?: SocialStatusEnum;
    notes?: string | null;
    statusWorkingId?: WorkingStatusEnum;
    nationalism?: string | null;
    religion?: string | null;
    avatar?: string | null;
    fileExtension?: string | null;
    countryName?: string | null;
    typeOfJobName?: string | null;
    medicalTest?: boolean | null;
    isReEmployed?: boolean | null;
    isBehaviorCode?: boolean | null;
    /** @format date */
    endOfServiceDate?: string | null;
}

export interface GetEmployeeInformationViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeeInformationViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeePositionByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    employeePositionType?: EmployeePositionTypeEnum;
    endAssignedOrderNo?: string | null;
    /** @format date */
    endAssignedOrderDate?: string | null;
    /** @format date */
    assignedOrderDate?: string | null;
    assignedOrderNo?: string | null;
    /** @format date */
    administrativeOrderDate?: string | null;
    administrativeOrderNo?: string | null;
    /** @format int32 */
    directorateId?: number | null;
    directorateName?: string | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format date */
    assignedDate?: string | null;
    subDirectorateName?: string | null;
    /** @format int32 */
    departmentId?: number | null;
    departmentName?: string | null;
    /** @format int32 */
    sectionId?: number | null;
    sectionName?: string | null;
    /** @format int32 */
    unitId?: number | null;
    unitName?: string | null;
    /** @format int32 */
    positionId?: number | null;
    positionName?: string | null;
    note?: string | null;
}

export interface GetEmployeePositionByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeePositionByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeePositionViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    employeePositionType?: EmployeePositionTypeEnum;
    endAssignedOrderNo?: string | null;
    /** @format date */
    endAssignedOrderDate?: string | null;
    /** @format date */
    assignedOrderDate?: string | null;
    assignedOrderNo?: string | null;
    /** @format date */
    administrativeOrderDate?: string | null;
    administrativeOrderNo?: string | null;
    /** @format int32 */
    directorateId?: number | null;
    directorateName?: string | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format date */
    assignedDate?: string | null;
    subDirectorateName?: string | null;
    /** @format int32 */
    departmentId?: number | null;
    departmentName?: string | null;
    /** @format int32 */
    sectionId?: number | null;
    sectionName?: string | null;
    /** @format int32 */
    unitId?: number | null;
    unitName?: string | null;
    /** @format int32 */
    positionId?: number | null;
    positionName?: string | null;
    note?: string | null;
}

export interface GetEmployeePositionViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetEmployeePositionViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeePositionViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeePositionViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeServiceByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    employeeName?: string | null;
    retirementCalculation?: string | null;
    promotionCalculation?: string | null;
    notes?: string | null;
}

export interface GetEmployeeServiceByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeeServiceByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeServiceViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    employeeName?: string | null;
    retirementCalculation?: string | null;
    promotionCalculation?: string | null;
    notes?: string | null;
}

export interface GetEmployeeServiceViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetEmployeeServiceViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeServiceViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeeServiceViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    statisticalIndex?: string | null;
    jobTitle?: string | null;
    pathOfProfile?: string | null;
    avatar?: string | null;
    extinctionFile?: string | null;
    attachmentSetting?: string | null;
    nationalism?: string | null;
    religion?: string | null;
    /** @format int32 */
    countryId?: number | null;
    countryName?: string | null;
}

export interface GetEmployeeViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetEmployeeViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetEmployeeViewModelResponse {
    succeeded?: boolean;
    data?: GetEmployeeViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetGovernorateByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetGovernorateByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetGovernorateByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetGovernorateListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetGovernorateListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetGovernorateListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetGovernorateViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetGovernorateViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetGovernorateViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetGovernorateViewModelResponse {
    succeeded?: boolean;
    data?: GetGovernorateViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetHandPullByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    withdrawHandPullOrderNo?: string | null;
    /** @format date-time */
    withdrawHandPullOrderDate?: string | null;
    raiseHandPullOrderNo?: string | null;
    /** @format date-time */
    raiseHandPullOrderDate?: string | null;
    note?: string | null;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface GetHandPullByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetHandPullByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetInterruptionByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format date-time */
    notificationDate?: string | null;
    reason?: string | null;
    note?: string | null;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface GetInterruptionByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetInterruptionByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobCategoryByIdViewModel {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    degreeId?: number;
    degreeName?: string | null;
    /** @format double */
    increaseAmount?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetJobCategoryByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetJobCategoryByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobCategoryListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetJobCategoryListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetJobCategoryListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobCategoryViewModel {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    degreeId?: number;
    degreeName?: string | null;
    /** @format double */
    increaseAmount?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetJobCategoryViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetJobCategoryViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobCategoryViewModelResponse {
    succeeded?: boolean;
    data?: GetJobCategoryViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobDegreeByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetJobDegreeByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetJobDegreeByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobDegreeListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetJobDegreeListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetJobDegreeListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobDegreeViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    /** @format double */
    increaseAmount?: number;
    statusName?: string | null;
    status?: Status;
}

export interface GetJobDegreeViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetJobDegreeViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobDegreeViewModelResponse {
    succeeded?: boolean;
    data?: GetJobDegreeViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobDescriptionByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetJobDescriptionByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetJobDescriptionByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobDescriptionListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetJobDescriptionListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetJobDescriptionListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobDescriptionViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetJobDescriptionViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetJobDescriptionViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobDescriptionViewModelResponse {
    succeeded?: boolean;
    data?: GetJobDescriptionViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobInformationByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format date */
    hireDate?: string;
    /** @format date */
    endOfServiceDate?: string | null;
    /** @format int32 */
    typeOfJobId?: number | null;
    /** @format uuid */
    assignedId?: string | null;
    medicalTest?: boolean | null;
    isReEmployed?: boolean | null;
    isMovedFromOutside?: boolean | null;
    /** @format int32 */
    isStillWorking?: number | null;
    isBehaviorCode?: boolean | null;
}

export interface GetJobInformationByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetJobInformationByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobTitleByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetJobTitleByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetJobTitleByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobTitleListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetJobTitleListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetJobTitleListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobTitleViewModel {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    degreeId?: number;
    degreeName?: string | null;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetJobTitleViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetJobTitleViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetJobTitleViewModelResponse {
    succeeded?: boolean;
    data?: GetJobTitleViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLawByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetLawByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetLawByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLawListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetLawListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetLawListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLawViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetLawViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetLawViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLawViewModelResponse {
    succeeded?: boolean;
    data?: GetLawViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLeaveByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    statisticalIndex?: string | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format date */
    fromDate?: string | null;
    /** @format date */
    toDate?: string | null;
    /** @format int32 */
    countOfDays?: number | null;
    /** @format int32 */
    countOfMinutes?: number | null;
    note?: string | null;
    /** @format int32 */
    countryId?: number | null;
    countryName?: string | null;
    /** @format date-time */
    dateOfAssignment?: string | null;
    noOfAssignment?: string | null;
    /** @format date-time */
    dateOfBirthCertificate?: string | null;
    noOfBirthCertificate?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date-time */
    dateOfRelease?: string | null;
    noOfRelease?: string | null;
    /** @format date-time */
    releaseDate?: string | null;
    /** @format date-time */
    dateOfStart?: string | null;
    noOfStart?: string | null;
    salaryStatusId?: SalaryStatus;
    salaryStatusName?: string | null;
    isInside?: boolean | null;
    /** @format date-time */
    dateOfPermission?: string | null;
    noOfPermission?: string | null;
    normalLeaveTypeName?: string | null;
    sicknessTypeName?: string | null;
    /** @format int32 */
    normalLeaveTypeId?: number | null;
    /** @format int32 */
    sicknessTypeId?: number | null;
}

export interface GetLeaveByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetLeaveByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLeavesBalanceByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    balance?: number | null;
    note?: string | null;
}

export interface GetLeavesBalanceByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetLeavesBalanceByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLeavesBalanceViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    balance?: number | null;
    note?: string | null;
}

export interface GetLeavesBalanceViewModelResponse {
    succeeded?: boolean;
    data?: GetLeavesBalanceViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLeavesViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    statisticalIndex?: string | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format date */
    fromDate?: string | null;
    /** @format date */
    toDate?: string | null;
    /** @format int32 */
    countOfDays?: number | null;
    /** @format int32 */
    countOfMinutes?: number | null;
    note?: string | null;
    /** @format int32 */
    countryId?: number | null;
    countryName?: string | null;
    /** @format date-time */
    dateOfAssignment?: string | null;
    noOfAssignment?: string | null;
    /** @format date-time */
    dateOfBirthCertificate?: string | null;
    noOfBirthCertificate?: string | null;
    /** @format date-time */
    releaseDate?: string | null;
    /** @format date-time */
    dateOfRelease?: string | null;
    noOfRelease?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date-time */
    dateOfStart?: string | null;
    noOfStart?: string | null;
    isInside?: boolean | null;
    salaryStatusId?: SalaryStatus;
    salaryStatusName?: string | null;
    /** @format date-time */
    dateOfPermission?: string | null;
    noOfPermission?: string | null;
    normalLeaveTypeName?: string | null;
    sicknessTypeName?: string | null;
    /** @format int32 */
    normalLeaveTypeId?: number | null;
    /** @format int32 */
    sicknessTypeId?: number | null;
}

export interface GetLeavesViewModelResponse {
    succeeded?: boolean;
    data?: GetLeavesViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLevelOfRelationshipByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetLevelOfRelationshipByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetLevelOfRelationshipByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLevelOfRelationshipListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetLevelOfRelationshipListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetLevelOfRelationshipListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLevelOfRelationshipViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetLevelOfRelationshipViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetLevelOfRelationshipViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLevelOfRelationshipViewModelResponse {
    succeeded?: boolean;
    data?: GetLevelOfRelationshipViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLogLeavesBalanceByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    countOfDay?: number | null;
    nameOfIssuing?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    note?: string | null;
}

export interface GetLogLeavesBalanceByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetLogLeavesBalanceByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLongLeaveTypeByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetLongLeaveTypeByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetLongLeaveTypeByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLongLeaveTypeListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetLongLeaveTypeListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetLongLeaveTypeListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLongLeaveTypeViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetLongLeaveTypeViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetLongLeaveTypeViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetLongLeaveTypeViewModelResponse {
    succeeded?: boolean;
    data?: GetLongLeaveTypeViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetManagementInfoByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    directorateName?: string | null;
    employeeName?: string | null;
    subDirectorateName?: string | null;
    departmentName?: string | null;
    sectionName?: string | null;
    positionName?: string | null;
    employmentDegreeName?: string | null;
    jobDegreeName?: string | null;
    jobCategoryName?: string | null;
    jobTitleName?: string | null;
    notes?: string | null;
    isCurrent?: boolean;
    isInHiring?: boolean;
}

export interface GetManagementInfoByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetManagementInfoByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetManagementInfoToEmployeeProfileViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    degreeNameIsInHiring?: string | null;
    categoryNameIsInHiring?: string | null;
    degreeNameIsCurrent?: string | null;
    categoryNameIsCurrent?: string | null;
    stopJobDegreeName?: string | null;
    jobTitleName?: string | null;
    jobDescriptionName?: string | null;
    directorateName?: string | null;
    subDirectorateName?: string | null;
    departmentName?: string | null;
    sectionName?: string | null;
    unitName?: string | null;
    positionName?: string | null;
    stopPromotion?: boolean;
}

export interface GetManagementInfoToEmployeeProfileViewModelResponse {
    succeeded?: boolean;
    data?: GetManagementInfoToEmployeeProfileViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetMarriageInformationByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    employeeName?: string | null;
    firstName?: string | null;
    secondName?: string | null;
    thirdName?: string | null;
    surName?: string | null;
    /** @format date */
    marriageDate?: string | null;
    /** @format int32 */
    childrenCount?: number | null;
    notes?: string | null;
    isCurrent?: boolean;
}

export interface GetMarriageInformationByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetMarriageInformationByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetMarriageInformationViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    employeeName?: string | null;
    firstName?: string | null;
    secondName?: string | null;
    thirdName?: string | null;
    surName?: string | null;
    /** @format date */
    marriageDate?: string | null;
    /** @format int32 */
    childrenCount?: number | null;
    notes?: string | null;
    isCurrent?: boolean;
}

export interface GetMarriageInformationViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetMarriageInformationViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetMarriageInformationViewModelResponse {
    succeeded?: boolean;
    data?: GetMarriageInformationViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetMartyrsAndWoundedByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    directorateId?: number | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format date */
    startDate?: string;
    /** @format int32 */
    jobDegreeId?: number | null;
    /** @format int32 */
    jobCategoryId?: number | null;
    /** @format int32 */
    jobTitleId?: number | null;
    /** @format int32 */
    employeePositionId?: number;
    /** @format date-time */
    endDateOfService?: string | null;
    /** @format date */
    birthdate?: string | null;
    /** @format date-time */
    retirementDate?: string | null;
    administrativeOrderNo?: string | null;
    /** @format date-time */
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    /** @format date-time */
    dateOfMartyrdom?: string | null;
    note?: string | null;
    healthStatus?: string | null;
    motherFullName?: string | null;
    genderName?: string | null;
    /** @format date */
    hireDate?: string;
    /** @format date */
    dateOfDeath?: string | null;
    employeePositionName?: string | null;
    jobTitleName?: string | null;
    directorateName?: string | null;
    subDirectorateName?: string | null;
    academicAchievementName?: string | null;
    jobDegreeName?: string | null;
    jobCategoryName?: string | null;
}

export interface GetMartyrsAndWoundedByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetMartyrsAndWoundedByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetMartyrsAndWoundedViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    directorateId?: number | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format date */
    startDate?: string;
    /** @format int32 */
    jobDegreeId?: number | null;
    /** @format int32 */
    jobCategoryId?: number | null;
    /** @format int32 */
    jobTitleId?: number | null;
    /** @format int32 */
    employeePositionId?: number;
    /** @format date-time */
    endDateOfService?: string | null;
    /** @format date */
    birthdate?: string | null;
    /** @format date-time */
    retirementDate?: string | null;
    administrativeOrderNo?: string | null;
    /** @format date-time */
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    /** @format date-time */
    dateOfMartyrdom?: string | null;
    note?: string | null;
    healthStatus?: string | null;
    motherFullName?: string | null;
    genderName?: string | null;
    /** @format date */
    hireDate?: string;
    /** @format date */
    dateOfDeath?: string | null;
    employeePositionName?: string | null;
    jobTitleName?: string | null;
    directorateName?: string | null;
    subDirectorateName?: string | null;
    academicAchievementName?: string | null;
    jobDegreeName?: string | null;
    jobCategoryName?: string | null;
}

export interface GetMartyrsAndWoundedViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetMartyrsAndWoundedViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetMartyrsAndWoundedViewModelResponse {
    succeeded?: boolean;
    data?: GetMartyrsAndWoundedViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetMovementByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format int32 */
    fromDirectorateId?: number | null;
    /** @format int32 */
    fromSubDirectorateId?: number | null;
    /** @format int32 */
    fromDepartmentId?: number | null;
    /** @format int32 */
    fromSectionId?: number | null;
    /** @format int32 */
    fromUniteId?: number | null;
    /** @format int32 */
    toDirectorateId?: number | null;
    /** @format int32 */
    toSubDirectorateId?: number | null;
    /** @format int32 */
    toDepartmentId?: number | null;
    /** @format int32 */
    toSectionId?: number | null;
    /** @format int32 */
    toUnitId?: number | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    note?: string | null;
}

export interface GetMovementByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetMovementByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetNormalLeaveTypeByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetNormalLeaveTypeByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetNormalLeaveTypeByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetNormalLeaveTypeListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetNormalLeaveTypeListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetNormalLeaveTypeListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetNormalLeaveTypeViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetNormalLeaveTypeViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetNormalLeaveTypeViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetNormalLeaveTypeViewModelResponse {
    succeeded?: boolean;
    data?: GetNormalLeaveTypeViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetPositionByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetPositionByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetPositionByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetPositionListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetPositionListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetPositionListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetPositionViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetPositionViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetPositionViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetPositionViewModelResponse {
    succeeded?: boolean;
    data?: GetPositionViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetPreciseAcademicFieldByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetPreciseAcademicFieldByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetPreciseAcademicFieldByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetPreciseAcademicFieldListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetPreciseAcademicFieldListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetPreciseAcademicFieldListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetPreciseAcademicFieldViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetPreciseAcademicFieldViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetPreciseAcademicFieldViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetPreciseAcademicFieldViewModelResponse {
    succeeded?: boolean;
    data?: GetPreciseAcademicFieldViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetPromotionByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int64 */
    sentPromotionGroupId?: number | null;
    sentPromotionGroupName?: string | null;
    /** @format int32 */
    degreeFromId?: number | null;
    degreeFromName?: string | null;
    /** @format int32 */
    degreeToId?: number | null;
    degreeToName?: string | null;
    /** @format int32 */
    jobCategoryFromId?: number | null;
    jobCategoryFromName?: string | null;
    /** @format int32 */
    jobCategoryToId?: number | null;
    jobCategoryToName?: string | null;
    /** @format uuid */
    oldEducationInformationId?: string | null;
    oldEducationInformationName?: string | null;
    /** @format uuid */
    newEducationInformationId?: string | null;
    newEducationInformationName?: string | null;
    /** @format date */
    dueDateDegree?: string | null;
    /** @format date */
    dueDateCategory?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    /** @format int32 */
    categoryPerMonth?: number | null;
    /** @format int32 */
    serviceRecycle?: number | null;
    /** @format int32 */
    typeOfChange?: number | null;
    note?: string | null;
}

export interface GetPromotionByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetPromotionByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetPromotionViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int64 */
    sentPromotionGroupId?: number | null;
    sentPromotionGroupName?: string | null;
    /** @format int32 */
    degreeFromId?: number | null;
    degreeFromName?: string | null;
    /** @format int32 */
    degreeToId?: number | null;
    degreeToName?: string | null;
    /** @format int32 */
    jobCategoryFromId?: number | null;
    jobCategoryFromName?: string | null;
    /** @format int32 */
    jobCategoryToId?: number | null;
    jobCategoryToName?: string | null;
    /** @format uuid */
    oldEducationInformationId?: string | null;
    oldEducationInformationName?: string | null;
    /** @format uuid */
    newEducationInformationId?: string | null;
    newEducationInformationName?: string | null;
    /** @format date */
    dueDateDegree?: string | null;
    /** @format date */
    dueDateCategory?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    /** @format int32 */
    categoryPerMonth?: number | null;
    /** @format int32 */
    serviceRecycle?: number | null;
    /** @format int32 */
    typeOfChange?: number | null;
    note?: string | null;
}

export interface GetPromotionViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetPromotionViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetPromotionViewModelResponse {
    succeeded?: boolean;
    data?: GetPromotionViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetProvinceByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetProvinceByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetProvinceByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetProvinceListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetProvinceListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetProvinceListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetProvinceViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetProvinceViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetProvinceViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetProvinceViewModelResponse {
    succeeded?: boolean;
    data?: GetProvinceViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetResignationByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    reason?: string | null;
    /** @format date-time */
    requestDate?: string | null;
    requestNo?: string | null;
    resignationOrderNo?: string | null;
    /** @format date-time */
    resignationOrderDate?: string | null;
    separationOrderNo?: string | null;
    /** @format date-time */
    separationOrderDate?: string | null;
    note?: string | null;
    /** @format date */
    hireDate?: string;
    genderName?: string | null;
}

export interface GetResignationByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetResignationByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetResignationViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    employeeName?: string | null;
    reason?: string | null;
    /** @format date-time */
    requestDate?: string | null;
    requestNo?: string | null;
    resignationOrderNo?: string | null;
    /** @format date-time */
    resignationOrderDate?: string | null;
    separationOrderNo?: string | null;
    /** @format date-time */
    separationOrderDate?: string | null;
    note?: string | null;
}

export interface GetResignationViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetResignationViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetResignationViewModelResponse {
    succeeded?: boolean;
    data?: GetResignationViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetRetirementByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    directorateId?: number | null;
    statisticalIndex?: string | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format date-time */
    startDate?: string | null;
    /** @format int32 */
    academicAchievementId?: number | null;
    /** @format int32 */
    jobDegreeId?: number | null;
    /** @format int32 */
    jobCategoryId?: number | null;
    /** @format int32 */
    jobTitleId?: number | null;
    decisionToFixAge?: string | null;
    /** @format uuid */
    employeePositionId?: string | null;
    /** @format date-time */
    endDateOfService?: string | null;
    /** @format date-time */
    birthdate?: string | null;
    /** @format int32 */
    retirementDate?: number;
    administrativeOrderNo?: string | null;
    /** @format date-time */
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    note?: string | null;
}

export interface GetRetirementByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetRetirementByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetRetirementViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    directorateId?: number | null;
    statisticalIndex?: string | null;
    directorateName?: string | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    subDirectorateName?: string | null;
    /** @format date-time */
    startDate?: string | null;
    /** @format int32 */
    academicAchievementId?: number | null;
    academicAchievementName?: string | null;
    /** @format int32 */
    jobDegreeId?: number | null;
    jobDegreeName?: string | null;
    /** @format int32 */
    jobCategoryId?: number | null;
    jobCategoryName?: string | null;
    /** @format int32 */
    jobTitleId?: number | null;
    jobTitleName?: string | null;
    decisionToFixAge?: string | null;
    /** @format uuid */
    employeePositionId?: string | null;
    /** @format date-time */
    endDateOfService?: string | null;
    /** @format date-time */
    birthdate?: string | null;
    /** @format int32 */
    retirementDate?: number;
    administrativeOrderNo?: string | null;
    /** @format date-time */
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    note?: string | null;
}

export interface GetRetirementViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetRetirementViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetRetirementViewModelResponse {
    succeeded?: boolean;
    data?: GetRetirementViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSectionByIdViewModel {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    shortKey?: string | null;
    /** @format int32 */
    departmentId?: number;
    directorateName?: string | null;
    subDirectorateName?: string | null;
    departmentName?: string | null;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetSectionByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetSectionByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSectionListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetSectionListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetSectionListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSectionViewModel {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    /** @format int32 */
    departmentId?: number;
    directorateName?: string | null;
    subDirectorateName?: string | null;
    departmentName?: string | null;
    name?: string | null;
    shortKey?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetSectionViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetSectionViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSectionViewModelResponse {
    succeeded?: boolean;
    data?: GetSectionViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetServiceCalculationByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    typeOfServiceId?: number;
    /** @format int32 */
    countOfMonth?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    isPoliticalTermination?: boolean | null;
    notes?: string | null;
}

export interface GetServiceCalculationByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetServiceCalculationByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetServiceCalculationViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    typeOfServiceId?: number;
    /** @format int32 */
    countOfMonth?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    isPoliticalTermination?: boolean | null;
    notes?: string | null;
    typeOfServiceName?: string | null;
}

export interface GetServiceCalculationViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetServiceCalculationViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetServiceCalculationViewModelResponse {
    succeeded?: boolean;
    data?: GetServiceCalculationViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSicknessTypeByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetSicknessTypeByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetSicknessTypeByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSicknessTypeListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetSicknessTypeListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetSicknessTypeListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSicknessTypeViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetSicknessTypeViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetSicknessTypeViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSicknessTypeViewModelResponse {
    succeeded?: boolean;
    data?: GetSicknessTypeViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStatsPromotionsViewModel {
    employeeJobCode?: string | null;
    employeeStatisticalIndex?: string | null;
    employeeLotNumber?: string | null;
    employeeName?: string | null;
    newJobTitleName?: string | null;
    oldJobTitleName?: string | null;
    degreeFromName?: string | null;
    degreeToName?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    /** @format date */
    dueDateDegree?: string | null;
    /** @format date */
    dueDateCategory?: string | null;
    note?: string | null;
    status?: Status;
    attachments?: Attachments[] | null;
    newEducationInformation?: EducationInformation;
    oldEducationInformation?: EducationInformation;
    thanksAndSeniorities?: ThanksAndSeniority[] | null;
    employeeDisciplinaries?: EmployeeDisciplinary[] | null;
    leaves?: Leaves[] | null;
}

export interface GetStatsPromotionsViewModelResponse {
    succeeded?: boolean;
    data?: GetStatsPromotionsViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyExtensionOrderTypeByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetStudyExtensionOrderTypeByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyExtensionOrderTypeByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyExtensionOrderTypeListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetStudyExtensionOrderTypeListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetStudyExtensionOrderTypeListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyExtensionOrderTypeViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetStudyExtensionOrderTypeViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetStudyExtensionOrderTypeViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyExtensionOrderTypeViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyExtensionOrderTypeViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyFilesByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    documentNo?: string | null;
    /** @format date */
    documentDate?: string | null;
    notes?: string | null;
}

export interface GetStudyFilesByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyFilesByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyLeaveByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format uuid */
    studyFileId?: string | null;
    studyFileDocumentNo?: string | null;
    /** @format int32 */
    studyStatusId?: number | null;
    studyStatusName?: string | null;
    /** @format int32 */
    academicFieldId?: number;
    academicFieldName?: string | null;
    /** @format int32 */
    studyResultId?: number | null;
    studyResultName?: string | null;
    /** @format int32 */
    academicAchievementId?: number | null;
    academicAchievementName?: string | null;
    /** @format int32 */
    academicCertificateTypeId?: number;
    academicCertificateTypeName?: string | null;
    /** @format int32 */
    studyPeriodTime?: number | null;
    acceptanceYear?: string | null;
    nameOfIssuingCertificate?: string | null;
    financialInsuranceNo?: string | null;
    /** @format date */
    financialInsuranceDate?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    /** @format int32 */
    countryId?: number | null;
    countryName?: string | null;
    notes?: string | null;
}

export interface GetStudyLeaveByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyLeaveByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyLeaveExtensionByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    orderNo?: string | null;
    /** @format int32 */
    studyExtensionOrderTypeId?: number | null;
    studyExtensionOrderTypeName?: string | null;
    /** @format uuid */
    studyFileId?: string | null;
    /** @format int32 */
    countOfDay?: number;
    studyFileDocumentNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format date */
    fromDate?: string | null;
    /** @format date */
    toDate?: string | null;
    notes?: string | null;
}

export interface GetStudyLeaveExtensionByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyLeaveExtensionByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyLeaveNotificationViewModel {
    /** @format uuid */
    employeeId?: string;
    employeeFullName?: string | null;
    /** @format int32 */
    studyPeriodTime?: number | null;
    /** @format date */
    releaseOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    /** @format int32 */
    remainingDays?: number;
}

export interface GetStudyLeaveNotificationViewModelPagedResult {
    items?: GetStudyLeaveNotificationViewModel[] | null;
    /** @format int32 */
    totalCount?: number;
}

export interface GetStudyLeaveNotificationViewModelPagedResultResponse {
    succeeded?: boolean;
    data?: GetStudyLeaveNotificationViewModelPagedResult;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyLeaveStatisticsViewModel {
    /** @format int32 */
    certificateTypeCount?: number;
    /** @format int32 */
    studyTypeCount?: number;
    /** @format int32 */
    stopCount?: number;
    certificateTypeList?: StringInt32ValueTuple[] | null;
    studyTypeList?: StringInt32Tuple[] | null;
    stopList?: StringInt32ValueTuple[] | null;
}

export interface GetStudyLeaveStatisticsViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyLeaveStatisticsViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyResultByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetStudyResultByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyResultByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyResultListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetStudyResultListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetStudyResultListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyResultViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetStudyResultViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetStudyResultViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyResultViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyResultViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyStatusByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetStudyStatusByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyStatusByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyStatusListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetStudyStatusListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetStudyStatusListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyStatusViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetStudyStatusViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetStudyStatusViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyStatusViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyStatusViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyTypeByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetStudyTypeByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyTypeByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyTypeListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetStudyTypeListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetStudyTypeListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyTypeViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetStudyTypeViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetStudyTypeViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetStudyTypeViewModelResponse {
    succeeded?: boolean;
    data?: GetStudyTypeViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSubDirectorateByIdViewModel {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    directorateId?: number;
    directorateName?: string | null;
    name?: string | null;
    statusName?: string | null;
    shortKey?: string | null;
    status?: Status;
}

export interface GetSubDirectorateByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetSubDirectorateByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSubDirectorateListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetSubDirectorateListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetSubDirectorateListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSubDirectorateViewModel {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    directorateId?: number;
    directorateName?: string | null;
    name?: string | null;
    shortKey?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetSubDirectorateViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetSubDirectorateViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetSubDirectorateViewModelResponse {
    succeeded?: boolean;
    data?: GetSubDirectorateViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTerritoryByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTerritoryByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetTerritoryByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTerritoryListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetTerritoryListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTerritoryListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTerritoryViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTerritoryViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTerritoryViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTerritoryViewModelResponse {
    succeeded?: boolean;
    data?: GetTerritoryViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetThanksAndSeniorityByIdViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    employeeFullName?: string | null;
    /** @format int32 */
    typeOfBook?: number;
    /** @format int32 */
    typeOfSeniority?: number;
    bookNo?: string | null;
    /** @format date */
    dateOfBook?: string;
    bookIssueName?: string | null;
    reason?: string | null;
    /** @format int32 */
    countOfMonths?: number;
    isDocumentVerify?: boolean | null;
    /** @format date */
    calculationDate?: string | null;
    isCalculation?: boolean | null;
    note?: string | null;
}

export interface GetThanksAndSeniorityByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetThanksAndSeniorityByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetThanksAndSeniorityViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    typeOfBook?: number;
    /** @format int32 */
    typeOfSeniority?: number;
    bookNo?: string | null;
    /** @format date */
    dateOfBook?: string;
    bookIssueName?: string | null;
    reason?: string | null;
    /** @format int32 */
    countOfMonths?: number;
    isDocumentVerify?: boolean | null;
    /** @format date */
    calculationDate?: string | null;
    isCalculation?: boolean | null;
    note?: string | null;
}

export interface GetThanksAndSeniorityViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetThanksAndSeniorityViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfAssignmentByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfAssignmentByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfAssignmentByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfAssignmentListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetTypeOfAssignmentListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfAssignmentListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfAssignmentViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfAssignmentViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfAssignmentViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfAssignmentViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfAssignmentViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfBookByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfBookByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfBookByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfBookListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetTypeOfBookListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfBookListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfBookViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfBookViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfBookViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfBookViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfBookViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfDisciplinaryByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    countOfDayDelay?: number;
}

export interface GetTypeOfDisciplinaryByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfDisciplinaryByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfDisciplinaryListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    /** @format int32 */
    countOfDayDelay?: number;
}

export interface GetTypeOfDisciplinaryListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfDisciplinaryListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfDisciplinaryViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    /** @format int32 */
    countOfDayDelay?: number;
    status?: Status;
}

export interface GetTypeOfDisciplinaryViewModelPagedResult {
    items?: GetTypeOfDisciplinaryViewModel[] | null;
    /** @format int32 */
    totalCount?: number;
}

export interface GetTypeOfDisciplinaryViewModelPagedResultResponse {
    succeeded?: boolean;
    data?: GetTypeOfDisciplinaryViewModelPagedResult;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfJobByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfJobByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfJobByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfJobListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetTypeOfJobListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfJobListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfJobViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfJobViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfJobViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfJobViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfJobViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfLeaveByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfLeaveByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfLeaveByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfLeaveListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetTypeOfLeaveListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfLeaveListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfLeaveViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfLeaveViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfLeaveViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfLeaveViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfLeaveViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfSeniorityByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfSeniorityByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfSeniorityByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfSeniorityListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetTypeOfSeniorityListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfSeniorityListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfSeniorityViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfSeniorityViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfSeniorityViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfSeniorityViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfSeniorityViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfServiceByIdViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfServiceByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfServiceByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfServiceListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetTypeOfServiceListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfServiceListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfServiceViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetTypeOfServiceViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetTypeOfServiceViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetTypeOfServiceViewModelResponse {
    succeeded?: boolean;
    data?: GetTypeOfServiceViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetUnitByIdViewModel {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    /** @format int32 */
    departmentId?: number;
    /** @format int32 */
    sectionId?: number;
    directorateName?: string | null;
    subDirectorateName?: string | null;
    departmentName?: string | null;
    shortKey?: string | null;
    sectionName?: string | null;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetUnitByIdViewModelResponse {
    succeeded?: boolean;
    data?: GetUnitByIdViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetUnitListViewModel {
    /** @format int32 */
    id?: number;
    name?: string | null;
}

export interface GetUnitListViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetUnitListViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetUnitViewModel {
    /** @format int32 */
    id?: number;
    shortKey?: string | null;
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    /** @format int32 */
    departmentId?: number;
    /** @format int32 */
    sectionId?: number;
    directorateName?: string | null;
    subDirectorateName?: string | null;
    departmentName?: string | null;
    sectionName?: string | null;
    name?: string | null;
    statusName?: string | null;
    status?: Status;
}

export interface GetUnitViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: GetUnitViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetUnitViewModelResponse {
    succeeded?: boolean;
    data?: GetUnitViewModel;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface GetValuationsViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format uuid */
    secondaryId?: string;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string;
    recommendation?: string | null;
    /** @format int32 */
    totalPoint?: number | null;
    valuationType?: string | null;
}

export interface GetValuationsViewModelPagedResult {
    items?: GetValuationsViewModel[] | null;
    /** @format int32 */
    totalCount?: number;
}

export interface GetValuationsViewModelPagedResultResponse {
    succeeded?: boolean;
    data?: GetValuationsViewModelPagedResult;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface Governorate {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    addressInformation?: AddressInformation[] | null;
}

export interface GuidChangeStatusCommand {
    /** @format uuid */
    id?: string;
    statusId?: Status;
    tableName?: TableNames;
    /** @format uuid */
    teamId?: string | null;
    teamName?: string | null;
}

export interface HandPull {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    withdrawHandPullOrderNo?: string | null;
    /** @format date-time */
    withdrawHandPullOrderDate?: string | null;
    raiseHandPullOrderNo?: string | null;
    /** @format date-time */
    raiseHandPullOrderDate?: string | null;
    note?: string | null;
    employee?: Employees;
}

/** @format int32 */
export enum HealthStatus {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
}

export interface Int32ChangeStatusCommand {
    /** @format int32 */
    id?: number;
    statusId?: Status;
    tableName?: TableNames;
    /** @format uuid */
    teamId?: string | null;
    teamName?: string | null;
}

export interface Int32StringDictionaryResponse {
    succeeded?: boolean;
    data?: Record<string, string | null>;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface Interruption {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format date-time */
    notificationDate?: string | null;
    reason?: string | null;
    note?: string | null;
    employee?: Employees;
}

export interface JobCategory {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format int32 */
    degreeId?: number;
    /** @format double */
    increaseAmount?: number;
    name?: string | null;
    /** @format int32 */
    index?: number;
    /** @format int32 */
    nextPromotion?: number;
    degree?: JobDegree;
    promotions?: Promotion[] | null;
    correctingAcademicAchievementDegreeFrom?: CorrectingAcademicAchievements[] | null;
    correctingAcademicAchievementJobCategoryTo?: CorrectingAcademicAchievements[] | null;
    changeDegreeFrom?: ChangeDegrees[] | null;
    changeDegreeTo?: ChangeDegrees[] | null;
}

export interface JobDegree {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    /** @format int32 */
    index?: number;
    /** @format double */
    increaseAmount?: number;
    /** @format int32 */
    nextPromotion?: number;
    changeDegreeFrom?: ChangeDegrees[] | null;
    changeDegreeTo?: ChangeDegrees[] | null;
    jobCategory?: JobCategory[] | null;
    academicAchievement?: AcademicAchievement[] | null;
    jobTitle?: JobTitle[] | null;
    managementInformationEmploymentDegree?: ManagementInformation[] | null;
    managementInformationStopJobDegree?: ManagementInformation[] | null;
    correctingAcademicAchievementDegreeFrom?: CorrectingAcademicAchievements[] | null;
    promotions?: Promotion[] | null;
    correctingAcademicAchievementDegreeTo?: CorrectingAcademicAchievements[] | null;
}

export interface JobDescription {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    managementInformation?: ManagementInformation[] | null;
    changeJobTitleNewJobDescription?: ChangeJobTitle[] | null;
    changeJobTitleOldJobDescription?: ChangeJobTitle[] | null;
    correctingAcademicAchievementsDescriptionFrom?: CorrectingAcademicAchievements[] | null;
    correctingAcademicAchievementsDescriptionTo?: CorrectingAcademicAchievements[] | null;
    changeDegreeJobDescriptionFrom?: ChangeDegrees[] | null;
    changeDegreeJobDescriptionTo?: ChangeDegrees[] | null;
}

export interface JobInformation {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format date */
    hireDate?: string;
    /** @format date */
    endOfServiceDate?: string | null;
    /** @format int32 */
    typeOfJobId?: number | null;
    /** @format uuid */
    assignedId?: string | null;
    medicalTest?: boolean | null;
    isReEmployed?: boolean | null;
    isMovedFromOutside?: boolean | null;
    /** @format int32 */
    isStillWorking?: number | null;
    isBehaviorCode?: boolean | null;
    employee?: Employees;
    typeOfJob?: TypeOfJob;
}

export interface JobTitle {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format int32 */
    degreeId?: number;
    name?: string | null;
    degree?: JobDegree;
    managementInformation?: ManagementInformation[] | null;
    changeJobTitleNewJobTitle?: ChangeJobTitle[] | null;
    changeJobTitleOldJobTitle?: ChangeJobTitle[] | null;
    correctingAcademicAchievementsJobTitleFrom?: CorrectingAcademicAchievements[] | null;
    correctingAcademicAchievementsJobTitleTo?: CorrectingAcademicAchievements[] | null;
    changeDegreeJobTitleFrom?: ChangeDegrees[] | null;
    changeDegreeJobTitleTo?: ChangeDegrees[] | null;
}

export interface Laws {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    employeeApplicableLaws?: EmployeeApplicableLaws[] | null;
}

/** @format int32 */
export enum LeaveTypes {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
    Value4 = 4,
    Value5 = 5,
    Value6 = 6,
}

export interface Leaves {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    normalLeaveTypeId?: number | null;
    typeOfLeaveId?: LeaveTypes;
    /** @format int32 */
    sicknessTypeId?: number | null;
    /** @format int32 */
    longLeaveTypeId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format date */
    fromDate?: string | null;
    /** @format date */
    toDate?: string | null;
    /** @format int32 */
    countOfDays?: number | null;
    /** @format int32 */
    countOfMinutes?: number | null;
    salaryStatusId?: SalaryStatus;
    isInside?: boolean | null;
    note?: string | null;
    /** @format int32 */
    countryId?: number | null;
    /** @format date-time */
    dateOfAssignment?: string | null;
    noOfAssignment?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date-time */
    dateOfBirthCertificate?: string | null;
    noOfBirthCertificate?: string | null;
    /** @format date-time */
    dateOfRelease?: string | null;
    /** @format date-time */
    releaseDate?: string | null;
    noOfRelease?: string | null;
    /** @format date-time */
    dateOfStart?: string | null;
    noOfStart?: string | null;
    /** @format date-time */
    dateOfPermission?: string | null;
    noOfPermission?: string | null;
    country?: Country;
    employee?: Employees;
    longLeaveType?: LongLeaveType;
    normalLeaveType?: NormalLeaveType;
    sicknessType?: SicknessType;
}

export interface LeavesBalance {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format int32 */
    balance?: number | null;
    note?: string | null;
    employee?: Employees;
}

export interface LevelOfRelationship {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    contactInformation?: ContactInformation[] | null;
}

export interface LogLeavesBalance {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    countOfDay?: number | null;
    nameOfIssuing?: string | null;
    bookNo?: string | null;
    typeOfLeaveId?: LeaveTypes;
    /** @format date */
    bookDate?: string | null;
    note?: string | null;
    employee?: Employees;
}

export interface LogPromotionWithholding {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format date */
    scheduledPromotionDate?: string | null;
    /** @format date */
    withholdingDate?: string | null;
    reasonForWithholding?: string | null;
    notes?: string | null;
    employee?: Employees;
}

export interface LongLeaveType {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    leaves?: Leaves[] | null;
}

export interface ManagementInformation {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format int32 */
    departmentId?: number | null;
    /** @format int32 */
    sectionId?: number | null;
    /** @format int32 */
    unitId?: number | null;
    /** @format int32 */
    positionId?: number;
    /** @format int32 */
    employmentDegreeId?: number;
    /** @format int32 */
    jobTitleId?: number;
    /** @format int32 */
    jobDescriptionId?: number;
    /** @format int32 */
    stopJobDegreeId?: number | null;
    notes?: string | null;
    isCurrent?: boolean;
    isInHiring?: boolean;
    department?: Departments;
    directorate?: Directorates;
    employee?: Employees;
    employmentDegree?: JobDegree;
    jobDescription?: JobDescription;
    jobTitle?: JobTitle;
    position?: Position;
    section?: Sections;
    stopJobDegree?: JobDegree;
    subDirectorate?: SubDirectorates;
    unit?: Units;
}

export interface MarriageInformation {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string | null;
    firstName?: string | null;
    secondName?: string | null;
    thirdName?: string | null;
    surName?: string | null;
    fullName?: string | null;
    /** @format date */
    marriageDate?: string | null;
    /** @format int32 */
    childrenCount?: number | null;
    notes?: string | null;
    isCurrent?: boolean;
    employee?: Employees;
}

export interface MartyrsAndWounded {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format date */
    dateOfDeath?: string | null;
    /** @format date-time */
    endDateOfService?: string | null;
    /** @format date-time */
    retirementDate?: string | null;
    administrativeOrderNo?: string | null;
    /** @format date-time */
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    status?: Status;
    note?: string | null;
    /** @format date-time */
    dateOfMartyrdom?: string | null;
    healthStatus?: HealthStatus;
    employee?: Employees;
}

export interface Movements {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format int32 */
    fromDirectorateId?: number | null;
    /** @format int32 */
    fromSubDirectorateId?: number | null;
    /** @format int32 */
    fromDepartmentId?: number | null;
    /** @format int32 */
    fromSectionId?: number | null;
    /** @format int32 */
    fromUniteId?: number | null;
    /** @format int32 */
    toDirectorateId?: number | null;
    /** @format int32 */
    toSubDirectorateId?: number | null;
    /** @format int32 */
    toDepartmentId?: number | null;
    /** @format int32 */
    toSectionId?: number | null;
    /** @format int32 */
    toUnitId?: number | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    note?: string | null;
    employee?: Employees;
    fromDepartment?: Departments;
    fromDirectorate?: Directorates;
    fromSection?: Sections;
    fromSubDirectorate?: SubDirectorates;
    fromUnite?: Units;
    toDepartment?: Departments;
    toDirectorate?: Directorates;
    toSection?: Sections;
    toSubDirectorate?: SubDirectorates;
    toUnit?: Units;
}

export interface NormalLeaveType {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    leaves?: Leaves[] | null;
}

export interface OldEmployeePosition {
    /** @format uuid */
    id?: string;
    endAssignedOrderNo?: string | null;
    /** @format date */
    endAssignedOrderDate?: string | null;
}

export interface Position {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    managementInformation?: ManagementInformation[] | null;
    employeePositions?: EmployeePosition[] | null;
}

export interface PreciseAcademicField {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    educationInformation?: EducationInformation[] | null;
}

export interface ProblemDetails {
    type?: string | null;
    title?: string | null;
    /** @format int32 */
    status?: number | null;
    detail?: string | null;
    instance?: string | null;
    [key: string]: any;
}

export interface Promotion {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format int64 */
    sentPromotionGroupId?: number | null;
    /** @format int32 */
    jobDegreeId?: number;
    /** @format int32 */
    jobCategoryId?: number;
    /** @format date */
    dueDateDegree?: string | null;
    /** @format date */
    dueDateCategory?: string | null;
    stopPromotion?: boolean;
    /** @format int32 */
    serviceRecycle?: number | null;
    note?: string | null;
    employee?: Employees;
    sentPromotionGroup?: PromotionGroup;
    jobDegree?: JobDegree;
    jobCategory?: JobCategory;
}

export interface PromotionGroup {
    /** @format int64 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    groupName?: string | null;
    /** @format date */
    groupSendDate?: string | null;
    /** @format date */
    groupDoneDate?: string | null;
    /** @format int32 */
    countEmployee?: number | null;
    notes?: string | null;
    promotion?: Promotion[] | null;
}

export interface Province {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    addressInformation?: AddressInformation[] | null;
}

export interface Resignation {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    reason?: string | null;
    /** @format date-time */
    requestDate?: string | null;
    requestNo?: string | null;
    resignationOrderNo?: string | null;
    /** @format date-time */
    resignationOrderDate?: string | null;
    separationOrderNo?: string | null;
    /** @format date-time */
    separationOrderDate?: string | null;
    note?: string | null;
    employee?: Employees;
}

/** @format int32 */
export enum SalaryStatus {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
    Value4 = 4,
}

/** @format int32 */
export enum SearchBy {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
}

export interface Sections {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    /** @format int32 */
    departmentId?: number;
    name?: string | null;
    shortKey?: string | null;
    department?: Departments;
    directorate?: Directorates;
    managementInformation?: ManagementInformation[] | null;
    movementsFromSection?: Movements[] | null;
    movementsToSection?: Movements[] | null;
    subDirectorate?: SubDirectorates;
    employeePositions?: EmployeePosition[] | null;
    units?: Units[] | null;
}

export interface ServiceCalculation {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    typeOfServiceId?: number;
    /** @format int32 */
    countOfMonth?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    isPoliticalTermination?: boolean | null;
    notes?: string | null;
    employee?: Employees;
    typeOfService?: TypeOfService;
}

export interface SicknessType {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    leaves?: Leaves[] | null;
}

/** @format int32 */
export enum SocialStatusEnum {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
}

/** @format int32 */
export enum Status {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
    Value33 = 33,
    Value44 = 44,
    Value55 = 55,
    Value66 = 66,
    Value77 = 77,
    Value11 = -1,
}

export interface StringInt32Tuple {
    item1?: string | null;
    /** @format int32 */
    item2?: number;
}

export type StringInt32ValueTuple = object;

export interface StudyExtensionOrderType {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    studyLeaveExtension?: StudyLeaveExtension[] | null;
}

export interface StudyFile {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    documentNo?: string | null;
    /** @format date */
    documentDate?: string | null;
    notes?: string | null;
    employee?: Employees;
    studyLeave?: StudyLeave[] | null;
    studyLeaveExtension?: StudyLeaveExtension[] | null;
}

export interface StudyFileViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    documentNo?: string | null;
    /** @format date */
    documentDate?: string | null;
    notes?: string | null;
}

export interface StudyFileViewModelPagedResult {
    items?: StudyFileViewModel[] | null;
    /** @format int32 */
    totalCount?: number;
}

export interface StudyFileViewModelPagedResultResponse {
    succeeded?: boolean;
    data?: StudyFileViewModelPagedResult;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface StudyLeave {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format uuid */
    studyFileId?: string | null;
    /** @format int32 */
    academicCertificateTypeId?: number | null;
    /** @format int32 */
    academicAchievementId?: number | null;
    /** @format int32 */
    academicFieldId?: number | null;
    /** @format int32 */
    studyPeriodTime?: number | null;
    acceptanceYear?: string | null;
    nameOfIssuingCertificate?: string | null;
    financialInsuranceNo?: string | null;
    /** @format date */
    financialInsuranceDate?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    /** @format int32 */
    countryId?: number | null;
    /** @format int32 */
    studyStatusId?: number | null;
    /** @format int32 */
    studyResultId?: number | null;
    notes?: string | null;
    academicAchievement?: AcademicAchievement;
    academicCertificateType?: AcademicCertificateType;
    academicField?: AcademicField;
    employee?: Employees;
    studyFile?: StudyFile;
    studyResult?: StudyResult;
    studyStatus?: StudyStatus;
    country?: Country;
}

export interface StudyLeaveExtension {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format uuid */
    studyFileId?: string | null;
    /** @format int32 */
    studyExtensionOrderTypeId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format date */
    fromDate?: string | null;
    /** @format int32 */
    countOfDay?: number;
    /** @format date */
    toDate?: string | null;
    notes?: string | null;
    studyFile?: StudyFile;
    employee?: Employees;
    studyExtensionOrderType?: StudyExtensionOrderType;
}

export interface StudyLeaveExtensionViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    orderNo?: string | null;
    /** @format int32 */
    studyExtensionOrderTypeId?: number | null;
    studyExtensionOrderTypeName?: string | null;
    /** @format int32 */
    countOfDay?: number;
    /** @format uuid */
    studyFileId?: string | null;
    studyFileDocumentNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format date */
    fromDate?: string | null;
    /** @format date */
    toDate?: string | null;
    notes?: string | null;
}

export interface StudyLeaveExtensionViewModelPagedResult {
    items?: StudyLeaveExtensionViewModel[] | null;
    /** @format int32 */
    totalCount?: number;
}

export interface StudyLeaveExtensionViewModelPagedResultResponse {
    succeeded?: boolean;
    data?: StudyLeaveExtensionViewModelPagedResult;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface StudyLeaveViewModel {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    fullName?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    statusName?: string | null;
    status?: Status;
    /** @format int32 */
    studyPeriodTime?: number | null;
    acceptanceYear?: string | null;
    nameOfIssuingCertificate?: string | null;
    financialInsuranceNo?: string | null;
    /** @format date */
    financialInsuranceDate?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    /** @format int32 */
    countryId?: number | null;
    countryName?: string | null;
    notes?: string | null;
    /** @format uuid */
    studyFileId?: string | null;
    studyFileDocumentNo?: string | null;
    /** @format int32 */
    studyStatusId?: number | null;
    studyStatusName?: string | null;
    /** @format int32 */
    academicFieldId?: number;
    academicFieldName?: string | null;
    /** @format int32 */
    studyResultId?: number | null;
    studyResultName?: string | null;
    /** @format int32 */
    academicAchievementId?: number | null;
    academicAchievementName?: string | null;
    /** @format int32 */
    academicCertificateTypeId?: number;
    academicCertificateTypeName?: string | null;
}

export interface StudyLeaveViewModelIEnumerableResponse {
    succeeded?: boolean;
    data?: StudyLeaveViewModel[] | null;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface StudyLeaveViewModelPagedResult {
    items?: StudyLeaveViewModel[] | null;
    /** @format int32 */
    totalCount?: number;
}

export interface StudyLeaveViewModelPagedResultResponse {
    succeeded?: boolean;
    data?: StudyLeaveViewModelPagedResult;
    message?: string | null;
    errors?: any[] | null;
    code?: string | null;
}

export interface StudyResult {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    studyLeave?: StudyLeave[] | null;
}

export interface StudyStatus {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    studyLeave?: StudyLeave[] | null;
}

export interface StudyType {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    educationInformation?: EducationInformation[] | null;
}

export interface SubDirectorates {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format int32 */
    directorateId?: number;
    name?: string | null;
    shortKey?: string | null;
    departments?: Departments[] | null;
    directorate?: Directorates;
    managementInformation?: ManagementInformation[] | null;
    movementsFromSubDirectorate?: Movements[] | null;
    movementsToSubDirectorate?: Movements[] | null;
    sections?: Sections[] | null;
    employeePositions?: EmployeePosition[] | null;
    units?: Units[] | null;
}

/** @format int32 */
export enum TableNames {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
    Value4 = 4,
    Value5 = 5,
    Value6 = 6,
    Value7 = 7,
    Value8 = 8,
    Value9 = 9,
    Value10 = 10,
    Value11 = 11,
    Value12 = 12,
    Value13 = 13,
    Value14 = 14,
    Value15 = 15,
    Value16 = 16,
    Value17 = 17,
    Value18 = 18,
    Value19 = 19,
    Value20 = 20,
    Value21 = 21,
    Value22 = 22,
    Value23 = 23,
    Value24 = 24,
    Value25 = 25,
    Value26 = 26,
    Value27 = 27,
    Value28 = 28,
    Value29 = 29,
    Value30 = 30,
    Value31 = 31,
    Value32 = 32,
    Value33 = 33,
    Value34 = 34,
    Value35 = 35,
    Value36 = 36,
    Value37 = 37,
    Value38 = 38,
    Value39 = 39,
    Value40 = 40,
    Value41 = 41,
    Value42 = 42,
    Value43 = 43,
    Value44 = 44,
    Value45 = 45,
    Value46 = 46,
    Value47 = 47,
    Value48 = 48,
    Value49 = 49,
    Value50 = 50,
    Value51 = 51,
    Value52 = 52,
    Value53 = 53,
    Value54 = 54,
    Value55 = 55,
    Value56 = 56,
    Value57 = 57,
    Value58 = 58,
    Value59 = 59,
    Value60 = 60,
    Value61 = 61,
    Value62 = 62,
    Value63 = 63,
    Value64 = 64,
    Value65 = 65,
    Value66 = 66,
    Value67 = 67,
    Value68 = 68,
    Value69 = 69,
    Value70 = 70,
    Value71 = 71,
    Value72 = 72,
    Value73 = 73,
    Value74 = 74,
    Value75 = 75,
    Value76 = 76,
    Value77 = 77,
    Value78 = 78,
    Value79 = 79,
}

export interface TeamNotifications {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    teamId?: string;
    /** @format uuid */
    employeeId?: string;
    body?: string | null;
    note?: string | null;
    employee?: Employees;
}

export interface Territory {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    addressInformation?: AddressInformation[] | null;
}

export interface ThanksAndSeniority {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    typeOfBookId?: number;
    /** @format int32 */
    typeOfSeniorityId?: number;
    bookNo?: string | null;
    /** @format date */
    dateOfBook?: string;
    bookIssueName?: string | null;
    reason?: string | null;
    /** @format int32 */
    countOfMonths?: number;
    isDocumentVerify?: boolean | null;
    /** @format date */
    calculationDate?: string | null;
    isCalculation?: boolean | null;
    note?: string | null;
    employee?: Employees;
    typeOfBook?: TypeOfBook;
    typeOfSeniority?: TypeOfSeniority;
}

export interface TypeOfAssignment {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    assignments?: Assignments[] | null;
}

export interface TypeOfBook {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    thanksAndSeniority?: ThanksAndSeniority[] | null;
}

export interface TypeOfDisciplinary {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    /** @format int32 */
    countOfDayDelay?: number;
    employeeDisciplinary?: EmployeeDisciplinary[] | null;
}

export interface TypeOfJob {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    jobInformation?: JobInformation[] | null;
}

export interface TypeOfSeniority {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    thanksAndSeniority?: ThanksAndSeniority[] | null;
}

export interface TypeOfService {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    name?: string | null;
    serviceCalculation?: ServiceCalculation[] | null;
}

export interface Units {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    /** @format int32 */
    departmentId?: number;
    /** @format int32 */
    sectionId?: number;
    name?: string | null;
    shortKey?: string | null;
    department?: Departments;
    directorate?: Directorates;
    managementInformation?: ManagementInformation[] | null;
    movementsFromUnite?: Movements[] | null;
    movementsToUnit?: Movements[] | null;
    section?: Sections;
    subDirectorate?: SubDirectorates;
    employeePositions?: EmployeePosition[] | null;
}

export interface UpdateAbsenceCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format date */
    absenceDate?: string | null;
    bookNo?: string | null;
    /** @format int32 */
    countOfDays?: number;
    /** @format date */
    bookDate?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    note?: string | null;
}

export interface UpdateAcademicAchievementCommend {
    /** @format int32 */
    jobDegreeId?: number | null;
    name?: string | null;
}

export interface UpdateAcademicCertificateTypeCommend {
    name?: string | null;
}

export interface UpdateAcademicFieldCommend {
    name?: string | null;
}

export interface UpdateAddressInformationCommand {
    /** @format int32 */
    governorateId?: number;
    /** @format int32 */
    provinceId?: number;
    /** @format int32 */
    territoryId?: number;
    area?: string | null;
    district?: string | null;
    streetNo?: string | null;
    houseNo?: string | null;
    nearestPoint?: string | null;
    notes?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateAdministrativeOrderCommand {
    orderNo?: string | null;
    bookTitle?: BookTitles;
    /** @format date */
    orderDate?: string;
    administrativeOrderType?: AdministrativeOrderEnum;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateApplicableLawCommand {
    note?: string | null;
}

export interface UpdateAssignmentsCommend {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    typeOfAssignmentId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    assignmentSite?: AssignmentTypes;
    assignedFromOrganization?: string | null;
    assignedToOrganization?: string | null;
    /** @format int32 */
    durationOfAssignment?: number | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    assignmentOrderDate?: string | null;
    assignmentOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    endOrderNo?: string | null;
    /** @format date */
    endOrderDate?: string | null;
    /** @format date */
    endReleaseOrderDate?: string | null;
    endReleaseOrderNo?: string | null;
    endHireNo?: string | null;
    /** @format date */
    endHireDate?: string | null;
    note?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateAttachmentCommend {
    /** @format uuid */
    id?: string;
    tags?: string | null;
    tableName?: string | null;
    notes?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateAttributesCommend {
    /** @format uuid */
    employeeId?: string;
    attributeKey?: string | null;
    attributeValue?: string | null;
}

export interface UpdateChangeDegreeCommand {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    jobDegreeFromId?: number;
    /** @format int32 */
    jobDegreeToId?: number;
    /** @format int32 */
    jobCategoryFromId?: number;
    /** @format int32 */
    jobCategoryToId?: number;
    /** @format int32 */
    jobTitleFromId?: number;
    /** @format int32 */
    jobDescriptionFromId?: number;
    /** @format int32 */
    jobTitleToId?: number;
    /** @format int32 */
    jobDescriptionToId?: number;
    /** @format date */
    oldDegreeDueDate?: string;
    /** @format date */
    newDegreeDueDate?: string;
    /** @format date */
    oldCategoryDueDate?: string;
    /** @format date */
    newCategoryDueDate?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    note?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateChangeDueDateCommand {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    /** @format date */
    currentDegreeDueDate?: string;
    /** @format date */
    newDegreeDueDate?: string;
    /** @format date */
    currentCategoryDueDate?: string;
    /** @format date */
    newCategoryDueDate?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string;
    note?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateChangeJobTitlesCommand {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    newJobTitleId?: number | null;
    /** @format int32 */
    newJobDescriptionId?: number | null;
    /** @format int32 */
    oldJobTitleId?: number | null;
    /** @format int32 */
    oldJobDescriptionId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    note?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateContactInformationCommand {
    /** @format int32 */
    levelOfRelationshipId?: number | null;
    phoneNumber?: string | null;
    contactName?: string | null;
    notes?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateCorrectingAcademicAchievementCommand {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    degreeFromId?: number;
    /** @format int32 */
    degreeToId?: number;
    /** @format int32 */
    jobCategoryFromId?: number;
    /** @format int32 */
    jobCategoryToId?: number;
    /** @format int32 */
    jobTitleFromId?: number;
    /** @format int32 */
    jobDescriptionFromId?: number;
    /** @format int32 */
    jobTitleToId?: number;
    /** @format int32 */
    jobDescriptionToId?: number;
    /** @format date */
    dueDateDegree?: string;
    /** @format date */
    dueDateCategory?: string;
    isCertificateCalculation?: boolean;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string;
    note?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateCountryCommend {
    name?: string | null;
}

export interface UpdateDepartmentCommend {
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    name?: string | null;
    shortKey?: string | null;
    status?: Status;
}

export interface UpdateDirectorateCommend {
    name?: string | null;
    shortKey?: string | null;
}

export interface UpdateDisciplinaryCommand {
    titleOfBook?: string | null;
    /** @format int32 */
    typeOfDisciplinaryId?: number;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    stopPromotion?: boolean | null;
    disciplinaryLaw?: string | null;
    /** @format int32 */
    countOfDayDelay?: number | null;
    note?: string | null;
    reason?: string | null;
}

export interface UpdateDocVerificationCommand {
    /** @format uuid */
    employeeId?: string;
    documentNumber?: string | null;
    /** @format date */
    documentDate?: string;
    recipient?: string | null;
    answered?: boolean;
    /** @format date */
    sendingDate?: string;
    note?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateDocumentCommand {
    /** @format int32 */
    employeeDocumentTypeId?: number;
    documentAttributes?: DocumentAttribute[] | null;
    notes?: string | null;
}

export interface UpdateEducationInfoCommand {
    notes?: string | null;
    status?: Status;
}

export interface UpdateEmployeeCommand {
    statisticalIndex?: string | null;
    jobCode?: string | null;
    lotNumber?: string | null;
    firstName?: string | null;
    secondName?: string | null;
    thirdName?: string | null;
    fourthName?: string | null;
    surName?: string | null;
    motherFirstName?: string | null;
    motherSecondName?: string | null;
    motherThirdName?: string | null;
    motherSurName?: string | null;
    /** @format int32 */
    genderId?: number;
    birthPlace?: string | null;
    /** @format date */
    birthDate?: string;
    socialStatus?: SocialStatusEnum;
    /** @format int32 */
    statusWorkingId?: number;
    notes?: string | null;
    nationalism?: string | null;
    religion?: string | null;
    /** @format int32 */
    countryId?: number | null;
}

export interface UpdateEmployeeCourseCommand {
    /** @format uuid */
    employeeId?: string;
    title?: string | null;
    place?: string | null;
    /** @format date-time */
    startDate?: string;
    /** @format date-time */
    endDate?: string;
    evaluation?: string | null;
    residentEntity?: string | null;
    courseOrderNo?: string | null;
    /** @format date */
    courseOrderDate?: string | null;
    /** @format int32 */
    courseDurationInDays?: number;
    nominationOrderNo?: string | null;
    /** @format date */
    nominationOrderDate?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
}

export interface UpdateEmployeeDocumentsTypeCommend {
    name?: string | null;
}

export interface UpdateEmployeePositionCommend {
    /** @format uuid */
    employeeId?: string;
    endAssignedOrderNo?: string | null;
    /** @format date */
    endAssignedOrderDate?: string | null;
    /** @format date */
    assignedDate?: string | null;
    /** @format date */
    assignedOrderDate?: string | null;
    assignedOrderNo?: string | null;
    /** @format date */
    administrativeOrderDate?: string | null;
    administrativeOrderNo?: string | null;
    /** @format int32 */
    directorateId?: number | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format int32 */
    departmentId?: number | null;
    /** @format int32 */
    sectionId?: number | null;
    /** @format int32 */
    unitId?: number | null;
    /** @format int32 */
    positionId?: number | null;
    note?: string | null;
}

export interface UpdateEmployeeServiceCommand {
    notes?: string | null;
    status?: Status;
}

export interface UpdateEndAssignmentsCommend {
    endOrderNo?: string | null;
    /** @format date */
    endOrderDate?: string | null;
    /** @format date */
    endReleaseOrderDate?: string | null;
    endReleaseOrderNo?: string | null;
    endHireNo?: string | null;
    /** @format date */
    endHireDate?: string | null;
    note?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateGovernorateCommend {
    name?: string | null;
}

export interface UpdateHandPullCommand {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string | null;
    withdrawHandPullOrderNo?: string | null;
    /** @format date-time */
    withdrawHandPullOrderDate?: string | null;
    raiseHandPullOrderNo?: string | null;
    /** @format date-time */
    raiseHandPullOrderDate?: string | null;
    note?: string | null;
}

export interface UpdateInterruptionCommand {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    /** @format date-time */
    notificationDate?: string | null;
    reason?: string | null;
    note?: string | null;
    status?: Status;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateJobCategoryCommend {
    /** @format int32 */
    degreeId?: number;
    /** @format double */
    increaseAmount?: number;
    categoryName?: string | null;
}

export interface UpdateJobDegreeCommend {
    degreeName?: string | null;
    /** @format double */
    increaseAmount?: number;
}

export interface UpdateJobDescriptionCommend {
    name?: string | null;
}

export interface UpdateJobTitleCommend {
    /** @format int32 */
    degreeId?: number;
    name?: string | null;
}

export interface UpdateLawCommend {
    name?: string | null;
}

export interface UpdateLeaveCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    normalLeaveTypeId?: number | null;
    /** @format int32 */
    typeOfLeaveId?: number | null;
    /** @format int32 */
    sicknessTypeId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format date */
    fromDate?: string | null;
    /** @format date */
    toDate?: string | null;
    /** @format int32 */
    longLeaveTypeId?: number | null;
    /** @format int32 */
    countOfDays?: number | null;
    /** @format int32 */
    countOfMinutes?: number | null;
    salaryStatusId?: SalaryStatus;
    isInside?: boolean | null;
    country?: string | null;
    note?: string | null;
    /** @format date-time */
    releaseDate?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    /** @format date-time */
    dateOfAssignment?: string | null;
    noOfAssignment?: string | null;
    /** @format date-time */
    dateOfBirthCertificate?: string | null;
    noOfBirthCertificate?: string | null;
    /** @format date-time */
    dateOfRelease?: string | null;
    noOfRelease?: string | null;
    /** @format date-time */
    dateOfStart?: string | null;
    noOfStart?: string | null;
    /** @format date-time */
    dateOfPermission?: string | null;
    noOfPermission?: string | null;
}

export interface UpdateLeaveHireCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
}

export interface UpdateLeavesBalanceCommand {
    /** @format int32 */
    balance?: number | null;
    note?: string | null;
}

export interface UpdateLevelOfRelationshipCommend {
    name?: string | null;
}

export interface UpdateLogLeavesBalanceCommand {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    countOfDay?: number | null;
    nameOfIssuing?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    note?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
}

export interface UpdateLongLeaveTypeCommend {
    name?: string | null;
}

export interface UpdateMarriageInformationCommend {
    /** @format uuid */
    employeeId?: string | null;
    firstName?: string | null;
    secondName?: string | null;
    thirdName?: string | null;
    surName?: string | null;
    fullName?: string | null;
    /** @format date */
    marriageDate?: string | null;
    /** @format int32 */
    childrenCount?: number | null;
    notes?: string | null;
}

export interface UpdateMartyrsAndWoundedCommend {
    /** @format uuid */
    employeeId?: string;
    /** @format date */
    dateOfDeath?: string | null;
    /** @format uuid */
    employeePositionId?: string | null;
    /** @format date-time */
    endDateOfService?: string | null;
    /** @format date-time */
    retirementDate?: string | null;
    administrativeOrderNo?: string | null;
    /** @format date-time */
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    /** @format date-time */
    dateOfMartyrdom?: string | null;
    note?: string | null;
    healthStatus?: HealthStatus;
}

export interface UpdateMovementCommand {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    employeeId?: string;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    orderDetails?: string | null;
    /** @format int32 */
    fromDirectorateId?: number | null;
    /** @format int32 */
    fromSubDirectorateId?: number | null;
    /** @format int32 */
    fromDepartmentId?: number | null;
    /** @format int32 */
    fromSectionId?: number | null;
    /** @format int32 */
    fromUniteId?: number | null;
    /** @format int32 */
    toDirectorateId?: number | null;
    /** @format int32 */
    toSubDirectorateId?: number | null;
    /** @format int32 */
    toDepartmentId?: number | null;
    /** @format int32 */
    toSectionId?: number | null;
    /** @format int32 */
    toUnitId?: number | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    /** @format date */
    releaseDate?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    note?: string | null;
    status?: Status;
}

export interface UpdateNormalLeaveTypeCommend {
    name?: string | null;
}

export interface UpdatePositionCommend {
    name?: string | null;
}

export interface UpdatePreciseAcademicFieldCommend {
    name?: string | null;
}

export interface UpdatePromotionCommend {
    /** @format uuid */
    employeeId?: string;
    /** @format int64 */
    sentPromotionGroupId?: number | null;
    /** @format int32 */
    degreeFromId?: number | null;
    /** @format int32 */
    degreeToId?: number | null;
    /** @format int32 */
    jobCategoryFromId?: number | null;
    /** @format int32 */
    jobCategoryToId?: number | null;
    /** @format uuid */
    oldEducationInformationId?: string | null;
    /** @format uuid */
    newEducationInformationId?: string | null;
    /** @format date */
    dueDateDegree?: string | null;
    /** @format date */
    dueDateCategory?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string | null;
    /** @format int32 */
    categoryPerMonth?: number | null;
    /** @format int32 */
    serviceRecycle?: number | null;
    /** @format int32 */
    typeOfChange?: number | null;
    note?: string | null;
}

export interface UpdateProvinceCommend {
    name?: string | null;
}

export interface UpdateResignationCommand {
    reason?: string | null;
    /** @format date-time */
    requestDate?: string | null;
    requestNo?: string | null;
    resignationOrderNo?: string | null;
    /** @format date-time */
    resignationOrderDate?: string | null;
    separationOrderNo?: string | null;
    /** @format date-time */
    separationOrderDate?: string | null;
    note?: string | null;
}

export interface UpdateRetirementCommend {
    /** @format uuid */
    employeeId?: string | null;
    /** @format int32 */
    directorateId?: number | null;
    /** @format int32 */
    subDirectorateId?: number | null;
    /** @format date-time */
    startDate?: string | null;
    /** @format int32 */
    academicAchievementId?: number | null;
    /** @format int32 */
    jobDegreeId?: number | null;
    /** @format int32 */
    jobCategoryId?: number | null;
    /** @format int32 */
    jobTitleId?: number | null;
    decisionToFixAge?: string | null;
    /** @format uuid */
    employeePositionId?: string | null;
    /** @format date-time */
    endDateOfService?: string | null;
    /** @format date-time */
    birthdate?: string | null;
    /** @format int32 */
    retirementDate?: number;
    administrativeOrderNo?: string | null;
    /** @format date-time */
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    note?: string | null;
}

export interface UpdateSectionCommend {
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    /** @format int32 */
    departmentId?: number;
    name?: string | null;
    shortKey?: string | null;
}

export interface UpdateServiceCalculationCommend {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    typeOfServiceId?: number;
    /** @format int32 */
    countOfMonth?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    isPoliticalTermination?: boolean | null;
    notes?: string | null;
}

export interface UpdateSicknessTypeCommend {
    name?: string | null;
}

export interface UpdateStudyExtensionOrderTypeCommend {
    name?: string | null;
}

export interface UpdateStudyFileCommand {
    documentNo?: string | null;
    /** @format date */
    documentDate?: string | null;
    notes?: string | null;
}

export interface UpdateStudyLeaveCommand {
    /** @format uuid */
    studyFileId?: string | null;
    /** @format int32 */
    academicCertificateTypeId?: number | null;
    /** @format int32 */
    academicAchievementId?: number | null;
    /** @format int32 */
    academicFieldId?: number | null;
    /** @format int32 */
    studyPeriodTime?: number | null;
    acceptanceYear?: string | null;
    nameOfIssuingCertificate?: string | null;
    financialInsuranceNo?: string | null;
    /** @format date */
    financialInsuranceDate?: string | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    /** @format int32 */
    countryId?: number | null;
    /** @format int32 */
    studyStatusId?: number | null;
    /** @format int32 */
    studyResultId?: number | null;
    notes?: string | null;
}

export interface UpdateStudyLeaveExtensionCommand {
    /** @format uuid */
    employeeId?: string;
    /** @format uuid */
    studyFileId?: string | null;
    /** @format int32 */
    studyExtensionOrderTypeId?: number | null;
    orderNo?: string | null;
    /** @format int32 */
    countOfDay?: number;
    /** @format date */
    orderDate?: string | null;
    /** @format date */
    fromDate?: string | null;
    /** @format date */
    toDate?: string | null;
    notes?: string | null;
}

export interface UpdateStudyResultCommend {
    name?: string | null;
}

export interface UpdateStudyStatusCommend {
    name?: string | null;
}

export interface UpdateStudyTypeCommend {
    name?: string | null;
}

export interface UpdateSubDirectorateCommend {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    directorateId?: number;
    name?: string | null;
    shortKey?: string | null;
}

export interface UpdateTerritoryCommend {
    name?: string | null;
}

export interface UpdateThanksAndSeniorityCommand {
    /** @format int32 */
    typeOfBook?: number;
    /** @format int32 */
    typeOfSeniority?: number;
    bookNo?: string | null;
    /** @format date */
    dateOfBook?: string;
    bookIssueName?: string | null;
    reason?: string | null;
    /** @format int32 */
    countOfMonths?: number;
    isDocumentVerify?: boolean | null;
    /** @format date */
    calculationDate?: string | null;
    note?: string | null;
}

export interface UpdateTypeOfAssignmentCommend {
    name?: string | null;
}

export interface UpdateTypeOfBookCommend {
    name?: string | null;
}

export interface UpdateTypeOfDisciplinaryCommend {
    name?: string | null;
    /** @format int32 */
    countOfDayDelay?: number;
}

export interface UpdateTypeOfJobCommend {
    name?: string | null;
}

export interface UpdateTypeOfLeaveCommend {
    name?: string | null;
}

export interface UpdateTypeOfSeniorityCommend {
    name?: string | null;
}

export interface UpdateTypeOfServiceCommend {
    name?: string | null;
}

export interface UpdateUnitCommend {
    /** @format int32 */
    directorateId?: number;
    /** @format int32 */
    subDirectorateId?: number;
    /** @format int32 */
    departmentId?: number;
    /** @format int32 */
    sectionId?: number;
    name?: string | null;
    shortKey?: string | null;
}

export interface UpdateValuationCommand {
    /** @format uuid */
    secondaryId?: string;
    /** @format uuid */
    employeeId?: string;
    /** @format date */
    valuationDate?: string | null;
    recommendation?: string | null;
    valuationType?: string | null;
    notes?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string;
    /** @format uuid */
    lastUpdateBy?: string | null;
    valuationProperties?: UpdateValuationProperty[] | null;
}

export interface UpdateValuationProperty {
    valuationKey?: string | null;
    /** @format int32 */
    valuationPoints?: number | null;
}

export interface Valuation {
    /** @format uuid */
    id?: string;
    /** @format date-time */
    createAt?: string;
    /** @format uuid */
    createBy?: string | null;
    /** @format date-time */
    lastUpdateAt?: string | null;
    /** @format uuid */
    lastUpdateBy?: string | null;
    statusId?: Status;
    isDeleted?: boolean;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format date-time */
    doneProcdureDate?: string | null;
    /** @format uuid */
    deletedBy?: string | null;
    /** @format uuid */
    employeeId?: string;
    /** @format uuid */
    secondaryId?: string;
    /** @format date */
    valuationDate?: string | null;
    valuationKey?: string | null;
    bookNo?: string | null;
    /** @format date */
    bookDate?: string;
    /** @format int32 */
    valuationPoints?: number | null;
    recommendation?: string | null;
    valuationType?: string | null;
    notes?: string | null;
    employee?: Employees;
}

export interface ValuationProperty {
    valuationKey?: string | null;
    /** @format int32 */
    valuationPoints?: number | null;
}

export interface ValuationPropertyById {
    valuationKey?: string | null;
    /** @format int32 */
    valuationPoints?: number | null;
}

/** @format int32 */
export enum WorkingStatusEnum {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
    Value4 = 4,
    Value5 = 5,
    Value6 = 6,
}