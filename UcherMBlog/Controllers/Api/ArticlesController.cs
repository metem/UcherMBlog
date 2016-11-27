using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using UcherMBlog.Models;
using UcherMBlog.ViewModels.Api;

namespace UcherMBlog.Controllers.Api
{
    [Route("api/articles")]
    public class ArticlesController : Controller
    {
        private readonly IBlogRepository _blogRepository;

        public ArticlesController(IBlogRepository blogRepository)
        {
            _blogRepository = blogRepository;
        }

        [HttpGet("")]
        public IActionResult Get(string categoryName)
        {
            var articles = _blogRepository.GetArticlesByCategoryName(categoryName);
            var articlesResult = Mapper.Map<IEnumerable<ArticleViewModel>>(articles);
            return Ok(articlesResult);
        }
    }
}
