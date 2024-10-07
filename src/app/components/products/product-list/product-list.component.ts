import {Component, Input} from '@angular/core';
import {Product} from '../../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input()
  products:Product[] = [];

  constructor() {
  }

}
