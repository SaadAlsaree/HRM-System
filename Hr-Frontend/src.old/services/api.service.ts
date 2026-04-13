/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
          .then((data) => {
            if (r.ok) {
              r.data = data;
            } else {
              r.error = data;
            }
            return r;
          })
          .catch((e) => {
            r.error = e;
            return r;
          });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title API HRM
 * @version v1
 * @contact GitHub Repository (https://github.com)
 *
 * A simple app for HRM
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  hub = {
    /**
     * No description
     *
     * @tags  Dashboard
     * @name HrmV1ApiDashboardGetEmployeeDemographicsList
     * @request GET:/hub/hrm/v1/api/Dashboard/GetEmployeeDemographics
     * @secure
     */
    hrmV1ApiDashboardGetEmployeeDemographicsList: (params: RequestParams = {}) =>
      this.request<GetEmployeeDemographicsViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Dashboard/GetEmployeeDemographics`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags  Dashboard
     * @name HrmV1ApiDashboardGetCompletedOrdersList
     * @request GET:/hub/hrm/v1/api/Dashboard/GetCompletedOrders
     * @secure
     */
    hrmV1ApiDashboardGetCompletedOrdersList: (params: RequestParams = {}) =>
      this.request<GetCompletedOrdersViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Dashboard/GetCompletedOrders`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Absences
     * @name HrmV1ApiAbsencesList
     * @request GET:/hub/hrm/v1/api/Absences
     * @secure
     */
    hrmV1ApiAbsencesList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllAbsencesViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Absences`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Absences
     * @name HrmV1ApiAbsencesCreate
     * @request POST:/hub/hrm/v1/api/Absences
     * @secure
     */
    hrmV1ApiAbsencesCreate: (data: CreateAbsenceCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Absences`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Absences
     * @name HrmV1ApiAbsencesPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Absences
     * @secure
     */
    hrmV1ApiAbsencesPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Absences`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Absences
     * @name HrmV1ApiAbsencesDetail
     * @request GET:/hub/hrm/v1/api/Absences/{id}
     * @secure
     */
    hrmV1ApiAbsencesDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetAbsenceByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Absences/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Absences
     * @name HrmV1ApiAbsencesUpdate
     * @request PUT:/hub/hrm/v1/api/Absences/{id}
     * @secure
     */
    hrmV1ApiAbsencesUpdate: (id: string, data: UpdateAbsenceCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Absences/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Absences
     * @name HrmV1ApiAbsencesDelete
     * @request DELETE:/hub/hrm/v1/api/Absences/{id}
     * @secure
     */
    hrmV1ApiAbsencesDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Absences/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Absences
     * @name HrmV1ApiAbsencesUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Absences/UploadAttachment
     * @secure
     */
    hrmV1ApiAbsencesUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Absences/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Absences
     * @name HrmV1ApiAbsencesExportFileList
     * @request GET:/hub/hrm/v1/api/Absences/ExportFile
     * @secure
     */
    hrmV1ApiAbsencesExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/Absences/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicAchievement
     * @name HrmV1ApiAcademicAchievementList
     * @request GET:/hub/hrm/v1/api/AcademicAchievement
     * @secure
     */
    hrmV1ApiAcademicAchievementList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicAchievementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicAchievement`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicAchievement
     * @name HrmV1ApiAcademicAchievementCreate
     * @request POST:/hub/hrm/v1/api/AcademicAchievement
     * @secure
     */
    hrmV1ApiAcademicAchievementCreate: (data: CreateAcademicAchievementCommend, params: RequestParams = {}) =>
      this.request<GetAcademicAchievementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicAchievement`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicAchievement
     * @name HrmV1ApiAcademicAchievementPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/AcademicAchievement
     * @secure
     */
    hrmV1ApiAcademicAchievementPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicAchievement`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicAchievement
     * @name HrmV1ApiAcademicAchievementDetail
     * @request GET:/hub/hrm/v1/api/AcademicAchievement/{academicAchievementId}
     * @secure
     */
    hrmV1ApiAcademicAchievementDetail: (academicAchievementId: number, params: RequestParams = {}) =>
      this.request<GetAcademicAchievementByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicAchievement/${academicAchievementId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicAchievement
     * @name HrmV1ApiAcademicAchievementUpdate
     * @request PUT:/hub/hrm/v1/api/AcademicAchievement/{academicAchievementId}
     * @secure
     */
    hrmV1ApiAcademicAchievementUpdate: (
      academicAchievementId: number,
      data: UpdateAcademicAchievementCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicAchievementViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicAchievement/${academicAchievementId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicAchievement
     * @name HrmV1ApiAcademicAchievementDelete
     * @request DELETE:/hub/hrm/v1/api/AcademicAchievement/{id}
     * @secure
     */
    hrmV1ApiAcademicAchievementDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicAchievement/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicAchievement
     * @name HrmV1ApiAcademicAchievementGetListList
     * @request GET:/hub/hrm/v1/api/AcademicAchievement/GetList
     * @secure
     */
    hrmV1ApiAcademicAchievementGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicAchievementListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicAchievement/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicCertificateType
     * @name HrmV1ApiAcademicCertificateTypeList
     * @request GET:/hub/hrm/v1/api/AcademicCertificateType
     * @secure
     */
    hrmV1ApiAcademicCertificateTypeList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicCertificateTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicCertificateType`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicCertificateType
     * @name HrmV1ApiAcademicCertificateTypeCreate
     * @request POST:/hub/hrm/v1/api/AcademicCertificateType
     * @secure
     */
    hrmV1ApiAcademicCertificateTypeCreate: (data: CreateAcademicCertificateTypeCommend, params: RequestParams = {}) =>
      this.request<GetAcademicCertificateTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicCertificateType`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicCertificateType
     * @name HrmV1ApiAcademicCertificateTypePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/AcademicCertificateType
     * @secure
     */
    hrmV1ApiAcademicCertificateTypePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicCertificateType`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicCertificateType
     * @name HrmV1ApiAcademicCertificateTypeDetail
     * @request GET:/hub/hrm/v1/api/AcademicCertificateType/{AcademicCertificateTypeId}
     * @secure
     */
    hrmV1ApiAcademicCertificateTypeDetail: (academicCertificateTypeId: number, params: RequestParams = {}) =>
      this.request<GetAcademicCertificateTypeByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicCertificateType/${academicCertificateTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicCertificateType
     * @name HrmV1ApiAcademicCertificateTypeUpdate
     * @request PUT:/hub/hrm/v1/api/AcademicCertificateType/{AcademicCertificateTypeId}
     * @secure
     */
    hrmV1ApiAcademicCertificateTypeUpdate: (
      academicCertificateTypeId: number,
      data: UpdateAcademicCertificateTypeCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicCertificateTypeViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicCertificateType/${academicCertificateTypeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicCertificateType
     * @name HrmV1ApiAcademicCertificateTypeDelete
     * @request DELETE:/hub/hrm/v1/api/AcademicCertificateType/{id}
     * @secure
     */
    hrmV1ApiAcademicCertificateTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicCertificateType/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicCertificateType
     * @name HrmV1ApiAcademicCertificateTypeGetListList
     * @request GET:/hub/hrm/v1/api/AcademicCertificateType/GetList
     * @secure
     */
    hrmV1ApiAcademicCertificateTypeGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicCertificateTypeListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicCertificateType/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicField
     * @name HrmV1ApiAcademicFieldList
     * @request GET:/hub/hrm/v1/api/AcademicField
     * @secure
     */
    hrmV1ApiAcademicFieldList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicFieldViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicField`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicField
     * @name HrmV1ApiAcademicFieldCreate
     * @request POST:/hub/hrm/v1/api/AcademicField
     * @secure
     */
    hrmV1ApiAcademicFieldCreate: (data: CreateAcademicFieldCommend, params: RequestParams = {}) =>
      this.request<GetAcademicFieldViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicField`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicField
     * @name HrmV1ApiAcademicFieldPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/AcademicField
     * @secure
     */
    hrmV1ApiAcademicFieldPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicField`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicField
     * @name HrmV1ApiAcademicFieldDetail
     * @request GET:/hub/hrm/v1/api/AcademicField/{AcademicFieldId}
     * @secure
     */
    hrmV1ApiAcademicFieldDetail: (academicFieldId: number, params: RequestParams = {}) =>
      this.request<GetAcademicFieldByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicField/${academicFieldId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicField
     * @name HrmV1ApiAcademicFieldUpdate
     * @request PUT:/hub/hrm/v1/api/AcademicField/{AcademicFieldId}
     * @secure
     */
    hrmV1ApiAcademicFieldUpdate: (
      academicFieldId: number,
      data: UpdateAcademicFieldCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicFieldViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicField/${academicFieldId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicField
     * @name HrmV1ApiAcademicFieldDelete
     * @request DELETE:/hub/hrm/v1/api/AcademicField/{id}
     * @secure
     */
    hrmV1ApiAcademicFieldDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicField/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicField
     * @name HrmV1ApiAcademicFieldGetListList
     * @request GET:/hub/hrm/v1/api/AcademicField/GetList
     * @secure
     */
    hrmV1ApiAcademicFieldGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicFieldListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AcademicField/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AddressInformation
     * @name HrmV1ApiAddressInformationList
     * @request GET:/hub/hrm/v1/api/AddressInformation
     * @secure
     */
    hrmV1ApiAddressInformationList: (
      query?: {
        /** @format uuid */
        Id?: string;
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetEmployeeAddressInformationViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AddressInformation`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AddressInformation
     * @name HrmV1ApiAddressInformationCreate
     * @request POST:/hub/hrm/v1/api/AddressInformation
     * @secure
     */
    hrmV1ApiAddressInformationCreate: (data: CreateAddressInformationCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AddressInformation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AddressInformation
     * @name HrmV1ApiAddressInformationPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/AddressInformation
     * @secure
     */
    hrmV1ApiAddressInformationPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AddressInformation`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AddressInformation
     * @name HrmV1ApiAddressInformationDetail
     * @request GET:/hub/hrm/v1/api/AddressInformation/{addressInformation}
     * @secure
     */
    hrmV1ApiAddressInformationDetail: (addressInformation: string, params: RequestParams = {}) =>
      this.request<GetAddressInformationByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AddressInformation/${addressInformation}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AddressInformation
     * @name HrmV1ApiAddressInformationUpdate
     * @request PUT:/hub/hrm/v1/api/AddressInformation/{id}
     * @secure
     */
    hrmV1ApiAddressInformationUpdate: (id: string, data: UpdateAddressInformationCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AddressInformation/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AddressInformation
     * @name HrmV1ApiAddressInformationDelete
     * @request DELETE:/hub/hrm/v1/api/AddressInformation/{id}
     * @secure
     */
    hrmV1ApiAddressInformationDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AddressInformation/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AddressInformation
     * @name HrmV1ApiAddressInformationExportFileList
     * @request GET:/hub/hrm/v1/api/AddressInformation/ExportFile
     * @secure
     */
    hrmV1ApiAddressInformationExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/AddressInformation/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdministrativeOrder
     * @name HrmV1ApiAdministrativeOrderList
     * @request GET:/hub/hrm/v1/api/AdministrativeOrder
     * @secure
     */
    hrmV1ApiAdministrativeOrderList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAdministrativeOrderViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AdministrativeOrder`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdministrativeOrder
     * @name HrmV1ApiAdministrativeOrderCreate
     * @request POST:/hub/hrm/v1/api/AdministrativeOrder
     * @secure
     */
    hrmV1ApiAdministrativeOrderCreate: (data: AddAdministrativeOrderCommand, params: RequestParams = {}) =>
      this.request<GetAdministrativeOrderViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AdministrativeOrder`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdministrativeOrder
     * @name HrmV1ApiAdministrativeOrderPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/AdministrativeOrder
     * @secure
     */
    hrmV1ApiAdministrativeOrderPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AdministrativeOrder`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdministrativeOrder
     * @name HrmV1ApiAdministrativeOrderDetail
     * @request GET:/hub/hrm/v1/api/AdministrativeOrder/{AdministrativeOrderId}
     * @secure
     */
    hrmV1ApiAdministrativeOrderDetail: (administrativeOrderId: string, params: RequestParams = {}) =>
      this.request<GetAdministrativeOrderByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AdministrativeOrder/${administrativeOrderId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdministrativeOrder
     * @name HrmV1ApiAdministrativeOrderUpdate
     * @request PUT:/hub/hrm/v1/api/AdministrativeOrder/{AdministrativeOrderId}
     * @secure
     */
    hrmV1ApiAdministrativeOrderUpdate: (
      administrativeOrderId: string,
      data: UpdateAdministrativeOrderCommand,
      params: RequestParams = {},
    ) =>
      this.request<GetAdministrativeOrderViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AdministrativeOrder/${administrativeOrderId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdministrativeOrder
     * @name HrmV1ApiAdministrativeOrderUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/AdministrativeOrder/UploadAttachment
     * @secure
     */
    hrmV1ApiAdministrativeOrderUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AdministrativeOrder/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdministrativeOrder
     * @name HrmV1ApiAdministrativeOrderDelete
     * @request DELETE:/hub/hrm/v1/api/AdministrativeOrder/{id}
     * @secure
     */
    hrmV1ApiAdministrativeOrderDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/AdministrativeOrder/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdministrativeOrder
     * @name HrmV1ApiAdministrativeOrderExportFileList
     * @request GET:/hub/hrm/v1/api/AdministrativeOrder/ExportFile
     * @secure
     */
    hrmV1ApiAdministrativeOrderExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/AdministrativeOrder/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApplicableLaw
     * @name HrmV1ApiEmployeeApplicableLawList
     * @request GET:/hub/hrm/v1/api/EmployeeApplicableLaw
     * @secure
     */
    hrmV1ApiEmployeeApplicableLawList: (
      query?: {
        /** @format uuid */
        Id?: string;
        /** @format uuid */
        EmployeeId?: string;
        NameTerm?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicAchievementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeApplicableLaw`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApplicableLaw
     * @name HrmV1ApiEmployeeApplicableLawCreate
     * @request POST:/hub/hrm/v1/api/EmployeeApplicableLaw
     * @secure
     */
    hrmV1ApiEmployeeApplicableLawCreate: (data: AddApplicableLawCommand, params: RequestParams = {}) =>
      this.request<GetApplicableLawViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeApplicableLaw`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApplicableLaw
     * @name HrmV1ApiEmployeeApplicableLawDetail
     * @request GET:/hub/hrm/v1/api/EmployeeApplicableLaw/{ApplicableLawId}
     * @secure
     */
    hrmV1ApiEmployeeApplicableLawDetail: (applicableLawId: string, params: RequestParams = {}) =>
      this.request<GetApplicableLawByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeApplicableLaw/${applicableLawId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApplicableLaw
     * @name HrmV1ApiEmployeeApplicableLawUpdate
     * @request PUT:/hub/hrm/v1/api/EmployeeApplicableLaw/{ApplicableLawId}
     * @secure
     */
    hrmV1ApiEmployeeApplicableLawUpdate: (
      applicableLawId: string,
      data: UpdateApplicableLawCommand,
      params: RequestParams = {},
    ) =>
      this.request<GetApplicableLawViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeApplicableLaw/${applicableLawId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignments
     * @name HrmV1ApiAssignmentsList
     * @request GET:/hub/hrm/v1/api/Assignments
     * @secure
     */
    hrmV1ApiAssignmentsList: (
      query?: {
        AssignmentSite?: AssignmentTypes;
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAssignmentsViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Assignments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignments
     * @name HrmV1ApiAssignmentsCreate
     * @request POST:/hub/hrm/v1/api/Assignments
     * @secure
     */
    hrmV1ApiAssignmentsCreate: (data: CreateAssignmentsCommend, params: RequestParams = {}) =>
      this.request<GetAssignmentsViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Assignments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignments
     * @name HrmV1ApiAssignmentsPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Assignments
     * @secure
     */
    hrmV1ApiAssignmentsPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Assignments`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignments
     * @name HrmV1ApiAssignmentsDetail
     * @request GET:/hub/hrm/v1/api/Assignments/{AssignmentsId}
     * @secure
     */
    hrmV1ApiAssignmentsDetail: (assignmentsId: string, params: RequestParams = {}) =>
      this.request<GetAssignmentsByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Assignments/${assignmentsId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignments
     * @name HrmV1ApiAssignmentsUpdate
     * @request PUT:/hub/hrm/v1/api/Assignments/{AssignmentsId}
     * @secure
     */
    hrmV1ApiAssignmentsUpdate: (assignmentsId: string, data: UpdateAssignmentsCommend, params: RequestParams = {}) =>
      this.request<GetAssignmentsViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Assignments/${assignmentsId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignments
     * @name HrmV1ApiAssignmentsUpdateEndAssignmentsUpdate
     * @request PUT:/hub/hrm/v1/api/Assignments/UpdateEndAssignments/{AssignmentsId}
     * @secure
     */
    hrmV1ApiAssignmentsUpdateEndAssignmentsUpdate: (
      assignmentsId: string,
      data: UpdateEndAssignmentsCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetAssignmentsViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Assignments/UpdateEndAssignments/${assignmentsId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignments
     * @name HrmV1ApiAssignmentsDelete
     * @request DELETE:/hub/hrm/v1/api/Assignments/{id}
     * @secure
     */
    hrmV1ApiAssignmentsDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Assignments/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignments
     * @name HrmV1ApiAssignmentsUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Assignments/UploadAttachment
     * @secure
     */
    hrmV1ApiAssignmentsUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Assignments/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignments
     * @name HrmV1ApiAssignmentsExportFileList
     * @request GET:/hub/hrm/v1/api/Assignments/ExportFile
     * @secure
     */
    hrmV1ApiAssignmentsExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/Assignments/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment
     * @name HrmV1ApiAttachmentList
     * @request GET:/hub/hrm/v1/api/Attachment
     * @secure
     */
    hrmV1ApiAttachmentList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format uuid */
        PrimaryTableId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attachment`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment
     * @name HrmV1ApiAttachmentPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Attachment
     * @secure
     */
    hrmV1ApiAttachmentPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attachment`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment
     * @name HrmV1ApiAttachmentDetail
     * @request GET:/hub/hrm/v1/api/Attachment/{AttachmentId}/{EmployeeId}
     * @secure
     */
    hrmV1ApiAttachmentDetail: (attachmentId: string, employeeId: string, params: RequestParams = {}) =>
      this.request<GetAttachmentByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attachment/${attachmentId}/${employeeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment
     * @name HrmV1ApiAttachmentUpdate
     * @request PUT:/hub/hrm/v1/api/Attachment/{AttachmentId}
     * @secure
     */
    hrmV1ApiAttachmentUpdate: (attachmentId: string, data: UpdateAttachmentCommend, params: RequestParams = {}) =>
      this.request<GetAttachmentViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attachment/${attachmentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment
     * @name HrmV1ApiAttachmentDelete
     * @request DELETE:/hub/hrm/v1/api/Attachment/{id}
     * @secure
     */
    hrmV1ApiAttachmentDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attachment/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attributes
     * @name HrmV1ApiAttributesList
     * @request GET:/hub/hrm/v1/api/Attributes
     * @secure
     */
    hrmV1ApiAttributesList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttributesViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attributes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attributes
     * @name HrmV1ApiAttributesCreate
     * @request POST:/hub/hrm/v1/api/Attributes
     * @secure
     */
    hrmV1ApiAttributesCreate: (data: CreateAttributesCommend, params: RequestParams = {}) =>
      this.request<GetAttributesViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attributes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attributes
     * @name HrmV1ApiAttributesPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Attributes
     * @secure
     */
    hrmV1ApiAttributesPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attributes`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attributes
     * @name HrmV1ApiAttributesDetail
     * @request GET:/hub/hrm/v1/api/Attributes/{AttributesId}
     * @secure
     */
    hrmV1ApiAttributesDetail: (attributesId: number, params: RequestParams = {}) =>
      this.request<GetAttributesByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attributes/${attributesId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attributes
     * @name HrmV1ApiAttributesUpdate
     * @request PUT:/hub/hrm/v1/api/Attributes/{AttributesId}
     * @secure
     */
    hrmV1ApiAttributesUpdate: (attributesId: number, data: UpdateAttributesCommend, params: RequestParams = {}) =>
      this.request<GetAttributesViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attributes/${attributesId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attributes
     * @name HrmV1ApiAttributesDelete
     * @request DELETE:/hub/hrm/v1/api/Attributes/{id}
     * @secure
     */
    hrmV1ApiAttributesDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attributes/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attributes
     * @name HrmV1ApiAttributesGetListList
     * @request GET:/hub/hrm/v1/api/Attributes/GetList
     * @secure
     */
    hrmV1ApiAttributesGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttributesListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Attributes/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDegree
     * @name HrmV1ApiChangeDegreeList
     * @request GET:/hub/hrm/v1/api/ChangeDegree
     * @secure
     */
    hrmV1ApiChangeDegreeList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetChangeDegreeViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDegree`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDegree
     * @name HrmV1ApiChangeDegreeCreate
     * @request POST:/hub/hrm/v1/api/ChangeDegree
     * @secure
     */
    hrmV1ApiChangeDegreeCreate: (data: CreateChangeDegreeCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDegree`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDegree
     * @name HrmV1ApiChangeDegreePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/ChangeDegree
     * @secure
     */
    hrmV1ApiChangeDegreePartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDegree`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDegree
     * @name HrmV1ApiChangeDegreeDetail
     * @request GET:/hub/hrm/v1/api/ChangeDegree/{id}
     * @secure
     */
    hrmV1ApiChangeDegreeDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetByIdChangeDegreeViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDegree/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDegree
     * @name HrmV1ApiChangeDegreeUpdate
     * @request PUT:/hub/hrm/v1/api/ChangeDegree/{id}
     * @secure
     */
    hrmV1ApiChangeDegreeUpdate: (id: string, data: UpdateChangeDegreeCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDegree/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDegree
     * @name HrmV1ApiChangeDegreeDelete
     * @request DELETE:/hub/hrm/v1/api/ChangeDegree/{id}
     * @secure
     */
    hrmV1ApiChangeDegreeDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDegree/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDegree
     * @name HrmV1ApiChangeDegreeUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/ChangeDegree/UploadAttachment
     * @secure
     */
    hrmV1ApiChangeDegreeUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDegree/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDegree
     * @name HrmV1ApiChangeDegreeExportFileList
     * @request GET:/hub/hrm/v1/api/ChangeDegree/ExportFile
     * @secure
     */
    hrmV1ApiChangeDegreeExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/ChangeDegree/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDueDate
     * @name HrmV1ApiChangeDueDateList
     * @request GET:/hub/hrm/v1/api/ChangeDueDate
     * @secure
     */
    hrmV1ApiChangeDueDateList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetChangeDueDateViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDueDate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDueDate
     * @name HrmV1ApiChangeDueDateCreate
     * @request POST:/hub/hrm/v1/api/ChangeDueDate
     * @secure
     */
    hrmV1ApiChangeDueDateCreate: (data: CreateChangeDueDateCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDueDate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDueDate
     * @name HrmV1ApiChangeDueDatePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/ChangeDueDate
     * @secure
     */
    hrmV1ApiChangeDueDatePartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDueDate`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDueDate
     * @name HrmV1ApiChangeDueDateDetail
     * @request GET:/hub/hrm/v1/api/ChangeDueDate/{id}
     * @secure
     */
    hrmV1ApiChangeDueDateDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetByIdChangeDueDateViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDueDate/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDueDate
     * @name HrmV1ApiChangeDueDateUpdate
     * @request PUT:/hub/hrm/v1/api/ChangeDueDate/{id}
     * @secure
     */
    hrmV1ApiChangeDueDateUpdate: (id: string, data: UpdateChangeDueDateCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDueDate/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDueDate
     * @name HrmV1ApiChangeDueDateDelete
     * @request DELETE:/hub/hrm/v1/api/ChangeDueDate/{id}
     * @secure
     */
    hrmV1ApiChangeDueDateDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDueDate/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDueDate
     * @name HrmV1ApiChangeDueDateUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/ChangeDueDate/UploadAttachment
     * @secure
     */
    hrmV1ApiChangeDueDateUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeDueDate/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeDueDate
     * @name HrmV1ApiChangeDueDateExportFileList
     * @request GET:/hub/hrm/v1/api/ChangeDueDate/ExportFile
     * @secure
     */
    hrmV1ApiChangeDueDateExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/ChangeDueDate/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeJobTitles
     * @name HrmV1ApiChangeJobTitlesList
     * @request GET:/hub/hrm/v1/api/ChangeJobTitles
     * @secure
     */
    hrmV1ApiChangeJobTitlesList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetChangeJobTitlesViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeJobTitles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeJobTitles
     * @name HrmV1ApiChangeJobTitlesCreate
     * @request POST:/hub/hrm/v1/api/ChangeJobTitles
     * @secure
     */
    hrmV1ApiChangeJobTitlesCreate: (data: CreateChangeJobTitlesCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeJobTitles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeJobTitles
     * @name HrmV1ApiChangeJobTitlesPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/ChangeJobTitles
     * @secure
     */
    hrmV1ApiChangeJobTitlesPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeJobTitles`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeJobTitles
     * @name HrmV1ApiChangeJobTitlesDetail
     * @request GET:/hub/hrm/v1/api/ChangeJobTitles/{id}
     * @secure
     */
    hrmV1ApiChangeJobTitlesDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetByIdChangeJobTitlesViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeJobTitles/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeJobTitles
     * @name HrmV1ApiChangeJobTitlesUpdate
     * @request PUT:/hub/hrm/v1/api/ChangeJobTitles/{id}
     * @secure
     */
    hrmV1ApiChangeJobTitlesUpdate: (id: string, data: UpdateChangeJobTitlesCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeJobTitles/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeJobTitles
     * @name HrmV1ApiChangeJobTitlesDelete
     * @request DELETE:/hub/hrm/v1/api/ChangeJobTitles/{id}
     * @secure
     */
    hrmV1ApiChangeJobTitlesDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeJobTitles/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeJobTitles
     * @name HrmV1ApiChangeJobTitlesUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/ChangeJobTitles/UploadAttachment
     * @secure
     */
    hrmV1ApiChangeJobTitlesUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ChangeJobTitles/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ChangeJobTitles
     * @name HrmV1ApiChangeJobTitlesExportFileList
     * @request GET:/hub/hrm/v1/api/ChangeJobTitles/ExportFile
     * @secure
     */
    hrmV1ApiChangeJobTitlesExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/ChangeJobTitles/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContactInformation
     * @name HrmV1ApiContactInformationList
     * @request GET:/hub/hrm/v1/api/ContactInformation
     * @secure
     */
    hrmV1ApiContactInformationList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetContactInformationViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ContactInformation`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContactInformation
     * @name HrmV1ApiContactInformationCreate
     * @request POST:/hub/hrm/v1/api/ContactInformation
     * @secure
     */
    hrmV1ApiContactInformationCreate: (data: CreateContactInformationCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ContactInformation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContactInformation
     * @name HrmV1ApiContactInformationPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/ContactInformation
     * @secure
     */
    hrmV1ApiContactInformationPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ContactInformation`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContactInformation
     * @name HrmV1ApiContactInformationDetail
     * @request GET:/hub/hrm/v1/api/ContactInformation/{id}
     * @secure
     */
    hrmV1ApiContactInformationDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetContactInformationByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ContactInformation/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContactInformation
     * @name HrmV1ApiContactInformationUpdate
     * @request PUT:/hub/hrm/v1/api/ContactInformation/{id}
     * @secure
     */
    hrmV1ApiContactInformationUpdate: (id: string, data: UpdateContactInformationCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ContactInformation/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContactInformation
     * @name HrmV1ApiContactInformationDelete
     * @request DELETE:/hub/hrm/v1/api/ContactInformation/{id}
     * @secure
     */
    hrmV1ApiContactInformationDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ContactInformation/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContactInformation
     * @name HrmV1ApiContactInformationExportFileList
     * @request GET:/hub/hrm/v1/api/ContactInformation/ExportFile
     * @secure
     */
    hrmV1ApiContactInformationExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/ContactInformation/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CorrectingAcademicAchievement
     * @name HrmV1ApiCorrectingAcademicAchievementList
     * @request GET:/hub/hrm/v1/api/CorrectingAcademicAchievement
     * @secure
     */
    hrmV1ApiCorrectingAcademicAchievementList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        IsCertificateCalculationTerm?: boolean;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetCorrectingAcademicAchievementViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/CorrectingAcademicAchievement`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CorrectingAcademicAchievement
     * @name HrmV1ApiCorrectingAcademicAchievementCreate
     * @request POST:/hub/hrm/v1/api/CorrectingAcademicAchievement
     * @secure
     */
    hrmV1ApiCorrectingAcademicAchievementCreate: (
      data: CreateCorrectingAcademicAchievementCommand,
      params: RequestParams = {},
    ) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/CorrectingAcademicAchievement`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CorrectingAcademicAchievement
     * @name HrmV1ApiCorrectingAcademicAchievementPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/CorrectingAcademicAchievement
     * @secure
     */
    hrmV1ApiCorrectingAcademicAchievementPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/CorrectingAcademicAchievement`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CorrectingAcademicAchievement
     * @name HrmV1ApiCorrectingAcademicAchievementDetail
     * @request GET:/hub/hrm/v1/api/CorrectingAcademicAchievement/{id}
     * @secure
     */
    hrmV1ApiCorrectingAcademicAchievementDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetByIdCorrectingAcademicAchievementViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/CorrectingAcademicAchievement/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CorrectingAcademicAchievement
     * @name HrmV1ApiCorrectingAcademicAchievementUpdate
     * @request PUT:/hub/hrm/v1/api/CorrectingAcademicAchievement/{id}
     * @secure
     */
    hrmV1ApiCorrectingAcademicAchievementUpdate: (
      id: string,
      data: UpdateCorrectingAcademicAchievementCommand,
      params: RequestParams = {},
    ) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/CorrectingAcademicAchievement/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CorrectingAcademicAchievement
     * @name HrmV1ApiCorrectingAcademicAchievementDelete
     * @request DELETE:/hub/hrm/v1/api/CorrectingAcademicAchievement/{id}
     * @secure
     */
    hrmV1ApiCorrectingAcademicAchievementDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/CorrectingAcademicAchievement/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CorrectingAcademicAchievement
     * @name HrmV1ApiCorrectingAcademicAchievementUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/CorrectingAcademicAchievement/UploadAttachment
     * @secure
     */
    hrmV1ApiCorrectingAcademicAchievementUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/CorrectingAcademicAchievement/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CorrectingAcademicAchievement
     * @name HrmV1ApiCorrectingAcademicAchievementExportFileList
     * @request GET:/hub/hrm/v1/api/CorrectingAcademicAchievement/ExportFile
     * @secure
     */
    hrmV1ApiCorrectingAcademicAchievementExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
        IsCertificateCalculationTerm?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/CorrectingAcademicAchievement/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name HrmV1ApiCountryList
     * @request GET:/hub/hrm/v1/api/Country
     * @secure
     */
    hrmV1ApiCountryList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetCountryViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Country`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name HrmV1ApiCountryCreate
     * @request POST:/hub/hrm/v1/api/Country
     * @secure
     */
    hrmV1ApiCountryCreate: (data: CreateCountryCommend, params: RequestParams = {}) =>
      this.request<GetCountryViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Country`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name HrmV1ApiCountryPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Country
     * @secure
     */
    hrmV1ApiCountryPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Country`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name HrmV1ApiCountryDetail
     * @request GET:/hub/hrm/v1/api/Country/{CountryId}
     * @secure
     */
    hrmV1ApiCountryDetail: (countryId: number, params: RequestParams = {}) =>
      this.request<GetCountryByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Country/${countryId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name HrmV1ApiCountryUpdate
     * @request PUT:/hub/hrm/v1/api/Country/{CountryId}
     * @secure
     */
    hrmV1ApiCountryUpdate: (countryId: number, data: UpdateCountryCommend, params: RequestParams = {}) =>
      this.request<GetCountryViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Country/${countryId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name HrmV1ApiCountryDelete
     * @request DELETE:/hub/hrm/v1/api/Country/{id}
     * @secure
     */
    hrmV1ApiCountryDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Country/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name HrmV1ApiCountryGetListList
     * @request GET:/hub/hrm/v1/api/Country/GetList
     * @secure
     */
    hrmV1ApiCountryGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetCountryListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Country/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name HrmV1ApiDepartmentList
     * @request GET:/hub/hrm/v1/api/Department
     * @secure
     */
    hrmV1ApiDepartmentList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetDepartmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Department`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name HrmV1ApiDepartmentCreate
     * @request POST:/hub/hrm/v1/api/Department
     * @secure
     */
    hrmV1ApiDepartmentCreate: (data: CreateDepartmentCommend, params: RequestParams = {}) =>
      this.request<GetDepartmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Department`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name HrmV1ApiDepartmentPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Department
     * @secure
     */
    hrmV1ApiDepartmentPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Department`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name HrmV1ApiDepartmentDetail
     * @request GET:/hub/hrm/v1/api/Department/{DepartmentId}
     * @secure
     */
    hrmV1ApiDepartmentDetail: (departmentId: number, params: RequestParams = {}) =>
      this.request<GetDepartmentByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Department/${departmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name HrmV1ApiDepartmentUpdate
     * @request PUT:/hub/hrm/v1/api/Department/{DepartmentId}
     * @secure
     */
    hrmV1ApiDepartmentUpdate: (departmentId: number, data: UpdateDepartmentCommend, params: RequestParams = {}) =>
      this.request<GetDepartmentViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Department/${departmentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name HrmV1ApiDepartmentDelete
     * @request DELETE:/hub/hrm/v1/api/Department/{id}
     * @secure
     */
    hrmV1ApiDepartmentDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Department/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name HrmV1ApiDepartmentGetListList
     * @request GET:/hub/hrm/v1/api/Department/GetList
     * @secure
     */
    hrmV1ApiDepartmentGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetDepartmentListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Department/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Directorate
     * @name HrmV1ApiDirectorateList
     * @request GET:/hub/hrm/v1/api/Directorate
     * @secure
     */
    hrmV1ApiDirectorateList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetDirectorateViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Directorate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Directorate
     * @name HrmV1ApiDirectorateCreate
     * @request POST:/hub/hrm/v1/api/Directorate
     * @secure
     */
    hrmV1ApiDirectorateCreate: (data: CreateDirectorateCommend, params: RequestParams = {}) =>
      this.request<GetDirectorateViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Directorate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Directorate
     * @name HrmV1ApiDirectoratePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Directorate
     * @secure
     */
    hrmV1ApiDirectoratePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Directorate`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Directorate
     * @name HrmV1ApiDirectorateDetail
     * @request GET:/hub/hrm/v1/api/Directorate/{DirectorateId}
     * @secure
     */
    hrmV1ApiDirectorateDetail: (directorateId: number, params: RequestParams = {}) =>
      this.request<GetDirectorateByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Directorate/${directorateId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Directorate
     * @name HrmV1ApiDirectorateUpdate
     * @request PUT:/hub/hrm/v1/api/Directorate/{DirectorateId}
     * @secure
     */
    hrmV1ApiDirectorateUpdate: (directorateId: number, data: UpdateDirectorateCommend, params: RequestParams = {}) =>
      this.request<GetDirectorateViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Directorate/${directorateId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Directorate
     * @name HrmV1ApiDirectorateDelete
     * @request DELETE:/hub/hrm/v1/api/Directorate/{id}
     * @secure
     */
    hrmV1ApiDirectorateDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Directorate/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Directorate
     * @name HrmV1ApiDirectorateGetListList
     * @request GET:/hub/hrm/v1/api/Directorate/GetList
     * @secure
     */
    hrmV1ApiDirectorateGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetDirectorateListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Directorate/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name HrmV1ApiDocumentList
     * @request GET:/hub/hrm/v1/api/Document
     * @secure
     */
    hrmV1ApiDocumentList: (
      query?: {
        /** @format uuid */
        Id?: string;
        /** @format uuid */
        EmployeeId?: string;
        NameTerm?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicAchievementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Document`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name HrmV1ApiDocumentPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Document
     * @secure
     */
    hrmV1ApiDocumentPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Document`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name HrmV1ApiDocumentCreate
     * @request POST:/hub/hrm/v1/api/Document
     * @secure
     */
    hrmV1ApiDocumentCreate: (data: AddDocumentCommand, params: RequestParams = {}) =>
      this.request<GetDocumentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Document`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name HrmV1ApiDocumentDetail
     * @request GET:/hub/hrm/v1/api/Document/{DocumentId}
     * @secure
     */
    hrmV1ApiDocumentDetail: (documentId: string, params: RequestParams = {}) =>
      this.request<GetDocumentByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Document/${documentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name HrmV1ApiDocumentUpdate
     * @request PUT:/hub/hrm/v1/api/Document/{DocumentId}
     * @secure
     */
    hrmV1ApiDocumentUpdate: (documentId: string, data: UpdateDocumentCommand, params: RequestParams = {}) =>
      this.request<GetDocumentViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Document/${documentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name HrmV1ApiDocumentUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Document/UploadAttachment
     * @secure
     */
    hrmV1ApiDocumentUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Document/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentVerification
     * @name HrmV1ApiDocumentVerificationList
     * @request GET:/hub/hrm/v1/api/DocumentVerification
     * @secure
     */
    hrmV1ApiDocumentVerificationList: (
      query?: {
        /** @format int32 */
        Id?: number;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetDocVerificationViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/DocumentVerification`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentVerification
     * @name HrmV1ApiDocumentVerificationCreate
     * @request POST:/hub/hrm/v1/api/DocumentVerification
     * @secure
     */
    hrmV1ApiDocumentVerificationCreate: (data: CreateDocVerificationCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/DocumentVerification`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentVerification
     * @name HrmV1ApiDocumentVerificationPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/DocumentVerification
     * @secure
     */
    hrmV1ApiDocumentVerificationPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/DocumentVerification`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentVerification
     * @name HrmV1ApiDocumentVerificationDetail
     * @request GET:/hub/hrm/v1/api/DocumentVerification/{id}
     * @secure
     */
    hrmV1ApiDocumentVerificationDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetByIdDocVerificationViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/DocumentVerification/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentVerification
     * @name HrmV1ApiDocumentVerificationUpdate
     * @request PUT:/hub/hrm/v1/api/DocumentVerification/{id}
     * @secure
     */
    hrmV1ApiDocumentVerificationUpdate: (id: string, data: UpdateDocVerificationCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/DocumentVerification/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentVerification
     * @name HrmV1ApiDocumentVerificationDelete
     * @request DELETE:/hub/hrm/v1/api/DocumentVerification/{id}
     * @secure
     */
    hrmV1ApiDocumentVerificationDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/DocumentVerification/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentVerification
     * @name HrmV1ApiDocumentVerificationGetEmployeeDocVerificationDetail
     * @request GET:/hub/hrm/v1/api/DocumentVerification/GetEmployeeDocVerification/{id}
     * @secure
     */
    hrmV1ApiDocumentVerificationGetEmployeeDocVerificationDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetEmployeeDocVerificationViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/DocumentVerification/GetEmployeeDocVerification/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentVerification
     * @name HrmV1ApiDocumentVerificationUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/DocumentVerification/UploadAttachment
     * @secure
     */
    hrmV1ApiDocumentVerificationUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/DocumentVerification/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentVerification
     * @name HrmV1ApiDocumentVerificationExportFileList
     * @request GET:/hub/hrm/v1/api/DocumentVerification/ExportFile
     * @secure
     */
    hrmV1ApiDocumentVerificationExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/DocumentVerification/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags EducationInfo
     * @name HrmV1ApiEducationInformationList
     * @request GET:/hub/hrm/v1/api/EducationInformation
     * @secure
     */
    hrmV1ApiEducationInformationList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        NameTerm?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicAchievementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EducationInformation`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EducationInfo
     * @name HrmV1ApiEducationInformationCreate
     * @request POST:/hub/hrm/v1/api/EducationInformation
     * @secure
     */
    hrmV1ApiEducationInformationCreate: (data: AddEducationInfoCommand, params: RequestParams = {}) =>
      this.request<GetEducationInfoViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EducationInformation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EducationInfo
     * @name HrmV1ApiEducationInformationPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/EducationInformation
     * @secure
     */
    hrmV1ApiEducationInformationPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EducationInformation`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EducationInfo
     * @name HrmV1ApiEducationInformationDetail
     * @request GET:/hub/hrm/v1/api/EducationInformation/{EducationInfoId}
     * @secure
     */
    hrmV1ApiEducationInformationDetail: (educationInfoId: string, params: RequestParams = {}) =>
      this.request<GetEducationInfoByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EducationInformation/${educationInfoId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EducationInfo
     * @name HrmV1ApiEducationInformationUpdate
     * @request PUT:/hub/hrm/v1/api/EducationInformation/{EducationInfoId}
     * @secure
     */
    hrmV1ApiEducationInformationUpdate: (
      educationInfoId: string,
      data: UpdateEducationInfoCommand,
      params: RequestParams = {},
    ) =>
      this.request<GetEducationInfoViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EducationInformation/${educationInfoId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EducationInfo
     * @name HrmV1ApiEducationInformationUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/EducationInformation/UploadAttachment
     * @secure
     */

    hrmV1ApiEducationInformationUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EducationInformation/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EducationInfo
     * @name HrmV1ApiEducationInformationDelete
     * @request DELETE:/hub/hrm/v1/api/EducationInformation/{id}
     * @secure
     */
    hrmV1ApiEducationInformationDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EducationInformation/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EducationInfo
     * @name HrmV1ApiEducationInformationExportFileList
     * @request GET:/hub/hrm/v1/api/EducationInformation/ExportFile
     * @secure
     */
    hrmV1ApiEducationInformationExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/EducationInformation/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name HrmV1ApiEmployeeList
     * @request GET:/hub/hrm/v1/api/Employee
     * @secure
     */
    hrmV1ApiEmployeeList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        TypeOfJobId?: number;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicAchievementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Employee`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name HrmV1ApiEmployeeCreate
     * @request POST:/hub/hrm/v1/api/Employee
     * @secure
     */
    hrmV1ApiEmployeeCreate: (data: AddEmployeeCommend, params: RequestParams = {}) =>
      this.request<GetEmployeeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Employee`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name HrmV1ApiEmployeeDetail
     * @request GET:/hub/hrm/v1/api/Employee/{EmployeeId}
     * @secure
     */
    hrmV1ApiEmployeeDetail: (employeeId: string, params: RequestParams = {}) =>
      this.request<GetEmployeeByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Employee/${employeeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name HrmV1ApiEmployeeUpdate
     * @request PUT:/hub/hrm/v1/api/Employee/{EmployeeId}
     * @secure
     */
    hrmV1ApiEmployeeUpdate: (employeeId: string, data: UpdateEmployeeCommand, params: RequestParams = {}) =>
      this.request<GetEmployeeViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Employee/${employeeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name HrmV1ApiEmployeeUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Employee/UploadAttachment
     * @secure
     */
    hrmV1ApiEmployeeUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Employee/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name HrmV1ApiEmployeeUpdateWorkUpdate
     * @request PUT:/hub/hrm/v1/api/Employee/UpdateWork/{EmployeeId}
     * @secure
     */
    hrmV1ApiEmployeeUpdateWorkUpdate: (
      employeeId: string,
      query?: {
        workingStatus?: WorkingStatusEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetEmployeeViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Employee/UpdateWork/${employeeId}`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name HrmV1ApiEmployeeAddAvatarCreate
     * @request POST:/hub/hrm/v1/api/Employee/AddAvatar
     * @secure
     */
    hrmV1ApiEmployeeAddAvatarCreate: (
      data: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format binary */
        File?: File;
        /** @format uuid */
        CreateBy?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Employee/AddAvatar`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeCourse
     * @name HrmV1ApiEmployeeCourseCreate
     * @request POST:/hub/hrm/v1/api/EmployeeCourse
     * @secure
     */
    hrmV1ApiEmployeeCourseCreate: (data: CreateEmployeeCourseCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeCourse`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeCourse
     * @name HrmV1ApiEmployeeCoursePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/EmployeeCourse
     * @secure
     */
    hrmV1ApiEmployeeCoursePartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeCourse`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeCourse
     * @name HrmV1ApiEmployeeCourseList
     * @request GET:/hub/hrm/v1/api/EmployeeCourse
     * @secure
     */
    hrmV1ApiEmployeeCourseList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllEmployeeCoursesViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeCourse`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeCourse
     * @name HrmV1ApiEmployeeCourseUpdate
     * @request PUT:/hub/hrm/v1/api/EmployeeCourse/{CourseId}
     * @secure
     */
    hrmV1ApiEmployeeCourseUpdate: (courseId: string, data: UpdateEmployeeCourseCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeCourse/${courseId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeCourse
     * @name HrmV1ApiEmployeeCourseDetail
     * @request GET:/hub/hrm/v1/api/EmployeeCourse/{CourseId}
     * @secure
     */
    hrmV1ApiEmployeeCourseDetail: (courseId: string, params: RequestParams = {}) =>
      this.request<GetEmployeeCourseByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeCourse/${courseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeCourse
     * @name HrmV1ApiEmployeeCourseDelete
     * @request DELETE:/hub/hrm/v1/api/EmployeeCourse/{id}
     * @secure
     */
    hrmV1ApiEmployeeCourseDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeCourse/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeCourse
     * @name HrmV1ApiEmployeeCourseUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/EmployeeCourse/UploadAttachment
     * @secure
     */
    hrmV1ApiEmployeeCourseUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeCourse/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeCourse
     * @name HrmV1ApiEmployeeCourseExportFileList
     * @request GET:/hub/hrm/v1/api/EmployeeCourse/ExportFile
     * @secure
     */
    hrmV1ApiEmployeeCourseExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/EmployeeCourse/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDisciplinary
     * @name HrmV1ApiEmployeeDisciplinaryList
     * @request GET:/hub/hrm/v1/api/EmployeeDisciplinary
     * @secure
     */
    hrmV1ApiEmployeeDisciplinaryList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format uuid */
        Id?: string;
        NameTerm?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetDisciplinaryViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDisciplinary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDisciplinary
     * @name HrmV1ApiEmployeeDisciplinaryCreate
     * @request POST:/hub/hrm/v1/api/EmployeeDisciplinary
     * @secure
     */
    hrmV1ApiEmployeeDisciplinaryCreate: (data: AddDisciplinaryCommand, params: RequestParams = {}) =>
      this.request<GetDisciplinaryViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDisciplinary`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDisciplinary
     * @name HrmV1ApiEmployeeDisciplinaryPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/EmployeeDisciplinary
     * @secure
     */
    hrmV1ApiEmployeeDisciplinaryPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDisciplinary`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDisciplinary
     * @name HrmV1ApiEmployeeDisciplinaryDetail
     * @request GET:/hub/hrm/v1/api/EmployeeDisciplinary/{DisciplinaryId}
     * @secure
     */
    hrmV1ApiEmployeeDisciplinaryDetail: (disciplinaryId: string, params: RequestParams = {}) =>
      this.request<GetDisciplinaryByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDisciplinary/${disciplinaryId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDisciplinary
     * @name HrmV1ApiEmployeeDisciplinaryUpdate
     * @request PUT:/hub/hrm/v1/api/EmployeeDisciplinary/{DisciplinaryId}
     * @secure
     */
    hrmV1ApiEmployeeDisciplinaryUpdate: (
      disciplinaryId: string,
      data: UpdateDisciplinaryCommand,
      params: RequestParams = {},
    ) =>
      this.request<GetDisciplinaryViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDisciplinary/${disciplinaryId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDisciplinary
     * @name HrmV1ApiEmployeeDisciplinaryDelete
     * @request DELETE:/hub/hrm/v1/api/EmployeeDisciplinary/{id}
     * @secure
     */
    hrmV1ApiEmployeeDisciplinaryDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDisciplinary/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDisciplinary
     * @name HrmV1ApiEmployeeDisciplinaryUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/EmployeeDisciplinary/UploadAttachment
     * @secure
     */
    hrmV1ApiEmployeeDisciplinaryUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDisciplinary/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDisciplinary
     * @name HrmV1ApiEmployeeDisciplinaryExportFileList
     * @request GET:/hub/hrm/v1/api/EmployeeDisciplinary/ExportFile
     * @secure
     */
    hrmV1ApiEmployeeDisciplinaryExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/EmployeeDisciplinary/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDocumentsType
     * @name HrmV1ApiEmployeeDocumentsTypeList
     * @request GET:/hub/hrm/v1/api/EmployeeDocumentsType
     * @secure
     */
    hrmV1ApiEmployeeDocumentsTypeList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetEmployeeDocumentsTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDocumentsType`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDocumentsType
     * @name HrmV1ApiEmployeeDocumentsTypeCreate
     * @request POST:/hub/hrm/v1/api/EmployeeDocumentsType
     * @secure
     */
    hrmV1ApiEmployeeDocumentsTypeCreate: (data: CreateEmployeeDocumentsTypeCommend, params: RequestParams = {}) =>
      this.request<GetEmployeeDocumentsTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDocumentsType`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDocumentsType
     * @name HrmV1ApiEmployeeDocumentsTypePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/EmployeeDocumentsType
     * @secure
     */
    hrmV1ApiEmployeeDocumentsTypePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDocumentsType`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDocumentsType
     * @name HrmV1ApiEmployeeDocumentsTypeDetail
     * @request GET:/hub/hrm/v1/api/EmployeeDocumentsType/{EmployeeDocumentsTypeId}
     * @secure
     */
    hrmV1ApiEmployeeDocumentsTypeDetail: (employeeDocumentsTypeId: number, params: RequestParams = {}) =>
      this.request<GetEmployeeDocumentsByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDocumentsType/${employeeDocumentsTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDocumentsType
     * @name HrmV1ApiEmployeeDocumentsTypeUpdate
     * @request PUT:/hub/hrm/v1/api/EmployeeDocumentsType/{EmployeeDocumentsTypeId}
     * @secure
     */
    hrmV1ApiEmployeeDocumentsTypeUpdate: (
      employeeDocumentsTypeId: number,
      data: UpdateEmployeeDocumentsTypeCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetEmployeeDocumentsTypeViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDocumentsType/${employeeDocumentsTypeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDocumentsType
     * @name HrmV1ApiEmployeeDocumentsTypeDelete
     * @request DELETE:/hub/hrm/v1/api/EmployeeDocumentsType/{id}
     * @secure
     */
    hrmV1ApiEmployeeDocumentsTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDocumentsType/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeDocumentsType
     * @name HrmV1ApiEmployeeDocumentsTypeGetListList
     * @request GET:/hub/hrm/v1/api/EmployeeDocumentsType/GetList
     * @secure
     */
    hrmV1ApiEmployeeDocumentsTypeGetListList: (
      query?: {
        /** @format uuid */
        Id?: string;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetEmployeeDocumentsListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeDocumentsType/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeePosition
     * @name HrmV1ApiEmployeePositionList
     * @request GET:/hub/hrm/v1/api/EmployeePosition
     * @secure
     */
    hrmV1ApiEmployeePositionList: (
      query?: {
        EmployeePositionType?: EmployeePositionTypeEnum;
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetEmployeePositionViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeePosition`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeePosition
     * @name HrmV1ApiEmployeePositionCreate
     * @request POST:/hub/hrm/v1/api/EmployeePosition
     * @secure
     */
    hrmV1ApiEmployeePositionCreate: (data: CreateEmployeePositionCommend, params: RequestParams = {}) =>
      this.request<GetEmployeePositionViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeePosition`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeePosition
     * @name HrmV1ApiEmployeePositionPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/EmployeePosition
     * @secure
     */
    hrmV1ApiEmployeePositionPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeePosition`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeePosition
     * @name HrmV1ApiEmployeePositionDetail
     * @request GET:/hub/hrm/v1/api/EmployeePosition/{EmployeePositionId}
     * @secure
     */
    hrmV1ApiEmployeePositionDetail: (employeePositionId: string, params: RequestParams = {}) =>
      this.request<GetEmployeePositionByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeePosition/${employeePositionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeePosition
     * @name HrmV1ApiEmployeePositionUpdate
     * @request PUT:/hub/hrm/v1/api/EmployeePosition/{EmployeePositionId}
     * @secure
     */
    hrmV1ApiEmployeePositionUpdate: (
      employeePositionId: string,
      data: UpdateEmployeePositionCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetEmployeePositionViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeePosition/${employeePositionId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeePosition
     * @name HrmV1ApiEmployeePositionDelete
     * @request DELETE:/hub/hrm/v1/api/EmployeePosition/{id}
     * @secure
     */
    hrmV1ApiEmployeePositionDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeePosition/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeePosition
     * @name HrmV1ApiEmployeePositionUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/EmployeePosition/UploadAttachment
     * @secure
     */
    hrmV1ApiEmployeePositionUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeePosition/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeePosition
     * @name HrmV1ApiEmployeePositionExportFileList
     * @request GET:/hub/hrm/v1/api/EmployeePosition/ExportFile
     * @secure
     */
    hrmV1ApiEmployeePositionExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/EmployeePosition/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeProfile
     * @name HrmV1ApiEmployeeProfileBaseInfoGetAdministrativeOrderDetail
     * @request GET:/hub/hrm/v1/api/EmployeeProfileBaseInfo/GetAdministrativeOrder/{employeeId}
     * @secure
     */
    hrmV1ApiEmployeeProfileBaseInfoGetAdministrativeOrderDetail: (employeeId: string, params: RequestParams = {}) =>
      this.request<GetAdministrativeOrderToEmployeeProfileViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeProfileBaseInfo/GetAdministrativeOrder/${employeeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeProfile
     * @name HrmV1ApiEmployeeProfileBaseInfoGetEducationInfoDetail
     * @request GET:/hub/hrm/v1/api/EmployeeProfileBaseInfo/GetEducationInfo/{employeeId}
     * @secure
     */
    hrmV1ApiEmployeeProfileBaseInfoGetEducationInfoDetail: (employeeId: string, params: RequestParams = {}) =>
      this.request<GetEducationInfoToEmployeeProfileViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeProfileBaseInfo/GetEducationInfo/${employeeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeProfile
     * @name HrmV1ApiEmployeeProfileBaseInfoGetManagementInfoDetail
     * @request GET:/hub/hrm/v1/api/EmployeeProfileBaseInfo/GetManagementInfo/{employeeId}
     * @secure
     */
    hrmV1ApiEmployeeProfileBaseInfoGetManagementInfoDetail: (employeeId: string, params: RequestParams = {}) =>
      this.request<GetManagementInfoToEmployeeProfileViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeProfileBaseInfo/GetManagementInfo/${employeeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeProfile
     * @name HrmV1ApiEmployeeProfileBaseInfoGetEmployeeInfoDetail
     * @request GET:/hub/hrm/v1/api/EmployeeProfileBaseInfo/GetEmployeeInfo/{employeeId}
     * @secure
     */
    hrmV1ApiEmployeeProfileBaseInfoGetEmployeeInfoDetail: (employeeId: string, params: RequestParams = {}) =>
      this.request<GetEmployeeInformationViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeProfileBaseInfo/GetEmployeeInfo/${employeeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeProfile
     * @name HrmV1ApiEmployeeProfileBaseInfoGetLotEmployeeGetLotEmployeeList
     * @request GET:/hub/hrm/v1/api/EmployeeProfileBaseInfo/GetLotEmployee/GetLotEmployee
     * @secure
     */
    hrmV1ApiEmployeeProfileBaseInfoGetLotEmployeeGetLotEmployeeList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetEmployeeInformationViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeProfileBaseInfo/GetLotEmployee/GetLotEmployee`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeService
     * @name HrmV1ApiEmployeeServiceList
     * @request GET:/hub/hrm/v1/api/EmployeeService
     * @secure
     */
    hrmV1ApiEmployeeServiceList: (
      query?: {
        /** @format uuid */
        Id?: string;
        /** @format uuid */
        EmployeeId?: string;
        NameTerm?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetEmployeeServiceViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeService`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeService
     * @name HrmV1ApiEmployeeServiceCreate
     * @request POST:/hub/hrm/v1/api/EmployeeService
     * @secure
     */
    hrmV1ApiEmployeeServiceCreate: (data: AddEmployeeServiceCommand, params: RequestParams = {}) =>
      this.request<GetEmployeeServiceViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeService`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeService
     * @name HrmV1ApiEmployeeServiceDetail
     * @request GET:/hub/hrm/v1/api/EmployeeService/{employeeServiceId}
     * @secure
     */
    hrmV1ApiEmployeeServiceDetail: (employeeServiceId: string, params: RequestParams = {}) =>
      this.request<GetEmployeeServiceByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeService/${employeeServiceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeService
     * @name HrmV1ApiEmployeeServiceUpdate
     * @request PUT:/hub/hrm/v1/api/EmployeeService/{employeeServiceId}
     * @secure
     */
    hrmV1ApiEmployeeServiceUpdate: (
      employeeServiceId: number,
      data: UpdateEmployeeServiceCommand,
      params: RequestParams = {},
    ) =>
      this.request<GetEmployeeServiceViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/EmployeeService/${employeeServiceId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeService
     * @name HrmV1ApiEmployeeServiceExportFileList
     * @request GET:/hub/hrm/v1/api/EmployeeService/ExportFile
     * @secure
     */
    hrmV1ApiEmployeeServiceExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/EmployeeService/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Governorate
     * @name HrmV1ApiGovernorateList
     * @request GET:/hub/hrm/v1/api/Governorate
     * @secure
     */
    hrmV1ApiGovernorateList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetGovernorateViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Governorate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Governorate
     * @name HrmV1ApiGovernorateCreate
     * @request POST:/hub/hrm/v1/api/Governorate
     * @secure
     */
    hrmV1ApiGovernorateCreate: (data: CreateGovernorateCommend, params: RequestParams = {}) =>
      this.request<GetGovernorateViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Governorate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Governorate
     * @name HrmV1ApiGovernoratePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Governorate
     * @secure
     */
    hrmV1ApiGovernoratePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Governorate`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Governorate
     * @name HrmV1ApiGovernorateDetail
     * @request GET:/hub/hrm/v1/api/Governorate/{GovernorateId}
     * @secure
     */
    hrmV1ApiGovernorateDetail: (governorateId: number, params: RequestParams = {}) =>
      this.request<GetGovernorateByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Governorate/${governorateId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Governorate
     * @name HrmV1ApiGovernorateUpdate
     * @request PUT:/hub/hrm/v1/api/Governorate/{GovernorateId}
     * @secure
     */
    hrmV1ApiGovernorateUpdate: (governorateId: number, data: UpdateGovernorateCommend, params: RequestParams = {}) =>
      this.request<GetGovernorateViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Governorate/${governorateId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Governorate
     * @name HrmV1ApiGovernorateDelete
     * @request DELETE:/hub/hrm/v1/api/Governorate/{id}
     * @secure
     */
    hrmV1ApiGovernorateDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Governorate/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Governorate
     * @name HrmV1ApiGovernorateGetListList
     * @request GET:/hub/hrm/v1/api/Governorate/GetList
     * @secure
     */
    hrmV1ApiGovernorateGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetGovernorateListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Governorate/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags HandPull
     * @name HrmV1ApiHandPullCreate
     * @request POST:/hub/hrm/v1/api/HandPull
     * @secure
     */
    hrmV1ApiHandPullCreate: (data: CreateHandPullCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/HandPull`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags HandPull
     * @name HrmV1ApiHandPullPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/HandPull
     * @secure
     */
    hrmV1ApiHandPullPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/HandPull`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags HandPull
     * @name HrmV1ApiHandPullList
     * @request GET:/hub/hrm/v1/api/HandPull
     * @secure
     */
    hrmV1ApiHandPullList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllHandPullsViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/HandPull`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags HandPull
     * @name HrmV1ApiHandPullUpdate
     * @request PUT:/hub/hrm/v1/api/HandPull/{Id}
     * @secure
     */
    hrmV1ApiHandPullUpdate: (id: string, data: UpdateHandPullCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/HandPull/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags HandPull
     * @name HrmV1ApiHandPullDetail
     * @request GET:/hub/hrm/v1/api/HandPull/{Id}
     * @secure
     */
    hrmV1ApiHandPullDetail: (
      id: string,
      query?: {
        status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetHandPullByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/HandPull/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags HandPull
     * @name HrmV1ApiHandPullDelete
     * @request DELETE:/hub/hrm/v1/api/HandPull/{id}
     * @secure
     */
    hrmV1ApiHandPullDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/HandPull/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags HandPull
     * @name HrmV1ApiHandPullUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/HandPull/UploadAttachment
     * @secure
     */
    hrmV1ApiHandPullUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/HandPull/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags HandPull
     * @name HrmV1ApiHandPullExportFileList
     * @request GET:/hub/hrm/v1/api/HandPull/ExportFile
     * @secure
     */
    hrmV1ApiHandPullExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/HandPull/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interruption
     * @name HrmV1ApiInterruptionCreate
     * @request POST:/hub/hrm/v1/api/Interruption
     * @secure
     */
    hrmV1ApiInterruptionCreate: (data: CreateInterruptionCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Interruption`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interruption
     * @name HrmV1ApiInterruptionPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Interruption
     * @secure
     */
    hrmV1ApiInterruptionPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Interruption`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interruption
     * @name HrmV1ApiInterruptionList
     * @request GET:/hub/hrm/v1/api/Interruption
     * @secure
     */
    hrmV1ApiInterruptionList: (
      query?: {
        /** @format uuid */
        Id?: string;
        /** @format uuid */
        EmployeeId?: string;
        NameTerm?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllInterruptionsViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Interruption`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interruption
     * @name HrmV1ApiInterruptionUpdate
     * @request PUT:/hub/hrm/v1/api/Interruption/{Id}
     * @secure
     */
    hrmV1ApiInterruptionUpdate: (id: string, data: UpdateInterruptionCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Interruption/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interruption
     * @name HrmV1ApiInterruptionDetail
     * @request GET:/hub/hrm/v1/api/Interruption/{Id}
     * @secure
     */
    hrmV1ApiInterruptionDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetInterruptionByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Interruption/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interruption
     * @name HrmV1ApiInterruptionDelete
     * @request DELETE:/hub/hrm/v1/api/Interruption/{id}
     * @secure
     */
    hrmV1ApiInterruptionDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Interruption/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interruption
     * @name HrmV1ApiInterruptionUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Interruption/UploadAttachment
     * @secure
     */
    hrmV1ApiInterruptionUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Interruption/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interruption
     * @name HrmV1ApiInterruptionExportFileList
     * @request GET:/hub/hrm/v1/api/Interruption/ExportFile
     * @secure
     */
    hrmV1ApiInterruptionExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/Interruption/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCategory
     * @name HrmV1ApiJobCategoryList
     * @request GET:/hub/hrm/v1/api/JobCategory
     * @secure
     */
    hrmV1ApiJobCategoryList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetJobCategoryViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobCategory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCategory
     * @name HrmV1ApiJobCategoryCreate
     * @request POST:/hub/hrm/v1/api/JobCategory
     * @secure
     */
    hrmV1ApiJobCategoryCreate: (data: CreateJobCategoryCommend, params: RequestParams = {}) =>
      this.request<GetJobCategoryViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobCategory`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCategory
     * @name HrmV1ApiJobCategoryPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/JobCategory
     * @secure
     */
    hrmV1ApiJobCategoryPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobCategory`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCategory
     * @name HrmV1ApiJobCategoryDetail
     * @request GET:/hub/hrm/v1/api/JobCategory/{JobCategoryId}
     * @secure
     */
    hrmV1ApiJobCategoryDetail: (jobCategoryId: number, params: RequestParams = {}) =>
      this.request<GetJobCategoryByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobCategory/${jobCategoryId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCategory
     * @name HrmV1ApiJobCategoryUpdate
     * @request PUT:/hub/hrm/v1/api/JobCategory/{JobCategoryId}
     * @secure
     */
    hrmV1ApiJobCategoryUpdate: (jobCategoryId: number, data: UpdateJobCategoryCommend, params: RequestParams = {}) =>
      this.request<GetJobCategoryViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobCategory/${jobCategoryId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCategory
     * @name HrmV1ApiJobCategoryDelete
     * @request DELETE:/hub/hrm/v1/api/JobCategory/{id}
     * @secure
     */
    hrmV1ApiJobCategoryDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobCategory/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCategory
     * @name HrmV1ApiJobCategoryGetListList
     * @request GET:/hub/hrm/v1/api/JobCategory/GetList
     * @secure
     */
    hrmV1ApiJobCategoryGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetJobCategoryListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobCategory/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDegree
     * @name HrmV1ApiJobDegreeList
     * @request GET:/hub/hrm/v1/api/JobDegree
     * @secure
     */
    hrmV1ApiJobDegreeList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetJobDegreeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDegree`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDegree
     * @name HrmV1ApiJobDegreeCreate
     * @request POST:/hub/hrm/v1/api/JobDegree
     * @secure
     */
    hrmV1ApiJobDegreeCreate: (data: CreateJobDegreeCommend, params: RequestParams = {}) =>
      this.request<GetJobDegreeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDegree`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDegree
     * @name HrmV1ApiJobDegreePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/JobDegree
     * @secure
     */
    hrmV1ApiJobDegreePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDegree`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDegree
     * @name HrmV1ApiJobDegreeDetail
     * @request GET:/hub/hrm/v1/api/JobDegree/{JobDegreeId}
     * @secure
     */
    hrmV1ApiJobDegreeDetail: (jobDegreeId: number, params: RequestParams = {}) =>
      this.request<GetJobDegreeByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDegree/${jobDegreeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDegree
     * @name HrmV1ApiJobDegreeUpdate
     * @request PUT:/hub/hrm/v1/api/JobDegree/{JobDegreeId}
     * @secure
     */
    hrmV1ApiJobDegreeUpdate: (jobDegreeId: number, data: UpdateJobDegreeCommend, params: RequestParams = {}) =>
      this.request<GetJobDegreeViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDegree/${jobDegreeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDegree
     * @name HrmV1ApiJobDegreeDelete
     * @request DELETE:/hub/hrm/v1/api/JobDegree/{id}
     * @secure
     */
    hrmV1ApiJobDegreeDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDegree/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDegree
     * @name HrmV1ApiJobDegreeGetListList
     * @request GET:/hub/hrm/v1/api/JobDegree/GetList
     * @secure
     */
    hrmV1ApiJobDegreeGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetJobDegreeListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDegree/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDescription
     * @name HrmV1ApiJobDescriptionList
     * @request GET:/hub/hrm/v1/api/JobDescription
     * @secure
     */
    hrmV1ApiJobDescriptionList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetJobDescriptionViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDescription`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDescription
     * @name HrmV1ApiJobDescriptionCreate
     * @request POST:/hub/hrm/v1/api/JobDescription
     * @secure
     */
    hrmV1ApiJobDescriptionCreate: (data: CreateJobDescriptionCommend, params: RequestParams = {}) =>
      this.request<GetJobDescriptionViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDescription`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDescription
     * @name HrmV1ApiJobDescriptionPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/JobDescription
     * @secure
     */
    hrmV1ApiJobDescriptionPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDescription`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDescription
     * @name HrmV1ApiJobDescriptionDetail
     * @request GET:/hub/hrm/v1/api/JobDescription/{JobDescriptionId}
     * @secure
     */
    hrmV1ApiJobDescriptionDetail: (jobDescriptionId: number, params: RequestParams = {}) =>
      this.request<GetJobDescriptionByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDescription/${jobDescriptionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDescription
     * @name HrmV1ApiJobDescriptionUpdate
     * @request PUT:/hub/hrm/v1/api/JobDescription/{JobDescriptionId}
     * @secure
     */
    hrmV1ApiJobDescriptionUpdate: (
      jobDescriptionId: number,
      data: UpdateJobDescriptionCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetJobDescriptionViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDescription/${jobDescriptionId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDescription
     * @name HrmV1ApiJobDescriptionDelete
     * @request DELETE:/hub/hrm/v1/api/JobDescription/{id}
     * @secure
     */
    hrmV1ApiJobDescriptionDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDescription/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobDescription
     * @name HrmV1ApiJobDescriptionGetListList
     * @request GET:/hub/hrm/v1/api/JobDescription/GetList
     * @secure
     */
    hrmV1ApiJobDescriptionGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetJobDescriptionListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobDescription/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobInformations
     * @name HrmV1ApiJobInformationsList
     * @request GET:/hub/hrm/v1/api/JobInformations
     * @secure
     */
    hrmV1ApiJobInformationsList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllJobInformationsViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobInformations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobInformations
     * @name HrmV1ApiJobInformationsDetail
     * @request GET:/hub/hrm/v1/api/JobInformations/{id}
     * @secure
     */
    hrmV1ApiJobInformationsDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetJobInformationByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobInformations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobInformations
     * @name HrmV1ApiJobInformationsExportFileCreate
     * @request POST:/hub/hrm/v1/api/JobInformations/ExportFile
     * @secure
     */
    hrmV1ApiJobInformationsExportFileCreate: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobInformations/ExportFile`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobTitle
     * @name HrmV1ApiJobTitleList
     * @request GET:/hub/hrm/v1/api/JobTitle
     * @secure
     */
    hrmV1ApiJobTitleList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetJobTitleViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobTitle`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobTitle
     * @name HrmV1ApiJobTitleCreate
     * @request POST:/hub/hrm/v1/api/JobTitle
     * @secure
     */
    hrmV1ApiJobTitleCreate: (data: CreateJobTitleCommend, params: RequestParams = {}) =>
      this.request<GetJobTitleViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobTitle`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobTitle
     * @name HrmV1ApiJobTitlePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/JobTitle
     * @secure
     */
    hrmV1ApiJobTitlePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobTitle`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobTitle
     * @name HrmV1ApiJobTitleDetail
     * @request GET:/hub/hrm/v1/api/JobTitle/{JobTitleId}
     * @secure
     */
    hrmV1ApiJobTitleDetail: (jobTitleId: number, params: RequestParams = {}) =>
      this.request<GetJobTitleByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobTitle/${jobTitleId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobTitle
     * @name HrmV1ApiJobTitleUpdate
     * @request PUT:/hub/hrm/v1/api/JobTitle/{JobTitleId}
     * @secure
     */
    hrmV1ApiJobTitleUpdate: (jobTitleId: number, data: UpdateJobTitleCommend, params: RequestParams = {}) =>
      this.request<GetJobTitleViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobTitle/${jobTitleId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobTitle
     * @name HrmV1ApiJobTitleDelete
     * @request DELETE:/hub/hrm/v1/api/JobTitle/{id}
     * @secure
     */
    hrmV1ApiJobTitleDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobTitle/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobTitle
     * @name HrmV1ApiJobTitleGetListList
     * @request GET:/hub/hrm/v1/api/JobTitle/GetList
     * @secure
     */
    hrmV1ApiJobTitleGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetJobTitleListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/JobTitle/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Law
     * @name HrmV1ApiLawList
     * @request GET:/hub/hrm/v1/api/Law
     * @secure
     */
    hrmV1ApiLawList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetLawViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Law`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Law
     * @name HrmV1ApiLawCreate
     * @request POST:/hub/hrm/v1/api/Law
     * @secure
     */
    hrmV1ApiLawCreate: (data: CreateLawCommend, params: RequestParams = {}) =>
      this.request<GetLawViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Law`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Law
     * @name HrmV1ApiLawPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Law
     * @secure
     */
    hrmV1ApiLawPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Law`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Law
     * @name HrmV1ApiLawDetail
     * @request GET:/hub/hrm/v1/api/Law/{LawId}
     * @secure
     */
    hrmV1ApiLawDetail: (lawId: number, params: RequestParams = {}) =>
      this.request<GetLawByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Law/${lawId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Law
     * @name HrmV1ApiLawUpdate
     * @request PUT:/hub/hrm/v1/api/Law/{LawId}
     * @secure
     */
    hrmV1ApiLawUpdate: (lawId: number, data: UpdateLawCommend, params: RequestParams = {}) =>
      this.request<GetLawViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Law/${lawId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Law
     * @name HrmV1ApiLawDelete
     * @request DELETE:/hub/hrm/v1/api/Law/{id}
     * @secure
     */
    hrmV1ApiLawDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Law/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Law
     * @name HrmV1ApiLawGetListList
     * @request GET:/hub/hrm/v1/api/Law/GetList
     * @secure
     */
    hrmV1ApiLawGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetLawListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Law/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leaves
     * @name HrmV1ApiLeavesCreate
     * @request POST:/hub/hrm/v1/api/Leaves
     * @secure
     */
    hrmV1ApiLeavesCreate: (data: CreateLeaveCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Leaves`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leaves
     * @name HrmV1ApiLeavesPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Leaves
     * @secure
     */
    hrmV1ApiLeavesPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Leaves`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leaves
     * @name HrmV1ApiLeavesList
     * @request GET:/hub/hrm/v1/api/Leaves
     * @secure
     */
    hrmV1ApiLeavesList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format date */
        DateFrom?: string;
        /** @format date */
        DateTo?: string;
        /** @format int32 */
        PageSize?: number;
        /** @format int32 */
        TypeOfLeaveId?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetLeavesViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Leaves`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leaves
     * @name HrmV1ApiLeavesUpdate
     * @request PUT:/hub/hrm/v1/api/Leaves/{id}
     * @secure
     */
    hrmV1ApiLeavesUpdate: (id: string, data: UpdateLeaveCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Leaves/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leaves
     * @name HrmV1ApiLeavesDelete
     * @request DELETE:/hub/hrm/v1/api/Leaves/{id}
     * @secure
     */
    hrmV1ApiLeavesDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Leaves/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leaves
     * @name HrmV1ApiLeavesUpdateLeaveHireUpdate
     * @request PUT:/hub/hrm/v1/api/Leaves/UpdateLeaveHire/{id}
     * @secure
     */
    hrmV1ApiLeavesUpdateLeaveHireUpdate: (id: string, data: UpdateLeaveHireCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Leaves/UpdateLeaveHire/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leaves
     * @name HrmV1ApiLeavesDetail
     * @request GET:/hub/hrm/v1/api/Leaves/{LeaveId}
     * @secure
     */
    hrmV1ApiLeavesDetail: (leaveId: string, params: RequestParams = {}) =>
      this.request<GetLeaveByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Leaves/${leaveId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leaves
     * @name HrmV1ApiLeavesUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Leaves/UploadAttachment
     * @secure
     */
    hrmV1ApiLeavesUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Leaves/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LeavesBalance
     * @name HrmV1ApiLeavesBalanceUpdate
     * @request PUT:/hub/hrm/v1/api/LeavesBalance/{id}
     * @secure
     */
    hrmV1ApiLeavesBalanceUpdate: (id: string, data: UpdateLeavesBalanceCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LeavesBalance/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LeavesBalance
     * @name HrmV1ApiLeavesBalanceDetail
     * @request GET:/hub/hrm/v1/api/LeavesBalance/{employeeId}
     * @secure
     */
    hrmV1ApiLeavesBalanceDetail: (employeeId: string, params: RequestParams = {}) =>
      this.request<GetLeavesBalanceByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LeavesBalance/${employeeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LeavesBalance
     * @name HrmV1ApiLeavesBalanceList
     * @request GET:/hub/hrm/v1/api/LeavesBalance
     * @secure
     */
    hrmV1ApiLeavesBalanceList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetLeavesBalanceViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LeavesBalance`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LevelOfRelationship
     * @name HrmV1ApiLevelOfRelationshipList
     * @request GET:/hub/hrm/v1/api/LevelOfRelationship
     * @secure
     */
    hrmV1ApiLevelOfRelationshipList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetLevelOfRelationshipViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LevelOfRelationship`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LevelOfRelationship
     * @name HrmV1ApiLevelOfRelationshipCreate
     * @request POST:/hub/hrm/v1/api/LevelOfRelationship
     * @secure
     */
    hrmV1ApiLevelOfRelationshipCreate: (data: CreateLevelOfRelationshipCommend, params: RequestParams = {}) =>
      this.request<GetLevelOfRelationshipViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LevelOfRelationship`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LevelOfRelationship
     * @name HrmV1ApiLevelOfRelationshipPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/LevelOfRelationship
     * @secure
     */
    hrmV1ApiLevelOfRelationshipPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LevelOfRelationship`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LevelOfRelationship
     * @name HrmV1ApiLevelOfRelationshipDetail
     * @request GET:/hub/hrm/v1/api/LevelOfRelationship/{LevelOfRelationshipId}
     * @secure
     */
    hrmV1ApiLevelOfRelationshipDetail: (levelOfRelationshipId: number, params: RequestParams = {}) =>
      this.request<GetLevelOfRelationshipByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LevelOfRelationship/${levelOfRelationshipId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LevelOfRelationship
     * @name HrmV1ApiLevelOfRelationshipUpdate
     * @request PUT:/hub/hrm/v1/api/LevelOfRelationship/{LevelOfRelationshipId}
     * @secure
     */
    hrmV1ApiLevelOfRelationshipUpdate: (
      levelOfRelationshipId: number,
      data: UpdateLevelOfRelationshipCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetLevelOfRelationshipViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LevelOfRelationship/${levelOfRelationshipId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LevelOfRelationship
     * @name HrmV1ApiLevelOfRelationshipDelete
     * @request DELETE:/hub/hrm/v1/api/LevelOfRelationship/{id}
     * @secure
     */
    hrmV1ApiLevelOfRelationshipDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LevelOfRelationship/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LevelOfRelationship
     * @name HrmV1ApiLevelOfRelationshipGetListList
     * @request GET:/hub/hrm/v1/api/LevelOfRelationship/GetList
     * @secure
     */
    hrmV1ApiLevelOfRelationshipGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetLevelOfRelationshipListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LevelOfRelationship/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalance
     * @name HrmV1ApiLogLeavesBalanceCreate
     * @request POST:/hub/hrm/v1/api/LogLeavesBalance
     * @secure
     */
    hrmV1ApiLogLeavesBalanceCreate: (data: CreateLogLeavesBalanceCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalance`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalance
     * @name HrmV1ApiLogLeavesBalancePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/LogLeavesBalance
     * @secure
     */
    hrmV1ApiLogLeavesBalancePartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalance`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalance
     * @name HrmV1ApiLogLeavesBalanceList
     * @request GET:/hub/hrm/v1/api/LogLeavesBalance
     * @secure
     */
    hrmV1ApiLogLeavesBalanceList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllLogLeavesBalancesViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalance`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalance
     * @name HrmV1ApiLogLeavesBalanceUpdate
     * @request PUT:/hub/hrm/v1/api/LogLeavesBalance/{id}
     * @secure
     */
    hrmV1ApiLogLeavesBalanceUpdate: (id: string, data: UpdateLogLeavesBalanceCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalance/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalance
     * @name HrmV1ApiLogLeavesBalanceDelete
     * @request DELETE:/hub/hrm/v1/api/LogLeavesBalance/{id}
     * @secure
     */
    hrmV1ApiLogLeavesBalanceDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalance/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalance
     * @name HrmV1ApiLogLeavesBalanceDetail
     * @request GET:/hub/hrm/v1/api/LogLeavesBalance/{logBalanceId}
     * @secure
     */
    hrmV1ApiLogLeavesBalanceDetail: (logBalanceId: string, params: RequestParams = {}) =>
      this.request<GetLogLeavesBalanceByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalance/${logBalanceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalance
     * @name HrmV1ApiLogLeavesBalanceUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/LogLeavesBalance/UploadAttachment
     * @secure
     */
    hrmV1ApiLogLeavesBalanceUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalance/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalances
     * @name HrmV1ApiLogLeavesBalancesList
     * @request GET:/hub/hrm/v1/api/LogLeavesBalances
     * @secure
     */
    hrmV1ApiLogLeavesBalancesList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllLogLeavesBalancesViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalances`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalances
     * @name HrmV1ApiLogLeavesBalancesCreate
     * @request POST:/hub/hrm/v1/api/LogLeavesBalances
     * @secure
     */
    hrmV1ApiLogLeavesBalancesCreate: (data: CreateLogLeavesBalanceCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalances`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalances
     * @name HrmV1ApiLogLeavesBalancesPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/LogLeavesBalances
     * @secure
     */
    hrmV1ApiLogLeavesBalancesPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalances`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalances
     * @name HrmV1ApiLogLeavesBalancesDetail
     * @request GET:/hub/hrm/v1/api/LogLeavesBalances/{id}
     * @secure
     */
    hrmV1ApiLogLeavesBalancesDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetLogLeavesBalanceByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalances/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalances
     * @name HrmV1ApiLogLeavesBalancesUpdate
     * @request PUT:/hub/hrm/v1/api/LogLeavesBalances/{id}
     * @secure
     */
    hrmV1ApiLogLeavesBalancesUpdate: (id: string, data: UpdateLogLeavesBalanceCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalances/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalances
     * @name HrmV1ApiLogLeavesBalancesDelete
     * @request DELETE:/hub/hrm/v1/api/LogLeavesBalances/{id}
     * @secure
     */
    hrmV1ApiLogLeavesBalancesDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalances/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalances
     * @name HrmV1ApiLogLeavesBalancesUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/LogLeavesBalances/UploadAttachment
     * @secure
     */
    hrmV1ApiLogLeavesBalancesUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LogLeavesBalances/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogLeavesBalances
     * @name HrmV1ApiLogLeavesBalancesExportFileList
     * @request GET:/hub/hrm/v1/api/LogLeavesBalances/ExportFile
     * @secure
     */
    hrmV1ApiLogLeavesBalancesExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/LogLeavesBalances/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LongLeaveType
     * @name HrmV1ApiLongLeaveTypeList
     * @request GET:/hub/hrm/v1/api/LongLeaveType
     * @secure
     */
    hrmV1ApiLongLeaveTypeList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetLongLeaveTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LongLeaveType`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LongLeaveType
     * @name HrmV1ApiLongLeaveTypeCreate
     * @request POST:/hub/hrm/v1/api/LongLeaveType
     * @secure
     */
    hrmV1ApiLongLeaveTypeCreate: (data: CreateLongLeaveTypeCommend, params: RequestParams = {}) =>
      this.request<GetLongLeaveTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LongLeaveType`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LongLeaveType
     * @name HrmV1ApiLongLeaveTypePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/LongLeaveType
     * @secure
     */
    hrmV1ApiLongLeaveTypePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LongLeaveType`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LongLeaveType
     * @name HrmV1ApiLongLeaveTypeDetail
     * @request GET:/hub/hrm/v1/api/LongLeaveType/{LongLeaveTypeId}
     * @secure
     */
    hrmV1ApiLongLeaveTypeDetail: (longLeaveTypeId: number, params: RequestParams = {}) =>
      this.request<GetLongLeaveTypeByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LongLeaveType/${longLeaveTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LongLeaveType
     * @name HrmV1ApiLongLeaveTypeUpdate
     * @request PUT:/hub/hrm/v1/api/LongLeaveType/{LongLeaveTypeId}
     * @secure
     */
    hrmV1ApiLongLeaveTypeUpdate: (
      longLeaveTypeId: number,
      data: UpdateLongLeaveTypeCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetLongLeaveTypeViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LongLeaveType/${longLeaveTypeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LongLeaveType
     * @name HrmV1ApiLongLeaveTypeDelete
     * @request DELETE:/hub/hrm/v1/api/LongLeaveType/{id}
     * @secure
     */
    hrmV1ApiLongLeaveTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LongLeaveType/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LongLeaveType
     * @name HrmV1ApiLongLeaveTypeGetListList
     * @request GET:/hub/hrm/v1/api/LongLeaveType/GetList
     * @secure
     */
    hrmV1ApiLongLeaveTypeGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetLongLeaveTypeListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/LongLeaveType/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManagementInfo
     * @name HrmV1ApiManagementInformationList
     * @request GET:/hub/hrm/v1/api/ManagementInformation
     * @secure
     */
    hrmV1ApiManagementInformationList: (
      query?: {
        /** @format int32 */
        Id?: number;
        /** @format uuid */
        EmployeeId?: string;
        NameTerm?: string;
        Status?: Status;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicAchievementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ManagementInformation`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManagementInfo
     * @name HrmV1ApiManagementInformationCreate
     * @request POST:/hub/hrm/v1/api/ManagementInformation
     * @secure
     */
    hrmV1ApiManagementInformationCreate: (data: AddMangementInfoCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ManagementInformation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManagementInfo
     * @name HrmV1ApiManagementInformationDetail
     * @request GET:/hub/hrm/v1/api/ManagementInformation/{ManagementInfoId}
     * @secure
     */
    hrmV1ApiManagementInformationDetail: (managementInfoId: string, params: RequestParams = {}) =>
      this.request<GetManagementInfoByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ManagementInformation/${managementInfoId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManagementInfo
     * @name HrmV1ApiManagementInformationExportFileList
     * @request GET:/hub/hrm/v1/api/ManagementInformation/ExportFile
     * @secure
     */
    hrmV1ApiManagementInformationExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/ManagementInformation/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarriageInformation
     * @name HrmV1ApiMarriageInformationList
     * @request GET:/hub/hrm/v1/api/MarriageInformation
     * @secure
     */
    hrmV1ApiMarriageInformationList: (
      query?: {
        EmployeePositionType?: EmployeePositionTypeEnum;
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetMarriageInformationViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MarriageInformation`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarriageInformation
     * @name HrmV1ApiMarriageInformationCreate
     * @request POST:/hub/hrm/v1/api/MarriageInformation
     * @secure
     */
    hrmV1ApiMarriageInformationCreate: (data: CreateMarriageInformationCommend, params: RequestParams = {}) =>
      this.request<GetMarriageInformationViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MarriageInformation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarriageInformation
     * @name HrmV1ApiMarriageInformationPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/MarriageInformation
     * @secure
     */
    hrmV1ApiMarriageInformationPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MarriageInformation`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarriageInformation
     * @name HrmV1ApiMarriageInformationDetail
     * @request GET:/hub/hrm/v1/api/MarriageInformation/{MarriageInformationId}
     * @secure
     */
    hrmV1ApiMarriageInformationDetail: (marriageInformationId: string, params: RequestParams = {}) =>
      this.request<GetMarriageInformationByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MarriageInformation/${marriageInformationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarriageInformation
     * @name HrmV1ApiMarriageInformationUpdate
     * @request PUT:/hub/hrm/v1/api/MarriageInformation/{MarriageInformationId}
     * @secure
     */
    hrmV1ApiMarriageInformationUpdate: (
      marriageInformationId: string,
      data: UpdateMarriageInformationCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetMarriageInformationViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MarriageInformation/${marriageInformationId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarriageInformation
     * @name HrmV1ApiMarriageInformationDelete
     * @request DELETE:/hub/hrm/v1/api/MarriageInformation/{id}
     * @secure
     */
    hrmV1ApiMarriageInformationDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MarriageInformation/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarriageInformation
     * @name HrmV1ApiMarriageInformationUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/MarriageInformation/UploadAttachment
     * @secure
     */
    hrmV1ApiMarriageInformationUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MarriageInformation/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarriageInformation
     * @name HrmV1ApiMarriageInformationExportFileList
     * @request GET:/hub/hrm/v1/api/MarriageInformation/ExportFile
     * @secure
     */
    hrmV1ApiMarriageInformationExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/MarriageInformation/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MartyrsAndWounded
     * @name HrmV1ApiMartyrsAndWoundedList
     * @request GET:/hub/hrm/v1/api/MartyrsAndWounded
     * @secure
     */
    hrmV1ApiMartyrsAndWoundedList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        HealthStatus?: HealthStatus;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetMartyrsAndWoundedViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MartyrsAndWounded`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MartyrsAndWounded
     * @name HrmV1ApiMartyrsAndWoundedCreate
     * @request POST:/hub/hrm/v1/api/MartyrsAndWounded
     * @secure
     */
    hrmV1ApiMartyrsAndWoundedCreate: (data: CreateMartyrsAndWoundedCommend, params: RequestParams = {}) =>
      this.request<GetMartyrsAndWoundedViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MartyrsAndWounded`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MartyrsAndWounded
     * @name HrmV1ApiMartyrsAndWoundedPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/MartyrsAndWounded
     * @secure
     */
    hrmV1ApiMartyrsAndWoundedPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MartyrsAndWounded`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MartyrsAndWounded
     * @name HrmV1ApiMartyrsAndWoundedDetail
     * @request GET:/hub/hrm/v1/api/MartyrsAndWounded/{MartyrsAndWoundedId}
     * @secure
     */
    hrmV1ApiMartyrsAndWoundedDetail: (
      martyrsAndWoundedId: string,
      query?: {
        status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetMartyrsAndWoundedByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MartyrsAndWounded/${martyrsAndWoundedId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MartyrsAndWounded
     * @name HrmV1ApiMartyrsAndWoundedUpdate
     * @request PUT:/hub/hrm/v1/api/MartyrsAndWounded/{MartyrsAndWoundedId}
     * @secure
     */
    hrmV1ApiMartyrsAndWoundedUpdate: (
      martyrsAndWoundedId: string,
      data: UpdateMartyrsAndWoundedCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetMartyrsAndWoundedViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MartyrsAndWounded/${martyrsAndWoundedId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MartyrsAndWounded
     * @name HrmV1ApiMartyrsAndWoundedDelete
     * @request DELETE:/hub/hrm/v1/api/MartyrsAndWounded/{id}
     * @secure
     */
    hrmV1ApiMartyrsAndWoundedDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MartyrsAndWounded/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MartyrsAndWounded
     * @name HrmV1ApiMartyrsAndWoundedUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/MartyrsAndWounded/UploadAttachment
     * @secure
     */
    hrmV1ApiMartyrsAndWoundedUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/MartyrsAndWounded/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MartyrsAndWounded
     * @name HrmV1ApiMartyrsAndWoundedExportFileList
     * @request GET:/hub/hrm/v1/api/MartyrsAndWounded/ExportFile
     * @secure
     */
    hrmV1ApiMartyrsAndWoundedExportFileList: (
      query?: {
        HealthStatus?: HealthStatus;
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/MartyrsAndWounded/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movements
     * @name HrmV1ApiMovementsCreate
     * @request POST:/hub/hrm/v1/api/Movements
     * @secure
     */
    hrmV1ApiMovementsCreate: (data: CreateMovementCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Movements`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movements
     * @name HrmV1ApiMovementsList
     * @request GET:/hub/hrm/v1/api/Movements
     * @secure
     */
    hrmV1ApiMovementsList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllMovementsDataViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Movements`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movements
     * @name HrmV1ApiMovementsPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Movements
     * @secure
     */
    hrmV1ApiMovementsPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Movements`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movements
     * @name HrmV1ApiMovementsUpdate
     * @request PUT:/hub/hrm/v1/api/Movements/{movementId}
     * @secure
     */
    hrmV1ApiMovementsUpdate: (movementId: string, data: UpdateMovementCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Movements/${movementId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movements
     * @name HrmV1ApiMovementsDetail
     * @request GET:/hub/hrm/v1/api/Movements/{movementId}
     * @secure
     */
    hrmV1ApiMovementsDetail: (
      movementId: string,
      query?: {
        status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetMovementByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Movements/${movementId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movements
     * @name HrmV1ApiMovementsGetDashboardDataList
     * @request GET:/hub/hrm/v1/api/Movements/GetDashboardData
     * @secure
     */
    hrmV1ApiMovementsGetDashboardDataList: (
      query?: {
        /** @format int32 */
        Take?: number;
        /** @format int32 */
        Skip?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetDashboardViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Movements/GetDashboardData`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movements
     * @name HrmV1ApiMovementsDelete
     * @request DELETE:/hub/hrm/v1/api/Movements/{id}
     * @secure
     */
    hrmV1ApiMovementsDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Movements/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movements
     * @name HrmV1ApiMovementsUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Movements/UploadAttachment
     * @secure
     */
    hrmV1ApiMovementsUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Movements/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movements
     * @name HrmV1ApiMovementsExportFileList
     * @request GET:/hub/hrm/v1/api/Movements/ExportFile
     * @secure
     */
    hrmV1ApiMovementsExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/Movements/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NormalLeaveType
     * @name HrmV1ApiNormalLeaveTypeList
     * @request GET:/hub/hrm/v1/api/NormalLeaveType
     * @secure
     */
    hrmV1ApiNormalLeaveTypeList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetNormalLeaveTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/NormalLeaveType`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NormalLeaveType
     * @name HrmV1ApiNormalLeaveTypeCreate
     * @request POST:/hub/hrm/v1/api/NormalLeaveType
     * @secure
     */
    hrmV1ApiNormalLeaveTypeCreate: (data: CreateNormalLeaveTypeCommend, params: RequestParams = {}) =>
      this.request<GetNormalLeaveTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/NormalLeaveType`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NormalLeaveType
     * @name HrmV1ApiNormalLeaveTypePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/NormalLeaveType
     * @secure
     */
    hrmV1ApiNormalLeaveTypePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/NormalLeaveType`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NormalLeaveType
     * @name HrmV1ApiNormalLeaveTypeDetail
     * @request GET:/hub/hrm/v1/api/NormalLeaveType/{NormalLeaveTypeId}
     * @secure
     */
    hrmV1ApiNormalLeaveTypeDetail: (normalLeaveTypeId: number, params: RequestParams = {}) =>
      this.request<GetNormalLeaveTypeByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/NormalLeaveType/${normalLeaveTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NormalLeaveType
     * @name HrmV1ApiNormalLeaveTypeUpdate
     * @request PUT:/hub/hrm/v1/api/NormalLeaveType/{NormalLeaveTypeId}
     * @secure
     */
    hrmV1ApiNormalLeaveTypeUpdate: (
      normalLeaveTypeId: number,
      data: UpdateNormalLeaveTypeCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetNormalLeaveTypeViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/NormalLeaveType/${normalLeaveTypeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NormalLeaveType
     * @name HrmV1ApiNormalLeaveTypeDelete
     * @request DELETE:/hub/hrm/v1/api/NormalLeaveType/{id}
     * @secure
     */
    hrmV1ApiNormalLeaveTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/NormalLeaveType/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NormalLeaveType
     * @name HrmV1ApiNormalLeaveTypeGetListList
     * @request GET:/hub/hrm/v1/api/NormalLeaveType/GetList
     * @secure
     */
    hrmV1ApiNormalLeaveTypeGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetNormalLeaveTypeListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/NormalLeaveType/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Position
     * @name HrmV1ApiPositionList
     * @request GET:/hub/hrm/v1/api/Position
     * @secure
     */
    hrmV1ApiPositionList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPositionViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Position`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Position
     * @name HrmV1ApiPositionCreate
     * @request POST:/hub/hrm/v1/api/Position
     * @secure
     */
    hrmV1ApiPositionCreate: (data: CreatePositionCommend, params: RequestParams = {}) =>
      this.request<GetPositionViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Position`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Position
     * @name HrmV1ApiPositionPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Position
     * @secure
     */
    hrmV1ApiPositionPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Position`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Position
     * @name HrmV1ApiPositionDetail
     * @request GET:/hub/hrm/v1/api/Position/{PositionId}
     * @secure
     */
    hrmV1ApiPositionDetail: (positionId: number, params: RequestParams = {}) =>
      this.request<GetPositionByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Position/${positionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Position
     * @name HrmV1ApiPositionUpdate
     * @request PUT:/hub/hrm/v1/api/Position/{PositionId}
     * @secure
     */
    hrmV1ApiPositionUpdate: (positionId: number, data: UpdatePositionCommend, params: RequestParams = {}) =>
      this.request<GetPositionViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Position/${positionId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Position
     * @name HrmV1ApiPositionDelete
     * @request DELETE:/hub/hrm/v1/api/Position/{id}
     * @secure
     */
    hrmV1ApiPositionDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Position/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Position
     * @name HrmV1ApiPositionUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Position/UploadAttachment
     * @secure
     */
    hrmV1ApiPositionUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Position/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Position
     * @name HrmV1ApiPositionGetListList
     * @request GET:/hub/hrm/v1/api/Position/GetList
     * @secure
     */
    hrmV1ApiPositionGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPositionListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Position/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PreciseAcademicField
     * @name HrmV1ApiPreciseAcademicFieldList
     * @request GET:/hub/hrm/v1/api/PreciseAcademicField
     * @secure
     */
    hrmV1ApiPreciseAcademicFieldList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPreciseAcademicFieldViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/PreciseAcademicField`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PreciseAcademicField
     * @name HrmV1ApiPreciseAcademicFieldCreate
     * @request POST:/hub/hrm/v1/api/PreciseAcademicField
     * @secure
     */
    hrmV1ApiPreciseAcademicFieldCreate: (data: CreatePreciseAcademicFieldCommend, params: RequestParams = {}) =>
      this.request<GetPreciseAcademicFieldViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/PreciseAcademicField`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PreciseAcademicField
     * @name HrmV1ApiPreciseAcademicFieldPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/PreciseAcademicField
     * @secure
     */
    hrmV1ApiPreciseAcademicFieldPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/PreciseAcademicField`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PreciseAcademicField
     * @name HrmV1ApiPreciseAcademicFieldDetail
     * @request GET:/hub/hrm/v1/api/PreciseAcademicField/{PreciseAcademicFieldId}
     * @secure
     */
    hrmV1ApiPreciseAcademicFieldDetail: (preciseAcademicFieldId: number, params: RequestParams = {}) =>
      this.request<GetPreciseAcademicFieldByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/PreciseAcademicField/${preciseAcademicFieldId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PreciseAcademicField
     * @name HrmV1ApiPreciseAcademicFieldUpdate
     * @request PUT:/hub/hrm/v1/api/PreciseAcademicField/{PreciseAcademicFieldId}
     * @secure
     */
    hrmV1ApiPreciseAcademicFieldUpdate: (
      preciseAcademicFieldId: number,
      data: UpdatePreciseAcademicFieldCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetPreciseAcademicFieldViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/PreciseAcademicField/${preciseAcademicFieldId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PreciseAcademicField
     * @name HrmV1ApiPreciseAcademicFieldDelete
     * @request DELETE:/hub/hrm/v1/api/PreciseAcademicField/{id}
     * @secure
     */
    hrmV1ApiPreciseAcademicFieldDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/PreciseAcademicField/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PreciseAcademicField
     * @name HrmV1ApiPreciseAcademicFieldGetListList
     * @request GET:/hub/hrm/v1/api/PreciseAcademicField/GetList
     * @secure
     */
    hrmV1ApiPreciseAcademicFieldGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPreciseAcademicFieldListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/PreciseAcademicField/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Promotions
     * @name HrmV1ApiPromotionsList
     * @request GET:/hub/hrm/v1/api/Promotions
     * @secure
     */
    hrmV1ApiPromotionsList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPromotionViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Promotions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Promotions
     * @name HrmV1ApiPromotionsCreate
     * @request POST:/hub/hrm/v1/api/Promotions
     * @secure
     */
    hrmV1ApiPromotionsCreate: (data: CreatePromotionCommend, params: RequestParams = {}) =>
      this.request<GetPromotionViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Promotions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Promotions
     * @name HrmV1ApiPromotionsPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Promotions
     * @secure
     */
    hrmV1ApiPromotionsPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Promotions`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Promotions
     * @name HrmV1ApiPromotionsDetail
     * @request GET:/hub/hrm/v1/api/Promotions/{PromotionId}
     * @secure
     */
    hrmV1ApiPromotionsDetail: (promotionId: string, params: RequestParams = {}) =>
      this.request<GetPromotionByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Promotions/${promotionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Promotions
     * @name HrmV1ApiPromotionsUpdate
     * @request PUT:/hub/hrm/v1/api/Promotions/{PromotionId}
     * @secure
     */
    hrmV1ApiPromotionsUpdate: (promotionId: string, data: UpdatePromotionCommend, params: RequestParams = {}) =>
      this.request<GetPromotionViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Promotions/${promotionId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Promotions
     * @name HrmV1ApiPromotionsDelete
     * @request DELETE:/hub/hrm/v1/api/Promotions/{id}
     * @secure
     */
    hrmV1ApiPromotionsDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Promotions/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Promotions
     * @name HrmV1ApiPromotionsGetStatsList
     * @request GET:/hub/hrm/v1/api/Promotions/GetStats
     * @secure
     */
    hrmV1ApiPromotionsGetStatsList: (
      query?: {
        /** @format int32 */
        Take?: number;
        /** @format int32 */
        Skip?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetStatsPromotionsViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Promotions/GetStats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Promotions
     * @name HrmV1ApiPromotionsUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Promotions/UploadAttachment
     * @secure
     */
    hrmV1ApiPromotionsUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Promotions/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Promotions
     * @name HrmV1ApiPromotionsExportFileList
     * @request GET:/hub/hrm/v1/api/Promotions/ExportFile
     * @secure
     */
    hrmV1ApiPromotionsExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/Promotions/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name HrmV1ApiProvinceList
     * @request GET:/hub/hrm/v1/api/Province
     * @secure
     */
    hrmV1ApiProvinceList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetProvinceViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Province`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name HrmV1ApiProvinceCreate
     * @request POST:/hub/hrm/v1/api/Province
     * @secure
     */
    hrmV1ApiProvinceCreate: (data: CreateProvinceCommend, params: RequestParams = {}) =>
      this.request<GetProvinceViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Province`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name HrmV1ApiProvincePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Province
     * @secure
     */
    hrmV1ApiProvincePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Province`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name HrmV1ApiProvinceDetail
     * @request GET:/hub/hrm/v1/api/Province/{ProvinceId}
     * @secure
     */
    hrmV1ApiProvinceDetail: (provinceId: number, params: RequestParams = {}) =>
      this.request<GetProvinceByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Province/${provinceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name HrmV1ApiProvinceUpdate
     * @request PUT:/hub/hrm/v1/api/Province/{ProvinceId}
     * @secure
     */
    hrmV1ApiProvinceUpdate: (provinceId: number, data: UpdateProvinceCommend, params: RequestParams = {}) =>
      this.request<GetProvinceViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Province/${provinceId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name HrmV1ApiProvinceDelete
     * @request DELETE:/hub/hrm/v1/api/Province/{id}
     * @secure
     */
    hrmV1ApiProvinceDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Province/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name HrmV1ApiProvinceGetListList
     * @request GET:/hub/hrm/v1/api/Province/GetList
     * @secure
     */
    hrmV1ApiProvinceGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetProvinceListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Province/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resignation
     * @name HrmV1ApiResignationList
     * @request GET:/hub/hrm/v1/api/Resignation
     * @secure
     */
    hrmV1ApiResignationList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        NameTerm?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicAchievementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Resignation`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resignation
     * @name HrmV1ApiResignationCreate
     * @request POST:/hub/hrm/v1/api/Resignation
     * @secure
     */
    hrmV1ApiResignationCreate: (data: AddResignationCommand, params: RequestParams = {}) =>
      this.request<GetResignationViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Resignation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resignation
     * @name HrmV1ApiResignationPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Resignation
     * @secure
     */
    hrmV1ApiResignationPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Resignation`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resignation
     * @name HrmV1ApiResignationDetail
     * @request GET:/hub/hrm/v1/api/Resignation/{ResignationId}
     * @secure
     */
    hrmV1ApiResignationDetail: (resignationId: string, params: RequestParams = {}) =>
      this.request<GetResignationByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Resignation/${resignationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resignation
     * @name HrmV1ApiResignationUpdate
     * @request PUT:/hub/hrm/v1/api/Resignation/{ResignationId}
     * @secure
     */
    hrmV1ApiResignationUpdate: (resignationId: string, data: UpdateResignationCommand, params: RequestParams = {}) =>
      this.request<GetResignationViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Resignation/${resignationId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resignation
     * @name HrmV1ApiResignationDelete
     * @request DELETE:/hub/hrm/v1/api/Resignation/{id}
     * @secure
     */
    hrmV1ApiResignationDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Resignation/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resignation
     * @name HrmV1ApiResignationUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Resignation/UploadAttachment
     * @secure
     */
    hrmV1ApiResignationUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Resignation/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resignation
     * @name HrmV1ApiResignationExportFileList
     * @request GET:/hub/hrm/v1/api/Resignation/ExportFile
     * @secure
     */
    hrmV1ApiResignationExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/Resignation/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Retirement
     * @name HrmV1ApiRetirementList
     * @request GET:/hub/hrm/v1/api/Retirement
     * @secure
     */
    hrmV1ApiRetirementList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetRetirementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Retirement`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Retirement
     * @name HrmV1ApiRetirementCreate
     * @request POST:/hub/hrm/v1/api/Retirement
     * @secure
     */
    hrmV1ApiRetirementCreate: (data: CreateRetirementCommend, params: RequestParams = {}) =>
      this.request<GetRetirementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Retirement`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Retirement
     * @name HrmV1ApiRetirementPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Retirement
     * @secure
     */
    hrmV1ApiRetirementPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Retirement`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Retirement
     * @name HrmV1ApiRetirementDetail
     * @request GET:/hub/hrm/v1/api/Retirement/{RetirementId}
     * @secure
     */
    hrmV1ApiRetirementDetail: (retirementId: string, params: RequestParams = {}) =>
      this.request<GetRetirementByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Retirement/${retirementId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Retirement
     * @name HrmV1ApiRetirementUpdate
     * @request PUT:/hub/hrm/v1/api/Retirement/{RetirementId}
     * @secure
     */
    hrmV1ApiRetirementUpdate: (retirementId: string, data: UpdateRetirementCommend, params: RequestParams = {}) =>
      this.request<GetRetirementViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Retirement/${retirementId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Retirement
     * @name HrmV1ApiRetirementDelete
     * @request DELETE:/hub/hrm/v1/api/Retirement/{id}
     * @secure
     */
    hrmV1ApiRetirementDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Retirement/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Retirement
     * @name HrmV1ApiRetirementUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Retirement/UploadAttachment
     * @secure
     */
    hrmV1ApiRetirementUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Retirement/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Retirement
     * @name HrmV1ApiRetirementExportFileList
     * @request GET:/hub/hrm/v1/api/Retirement/ExportFile
     * @secure
     */
    hrmV1ApiRetirementExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/Retirement/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Section
     * @name HrmV1ApiSectionList
     * @request GET:/hub/hrm/v1/api/Section
     * @secure
     */
    hrmV1ApiSectionList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSectionViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Section`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Section
     * @name HrmV1ApiSectionCreate
     * @request POST:/hub/hrm/v1/api/Section
     * @secure
     */
    hrmV1ApiSectionCreate: (data: CreateSectionCommend, params: RequestParams = {}) =>
      this.request<GetSectionViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Section`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Section
     * @name HrmV1ApiSectionPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Section
     * @secure
     */
    hrmV1ApiSectionPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Section`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Section
     * @name HrmV1ApiSectionDetail
     * @request GET:/hub/hrm/v1/api/Section/{SectionId}
     * @secure
     */
    hrmV1ApiSectionDetail: (sectionId: number, params: RequestParams = {}) =>
      this.request<GetSectionByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Section/${sectionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Section
     * @name HrmV1ApiSectionUpdate
     * @request PUT:/hub/hrm/v1/api/Section/{SectionId}
     * @secure
     */
    hrmV1ApiSectionUpdate: (sectionId: number, data: UpdateSectionCommend, params: RequestParams = {}) =>
      this.request<GetSectionViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Section/${sectionId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Section
     * @name HrmV1ApiSectionDelete
     * @request DELETE:/hub/hrm/v1/api/Section/{id}
     * @secure
     */
    hrmV1ApiSectionDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Section/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Section
     * @name HrmV1ApiSectionGetListList
     * @request GET:/hub/hrm/v1/api/Section/GetList
     * @secure
     */
    hrmV1ApiSectionGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSectionListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Section/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ServiceCalculation
     * @name HrmV1ApiServiceCalculationList
     * @request GET:/hub/hrm/v1/api/ServiceCalculation
     * @secure
     */
    hrmV1ApiServiceCalculationList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetServiceCalculationViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ServiceCalculation`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ServiceCalculation
     * @name HrmV1ApiServiceCalculationCreate
     * @request POST:/hub/hrm/v1/api/ServiceCalculation
     * @secure
     */
    hrmV1ApiServiceCalculationCreate: (data: CreateServiceCalculationCommend, params: RequestParams = {}) =>
      this.request<GetServiceCalculationViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ServiceCalculation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ServiceCalculation
     * @name HrmV1ApiServiceCalculationPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/ServiceCalculation
     * @secure
     */
    hrmV1ApiServiceCalculationPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ServiceCalculation`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ServiceCalculation
     * @name HrmV1ApiServiceCalculationDetail
     * @request GET:/hub/hrm/v1/api/ServiceCalculation/{ServiceCalculationId}
     * @secure
     */
    hrmV1ApiServiceCalculationDetail: (serviceCalculationId: string, params: RequestParams = {}) =>
      this.request<GetServiceCalculationByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ServiceCalculation/${serviceCalculationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ServiceCalculation
     * @name HrmV1ApiServiceCalculationUpdate
     * @request PUT:/hub/hrm/v1/api/ServiceCalculation/{ServiceCalculationId}
     * @secure
     */
    hrmV1ApiServiceCalculationUpdate: (
      serviceCalculationId: string,
      data: UpdateServiceCalculationCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetServiceCalculationViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ServiceCalculation/${serviceCalculationId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ServiceCalculation
     * @name HrmV1ApiServiceCalculationDelete
     * @request DELETE:/hub/hrm/v1/api/ServiceCalculation/{id}
     * @secure
     */
    hrmV1ApiServiceCalculationDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ServiceCalculation/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ServiceCalculation
     * @name HrmV1ApiServiceCalculationUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/ServiceCalculation/UploadAttachment
     * @secure
     */
    hrmV1ApiServiceCalculationUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ServiceCalculation/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SicknessType
     * @name HrmV1ApiSicknessTypeList
     * @request GET:/hub/hrm/v1/api/SicknessType
     * @secure
     */
    hrmV1ApiSicknessTypeList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSicknessTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SicknessType`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SicknessType
     * @name HrmV1ApiSicknessTypeCreate
     * @request POST:/hub/hrm/v1/api/SicknessType
     * @secure
     */
    hrmV1ApiSicknessTypeCreate: (data: CreateSicknessTypeCommend, params: RequestParams = {}) =>
      this.request<GetSicknessTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SicknessType`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SicknessType
     * @name HrmV1ApiSicknessTypePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/SicknessType
     * @secure
     */
    hrmV1ApiSicknessTypePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SicknessType`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SicknessType
     * @name HrmV1ApiSicknessTypeDetail
     * @request GET:/hub/hrm/v1/api/SicknessType/{SicknessTypeId}
     * @secure
     */
    hrmV1ApiSicknessTypeDetail: (sicknessTypeId: number, params: RequestParams = {}) =>
      this.request<GetSicknessTypeByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SicknessType/${sicknessTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SicknessType
     * @name HrmV1ApiSicknessTypeUpdate
     * @request PUT:/hub/hrm/v1/api/SicknessType/{SicknessTypeId}
     * @secure
     */
    hrmV1ApiSicknessTypeUpdate: (sicknessTypeId: number, data: UpdateSicknessTypeCommend, params: RequestParams = {}) =>
      this.request<GetSicknessTypeViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SicknessType/${sicknessTypeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SicknessType
     * @name HrmV1ApiSicknessTypeDelete
     * @request DELETE:/hub/hrm/v1/api/SicknessType/{id}
     * @secure
     */
    hrmV1ApiSicknessTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SicknessType/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SicknessType
     * @name HrmV1ApiSicknessTypeUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/SicknessType/UploadAttachment
     * @secure
     */
    hrmV1ApiSicknessTypeUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SicknessType/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SicknessType
     * @name HrmV1ApiSicknessTypeGetListList
     * @request GET:/hub/hrm/v1/api/SicknessType/GetList
     * @secure
     */
    hrmV1ApiSicknessTypeGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSicknessTypeListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SicknessType/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyExtensionOrderType
     * @name HrmV1ApiStudyExtensionOrderTypeList
     * @request GET:/hub/hrm/v1/api/StudyExtensionOrderType
     * @secure
     */
    hrmV1ApiStudyExtensionOrderTypeList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetStudyExtensionOrderTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyExtensionOrderType`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyExtensionOrderType
     * @name HrmV1ApiStudyExtensionOrderTypeCreate
     * @request POST:/hub/hrm/v1/api/StudyExtensionOrderType
     * @secure
     */
    hrmV1ApiStudyExtensionOrderTypeCreate: (data: CreateStudyExtensionOrderTypeCommend, params: RequestParams = {}) =>
      this.request<GetStudyExtensionOrderTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyExtensionOrderType`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyExtensionOrderType
     * @name HrmV1ApiStudyExtensionOrderTypePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/StudyExtensionOrderType
     * @secure
     */
    hrmV1ApiStudyExtensionOrderTypePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyExtensionOrderType`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyExtensionOrderType
     * @name HrmV1ApiStudyExtensionOrderTypeDetail
     * @request GET:/hub/hrm/v1/api/StudyExtensionOrderType/{StudyExtensionOrderTypeId}
     * @secure
     */
    hrmV1ApiStudyExtensionOrderTypeDetail: (studyExtensionOrderTypeId: number, params: RequestParams = {}) =>
      this.request<GetStudyExtensionOrderTypeByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyExtensionOrderType/${studyExtensionOrderTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyExtensionOrderType
     * @name HrmV1ApiStudyExtensionOrderTypeUpdate
     * @request PUT:/hub/hrm/v1/api/StudyExtensionOrderType/{StudyExtensionOrderTypeId}
     * @secure
     */
    hrmV1ApiStudyExtensionOrderTypeUpdate: (
      studyExtensionOrderTypeId: number,
      data: UpdateStudyExtensionOrderTypeCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetStudyExtensionOrderTypeViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyExtensionOrderType/${studyExtensionOrderTypeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyExtensionOrderType
     * @name HrmV1ApiStudyExtensionOrderTypeDelete
     * @request DELETE:/hub/hrm/v1/api/StudyExtensionOrderType/{id}
     * @secure
     */
    hrmV1ApiStudyExtensionOrderTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyExtensionOrderType/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyExtensionOrderType
     * @name HrmV1ApiStudyExtensionOrderTypeGetListList
     * @request GET:/hub/hrm/v1/api/StudyExtensionOrderType/GetList
     * @secure
     */
    hrmV1ApiStudyExtensionOrderTypeGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetStudyExtensionOrderTypeListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyExtensionOrderType/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyFile
     * @name HrmV1ApiStudyFileList
     * @request GET:/hub/hrm/v1/api/StudyFile
     * @secure
     */
    hrmV1ApiStudyFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        DocumentNo?: string;
        /** @format date */
        DocumentDateFrom?: string;
        /** @format date */
        DocumentDateTo?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<StudyFileViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyFile`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyFile
     * @name HrmV1ApiStudyFileCreate
     * @request POST:/hub/hrm/v1/api/StudyFile
     * @secure
     */
    hrmV1ApiStudyFileCreate: (data: CreateStudyFileCommand, params: RequestParams = {}) =>
      this.request<StudyFileViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyFile`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyFile
     * @name HrmV1ApiStudyFilePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/StudyFile
     * @secure
     */
    hrmV1ApiStudyFilePartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyFile`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyFile
     * @name HrmV1ApiStudyFileDetail
     * @request GET:/hub/hrm/v1/api/StudyFile/{StudyFileId}
     * @secure
     */
    hrmV1ApiStudyFileDetail: (studyFileId: string, params: RequestParams = {}) =>
      this.request<GetStudyFilesByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyFile/${studyFileId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyFile
     * @name HrmV1ApiStudyFileUpdate
     * @request PUT:/hub/hrm/v1/api/StudyFile/{studyFileId}
     * @secure
     */
    hrmV1ApiStudyFileUpdate: (studyFileId: string, data: UpdateStudyFileCommand, params: RequestParams = {}) =>
      this.request<StudyFileViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyFile/${studyFileId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyFile
     * @name HrmV1ApiStudyFileDelete
     * @request DELETE:/hub/hrm/v1/api/StudyFile/{id}
     * @secure
     */
    hrmV1ApiStudyFileDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyFile/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyFile
     * @name HrmV1ApiStudyFileUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/StudyFile/UploadAttachment
     * @secure
     */
    hrmV1ApiStudyFileUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyFile/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyFile
     * @name HrmV1ApiStudyFileExportFileList
     * @request GET:/hub/hrm/v1/api/StudyFile/ExportFile
     * @secure
     */
    hrmV1ApiStudyFileExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/StudyFile/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeave
     * @name HrmV1ApiStudyLeaveList
     * @request GET:/hub/hrm/v1/api/StudyLeave
     * @secure
     */
    hrmV1ApiStudyLeaveList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<StudyLeaveViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeave`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeave
     * @name HrmV1ApiStudyLeaveCreate
     * @request POST:/hub/hrm/v1/api/StudyLeave
     * @secure
     */
    hrmV1ApiStudyLeaveCreate: (data: CreateStudyLeaveCommand, params: RequestParams = {}) =>
      this.request<StudyLeaveViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeave`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeave
     * @name HrmV1ApiStudyLeavePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/StudyLeave
     * @secure
     */
    hrmV1ApiStudyLeavePartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeave`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeave
     * @name HrmV1ApiStudyLeaveDetail
     * @request GET:/hub/hrm/v1/api/StudyLeave/{StudyLeaveId}
     * @secure
     */
    hrmV1ApiStudyLeaveDetail: (studyLeaveId: string, params: RequestParams = {}) =>
      this.request<GetStudyLeaveByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeave/${studyLeaveId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeave
     * @name HrmV1ApiStudyLeaveStatisticsList
     * @request GET:/hub/hrm/v1/api/StudyLeave/Statistics
     * @secure
     */
    hrmV1ApiStudyLeaveStatisticsList: (params: RequestParams = {}) =>
      this.request<GetStudyLeaveStatisticsViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeave/Statistics`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeave
     * @name HrmV1ApiStudyLeaveNotificationsList
     * @request GET:/hub/hrm/v1/api/StudyLeave/Notifications
     * @secure
     */
    hrmV1ApiStudyLeaveNotificationsList: (params: RequestParams = {}) =>
      this.request<GetStudyLeaveNotificationViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeave/Notifications`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeave
     * @name HrmV1ApiStudyLeaveUpdate
     * @request PUT:/hub/hrm/v1/api/StudyLeave/{studyLeaveId}
     * @secure
     */
    hrmV1ApiStudyLeaveUpdate: (studyLeaveId: string, data: UpdateStudyLeaveCommand, params: RequestParams = {}) =>
      this.request<StudyLeaveViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeave/${studyLeaveId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeave
     * @name HrmV1ApiStudyLeaveDelete
     * @request DELETE:/hub/hrm/v1/api/StudyLeave/{id}
     * @secure
     */
    hrmV1ApiStudyLeaveDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeave/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeave
     * @name HrmV1ApiStudyLeaveUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/StudyLeave/UploadAttachment
     * @secure
     */
    hrmV1ApiStudyLeaveUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeave/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeave
     * @name HrmV1ApiStudyLeaveExportFileList
     * @request GET:/hub/hrm/v1/api/StudyLeave/ExportFile
     * @secure
     */
    hrmV1ApiStudyLeaveExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/StudyLeave/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeaveExtension
     * @name HrmV1ApiStudyLeaveExtensionList
     * @request GET:/hub/hrm/v1/api/StudyLeaveExtension
     * @secure
     */
    hrmV1ApiStudyLeaveExtensionList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<StudyLeaveExtensionViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeaveExtension`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeaveExtension
     * @name HrmV1ApiStudyLeaveExtensionCreate
     * @request POST:/hub/hrm/v1/api/StudyLeaveExtension
     * @secure
     */
    hrmV1ApiStudyLeaveExtensionCreate: (data: CreateStudyLeaveExtensionCommand, params: RequestParams = {}) =>
      this.request<StudyLeaveExtensionViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeaveExtension`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeaveExtension
     * @name HrmV1ApiStudyLeaveExtensionPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/StudyLeaveExtension
     * @secure
     */
    hrmV1ApiStudyLeaveExtensionPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeaveExtension`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeaveExtension
     * @name HrmV1ApiStudyLeaveExtensionDetail
     * @request GET:/hub/hrm/v1/api/StudyLeaveExtension/{StudyLeaveExtensionId}
     * @secure
     */
    hrmV1ApiStudyLeaveExtensionDetail: (studyLeaveExtensionId: string, params: RequestParams = {}) =>
      this.request<GetStudyLeaveExtensionByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeaveExtension/${studyLeaveExtensionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeaveExtension
     * @name HrmV1ApiStudyLeaveExtensionGetStudyLeaveByFileIdDetail
     * @request GET:/hub/hrm/v1/api/StudyLeaveExtension/GetStudyLeaveByFileId/{StudyLeaveExtensionId}
     * @secure
     */
    hrmV1ApiStudyLeaveExtensionGetStudyLeaveByFileIdDetail: (
      studyLeaveExtensionId: string,
      params: RequestParams = {},
    ) =>
      this.request<GetStudyLeaveExtensionByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeaveExtension/GetStudyLeaveByFileId/${studyLeaveExtensionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeaveExtension
     * @name HrmV1ApiStudyLeaveExtensionUpdate
     * @request PUT:/hub/hrm/v1/api/StudyLeaveExtension/{studyLeaveExtensionId}
     * @secure
     */
    hrmV1ApiStudyLeaveExtensionUpdate: (
      studyLeaveExtensionId: string,
      data: UpdateStudyLeaveExtensionCommand,
      params: RequestParams = {},
    ) =>
      this.request<StudyLeaveExtensionViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeaveExtension/${studyLeaveExtensionId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeaveExtension
     * @name HrmV1ApiStudyLeaveExtensionDelete
     * @request DELETE:/hub/hrm/v1/api/StudyLeaveExtension/{id}
     * @secure
     */
    hrmV1ApiStudyLeaveExtensionDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeaveExtension/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeaveExtension
     * @name HrmV1ApiStudyLeaveExtensionUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/StudyLeaveExtension/UploadAttachment
     * @secure
     */
    hrmV1ApiStudyLeaveExtensionUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyLeaveExtension/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyLeaveExtension
     * @name HrmV1ApiStudyLeaveExtensionExportFileList
     * @request GET:/hub/hrm/v1/api/StudyLeaveExtension/ExportFile
     * @secure
     */
    hrmV1ApiStudyLeaveExtensionExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/StudyLeaveExtension/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyResult
     * @name HrmV1ApiStudyResultList
     * @request GET:/hub/hrm/v1/api/StudyResult
     * @secure
     */
    hrmV1ApiStudyResultList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetStudyResultViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyResult`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyResult
     * @name HrmV1ApiStudyResultCreate
     * @request POST:/hub/hrm/v1/api/StudyResult
     * @secure
     */
    hrmV1ApiStudyResultCreate: (data: CreateStudyResultCommend, params: RequestParams = {}) =>
      this.request<GetStudyResultViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyResult`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyResult
     * @name HrmV1ApiStudyResultPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/StudyResult
     * @secure
     */
    hrmV1ApiStudyResultPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyResult`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyResult
     * @name HrmV1ApiStudyResultDetail
     * @request GET:/hub/hrm/v1/api/StudyResult/{StudyResultId}
     * @secure
     */
    hrmV1ApiStudyResultDetail: (studyResultId: number, params: RequestParams = {}) =>
      this.request<GetStudyResultByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyResult/${studyResultId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyResult
     * @name HrmV1ApiStudyResultUpdate
     * @request PUT:/hub/hrm/v1/api/StudyResult/{StudyResultId}
     * @secure
     */
    hrmV1ApiStudyResultUpdate: (studyResultId: number, data: UpdateStudyResultCommend, params: RequestParams = {}) =>
      this.request<GetStudyResultViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyResult/${studyResultId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyResult
     * @name HrmV1ApiStudyResultDelete
     * @request DELETE:/hub/hrm/v1/api/StudyResult/{id}
     * @secure
     */
    hrmV1ApiStudyResultDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyResult/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyResult
     * @name HrmV1ApiStudyResultGetListList
     * @request GET:/hub/hrm/v1/api/StudyResult/GetList
     * @secure
     */
    hrmV1ApiStudyResultGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetStudyResultListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyResult/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyStatus
     * @name HrmV1ApiStudyStatusList
     * @request GET:/hub/hrm/v1/api/StudyStatus
     * @secure
     */
    hrmV1ApiStudyStatusList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetStudyStatusViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyStatus`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyStatus
     * @name HrmV1ApiStudyStatusCreate
     * @request POST:/hub/hrm/v1/api/StudyStatus
     * @secure
     */
    hrmV1ApiStudyStatusCreate: (data: CreateStudyStatusCommend, params: RequestParams = {}) =>
      this.request<GetStudyStatusViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyStatus`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyStatus
     * @name HrmV1ApiStudyStatusPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/StudyStatus
     * @secure
     */
    hrmV1ApiStudyStatusPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyStatus`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyStatus
     * @name HrmV1ApiStudyStatusDetail
     * @request GET:/hub/hrm/v1/api/StudyStatus/{Studystatus}
     * @secure
     */
    hrmV1ApiStudyStatusDetail: (studystatus: number, params: RequestParams = {}) =>
      this.request<GetStudyStatusByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyStatus/${studystatus}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyStatus
     * @name HrmV1ApiStudyStatusUpdate
     * @request PUT:/hub/hrm/v1/api/StudyStatus/{Studystatus}
     * @secure
     */
    hrmV1ApiStudyStatusUpdate: (studystatus: number, data: UpdateStudyStatusCommend, params: RequestParams = {}) =>
      this.request<GetStudyStatusViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyStatus/${studystatus}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyStatus
     * @name HrmV1ApiStudyStatusDelete
     * @request DELETE:/hub/hrm/v1/api/StudyStatus/{id}
     * @secure
     */
    hrmV1ApiStudyStatusDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyStatus/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyStatus
     * @name HrmV1ApiStudyStatusGetListList
     * @request GET:/hub/hrm/v1/api/StudyStatus/GetList
     * @secure
     */
    hrmV1ApiStudyStatusGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetStudyStatusListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyStatus/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyType
     * @name HrmV1ApiStudyTypeList
     * @request GET:/hub/hrm/v1/api/StudyType
     * @secure
     */
    hrmV1ApiStudyTypeList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetStudyTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyType`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyType
     * @name HrmV1ApiStudyTypeCreate
     * @request POST:/hub/hrm/v1/api/StudyType
     * @secure
     */
    hrmV1ApiStudyTypeCreate: (data: CreateStudyTypeCommend, params: RequestParams = {}) =>
      this.request<GetStudyTypeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyType`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyType
     * @name HrmV1ApiStudyTypePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/StudyType
     * @secure
     */
    hrmV1ApiStudyTypePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyType`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyType
     * @name HrmV1ApiStudyTypeDetail
     * @request GET:/hub/hrm/v1/api/StudyType/{StudyTypeId}
     * @secure
     */
    hrmV1ApiStudyTypeDetail: (studyTypeId: number, params: RequestParams = {}) =>
      this.request<GetStudyTypeByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyType/${studyTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyType
     * @name HrmV1ApiStudyTypeUpdate
     * @request PUT:/hub/hrm/v1/api/StudyType/{StudyTypeId}
     * @secure
     */
    hrmV1ApiStudyTypeUpdate: (studyTypeId: number, data: UpdateStudyTypeCommend, params: RequestParams = {}) =>
      this.request<GetStudyTypeViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyType/${studyTypeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyType
     * @name HrmV1ApiStudyTypeDelete
     * @request DELETE:/hub/hrm/v1/api/StudyType/{id}
     * @secure
     */
    hrmV1ApiStudyTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyType/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StudyType
     * @name HrmV1ApiStudyTypeGetListList
     * @request GET:/hub/hrm/v1/api/StudyType/GetList
     * @secure
     */
    hrmV1ApiStudyTypeGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetStudyTypeListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/StudyType/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubDirectorate
     * @name HrmV1ApiSubDirectorateList
     * @request GET:/hub/hrm/v1/api/SubDirectorate
     * @secure
     */
    hrmV1ApiSubDirectorateList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSubDirectorateViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SubDirectorate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubDirectorate
     * @name HrmV1ApiSubDirectorateCreate
     * @request POST:/hub/hrm/v1/api/SubDirectorate
     * @secure
     */
    hrmV1ApiSubDirectorateCreate: (data: CreateSubDirectorateCommend, params: RequestParams = {}) =>
      this.request<GetSubDirectorateViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SubDirectorate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubDirectorate
     * @name HrmV1ApiSubDirectoratePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/SubDirectorate
     * @secure
     */
    hrmV1ApiSubDirectoratePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SubDirectorate`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubDirectorate
     * @name HrmV1ApiSubDirectorateDetail
     * @request GET:/hub/hrm/v1/api/SubDirectorate/{SubDirectorateId}
     * @secure
     */
    hrmV1ApiSubDirectorateDetail: (subDirectorateId: number, params: RequestParams = {}) =>
      this.request<GetSubDirectorateByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SubDirectorate/${subDirectorateId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubDirectorate
     * @name HrmV1ApiSubDirectorateUpdate
     * @request PUT:/hub/hrm/v1/api/SubDirectorate/{SubDirectorateId}
     * @secure
     */
    hrmV1ApiSubDirectorateUpdate: (
      subDirectorateId: number,
      data: UpdateSubDirectorateCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetSubDirectorateViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SubDirectorate/${subDirectorateId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubDirectorate
     * @name HrmV1ApiSubDirectorateDelete
     * @request DELETE:/hub/hrm/v1/api/SubDirectorate/{id}
     * @secure
     */
    hrmV1ApiSubDirectorateDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SubDirectorate/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubDirectorate
     * @name HrmV1ApiSubDirectorateGetListList
     * @request GET:/hub/hrm/v1/api/SubDirectorate/GetList
     * @secure
     */
    hrmV1ApiSubDirectorateGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSubDirectorateListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/SubDirectorate/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TeamNotification
     * @name HrmV1ApiTeamNotificationCreate
     * @request POST:/hub/hrm/v1/api/TeamNotification
     * @secure
     */
    hrmV1ApiTeamNotificationCreate: (data: CreateTeamNotificationCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TeamNotification`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Territory
     * @name HrmV1ApiTerritoryList
     * @request GET:/hub/hrm/v1/api/Territory
     * @secure
     */
    hrmV1ApiTerritoryList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTerritoryViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Territory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Territory
     * @name HrmV1ApiTerritoryCreate
     * @request POST:/hub/hrm/v1/api/Territory
     * @secure
     */
    hrmV1ApiTerritoryCreate: (data: CreateTerritoryCommend, params: RequestParams = {}) =>
      this.request<GetTerritoryViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Territory`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Territory
     * @name HrmV1ApiTerritoryPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Territory
     * @secure
     */
    hrmV1ApiTerritoryPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Territory`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Territory
     * @name HrmV1ApiTerritoryDetail
     * @request GET:/hub/hrm/v1/api/Territory/{TerritoryId}
     * @secure
     */
    hrmV1ApiTerritoryDetail: (territoryId: number, params: RequestParams = {}) =>
      this.request<GetTerritoryByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Territory/${territoryId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Territory
     * @name HrmV1ApiTerritoryUpdate
     * @request PUT:/hub/hrm/v1/api/Territory/{TerritoryId}
     * @secure
     */
    hrmV1ApiTerritoryUpdate: (territoryId: number, data: UpdateTerritoryCommend, params: RequestParams = {}) =>
      this.request<GetTerritoryViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Territory/${territoryId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Territory
     * @name HrmV1ApiTerritoryDelete
     * @request DELETE:/hub/hrm/v1/api/Territory/{id}
     * @secure
     */
    hrmV1ApiTerritoryDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Territory/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Territory
     * @name HrmV1ApiTerritoryGetListList
     * @request GET:/hub/hrm/v1/api/Territory/GetList
     * @secure
     */
    hrmV1ApiTerritoryGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTerritoryListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Territory/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThanksAndSeniority
     * @name HrmV1ApiThanksAndSeniorityList
     * @request GET:/hub/hrm/v1/api/ThanksAndSeniority
     * @secure
     */
    hrmV1ApiThanksAndSeniorityList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetThanksAndSeniorityViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ThanksAndSeniority`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThanksAndSeniority
     * @name HrmV1ApiThanksAndSeniorityCreate
     * @request POST:/hub/hrm/v1/api/ThanksAndSeniority
     * @secure
     */
    hrmV1ApiThanksAndSeniorityCreate: (data: CreateThanksAndSeniorityCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ThanksAndSeniority`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThanksAndSeniority
     * @name HrmV1ApiThanksAndSeniorityPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/ThanksAndSeniority
     * @secure
     */
    hrmV1ApiThanksAndSeniorityPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ThanksAndSeniority`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThanksAndSeniority
     * @name HrmV1ApiThanksAndSeniorityDetail
     * @request GET:/hub/hrm/v1/api/ThanksAndSeniority/{id}
     * @secure
     */
    hrmV1ApiThanksAndSeniorityDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetThanksAndSeniorityByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ThanksAndSeniority/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThanksAndSeniority
     * @name HrmV1ApiThanksAndSeniorityUpdate
     * @request PUT:/hub/hrm/v1/api/ThanksAndSeniority/{id}
     * @secure
     */
    hrmV1ApiThanksAndSeniorityUpdate: (id: string, data: UpdateThanksAndSeniorityCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ThanksAndSeniority/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThanksAndSeniority
     * @name HrmV1ApiThanksAndSeniorityDelete
     * @request DELETE:/hub/hrm/v1/api/ThanksAndSeniority/{id}
     * @secure
     */
    hrmV1ApiThanksAndSeniorityDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ThanksAndSeniority/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThanksAndSeniority
     * @name HrmV1ApiThanksAndSeniorityUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/ThanksAndSeniority/UploadAttachment
     * @secure
     */
    hrmV1ApiThanksAndSeniorityUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/ThanksAndSeniority/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThanksAndSeniority
     * @name HrmV1ApiThanksAndSeniorityExportFileList
     * @request GET:/hub/hrm/v1/api/ThanksAndSeniority/ExportFile
     * @secure
     */
    hrmV1ApiThanksAndSeniorityExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/ThanksAndSeniority/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfAssignment
     * @name HrmV1ApiTypeOfAssignmentList
     * @request GET:/hub/hrm/v1/api/TypeOfAssignment
     * @secure
     */
    hrmV1ApiTypeOfAssignmentList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfAssignmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfAssignment`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfAssignment
     * @name HrmV1ApiTypeOfAssignmentCreate
     * @request POST:/hub/hrm/v1/api/TypeOfAssignment
     * @secure
     */
    hrmV1ApiTypeOfAssignmentCreate: (data: CreateTypeOfAssignmentCommend, params: RequestParams = {}) =>
      this.request<GetTypeOfAssignmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfAssignment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfAssignment
     * @name HrmV1ApiTypeOfAssignmentPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/TypeOfAssignment
     * @secure
     */
    hrmV1ApiTypeOfAssignmentPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfAssignment`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfAssignment
     * @name HrmV1ApiTypeOfAssignmentDetail
     * @request GET:/hub/hrm/v1/api/TypeOfAssignment/{TypeOfAssignmentId}
     * @secure
     */
    hrmV1ApiTypeOfAssignmentDetail: (typeOfAssignmentId: number, params: RequestParams = {}) =>
      this.request<GetTypeOfAssignmentByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfAssignment/${typeOfAssignmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfAssignment
     * @name HrmV1ApiTypeOfAssignmentUpdate
     * @request PUT:/hub/hrm/v1/api/TypeOfAssignment/{TypeOfAssignmentId}
     * @secure
     */
    hrmV1ApiTypeOfAssignmentUpdate: (
      typeOfAssignmentId: number,
      data: UpdateTypeOfAssignmentCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfAssignmentViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfAssignment/${typeOfAssignmentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfAssignment
     * @name HrmV1ApiTypeOfAssignmentDelete
     * @request DELETE:/hub/hrm/v1/api/TypeOfAssignment/{id}
     * @secure
     */
    hrmV1ApiTypeOfAssignmentDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfAssignment/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfAssignment
     * @name HrmV1ApiTypeOfAssignmentGetListList
     * @request GET:/hub/hrm/v1/api/TypeOfAssignment/GetList
     * @secure
     */
    hrmV1ApiTypeOfAssignmentGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfAssignmentListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfAssignment/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfBook
     * @name HrmV1ApiTypeOfBookList
     * @request GET:/hub/hrm/v1/api/TypeOfBook
     * @secure
     */
    hrmV1ApiTypeOfBookList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfBookViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfBook`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfBook
     * @name HrmV1ApiTypeOfBookCreate
     * @request POST:/hub/hrm/v1/api/TypeOfBook
     * @secure
     */
    hrmV1ApiTypeOfBookCreate: (data: CreateTypeOfBookCommend, params: RequestParams = {}) =>
      this.request<GetTypeOfBookViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfBook`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfBook
     * @name HrmV1ApiTypeOfBookPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/TypeOfBook
     * @secure
     */
    hrmV1ApiTypeOfBookPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfBook`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfBook
     * @name HrmV1ApiTypeOfBookDetail
     * @request GET:/hub/hrm/v1/api/TypeOfBook/{TypeOfBookId}
     * @secure
     */
    hrmV1ApiTypeOfBookDetail: (typeOfBookId: number, params: RequestParams = {}) =>
      this.request<GetTypeOfBookByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfBook/${typeOfBookId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfBook
     * @name HrmV1ApiTypeOfBookUpdate
     * @request PUT:/hub/hrm/v1/api/TypeOfBook/{TypeOfBookId}
     * @secure
     */
    hrmV1ApiTypeOfBookUpdate: (typeOfBookId: number, data: UpdateTypeOfBookCommend, params: RequestParams = {}) =>
      this.request<GetTypeOfBookViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfBook/${typeOfBookId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfBook
     * @name HrmV1ApiTypeOfBookDelete
     * @request DELETE:/hub/hrm/v1/api/TypeOfBook/{id}
     * @secure
     */
    hrmV1ApiTypeOfBookDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfBook/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfBook
     * @name HrmV1ApiTypeOfBookGetListList
     * @request GET:/hub/hrm/v1/api/TypeOfBook/GetList
     * @secure
     */
    hrmV1ApiTypeOfBookGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfBookListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfBook/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfDisciplinary
     * @name HrmV1ApiTypeOfDisciplinaryList
     * @request GET:/hub/hrm/v1/api/TypeOfDisciplinary
     * @secure
     */
    hrmV1ApiTypeOfDisciplinaryList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfDisciplinaryViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfDisciplinary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfDisciplinary
     * @name HrmV1ApiTypeOfDisciplinaryCreate
     * @request POST:/hub/hrm/v1/api/TypeOfDisciplinary
     * @secure
     */
    hrmV1ApiTypeOfDisciplinaryCreate: (data: CreateTypeOfDisciplinaryCommend, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfDisciplinary`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfDisciplinary
     * @name HrmV1ApiTypeOfDisciplinaryPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/TypeOfDisciplinary
     * @secure
     */
    hrmV1ApiTypeOfDisciplinaryPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfDisciplinary`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfDisciplinary
     * @name HrmV1ApiTypeOfDisciplinaryDetail
     * @request GET:/hub/hrm/v1/api/TypeOfDisciplinary/{academicAchievementId}
     * @secure
     */
    hrmV1ApiTypeOfDisciplinaryDetail: (academicAchievementId: number, params: RequestParams = {}) =>
      this.request<GetTypeOfDisciplinaryByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfDisciplinary/${academicAchievementId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfDisciplinary
     * @name HrmV1ApiTypeOfDisciplinaryUpdate
     * @request PUT:/hub/hrm/v1/api/TypeOfDisciplinary/{academicAchievementId}
     * @secure
     */
    hrmV1ApiTypeOfDisciplinaryUpdate: (
      academicAchievementId: number,
      data: UpdateTypeOfDisciplinaryCommend,
      params: RequestParams = {},
    ) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfDisciplinary/${academicAchievementId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfDisciplinary
     * @name HrmV1ApiTypeOfDisciplinaryDelete
     * @request DELETE:/hub/hrm/v1/api/TypeOfDisciplinary/{id}
     * @secure
     */
    hrmV1ApiTypeOfDisciplinaryDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfDisciplinary/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfDisciplinary
     * @name HrmV1ApiTypeOfDisciplinaryGetListList
     * @request GET:/hub/hrm/v1/api/TypeOfDisciplinary/GetList
     * @secure
     */
    hrmV1ApiTypeOfDisciplinaryGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfDisciplinaryListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfDisciplinary/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfJob
     * @name HrmV1ApiTypeOfJobList
     * @request GET:/hub/hrm/v1/api/TypeOfJob
     * @secure
     */
    hrmV1ApiTypeOfJobList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfJobViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfJob`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfJob
     * @name HrmV1ApiTypeOfJobCreate
     * @request POST:/hub/hrm/v1/api/TypeOfJob
     * @secure
     */
    hrmV1ApiTypeOfJobCreate: (data: CreateTypeOfJobCommend, params: RequestParams = {}) =>
      this.request<GetTypeOfJobViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfJob`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfJob
     * @name HrmV1ApiTypeOfJobPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/TypeOfJob
     * @secure
     */
    hrmV1ApiTypeOfJobPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfJob`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfJob
     * @name HrmV1ApiTypeOfJobDetail
     * @request GET:/hub/hrm/v1/api/TypeOfJob/{TypeOfJobId}
     * @secure
     */
    hrmV1ApiTypeOfJobDetail: (typeOfJobId: number, params: RequestParams = {}) =>
      this.request<GetTypeOfJobByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfJob/${typeOfJobId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfJob
     * @name HrmV1ApiTypeOfJobUpdate
     * @request PUT:/hub/hrm/v1/api/TypeOfJob/{TypeOfJobId}
     * @secure
     */
    hrmV1ApiTypeOfJobUpdate: (typeOfJobId: number, data: UpdateTypeOfJobCommend, params: RequestParams = {}) =>
      this.request<GetTypeOfJobViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfJob/${typeOfJobId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfJob
     * @name HrmV1ApiTypeOfJobDelete
     * @request DELETE:/hub/hrm/v1/api/TypeOfJob/{id}
     * @secure
     */
    hrmV1ApiTypeOfJobDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfJob/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfJob
     * @name HrmV1ApiTypeOfJobGetListList
     * @request GET:/hub/hrm/v1/api/TypeOfJob/GetList
     * @secure
     */
    hrmV1ApiTypeOfJobGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfJobListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfJob/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfLeave
     * @name HrmV1ApiTypeOfLeaveList
     * @request GET:/hub/hrm/v1/api/TypeOfLeave
     * @secure
     */
    hrmV1ApiTypeOfLeaveList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfLeaveViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfLeave`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfLeave
     * @name HrmV1ApiTypeOfLeaveCreate
     * @request POST:/hub/hrm/v1/api/TypeOfLeave
     * @secure
     */
    hrmV1ApiTypeOfLeaveCreate: (data: CreateTypeOfLeaveCommend, params: RequestParams = {}) =>
      this.request<GetTypeOfLeaveViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfLeave`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfLeave
     * @name HrmV1ApiTypeOfLeavePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/TypeOfLeave
     * @secure
     */
    hrmV1ApiTypeOfLeavePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfLeave`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfLeave
     * @name HrmV1ApiTypeOfLeaveDetail
     * @request GET:/hub/hrm/v1/api/TypeOfLeave/{TypeOfLeaveId}
     * @secure
     */
    hrmV1ApiTypeOfLeaveDetail: (typeOfLeaveId: number, params: RequestParams = {}) =>
      this.request<GetTypeOfLeaveByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfLeave/${typeOfLeaveId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfLeave
     * @name HrmV1ApiTypeOfLeaveUpdate
     * @request PUT:/hub/hrm/v1/api/TypeOfLeave/{TypeOfLeaveId}
     * @secure
     */
    hrmV1ApiTypeOfLeaveUpdate: (typeOfLeaveId: number, data: UpdateTypeOfLeaveCommend, params: RequestParams = {}) =>
      this.request<GetTypeOfLeaveViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfLeave/${typeOfLeaveId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfLeave
     * @name HrmV1ApiTypeOfLeaveDelete
     * @request DELETE:/hub/hrm/v1/api/TypeOfLeave/{id}
     * @secure
     */
    hrmV1ApiTypeOfLeaveDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfLeave/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfLeave
     * @name HrmV1ApiTypeOfLeaveGetListList
     * @request GET:/hub/hrm/v1/api/TypeOfLeave/GetList
     * @secure
     */
    hrmV1ApiTypeOfLeaveGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfLeaveListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfLeave/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfSeniority
     * @name HrmV1ApiTypeOfSeniorityList
     * @request GET:/hub/hrm/v1/api/TypeOfSeniority
     * @secure
     */
    hrmV1ApiTypeOfSeniorityList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfSeniorityViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfSeniority`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfSeniority
     * @name HrmV1ApiTypeOfSeniorityCreate
     * @request POST:/hub/hrm/v1/api/TypeOfSeniority
     * @secure
     */
    hrmV1ApiTypeOfSeniorityCreate: (data: CreateTypeOfSeniorityCommend, params: RequestParams = {}) =>
      this.request<GetTypeOfSeniorityViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfSeniority`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfSeniority
     * @name HrmV1ApiTypeOfSeniorityPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/TypeOfSeniority
     * @secure
     */
    hrmV1ApiTypeOfSeniorityPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfSeniority`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfSeniority
     * @name HrmV1ApiTypeOfSeniorityDetail
     * @request GET:/hub/hrm/v1/api/TypeOfSeniority/{TypeOfSeniorityId}
     * @secure
     */
    hrmV1ApiTypeOfSeniorityDetail: (typeOfSeniorityId: number, params: RequestParams = {}) =>
      this.request<GetTypeOfSeniorityByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfSeniority/${typeOfSeniorityId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfSeniority
     * @name HrmV1ApiTypeOfSeniorityUpdate
     * @request PUT:/hub/hrm/v1/api/TypeOfSeniority/{TypeOfSeniorityId}
     * @secure
     */
    hrmV1ApiTypeOfSeniorityUpdate: (
      typeOfSeniorityId: number,
      data: UpdateTypeOfSeniorityCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfSeniorityViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfSeniority/${typeOfSeniorityId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfSeniority
     * @name HrmV1ApiTypeOfSeniorityDelete
     * @request DELETE:/hub/hrm/v1/api/TypeOfSeniority/{id}
     * @secure
     */
    hrmV1ApiTypeOfSeniorityDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfSeniority/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfSeniority
     * @name HrmV1ApiTypeOfSeniorityGetListList
     * @request GET:/hub/hrm/v1/api/TypeOfSeniority/GetList
     * @secure
     */
    hrmV1ApiTypeOfSeniorityGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfSeniorityListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfSeniority/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfService
     * @name HrmV1ApiTypeOfServiceList
     * @request GET:/hub/hrm/v1/api/TypeOfService
     * @secure
     */
    hrmV1ApiTypeOfServiceList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfServiceViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfService`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfService
     * @name HrmV1ApiTypeOfServiceCreate
     * @request POST:/hub/hrm/v1/api/TypeOfService
     * @secure
     */
    hrmV1ApiTypeOfServiceCreate: (data: CreateTypeOfServiceCommend, params: RequestParams = {}) =>
      this.request<GetTypeOfServiceViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfService`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfService
     * @name HrmV1ApiTypeOfServicePartialUpdate
     * @request PATCH:/hub/hrm/v1/api/TypeOfService
     * @secure
     */
    hrmV1ApiTypeOfServicePartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfService`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfService
     * @name HrmV1ApiTypeOfServiceDetail
     * @request GET:/hub/hrm/v1/api/TypeOfService/{TypeOfServiceId}
     * @secure
     */
    hrmV1ApiTypeOfServiceDetail: (typeOfServiceId: number, params: RequestParams = {}) =>
      this.request<GetTypeOfServiceByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfService/${typeOfServiceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfService
     * @name HrmV1ApiTypeOfServiceUpdate
     * @request PUT:/hub/hrm/v1/api/TypeOfService/{TypeOfServiceId}
     * @secure
     */
    hrmV1ApiTypeOfServiceUpdate: (
      typeOfServiceId: number,
      data: UpdateTypeOfServiceCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfServiceViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfService/${typeOfServiceId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfService
     * @name HrmV1ApiTypeOfServiceDelete
     * @request DELETE:/hub/hrm/v1/api/TypeOfService/{id}
     * @secure
     */
    hrmV1ApiTypeOfServiceDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfService/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TypeOfService
     * @name HrmV1ApiTypeOfServiceGetListList
     * @request GET:/hub/hrm/v1/api/TypeOfService/GetList
     * @secure
     */
    hrmV1ApiTypeOfServiceGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTypeOfServiceListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/TypeOfService/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unit
     * @name HrmV1ApiUnitList
     * @request GET:/hub/hrm/v1/api/Unit
     * @secure
     */
    hrmV1ApiUnitList: (
      query?: {
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetUnitViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Unit`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unit
     * @name HrmV1ApiUnitCreate
     * @request POST:/hub/hrm/v1/api/Unit
     * @secure
     */
    hrmV1ApiUnitCreate: (data: CreateUnitCommend, params: RequestParams = {}) =>
      this.request<GetUnitViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Unit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unit
     * @name HrmV1ApiUnitPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Unit
     * @secure
     */
    hrmV1ApiUnitPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Unit`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unit
     * @name HrmV1ApiUnitDetail
     * @request GET:/hub/hrm/v1/api/Unit/{UnitId}
     * @secure
     */
    hrmV1ApiUnitDetail: (unitId: number, params: RequestParams = {}) =>
      this.request<GetUnitByIdViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Unit/${unitId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unit
     * @name HrmV1ApiUnitUpdate
     * @request PUT:/hub/hrm/v1/api/Unit/{UnitId}
     * @secure
     */
    hrmV1ApiUnitUpdate: (unitId: number, data: UpdateUnitCommend, params: RequestParams = {}) =>
      this.request<GetUnitViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Unit/${unitId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unit
     * @name HrmV1ApiUnitDelete
     * @request DELETE:/hub/hrm/v1/api/Unit/{id}
     * @secure
     */
    hrmV1ApiUnitDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Unit/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unit
     * @name HrmV1ApiUnitGetListList
     * @request GET:/hub/hrm/v1/api/Unit/GetList
     * @secure
     */
    hrmV1ApiUnitGetListList: (
      query?: {
        /** @format int32 */
        Id?: number;
        NameTerm?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetUnitListViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Unit/GetList`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilies
     * @name HrmV1ApiUtiliesFindEmployeeList
     * @request GET:/hub/hrm/v1/api/Utilies/FindEmployee
     * @secure
     */
    hrmV1ApiUtiliesFindEmployeeList: (
      query?: {
        SearchBy?: SearchBy;
        Search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindEmployeeViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Utilies/FindEmployee`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilies
     * @name HrmV1ApiUtiliesGetStatusList
     * @request GET:/hub/hrm/v1/api/Utilies/GetStatus
     * @secure
     */
    hrmV1ApiUtiliesGetStatusList: (params: RequestParams = {}) =>
      this.request<Int32StringDictionaryResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Utilies/GetStatus`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilities
     * @name HrmV1ApiUtilitiesGetAcademicAchievementList
     * @request GET:/hub/hrm/v1/api/Utilities/GetAcademicAchievement
     * @secure
     */
    hrmV1ApiUtilitiesGetAcademicAchievementList: (params: RequestParams = {}) =>
      this.request<GetAcademicAchievementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Utilities/GetAcademicAchievement`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilities
     * @name HrmV1ApiUtilitiesCreateAcademicAchievementCreate
     * @request POST:/hub/hrm/v1/api/Utilities/CreateAcademicAchievement
     * @secure
     */
    hrmV1ApiUtilitiesCreateAcademicAchievementCreate: (
      data: CreateAcademicAchievementCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicAchievementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Utilities/CreateAcademicAchievement`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilities
     * @name HrmV1ApiUtilitiesUpdateAcademicAchievementUpdate
     * @request PUT:/hub/hrm/v1/api/Utilities/UpdateAcademicAchievement
     * @secure
     */
    hrmV1ApiUtilitiesUpdateAcademicAchievementUpdate: (
      data: UpdateAcademicAchievementCommend,
      params: RequestParams = {},
    ) =>
      this.request<GetAcademicAchievementViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Utilities/UpdateAcademicAchievement`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilities
     * @name HrmV1ApiUtilitiesChangeStatusDelete
     * @request DELETE:/hub/hrm/v1/api/Utilities/ChangeStatus/{id}
     * @secure
     */
    hrmV1ApiUtilitiesChangeStatusDelete: (id: number, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Utilities/ChangeStatus/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilities
     * @name HrmV1ApiUtilitiesChangeStatusPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Utilities/ChangeStatus
     * @secure
     */
    hrmV1ApiUtilitiesChangeStatusPartialUpdate: (data: Int32ChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Utilities/ChangeStatus`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Valuations
     * @name HrmV1ApiValuationsList
     * @request GET:/hub/hrm/v1/api/Valuations
     * @secure
     */
    hrmV1ApiValuationsList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
        Status?: Status;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetValuationsViewModelPagedResultResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Valuations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Valuations
     * @name HrmV1ApiValuationsCreate
     * @request POST:/hub/hrm/v1/api/Valuations
     * @secure
     */
    hrmV1ApiValuationsCreate: (data: CreateValuationCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Valuations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Valuations
     * @name HrmV1ApiValuationsUpdate
     * @request PUT:/hub/hrm/v1/api/Valuations
     * @secure
     */
    hrmV1ApiValuationsUpdate: (data: UpdateValuationCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Valuations`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Valuations
     * @name HrmV1ApiValuationsPartialUpdate
     * @request PATCH:/hub/hrm/v1/api/Valuations
     * @secure
     */
    hrmV1ApiValuationsPartialUpdate: (data: GuidChangeStatusCommand, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Valuations`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Valuations
     * @name HrmV1ApiValuationsDetail
     * @request GET:/hub/hrm/v1/api/Valuations/{id}
     * @secure
     */
    hrmV1ApiValuationsDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetByIdValuationViewModelResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Valuations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Valuations
     * @name HrmV1ApiValuationsDelete
     * @request DELETE:/hub/hrm/v1/api/Valuations/{id}
     * @secure
     */
    hrmV1ApiValuationsDelete: (id: string, params: RequestParams = {}) =>
      this.request<BooleanResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Valuations/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Valuations
     * @name HrmV1ApiValuationsUploadAttachmentCreate
     * @request POST:/hub/hrm/v1/api/Valuations/UploadAttachment
     * @secure
     */
    hrmV1ApiValuationsUploadAttachmentCreate: (
      data: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAttachmentViewModelIEnumerableResponse, ProblemDetails>({
        path: `/hub/hrm/v1/api/Valuations/UploadAttachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Valuations
     * @name HrmV1ApiValuationsExportFileList
     * @request GET:/hub/hrm/v1/api/Valuations/ExportFile
     * @secure
     */
    hrmV1ApiValuationsExportFileList: (
      query?: {
        /** @format uuid */
        EmployeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/hub/hrm/v1/api/Valuations/ExportFile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
