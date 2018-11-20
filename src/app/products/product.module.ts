import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ConvertToSpacesPipe } from '../pipes/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-details/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

const productRoutes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes),
    SharedModule
  ],
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe
  ]
})
export class ProductModule { }
