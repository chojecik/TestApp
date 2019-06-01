using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestApp.Database;
using TestApp.Models.Entities;
using TestApp.Models.Interfaces;

namespace TestApp.Models.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly DatabaseContext _dbContext;

        public ProductRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int AddProduct(Product product)
        {
            if(product == null)
            {
                throw new Exception("Product object is null");
            }
            _dbContext.Products.Add(product);
            _dbContext.SaveChanges();
            return product.Id;
        }

        public void DeleteProduct(Product product)
        {
            if (product == null)
            {
                throw new Exception("Product object is null");
            }
            _dbContext.Products.Remove(product);
            _dbContext.SaveChanges();
        }

        public List<Product> GetAllProducts()
        {
            return _dbContext.Products.ToList();
        }

        public Product GetProduct(int productId)
        {
            if(productId < 0)
            {
                throw new Exception("Product id is negative");
            }
            return _dbContext.Products.FirstOrDefault(p => p.Id == productId);
        }

        public int UpdateProduct(Product product)
        {
            if (product == null)
            {
                throw new Exception("Product object is null");
            }
            _dbContext.Products.Update(product);
            _dbContext.SaveChanges();
            return product.Id;
        }
    }
}
