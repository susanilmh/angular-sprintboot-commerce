import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  constructor(private router: Router) {
    
  }
  ngOnInit() {}

  doSearch(value: string) {
    console.log('search keyword')
    console.log(value);
    this.router.navigateByUrl(`/search/${value}`);
    // Navigate to the product list with the search keyword
  }

}
