import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {enviromment} from '../enviromments/enviromment';
import {Product} from '../model/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  private host:string = enviromment.host;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.host = enviromment.host;
  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"products")
  }

  getProductsByStatus(status:string):Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"products?inventoryStatus="+status)
  }


  // @deprecated
  getProductsByName(name:string):Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"products?name_like="+name)
  }
}
