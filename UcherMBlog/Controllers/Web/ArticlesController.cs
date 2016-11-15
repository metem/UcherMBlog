using Microsoft.AspNetCore.Mvc;
using UcherMBlog.Models;

namespace UcherMBlog.Controllers.Web
{
    public class ArticlesController : Controller
    {
        private readonly IBlogRepository _blogRepository;

        public ArticlesController(IBlogRepository blogRepository)
        {
            _blogRepository = blogRepository;
        }

        public IActionResult Index(string category)
        {
            var articles = _blogRepository.GetArticlesByCategoryName(category);
            return View(articles);
        }

        public IActionResult ViewArticle(string category, int articleId, string articleTitle)
        {
            var article = _blogRepository.GetArticleById(articleId);
            return View(article);
        }
    }
}
