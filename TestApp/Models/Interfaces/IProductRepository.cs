using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestApp.Models.Entities;

namespace TestApp.Models.Interfaces
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetAllProducts(string category);
        Task<Product> GetProduct(int productId);
        Task AddProduct(Product product);
        Task<bool> UpdateProduct(Product product);
        Task DeleteProduct(Product product);       
    }
}
