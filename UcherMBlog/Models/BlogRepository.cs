using System.Collections.Generic;

namespace UcherMBlog.Models
{
    class BlogRepository : IBlogRepository
    {
        private readonly BlogContext _blogContext;

        public BlogRepository(BlogContext blogContext)
        {
            _blogContext = blogContext;
        }

        public IEnumerable<Category> GetAllCategories()
        {
            return _blogContext.Categories;
        }
    }
}