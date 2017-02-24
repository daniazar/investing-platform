import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import { Category } from '../../objects/icategory'

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  public categories: Category[];
  constructor(categoryService: CategoryService) {
    this.categories = categoryService.getCategories();
   }

  ngOnInit() {
    
  }

}
