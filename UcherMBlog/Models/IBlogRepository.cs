using System.Collections.Generic;

namespace UcherMBlog.Models
{
    public interface IBlogRepository
    {
        IEnumerable<Category> GetAllCategories();
        IEnumerable<Article> GetArticlesByCategoryName(string name);
        Article GetArticleByIdWithContent(int articleId);
        void AddArticle(Article article);
        bool SaveAll();
    }
}