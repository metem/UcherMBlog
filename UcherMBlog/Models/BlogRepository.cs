using System.Collections.Generic;
using System.Linq;
using UcherMBlog.Utils;

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

        public IEnumerable<Article> GetArticlesByCategoryName(string name)
        {
            return _blogContext.Articles.Where(article => article.Category.Name.ToValidUrl() == name);
        }

        public Article GetArticleById(int articleId)
        {
            return _blogContext.Articles.FirstOrDefault(article => article.Id == articleId);
        }
    }
}