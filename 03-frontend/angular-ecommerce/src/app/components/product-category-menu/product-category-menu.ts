import { Component } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { Productservice } from '../../services/productservice';

@Component({
  selector: 'app-product-category-menu',
  standalone: false,
  templateUrl: './product-category-menu.html',
  styleUrl: './product-category-menu.css'
})
export class ProductCategoryMenu {

  productCategory: ProductCategory[] = [];

  constructor(private productService: Productservice){}

  ngOnInit() {
    this.listProductCategories();
  }
  
  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        if(data) {
        console.log('Category fetched successfully');
        console.log("Data: "+ data);
        console.log('Product Categories: ', JSON.stringify(data));
        this.productCategory = data;
      } else {
        console.error('No categories found');
      }      }
    );
  }

}
