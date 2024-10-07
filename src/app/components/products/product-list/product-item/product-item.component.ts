import {Component, Input} from '@angular/core';
import {InventoryStatus, Product} from '../../../../model/product.model';
import {EventService} from '../../../../services/event.service';
import {ProductActionTypes} from '../../../../state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
  styles: [":host { display: contents; }"],
})
export class ProductItemComponent {

  @Input()
  product:Product | null=null;
  protected readonly InventoryStatus = InventoryStatus;

  constructor(private eventDrivenService:EventService) {

  }
  calculateClass(status:InventoryStatus):string{
    switch (status) {
      case InventoryStatus.OUT_OF_STOCK:
        return "btn-danger"
      case InventoryStatus.LOW_STOCK:
        return "btn-outline-warning"
      case InventoryStatus.IN_STOCK:
        return "btn-outline-success"
    }
  }

  calculateClassSpan(status:InventoryStatus):string{
    switch (status) {
      case InventoryStatus.OUT_OF_STOCK:
        return "bg-danger"
      case InventoryStatus.LOW_STOCK:
        return "bg-warning"
      case InventoryStatus.IN_STOCK:
        return "bg-success"
    }
  }

  onAddToBasket(product:Product){
    this.eventDrivenService.publishEvent({payload:product,type:ProductActionTypes.ADD_PRODUCT_TO_BASKET})
  }

}
