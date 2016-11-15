using System.Linq;
using Microsoft.AspNetCore.Mvc;
using UcherMBlog.Models;

namespace UcherMBlog.Controllers.Web
{
    public class HomeController : Controller
    {
        private readonly IBlogRepository _blogRepository;

        public HomeController(IBlogRepository blogRepository)
        {
            _blogRepository = blogRepository;
        }

        public IActionResult Index()
        {
            var categories = _blogRepository.GetAllCategories();
            return View(categories.OrderBy(category => category.Name));
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
