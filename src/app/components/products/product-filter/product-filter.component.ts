import {Component} from '@angular/core';
import {EventService} from '../../../services/event.service';
import {ProductActionTypes} from '../../../state/product.state';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {

  constructor(private eventDriverService:EventService) {
  }

  onGetAllProducts() {
    this.eventDriverService.publishEvent({type:ProductActionTypes.GET_ALL_PRODUCT})
  }

  onGetInStockProducts() {
    this.eventDriverService.publishEvent({type:ProductActionTypes.GET_IN_STOCK_PRODUCT})
  }

  onGetLowStockProducts() {
    this.eventDriverService.publishEvent({type:ProductActionTypes.GET_LOW_STOCK_PRODUCT})
  }

  onOutOfStockProduct() {
    this.eventDriverService.publishEvent({type:ProductActionTypes.GET_OUT_OF_STOCK_PRODUCT})
  }

  onSearch(keyword:any) {
    this.eventDriverService.publishEvent({type:ProductActionTypes.GET_PRODUCT_BY_NAME,payload:keyword})
  }
}
