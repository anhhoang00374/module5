import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const listRoute: Routes = [{
  path: 'list', component: ProductListComponent
}, {
  path: 'create', component: ProductCreateComponent
}, {
  path: 'product/:id', component: ProductDetailComponent
}] ;

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(listRoute),
    CommonModule
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
