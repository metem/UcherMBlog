using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace UcherMBlog.Migrations
{
    public partial class CategoriesData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("SET IDENTITY_INSERT Categories ON");
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (1, 0, 'C#')");
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (2, 0, 'C++')");
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (3, 0, 'Autofac')");
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (4, 0, 'Xamarin')");
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (5, 0, 'ASP.NET Core')");
            migrationBuilder.Sql("INSERT INTO Categories (Id, ArgbColor, Name) VALUES (6, 0, 'EF Core')");
            migrationBuilder.Sql("SET IDENTITY_INSERT Categories OFF");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Categories WHERE Id IN (1, 2, 3, 4, 5, 6)");
        }
    }
}
