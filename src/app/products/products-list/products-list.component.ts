import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  pageTitle = 'Products List';
  colorText = 'blue';
  sizeText = 2;
  showImg = false;
  _listFilter = '';
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[];
  products: Product[];

  constructor(private _productService: ProductService) { }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product list: ' + message;
  }

  toggleImg(): void {
    this.showImg = !this.showImg;
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = products;
      },
      error => this.errorMessage = error
    );
  }
}
