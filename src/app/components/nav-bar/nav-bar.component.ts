import {Component, OnInit} from '@angular/core';
import {ActionEvent, ProductActionTypes, QuantityWrapper} from '../../state/product.state';
import {Product} from '../../model/product.model';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{

  products:QuantityWrapper<Product>[] = [];
  numberOfProduct:number = 0;

  constructor(private eventDriverService:EventService) {
  }

  ngOnInit(): void {
    this.eventDriverService.sourceEventSubjectObservable.subscribe((event:ActionEvent)=>{
      this.onActionEvent(event);
    });
  }

  private addProductToBasket(product: Product) {
    const wrapper = this.products.find(wrapper => wrapper.data.id === product.id);
    if (wrapper) {
      ++wrapper.quantity;
    } else {
      this.products.push({ data: product, quantity: 1 });
    }
    ++this.numberOfProduct;
  }

  private removeProductFromBasket(productId: number) {
    const wrapper = this.products.find(wrapper => wrapper.data.id === productId);
    if (wrapper) {
      this.numberOfProduct -= wrapper.quantity;
      this.products = this.products.filter(wrapper => wrapper.data.id !== productId);
    }
  }

  private updateProductQuantity(productId: number, change: number) {
    const wrapper = this.products.find(wrapper => wrapper.data.id === productId);
    if (wrapper) {
      wrapper.quantity += change;
      this.numberOfProduct += change;
      if (wrapper.quantity <= 0) {
        this.products = this.products.filter(wrapper => wrapper.data.id !== productId);
      }
    }
  }


  private onActionEvent(event$: ActionEvent) {
    switch (event$.type) {
      case ProductActionTypes.ADD_PRODUCT_TO_BASKET:
        this.addProductToBasket(event$.payload);
        break;

      case ProductActionTypes.DELETE_PRODUCT_FROM_BASKET:
        this.removeProductFromBasket(event$.payload);
        break;

      case ProductActionTypes.DECREMENT_PRODUCT_FROM_BASKET:
        this.updateProductQuantity(event$.payload.data.id, -1);
        break;

      case ProductActionTypes.INCREMENT_PRODUCT_FROM_BASKET:
        this.updateProductQuantity(event$.payload.data.id, 1);
        break;
    }
  }

}
