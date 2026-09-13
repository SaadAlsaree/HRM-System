using HRM.Hub.Application.Contracts;
using HRM.Hub.Application.Extensions;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

namespace HRM.Hub.Application.Features.RetirementHandler.Queries.GetRetirement;

public class GetRetirementHandler : GetAllWithCountHandler<Retirement, GetRetirementViewModel, GetRetirementQuery>, IRequestHandler<GetRetirementQuery, Response<PagedResult<GetRetirementViewModel>>>
{
    public GetRetirementHandler(IBaseRepository<Retirement> repositoryRetirement)
        : base(repositoryRetirement) { }

    public override Expression<Func<Retirement, GetRetirementViewModel>> Selector => z => new GetRetirementViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        DirectorateId = z.DirectorateId,
        SubDirectorateId = z.SubDirectorateId,
        DirectorateName = z.Directorate != null ? z.Directorate.Name : (z.Employee != null && z.Employee.ManagementInformation != null && z.Employee.ManagementInformation.Directorate != null ? z.Employee.ManagementInformation.Directorate.Name : null),
        SubDirectorateName = z.SubDirectorate != null ? z.SubDirectorate.Name : (z.Employee != null && z.Employee.ManagementInformation != null && z.Employee.ManagementInformation.SubDirectorate != null ? z.Employee.ManagementInformation.SubDirectorate.Name : null),
        StartDate = z.StartDate,
        AcademicAchievementId = z.AcademicAchievementId,
        JobDegreeId = z.JobDegreeId,
        JobCategoryId = z.JobCategoryId,
        JobTitleId = z.JobTitleId,
        AcademicAchievementName = z.AcademicAchievement != null ? z.AcademicAchievement.Name : null,
        JobDegreeName = z.JobDegree != null ? z.JobDegree.Name : (z.Employee != null && z.Employee.Promotion != null && z.Employee.Promotion.JobDegree != null ? z.Employee.Promotion.JobDegree.Name : null),
        JobCategoryName = z.JobCategory != null ? z.JobCategory.Name : (z.Employee != null && z.Employee.Promotion != null && z.Employee.Promotion.JobCategory != null ? z.Employee.Promotion.JobCategory.Name : null),
        JobTitleName = z.JobTitle != null ? z.JobTitle.Name : (z.Employee != null && z.Employee.ManagementInformation != null && z.Employee.ManagementInformation.JobTitle != null ? z.Employee.ManagementInformation.JobTitle.Name : null),
        DecisionToFixAge = z.DecisionToFixAge,
        EmployeePositionId = z.EmployeePositionId,
        EndDateOfService = z.EndDateOfService,
        Birthdate = z.Birthdate ?? (z.Employee != null && z.Employee.BirthDate.HasValue ? z.Employee.BirthDate.Value.ToDateTime(TimeOnly.MinValue) : (DateTime?)null),
        RetirementDate = z.RetirementDate,
        AdministrativeOrderNo = z.AdministrativeOrderNo,
        AdministrativeOrderDate = z.AdministrativeOrderDate,
        IsPoliticallyDismissed = z.IsPoliticallyDismissed,
        Note = z.Note,
        Status = z.StatusId,
        FullName = z.Employee != null ? z.Employee.FullName : null,
        JobCode = z.Employee != null ? z.Employee.JobCode : null,
        LotNumber = z.Employee != null ? z.Employee.LotNumber : null,
        StatisticalIndex = z.Employee != null ? z.Employee.StatisticalIndex : null
    };

    public override Func<IQueryable<Retirement>, IOrderedQueryable<Retirement>> OrderBy => order => order.OrderByDescending(z => z.CreateAt);

    public async Task<Response<PagedResult<GetRetirementViewModel>>> Handle(GetRetirementQuery request, CancellationToken cancellationToken)
    {
        var query = _repository.Query(x => !x.IsDeleted);

        if (request.EmployeeId != Guid.Empty)
            query = query.Where(x => x.EmployeeId == request.EmployeeId);

        if (request.Status != Status.None)
            query = query.Where(x => x.StatusId == request.Status || x.Status == request.Status);

        var count = await query.CountAsync(cancellationToken);
        var result = await query
            .OrderByDescending(x => x.CreateAt)
            .ApplyPagination(request)
            .Select(Selector)
            .ToListAsync(cancellationToken);

        if (!result.Any())
        {
            return SuccessMessage.Get.ToSuccessMessage(new PagedResult<GetRetirementViewModel>
            {
                Items = new List<GetRetirementViewModel>(),
                TotalCount = 0
            });
        }

        result.ForEach(x =>
        {
            x.StatusName = ((Status)x.Status).GetDisplayName();
        });

        return SuccessMessage.Get.ToSuccessMessage(new PagedResult<GetRetirementViewModel>
        {
            Items = result,
            TotalCount = count
        });
    }
}