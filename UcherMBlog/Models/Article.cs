using System;

namespace UcherMBlog.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string AuthorName { get; set; }
        public DateTime DateCreated { get; set; }
        public Category Category { get; set; }
    }
}