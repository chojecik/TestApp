import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ProductComponent } from '../app/components/product/product.component';
import { AppComponent } from '../app/components/app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { ProductCreateUpdateComponent } from '../app/components/product-create-update/product-create-update.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'product-add', component: ProductCreateUpdateComponent },
    { path: 'product-update/:id', component: ProductCreateUpdateComponent },
    { path: '**', redirectTo: 'home' },
]

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      RouterModule.forRoot(routes, {
          preloadingStrategy: PreloadAllModules
      })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
