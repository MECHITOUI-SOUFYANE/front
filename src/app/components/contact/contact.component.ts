import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact.service';
import {catchError, map, Observable, of, startWith} from 'rxjs';
import {AppDataState, DataStateEnum} from '../../state/state.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  productFormGroup:FormGroup=new FormGroup({})
  submitted:boolean=false;
  state:Observable<any> |null=null;
  constructor(private fb:FormBuilder,private contactService:ContactService) {
  }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      email:["",[Validators.required , Validators.email]],
      message:["",[Validators.required,Validators.maxLength(300)]],
    });
  }

  onSubmit(contact:any){
    this.submitted = true;
    if(this.productFormGroup.invalid)return;
     this.state = this.contactService.sendMessage(contact)
      .pipe(
        map(data => ({dataState:DataStateEnum.SEND,message:"Demande de contact envoyée avec succès"})),
        catchError(err => of({dataState:DataStateEnum.ERROR , message:err.message}))
      );
  }

  protected readonly DataStateEnum = DataStateEnum;
}
