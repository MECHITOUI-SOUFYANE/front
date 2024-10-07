import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ActionEvent} from '../state/product.state';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  sourceEventSubject : Subject<ActionEvent> = new Subject();
  sourceEventSubjectObservable=this.sourceEventSubject.asObservable();

  constructor() { }

  publishEvent(event:ActionEvent){
    this.sourceEventSubject.next(event);
  }
}
