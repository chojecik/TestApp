import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CategoryType } from '../../models/enums/category-type.enum';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-create-update',
  templateUrl: './product-create-update.component.html',
  styleUrls: ['./product-create-update.component.css']
})
export class ProductCreateUpdateComponent implements OnInit {

    constructor(
        private productsService: ProductsService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) { };    

    pageTitle: string = "";
    urlParam: number = 0;
    product: Product = new Product();
    categories: any = CategoryType;
    isInEditMode: boolean = true;

    ngOnInit() {
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
    }

    downloadProduct() {
        this.productsService.getProduct(this.urlParam).subscribe(
            productFromDB => this.product = productFromDB,
            onError => console.log(onError)
        )
    }

    detectUrlParam() {
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.urlParam = params['id'];
            }
        );
    }

    onSubmit(product: Product) {
        if (this.location.isCurrentPathEqualTo("/product-add")) {
            this.productsService.addProduct(product).subscribe(
                onSuccess => console.log(onSuccess),
                onError => console.log(onError)
            );
        }
        else  {
            this.productsService.updateProduct(product).subscribe(
                onSuccess => console.log(onSuccess),
                onError => console.log(onError)
            );
        }

        this.router.navigate(["/products"]);
    }

    goBack() {
        this.location.back();
    }

    goHome() {
        this.router.navigate(["/home"]);
    }
}
