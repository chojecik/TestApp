import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
@NgModule({
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
      BrowserAnimationsModule,
      FormsModule,
      AppRoutingModule
  ],
    providers: [
        ProductsService,
        { provide: ProductsBackendService, useClass: HttpProductsBackendService }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
