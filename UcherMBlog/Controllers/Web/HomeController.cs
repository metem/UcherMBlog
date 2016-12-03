using Microsoft.AspNetCore.Mvc;
using UcherMBlog.ViewModels.Web;

namespace UcherMBlog.Controllers.Web
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Contact(ContactViewModel loginViewModel)
        {
            if (ModelState.IsValid)
            {
                //TODO: send email
            }

            return View();
        }
    }
}
