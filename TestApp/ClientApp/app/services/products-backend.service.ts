import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export abstract class ProductsBackendService {

    abstract addProduct(newProduct: Product): Observable<number>;

    abstract getAllProducts(): Observable<Product[]>;

    abstract getProduct(productId: number): Observable<Product>;

    abstract updateProduct(updatedProduct: Product): Observable<number>;

    abstract deleteProduct(productId: number): Observable<number>;

}
