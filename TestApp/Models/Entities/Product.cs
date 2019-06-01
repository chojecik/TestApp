using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestApp.Models.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string ArticleNo { get; set; }
        public string ArticleName { get; set; }
        public string Description { get; set; }
        public CategoryType Category { get; set; }
        public double GrossPrice { get; set; }
    }

    public enum CategoryType
    {
        Sport = 1,
        Electronic = 2,
        Toys = 3,
        Clothes = 4
    }
}
