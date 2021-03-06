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
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flash } from 'ng-animate';
import 'rxjs/add/operator/switchMap';
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productsService, router, activatedRoute, location) {
        this.productsService = productsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.products = new Array();
        this.pageTitle = "List of products";
        this.tempInfo = "Loading...";
        this.urlParam = "";
        this.isCategorySelected = false;
    }
    ;
    ProductComponent.prototype.ngOnInit = function () {
        this.detectUrlParam();
        if (this.location.isCurrentPathEqualTo("/products")) {
            this.downloadProducts();
            this.isCategorySelected = false;
        }
        else if (this.location.isCurrentPathEqualTo("/category/" + this.urlParam)) {
            this.downloadProductsOfCategory(this.urlParam);
            this.isCategorySelected = true;
        }
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
        });
    };
    ProductComponent.prototype.downloadProductsOfCategory = function (category) {
        var _this = this;
        this.productsService.getProductsOfCategory(category).subscribe(function (productsOfCategory) {
            if (productsOfCategory.length == 0) {
                _this.tempInfo = "Records not found";
            }
            else {
                _this.products = productsOfCategory;
            }
        });
    };
    ProductComponent.prototype.getProduct = function (id) {
        this.router.navigate(["/product-details", id]);
    };
    ProductComponent.prototype.updateProduct = function (id) {
        this.router.navigate(["/product-update", id]);
    };
    ProductComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.productsService.deleteProduct(id).subscribe(function () { return _this.products.splice(_this.products.findIndex(function (product) { return product.id == id; }), 1); });
    };
    ProductComponent.prototype.detectUrlParam = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.urlParam = params['category'];
        });
    };
    ProductComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductComponent.prototype.goHome = function () {
        this.router.navigate(["/home"]);
    };
    ProductComponent = __decorate([
        Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css'],
            animations: [
                trigger('flash', [transition('* => *', useAnimation(flash))])
            ]
        }),
        __metadata("design:paramtypes", [ProductsService,
            Router,
            ActivatedRoute,
            Location])
    ], ProductComponent);
    return ProductComponent;
}());
export { ProductComponent };
//# sourceMappingURL=product.component.js.map