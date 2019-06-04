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
import { Product } from '../../models/product';
import { CategoryType } from '../../models/enums/category-type.enum';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
var ProductCreateUpdateComponent = /** @class */ (function () {
    function ProductCreateUpdateComponent(productsService, router, activatedRoute, location) {
        this.productsService = productsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.pageTitle = "";
        this.urlParam = 0;
        this.product = new Product();
        this.categories = CategoryType;
        this.isInEditMode = true;
    }
    ;
    ProductCreateUpdateComponent.prototype.ngOnInit = function () {
        this.detectUrlParam();
        if (this.location.isCurrentPathEqualTo("/product-add")) {
            this.pageTitle = "Add new product";
        }
        else if (this.location.isCurrentPathEqualTo("/product-update/" + this.urlParam)) {
            this.pageTitle = "Update product";
            this.isInEditMode = true;
            this.downloadProduct();
        }
        else {
            this.pageTitle = "Product details";
            this.isInEditMode = false;
            this.downloadProduct();
        }
    };
    ProductCreateUpdateComponent.prototype.downloadProduct = function () {
        var _this = this;
        this.productsService.getProduct(this.urlParam).subscribe(function (productFromDB) { return _this.product = productFromDB; });
    };
    ProductCreateUpdateComponent.prototype.detectUrlParam = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.urlParam = params['id'];
        });
    };
    ProductCreateUpdateComponent.prototype.onSubmit = function (product) {
        if (this.location.isCurrentPathEqualTo("/product-add")) {
            this.productsService.addProduct(product).subscribe();
        }
        else {
            this.productsService.updateProduct(product).subscribe();
        }
        this.router.navigate(["/products"]);
    };
    ProductCreateUpdateComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductCreateUpdateComponent.prototype.goHome = function () {
        this.router.navigate(["/home"]);
    };
    ProductCreateUpdateComponent = __decorate([
        Component({
            selector: 'app-product-create-update',
            templateUrl: './product-create-update.component.html',
            styleUrls: ['./product-create-update.component.css']
        }),
        __metadata("design:paramtypes", [ProductsService,
            Router,
            ActivatedRoute,
            Location])
    ], ProductCreateUpdateComponent);
    return ProductCreateUpdateComponent;
}());
export { ProductCreateUpdateComponent };
//# sourceMappingURL=product-create-update.component.js.map