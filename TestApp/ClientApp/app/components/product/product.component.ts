import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from 'ClientApp/app/models/product';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    constructor(
        private productsService: ProductsService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location) { };

    products: Array<Product> = new Array<Product>();
    pageTitle: string = "List of products";
    tempInfo: string = "Loading...";
    urlParam: string = "";

    ngOnInit() {
        this.detectUrlParam();

        if (this.location.isCurrentPathEqualTo("/products")) {
            this.downloadProducts();
        }
        else if (this.location.isCurrentPathEqualTo("/category/" + this.urlParam)) {
            this.downloadProductsOfCategory(this.urlParam);
        }
    }

    downloadProducts() {
        this.productsService.getAllProducts().subscribe(
            products => {
                if (products.length == 0) {
                    this.tempInfo = "Records not found";
                }
                else {
                    this.products = products;
                }
            },
            error => console.log(error)
        )
    }

    downloadProductsOfCategory(category: string) {
        this.productsService.getProductsOfCategory(category).subscribe(
            productsOfCategory => {
                if (productsOfCategory.length == 0) {
                    this.tempInfo = "Records not found";
                }
                else {
                    this.products = productsOfCategory;
                }
            },
            error => console.log(error)
        )
    }

    updateProduct(id: number) {
        this.router.navigate(["/product-update", id]);
    }

    deleteProduct(id: number) {

        this.productsService.deleteProduct(id).subscribe(
            () => this.products.splice(this.products.findIndex(product => product.id == id), 1),
            onError => console.log(onError)
        );
    }

    detectUrlParam() {
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.urlParam = params['category'];
            }
        )
    }

    goBack() {
        this.location.back();
    }
}
