import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StarRatingComponent],
  exports: [StarRatingComponent, CommonModule, FormsModule]
})
export class SharedModule { }
