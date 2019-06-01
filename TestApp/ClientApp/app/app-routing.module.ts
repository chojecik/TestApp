import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ProductComponent } from '../app/components/product/product.component';
import { AppComponent } from '../app/components/app.component';

const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'products', component: ProductComponent },
    { path: '**', redirectTo: 'app' },
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
