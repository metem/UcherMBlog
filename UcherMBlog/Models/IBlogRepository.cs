using System.Collections.Generic;

namespace UcherMBlog.Models
{
    public interface IBlogRepository
    {
        IEnumerable<Category> GetAllCategories();
    }
}