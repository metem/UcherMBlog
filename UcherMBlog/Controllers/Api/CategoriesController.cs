using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using UcherMBlog.Models;
using UcherMBlog.ViewModels.Api;

namespace UcherMBlog.Controllers.Api
{
    [Route("api/categories")]
    public class CategoriesController : Controller
    {
        private readonly IBlogRepository _blogRepository;

        public CategoriesController(IBlogRepository blogRepository)
        {
            _blogRepository = blogRepository;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            var categories = _blogRepository.GetAllCategories();
            var categoriesResult = Mapper.Map<IEnumerable<CategoryViewModel>>(categories);
            return Ok(categoriesResult);
        }
    }
}
