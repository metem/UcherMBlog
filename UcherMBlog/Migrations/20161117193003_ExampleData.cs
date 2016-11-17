using Microsoft.EntityFrameworkCore.Migrations;

namespace UcherMBlog.Migrations
{
    public partial class ExampleData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (1, 0, 'C#')");
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (2, 0, 'C++')");
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (3, 0, 'Autofac')");
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (4, 0, 'Xamarin')");
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (5, 0, 'ASP.NET Core')");
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (6, 0, 'EF Core')");

            migrationBuilder.Sql(
                "INSERT INTO Articles (Id, AuthorName, CategoryId, Content, DateCreated, Title) VALUES (1, 'Mateusz', 1, 'Test content', '2015-01-01 00:00:00', 'Test title')");
            migrationBuilder.Sql(
                "INSERT INTO Articles (Id, AuthorName, CategoryId, Content, DateCreated, Title) VALUES (2, 'Jan', 1, 'Another test content', '2015-02-03 23:00:00', 'Another test title')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Categories WHERE Id IN (1, 2, 3, 4, 5, 6)");
            migrationBuilder.Sql("DELETE FROM Articles WHERE Id IN (1, 2)");
        }
    }
}
