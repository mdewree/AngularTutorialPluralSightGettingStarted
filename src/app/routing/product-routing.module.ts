import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from '../products/products-list/products-list.component';
import { ProductDetailGuard } from '../products/product-details/product-detail.guard';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';

const productRoutes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
