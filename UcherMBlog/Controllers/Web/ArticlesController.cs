using System;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using UcherMBlog.Models;
using UcherMBlog.ViewModels;

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

        public IActionResult AddArticle()
        {
            ViewBag.Categories = _blogRepository.GetAllCategories();
            return View();
        }

        [HttpPost]
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
