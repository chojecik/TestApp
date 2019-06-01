var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ProductsBackendService } from '../services/products-backend.service';
var ProductsService = /** @class */ (function () {
    function ProductsService(productsBackendService) {
        this.productsBackendService = productsBackendService;
    }
    ProductsService.prototype.addProduct = function (newProduct) {
        return this.productsBackendService.addProduct(newProduct);
    };
    ProductsService.prototype.getProduct = function (productId) {
        return this.productsBackendService.getProduct(productId);
    };
    ProductsService.prototype.getAllProducts = function () {
        return this.productsBackendService.getAllProducts();
    };
    ProductsService.prototype.updateProduct = function (updatedProduct) {
        return this.productsBackendService.updateProduct(updatedProduct);
    };
    ProductsService.prototype.deleteProduct = function (productId) {
        return this.productsBackendService.deleteProduct(productId);
    };
    ProductsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ProductsBackendService])
    ], ProductsService);
    return ProductsService;
}());
export { ProductsService };
//# sourceMappingURL=products.service.js.map