namespace UcherMBlog.Models
{
    public class ArticleContent
    {
        public int Id { get; set; }
        public virtual Article Article { get; set; }
        public int ArticleId { get; set; }
        public string Content { get; set; }
    }
}