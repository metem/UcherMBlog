using System.ComponentModel.DataAnnotations;

namespace UcherMBlog.ViewModels
{
    public class ArticleViewModel
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public int CategoryId { get; set; }
    }
}
