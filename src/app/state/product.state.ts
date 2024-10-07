export enum ProductActionTypes{
  DECREMENT_PRODUCT_FROM_BASKET ,
  INCREMENT_PRODUCT_FROM_BASKET,
  ADD_PRODUCT_TO_BASKET ,
  DELETE_PRODUCT_FROM_BASKET,
  GET_ALL_PRODUCT,
  GET_IN_STOCK_PRODUCT,
  GET_LOW_STOCK_PRODUCT,
  GET_OUT_OF_STOCK_PRODUCT,
  GET_PRODUCT_BY_NAME
}

export interface ActionEvent{
  type:ProductActionTypes,
  payload?:any
}

export interface QuantityWrapper<T>{
  data:T,
  quantity:number | 1
}
