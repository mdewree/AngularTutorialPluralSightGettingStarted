import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ConvertToSpacesPipe } from '../pipes/convert-to-spaces.pipe';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-details/product-detail.guard';

const productRoutes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe,
    StarRatingComponent
  ]
})
export class ProductModule { }
