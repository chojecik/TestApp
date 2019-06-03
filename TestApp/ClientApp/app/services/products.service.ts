import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductsBackendService } from '../services/products-backend.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    constructor(private productsBackendService: ProductsBackendService) { }

    addProduct(newProduct: Product): Observable<number> {
        return this.productsBackendService.addProduct(newProduct);
    }

    getProduct(productId: number): Observable<Product> {
        return this.productsBackendService.getProduct(productId);
    }

    getAllProducts(): Observable<Product[]> {
        return this.productsBackendService.getAllProducts();
    }

    getProductsOfCategory(category: string): Observable<Product> {
        return this.productsBackendService.getProductsOfCategory(category);
    }

    updateProduct(updatedProduct: Product): Observable<number> {
        return this.productsBackendService.updateProduct(updatedProduct);
    }

    deleteProduct(productId: number): Observable<number> {
        return this.productsBackendService.deleteProduct(productId);
    }
}
