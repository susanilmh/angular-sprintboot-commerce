import { Component } from '@angular/core';
import { Productservice } from '../../services/productservice';
import { Product } from '../../common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  
  products: Product[] = [];
  currentCategoryId: number=1;
  searchMode: boolean = false;
  constructor(private productService: Productservice, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(() => {
    this.listProducts();
    })
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }
  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        console.log('Search results fetched successfully');
        console.log(data);
        this.products = data;
      }
    )
  }
   handleListProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      
    } else {
      this.currentCategoryId = 1; // Default category ID if not provided
    }
    
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        console.log('Product list fetched successfully');
        console.log(data)
        this.products = data;
      },
      error => {
        console.error('Error fetching product list', error);
      }
    );
  }
   }
    


