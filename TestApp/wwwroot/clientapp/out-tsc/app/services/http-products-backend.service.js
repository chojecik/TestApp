var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ProductsBackendService } from '../services/products-backend.service';
import { Http, RequestOptions, Headers } from '@angular/http';
var HttpProductsBackendService = /** @class */ (function (_super) {
    __extends(HttpProductsBackendService, _super);
    function HttpProductsBackendService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.addProductUrl = "api/products/addproduct";
        _this.getAllProductsUrl = "api/products";
        _this.getProductUrl = "api/products/getproduct";
        _this.updateProductUrl = "api/products/updateproduct";
        _this.deleteProductUrl = "api/products/deleteproduct";
        var headersJson = new Headers({
            'Content-Type': 'application/json',
        });
        _this.jsonContentOptions = new RequestOptions({ headers: headersJson });
        return _this;
    }
    HttpProductsBackendService.prototype.addProduct = function (newProduct) {
        return this.http.post(this.addProductUrl, JSON.stringify(newProduct), this.jsonContentOptions).map(function (response) { return response.json(); });
    };
    HttpProductsBackendService.prototype.getAllProducts = function () {
        return this.http.get(this.getAllProductsUrl, this.jsonContentOptions).map(function (response) { return response.json(); });
    };
    HttpProductsBackendService.prototype.getProduct = function (productId) {
        return this.http.get(this.getProductUrl + productId, this.jsonContentOptions).map(function (response) { return response.json(); });
    };
    HttpProductsBackendService.prototype.updateProduct = function (updatedProduct) {
        return this.http.put(this.updateProductUrl, JSON.stringify(updatedProduct), this.jsonContentOptions).map(function (response) { return response.json(); });
    };
    HttpProductsBackendService.prototype.deleteProduct = function (productId) {
        return this.http.get(this.deleteProductUrl + productId, this.jsonContentOptions).map(function (response) { return response.json(); });
    };
    HttpProductsBackendService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Http])
    ], HttpProductsBackendService);
    return HttpProductsBackendService;
}(ProductsBackendService));
export { HttpProductsBackendService };
//# sourceMappingURL=http-products-backend.service.js.map