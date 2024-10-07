import {Component, Input} from '@angular/core';
import {ProductActionTypes, QuantityWrapper} from '../../state/product.state';
import {Product} from '../../model/product.model';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent{

  @Input()
  products:QuantityWrapper<Product>[] = [];
  constructor(private eventDrivenService:EventService) {
  }
  onRemoveProductFromBasket(id:number){
    this.eventDrivenService.publishEvent({payload:id,type:ProductActionTypes.DELETE_PRODUCT_FROM_BASKET})
  }

  onIncrementQuantityProduct(wrapper:QuantityWrapper<Product>){
    this.eventDrivenService.publishEvent({payload:wrapper,type:ProductActionTypes.INCREMENT_PRODUCT_FROM_BASKET})
  }

  onDecrementProductFromBasket(wrapper:QuantityWrapper<Product>){
    this.eventDrivenService.publishEvent({payload:wrapper,type:ProductActionTypes.DECREMENT_PRODUCT_FROM_BASKET});
  }
}
