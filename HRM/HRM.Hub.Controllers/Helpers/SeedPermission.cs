using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Controllers;
using System.Reflection;

namespace HRM.Hub.Controllers.Helpers;
public class SeedPermission
{
    private readonly ApplicationPartManager _partManager;

    public SeedPermission(ApplicationPartManager partManager)
    {
        _partManager = partManager;
    }

    public Dictionary<string, IEnumerable<string>> GetControllerActionNames()
    {
        var controllerFeature = new ControllerFeature();
        _partManager.PopulateFeature(controllerFeature);

        var controllerActions = new Dictionary<string, IEnumerable<string>>();

        foreach (var controller in controllerFeature.Controllers)
        {
            var controllerType = controller.AsType();
            var actions = controllerType.GetMethods(BindingFlags.Instance | BindingFlags.DeclaredOnly | BindingFlags.Public)
                            .Where(m => !m.IsSpecialName && m.DeclaringType == controllerType)
                            .Select(m => m.Name)
                            .Distinct()
                            .ToList();

            controllerActions.Add(controllerType.Name.Replace("Controller", ""), actions);
        }

        return controllerActions;
    }
}