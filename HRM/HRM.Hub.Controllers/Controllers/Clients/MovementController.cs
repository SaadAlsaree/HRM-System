using Microsoft.AspNetCore.Mvc;

namespace HRM.Hub.Controllers.Controllers.Clients
{
    public class MovementController : Controller
    {
        public IActionResult Dashboard()
        {
            return View();
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult AssignmentOut()
        {
            return View();
        }
        public IActionResult AssignmentIn()
        {
            return View();
        }
        public IActionResult CurrentPositions()
        {
            return View();
        }
        public IActionResult OldPositions()
        {
            return View();
        }
    }
}
