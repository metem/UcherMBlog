using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace UcherMBlog.Migrations
{
    public partial class ArticlesData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("SET IDENTITY_INSERT Articles ON");

            migrationBuilder.Sql(
                "INSERT INTO Articles (Id, AuthorName, CategoryId, Content, DateCreated, Title) VALUES (1, 'Mateusz', 1, 'Test content', '2015-01-01 00:00:00', 'Test title')");
            migrationBuilder.Sql(
                "INSERT INTO Articles (Id, AuthorName, CategoryId, Content, DateCreated, Title) VALUES (2, 'Jan', 1, 'Another test content', '2015-02-03 23:00:00', 'Another test title')");
            migrationBuilder.Sql("SET IDENTITY_INSERT Articles OFF");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Articles WHERE Id IN (1, 2)");
        }
    }
}
