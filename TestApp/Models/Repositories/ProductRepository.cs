﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Globalization;
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

        public async Task AddProduct(Product product)
        {
            if(product == null)
            {
                throw new Exception("Product object is null");
            }

            _dbContext.Products.Add(product);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteProduct(Product product)
        {
            if (product == null)
            {
                throw new Exception("Product object is null");
            }
            _dbContext.Products.Remove(product);
            await _dbContext.SaveChangesAsync();
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return _dbContext.Products;
        }

        public IEnumerable<Product> GetAllProducts(string category)
        {
            if(category != null && category != "")
            {
                category = char.ToUpper(category[0]) + category.Substring(1);
            }
            var categoryType = Enum.Parse(typeof(CategoryType), category);
            return _dbContext.Products.Where(p => p.Category.Equals(categoryType)).ToList();
        }

        public async Task<Product> GetProduct(int productId)
        {
            if(productId < 0)
            {
                throw new Exception("Product id is negative");
            }
            return await _dbContext.Products.FindAsync(productId);
        }

        public async Task<bool> UpdateProduct(Product product)
        {
            if (product == null)
            {
                throw new Exception("Product object is null");
            }

            if (ProductExists(product.Id))
            {
                _dbContext.Entry(product).State = EntityState.Modified;
                await _dbContext.SaveChangesAsync();
                return true;
            }

            return false;

        }

        private bool ProductExists(int id)
        {
            return _dbContext.Products.Any(e => e.Id == id);
        }
    }
}
