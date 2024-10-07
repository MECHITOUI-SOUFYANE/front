import { Pipe, PipeTransform } from '@angular/core';
import {InventoryStatus} from '../model/product.model';

@Pipe({
  name: 'status'
})
export class InventoryStatusPipe implements PipeTransform {

  transform(value: InventoryStatus): string {
    switch (value) {
      case InventoryStatus.IN_STOCK:
        return "in stock"
      case InventoryStatus.LOW_STOCK.toString():
        return "low stock"
      case InventoryStatus.OUT_OF_STOCK.toString():
        return "out of stock"
      default:
        return "out of stock"
    }
  }

}
