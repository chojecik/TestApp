using Microsoft.EntityFrameworkCore.Migrations;

namespace TestApp.Migrations
{
    public partial class Seeding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Products (ArticleNo, ArticleName, Description, Category, GrossPrice) VALUES ('39533028', 'Elcykel Allegro', 'En smart och tillförlitlig elcykel för dam från Batavus utmärkt både för långa och kortare turer.', 1, 18499)");
            migrationBuilder.Sql("INSERT INTO Products (ArticleNo, ArticleName, Description, Category, GrossPrice) VALUES ('40266837', 'Lapierre Overvolt Urban 300', 'Praktisk och bekväm elcykel med upprätt körställning.', 1, 20990)");
            migrationBuilder.Sql("INSERT INTO Products (ArticleNo, ArticleName, Description, Category, GrossPrice) VALUES ('p35372817', 'Chrome cast 2nd generationen', 'Visar film eller annan media från mobilen på TV: n', 2, 390)");
            migrationBuilder.Sql("INSERT INTO Products (ArticleNo, ArticleName, Description, Category, GrossPrice) VALUES ('35552289', 'Apple TV 64GB 4th generation', 'Nu kommer App Store till din tv.Du kan förvänta dig massor av spännande spel.', 2, 1990)");
            migrationBuilder.Sql("INSERT INTO Products (ArticleNo, ArticleName, Description, Category, GrossPrice) VALUES ('40151785', 'Big Foot truck 2wd', 'Det här är bilen som startade alltihop och skapade den idag enorma monster - truck trenden.', 3, 2795)");
            migrationBuilder.Sql("INSERT INTO Products (ArticleNo, ArticleName, Description, Category, GrossPrice) VALUES ('12345678', 'Mäns vinterjacka', 'Den perfekta varma jackan för vintern.', 4, 1000)");
            migrationBuilder.Sql("INSERT INTO Products (ArticleNo, ArticleName, Description, Category, GrossPrice) VALUES ('87654321', 'Sommarklädsel storlek S', 'En ljusfärgad klänning för heta dagar.', 4, 500)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Products");
        }
    }
}
