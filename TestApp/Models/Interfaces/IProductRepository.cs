using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestApp.Models.Entities;

namespace TestApp.Models.Interfaces
{
    public interface IProductRepository
    {
        List<Product> GetAllProducts();
        Product GetProduct(int productId);
        int AddProduct(Product product);
        int UpdateProduct(Product product);
        void DeleteProduct(Product product);       
    }
}
