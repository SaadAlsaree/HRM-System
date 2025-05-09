using Microsoft.AspNetCore.Mvc.ApplicationModels;

namespace HRM.Hub.Persistence.Helpers
{
    public class SwaggerFileMapperConvention : IControllerModelConvention
    {
        public void Apply(ControllerModel controller)
        {
            var controllerNamespace = controller?.ControllerType?.Namespace;
            if (controllerNamespace.Contains("Attendance"))
                controller.ApiExplorer.GroupName = "attendance";
            else return;
        }
    }
}
