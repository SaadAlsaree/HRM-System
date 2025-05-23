﻿using System.Reflection;

namespace HRM.Hub.Domain.Common;
public static class EnumExtensions
{
    public static Response<T> ToErrorMessage<T>(this ErrorsMessage enumValue, T data)
    {
        var enumType = enumValue.GetType();
        var memberInfo = enumType.GetMember(enumValue.ToString()).FirstOrDefault();

        if (memberInfo != null)
        {
            var displayAttribute = memberInfo.GetCustomAttribute<DisplayAttribute>();
            if (displayAttribute != null)
            {
                return Response<T>.Fail(data, new MessageResponse
                {
                    Code = ((int)enumValue).ToString(),
                    Message = displayAttribute.Name
                });
            }
        }
        return Response<T>.Fail(data, new MessageResponse
        {
            Code = ((int)enumValue).ToString(),
            Message = enumValue.ToString()
        });
    }
    public static Dictionary<int,string> ToDictionary<T>(this T enumType) where T : Enum
    {
        return Enum.GetValues(enumType.GetType())
                   .Cast<T>()
                   .Select(e => (value: e, displayName: e.GetDisplayName()))
                   .ToDictionary(z=>Convert.ToInt32(z.value),z=>z.displayName);
    }
    public static string GetDisplayName(this Enum enumValue)
    {
        return enumValue.GetType()
                        .GetMember(enumValue.ToString())[0]
                        .GetCustomAttribute<DisplayAttribute>()
                        ?.GetName();
    }
    public static Response<T> ToSuccessMessage<T>(this SuccessMessage enumValue, T data)
    {
        var enumType = enumValue.GetType();
        var memberInfo = enumType.GetMember(enumValue.ToString()).FirstOrDefault();

        if (memberInfo != null)
        {
            var displayAttribute = memberInfo.GetCustomAttribute<DisplayAttribute>();
            if (displayAttribute != null)
            {
                return Response<T>.Success(data, new MessageResponse
                {
                    Code = ((int)enumValue).ToString(),
                    Message = displayAttribute.Name
                });
            }
        }
        return Response<T>.Success(data, new MessageResponse
        {
            Code = ((int)enumValue).ToString(),
            Message = enumValue.ToString()
        });
    }
}