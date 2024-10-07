import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {catchError, map, Observable, of, startWith} from 'rxjs';
import {DataStateEnum} from '../../state/state.model';
import {EventService} from '../../services/event.service';
import {ActionEvent, ProductActionTypes} from '../../state/product.state';
import {InventoryStatus} from '../../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products$: Observable<any> | null=null;
  protected readonly DataStateEnum = DataStateEnum;
  constructor(private productService: ProductService ,
              private eventDriverService:EventService) {

  }

  ngOnInit(): void {
    this.eventDriverService.sourceEventSubjectObservable.subscribe((event:ActionEvent)=>{
      this.onActionEvent(event);
    });
    this.products$ = this.getAllProducts();
  }

  getAllProducts(){
     return this.productService.getAllProducts()
      .pipe(
        map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError((err) => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  getProductsByStatus(status:InventoryStatus){
    return this.productService.getProductsByStatus(status)
      .pipe(
        map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError((err) => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  getProductsByName(search:any){
    return this.productService.getAllProducts()
      .pipe(
        map((data) => ({dataState: DataStateEnum.LOADED, data: data.filter(product => product.name.includes(search.keyword))})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError((err) => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  private onActionEvent(event: ActionEvent) {
    switch (event.type) {
      case ProductActionTypes.GET_ALL_PRODUCT:
        this.products$ = this.getAllProducts();
        break
      case ProductActionTypes.GET_IN_STOCK_PRODUCT:
        this.products$ = this.getProductsByStatus(InventoryStatus.IN_STOCK);
        break
      case ProductActionTypes.GET_LOW_STOCK_PRODUCT:
        this.products$ = this.getProductsByStatus(InventoryStatus.LOW_STOCK);
        break
      case ProductActionTypes.GET_OUT_OF_STOCK_PRODUCT:
        this.products$ = this.getProductsByStatus(InventoryStatus.OUT_OF_STOCK);
        break
      case ProductActionTypes.GET_PRODUCT_BY_NAME:
        this.products$ = this.getProductsByName(event.payload);
        break

    }
  }
}
