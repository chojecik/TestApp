using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestApp.Models.Entities;
using TestApp.Models.Interfaces;

namespace TestApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Products10Controller : ControllerBase
    {
        private readonly IProductRepository _repository;

        public Products10Controller(IProductRepository repository)
        {
            _repository = repository;
        }

        //GET: api/AllProducts
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            return new JsonResult(_repository.GetAllProducts());
        }

        //GET api/GetProduct/5
        [HttpGet("{productId}")]
        public IActionResult GetProduct(int productId)
        {
            return new JsonResult(_repository.GetProduct(productId));
        }

        [HttpPost]
        public IActionResult AddProduct([FromBody] Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repository.AddProduct(product);
            return new JsonResult(product.Id);
        }

        [HttpPut]
        public IActionResult UpdateProduct([FromBody] Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repository.UpdateProduct(product);
            return new JsonResult(product.Id);
        }

        [HttpGet("{productId}")]
        public IActionResult DeleteProduct(int productId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var product = _repository.GetProduct(productId);

            if(product == null)
            {
                return NotFound("Product with provided Id does not exist in the database");
            }

            _repository.DeleteProduct(product);
            return new JsonResult(product.Id);
        }
    }
}