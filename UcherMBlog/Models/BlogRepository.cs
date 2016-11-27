using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
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

        public Article GetArticleByIdWithContent(int articleId)
        {
            return _blogContext.Articles.Where(article => article.Id == articleId)
                .Include(article => article.Content)
                .FirstOrDefault();
        }

        public void AddArticle(Article article)
        {
            article.Category = null;
            _blogContext.Articles.Add(article);
        }

        public bool SaveAll()
        {
            return _blogContext.SaveChanges() > 0;
        }
    }
}