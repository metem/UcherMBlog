using System.Collections.Generic;

namespace UcherMBlog.Models
{
    public interface IBlogRepository
    {
        IEnumerable<Category> GetAllCategories();
        IEnumerable<Article> GetArticlesByCategoryName(string name);
        Article GetArticleById(int articleId);
        void AddArticle(Article article);
        bool SaveAll();
    }
}