var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productsService, router) {
        this.productsService = productsService;
        this.router = router;
        this.products = new Array();
        this.pageTitle = "List of products";
        this.tempInfo = "Loading...";
    }
    ;
    ProductComponent.prototype.ngOnInit = function () {
        this.downloadProducts();
    };
    ProductComponent.prototype.downloadProducts = function () {
        var _this = this;
        this.productsService.getAllProducts().subscribe(function (products) {
            if (products.length == 0) {
                _this.tempInfo = "Records not found";
            }
            else {
                _this.products = products;
            }
        }, function (error) { return console.log(error); });
    };
    ProductComponent.prototype.updateProduct = function (id) {
    };
    ProductComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        debugger;
        this.productsService.deleteProduct(id).subscribe(function () { return _this.products.splice(_this.products.findIndex(function (product) { return product.id == id; }), 1); }, function (onError) { return console.log(onError); });
    };
    ProductComponent = __decorate([
        Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        }),
        __metadata("design:paramtypes", [ProductsService,
            Router])
    ], ProductComponent);
    return ProductComponent;
}());
export { ProductComponent };
//# sourceMappingURL=product.component.js.map