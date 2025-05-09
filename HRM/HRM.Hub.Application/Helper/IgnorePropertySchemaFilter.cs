using System.Reflection;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace HRM.Hub.Application.Helper;

[AttributeUsage(AttributeTargets.Property)]
public class SwaggerIgnoreAttribute : Attribute
{
}

public class IgnorePropertySchemaFilter : ISchemaFilter
{
    public void Apply(OpenApiSchema schema, SchemaFilterContext context)
    {
        if (schema?.Properties == null)
        {
            return;
        }

        var ignoredProperties = context.Type.GetProperties().Where(
            t => t.GetCustomAttribute<SwaggerIgnoreAttribute>() != null);

        foreach (var ignoredProperty in ignoredProperties)
        {
            var propertyToRemove = schema.Properties.Keys.SingleOrDefault(
                x => string.Equals(x, ignoredProperty.Name, StringComparison.OrdinalIgnoreCase));

            if (propertyToRemove != null)
            {
                schema.Properties.Remove(propertyToRemove);
            }
        }
    }
}