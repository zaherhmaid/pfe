import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http' ;
import { Observable, from } from 'rxjs';
import { Createur} from '../model/createur'
import {FormBuilder , FormGroup , FormControl , ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateurService {

  formData:Createur;
  readonly rootURL = 'http://localhost:8091/api';
  list :Createur[];

  constructor(private http: HttpClient) { }
  PostCreateur(){
      
    return this.http.post(this.rootURL+ '/Createur' ,this.formData);

  }
  PutCreateur(){
      
    return this.http.put(this.rootURL+ '/Createur/'+ this.formData.idcreateur ,this.formData);

  }
  DeleteCreateur(idcreateur){
      
    return this.http.delete(this.rootURL+ '/Createur/'+ idcreateur );

  }
  refreshList(){
    
    this.http.get(this.rootURL + '/Createur')
    .toPromise()
    .then(res=> this.list = res as Createur[] );
  }
}
