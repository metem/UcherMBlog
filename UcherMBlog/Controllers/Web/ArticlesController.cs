using System;
using System.Net;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using UcherMBlog.Models;
using UcherMBlog.ViewModels.Web;

namespace UcherMBlog.Controllers.Web
{
    public class ArticlesController : Controller
    {
        private readonly IHostingEnvironment _env;

        private readonly IBlogRepository _blogRepository;

        public ArticlesController(IBlogRepository blogRepository, IHostingEnvironment env)
        {
            _blogRepository = blogRepository;
            _env = env;
        }

        public IActionResult Index(string category)
        {
            var articles = _blogRepository.GetArticlesByCategoryName(category);
            return View(articles);
        }

        public IActionResult ViewArticle(string category, int articleId, string articleTitle)
        {
            var article = _blogRepository.GetArticleById(articleId);
            if (!_env.IsDevelopment())
            {
                //TODO: implement XSS protection
                article.Content = WebUtility.HtmlEncode(article.Content);
            }
            return View(article);
        }

        [Authorize]
        public IActionResult AddArticle()
        {
            ViewBag.Categories = _blogRepository.GetAllCategories();
            return View();
        }

        [HttpPost]
        [Authorize]
        [ValidateAntiForgeryToken]
        public IActionResult AddArticle(ArticleViewModel model)
        {
            if (ModelState.IsValid)
            {
                var article = Mapper.Map<Article>(model);
                article.DateCreated = DateTime.Now;

                _blogRepository.AddArticle(article);
                _blogRepository.SaveAll();

                ModelState.Clear();

                ViewBag.Message = "Article added";
            }

            ViewBag.Categories = _blogRepository.GetAllCategories();
            return View();
        }
    }
}
