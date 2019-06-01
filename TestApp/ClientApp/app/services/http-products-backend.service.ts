import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from '../models/product';
import { ProductsBackendService } from '../services/products-backend.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpProductsBackendService extends ProductsBackendService {
    private addProductUrl: string = "api/products/addproduct";
    private getAllProductsUrl: string = "api/products";
    private getProductUrl: string = "api/products/getproduct";
    private updateProductUrl: string = "api/products/updateproduct";
    private deleteProductUrl: string = "api/products/deleteproduct";

    private jsonContentOptions: RequestOptions;

    constructor(private http: Http) {
        super();
        let headersJson: Headers = new Headers({
            'Content-Type': 'application/json',
        });
        this.jsonContentOptions = new RequestOptions({ headers: headersJson })
    }

    addProduct(newProduct: Product): Observable<number> {
        return this.http.post(this.addProductUrl, JSON.stringify(newProduct), this.jsonContentOptions).map(response => response.json() as number);
    }
    getAllProducts(): Observable<Product[]> {
        return this.http.get(this.getAllProductsUrl, this.jsonContentOptions).map(response => response.json());
    }
    getProduct(productId: number): Observable<Product> {
        return this.http.get(this.getProductUrl + productId, this.jsonContentOptions).map(response => response.json());
    }
    updateProduct(updatedProduct: Product): Observable<number> {
        return this.http.put(this.updateProductUrl, JSON.stringify(updatedProduct), this.jsonContentOptions).map(response => response.json() as number);
    }
    deleteProduct(productId: number): Observable<number> {
        return this.http.get(this.deleteProductUrl + productId, this.jsonContentOptions).map(response => response.json());
    }
}
