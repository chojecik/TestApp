import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { Product } from 'ClientApp/app/models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    constructor(
        private productsService: ProductsService,
        private router: Router) { };

    products: Array<Product> = new Array<Product>();
    pageTitle: string = "List of products";
    tempInfo: string = "Loading...";

    ngOnInit() {
        this.downloadProducts();
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

    updateProduct(id: number) {

    }

    deleteProduct(id: number) {
        this.productsService.deleteProduct(id).subscribe(
            () => this.products.splice(this.products.findIndex(product => product.id == id), 1),
            onError => console.log(onError)
        );
    }
}
