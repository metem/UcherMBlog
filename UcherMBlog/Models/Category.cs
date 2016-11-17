using System.Collections.Generic;

namespace UcherMBlog.Models
{
    public class Category
    {
        public int Id { get; set; }
        public int ArgbColor { get; set; }
        public string Name { get; set; }
        public virtual IEnumerable<Article> Articles { get; set; }
    }
}