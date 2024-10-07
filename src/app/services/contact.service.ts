import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactModel} from '../model/contact.model';
import {enviromment} from '../enviromments/enviromment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private host:string=enviromment.host + "contacts/"

  constructor(private http:HttpClient) { }


  sendMessage(contact:ContactModel):Observable<any>{
    return this.http.post(this.host,contact);
  }


}
