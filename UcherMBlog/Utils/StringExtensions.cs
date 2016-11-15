namespace UcherMBlog.Utils
{
    public static class StringExtensions
    {
        public static string ToValidUrl(this string text)
        {
            return text.Replace(' ', '-')
                .Replace("#", "_sharp")
                .Replace("+", "_plus");
        }
    }
}
