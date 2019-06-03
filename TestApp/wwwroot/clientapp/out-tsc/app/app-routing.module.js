var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ProductComponent } from '../app/components/product/product.component';
import { AppComponent } from '../app/components/app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { ProductCreateUpdateComponent } from '../app/components/product-create-update/product-create-update.component';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'product-add', component: ProductCreateUpdateComponent },
    { path: 'product-update/:id', component: ProductCreateUpdateComponent },
    { path: 'category/:category', component: ProductComponent },
    { path: '**', redirectTo: 'home' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                RouterModule.forRoot(routes, {
                    preloadingStrategy: PreloadAllModules
                })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map