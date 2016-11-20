using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace UcherMBlog.Models
{
    public class BlogContextDataSeeder
    {
        private readonly BlogContext _context;
        private readonly UserManager<BlogUser> _userManager;

        public BlogContextDataSeeder(BlogContext context, UserManager<BlogUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task SeedDataAsync()
        {
            var email = "kowalski@abc.com";
            if (await _userManager.FindByEmailAsync(email) == null)
            {
                var user = new BlogUser()
                {
                    UserName = "kowalski",
                    Email = email
                };

                await _userManager.CreateAsync(user, "Testpass!2");
            }

            _context.SaveChanges();

            if (!_context.Categories.Any())
            {

                Category[] categories =
                {
                    new Category {Name = "C#"},
                    new Category {Name = "C++"},
                    new Category {Name = "Autofac"},
                    new Category {Name = "Xamarin"},
                    new Category {Name = "ASP.NET Core"},
                    new Category {Name = "EF Core"}
                };

                _context.Categories.AddRange(categories);
            }

            _context.SaveChanges();

            if (!_context.Articles.Any())
            {

                Article[] articles =
                {
                    new Article()
                    {
                        Title = "First article",
                        AuthorName = "Jan Kowalski",
                        CategoryId = 1,
                        Content = "test content",
                        DateCreated = DateTime.Now
                    },
                    new Article()
                    {
                        Title = "Second article",
                        AuthorName = "Jan Kowalski",
                        CategoryId = 2,
                        Content = "test content2",
                        DateCreated = DateTime.Now
                    },
                };

                _context.Articles.AddRange(articles);
            }

            _context.SaveChanges();
        }
    }
}
