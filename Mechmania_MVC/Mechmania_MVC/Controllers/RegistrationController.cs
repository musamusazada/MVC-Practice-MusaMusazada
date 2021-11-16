using Microsoft.AspNetCore.Mvc;

namespace Mechmania_MVC.Controllers
{
    public class RegistrationController : Controller
    {
        public IActionResult reg()
        {
            return View();
        }
    }
}
