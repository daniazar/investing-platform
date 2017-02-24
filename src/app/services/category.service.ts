import { Injectable } from '@angular/core';
import { Category } from '../objects/icategory'
@Injectable()
export class CategoryService {

  categories: Category[];
  constructor() {
    this.categories = [];
    this.categories.push(new Category('Tecnologia'));
    this.categories.push(new Category('Incumentaria'));
    this.categories.push(new Category('Transporte'));
    this.categories.push(new Category('Alimentos'));
    this.categories.push(new Category('Hospedage'));
    this.categories.push(new Category('Propiedades'));
     }

  new 
  getCategories () {
    return this.categories;
  }
}
