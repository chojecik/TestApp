var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app/components/app.component';
import { ProductComponent } from '../app/components/product/product.component';
import { ProductsService } from '../app/services/products.service';
import { ProductsBackendService } from './services/products-backend.service';
import { HttpProductsBackendService } from './services/http-products-backend.service';
import { CategoryConvertPipe } from './pipes/category-convert.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductCreateUpdateComponent } from './components/product-create-update/product-create-update.component';
import { KeysPipe } from './pipes/keys.pipe';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                ProductComponent,
                CategoryConvertPipe,
                HomeComponent,
                ProductCreateUpdateComponent,
                KeysPipe
            ],
            imports: [
                HttpModule,
                BrowserModule,
                FormsModule,
                AppRoutingModule
            ],
            providers: [
                ProductsService,
                { provide: ProductsBackendService, useClass: HttpProductsBackendService }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map