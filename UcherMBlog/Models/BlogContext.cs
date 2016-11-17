using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace UcherMBlog.Models
{
    public class BlogContext : DbContext
    {
        private readonly IConfigurationRoot _config;

        public BlogContext(IConfigurationRoot config, DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
            _config = config;
        }

        public DbSet<Article> Articles { get; set; }

        public DbSet<Category> Categories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlite(_config["ConnectionStrings:SqliteDatabase"]);
        }
    }
}
