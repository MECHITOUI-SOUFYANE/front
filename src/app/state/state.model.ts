export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR,
  SEND
}

export interface AppDataState<T>{
  dataState?:DataStateEnum;
  data?:T;
  errorMessage?:string;
}
