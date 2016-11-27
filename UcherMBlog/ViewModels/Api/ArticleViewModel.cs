using System;

namespace UcherMBlog.ViewModels.Api
{
    public class ArticleViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string AuthorName { get; set; }
        public DateTime DateCreated { get; set; }
        public int CategoryId { get; set; }
    }
}