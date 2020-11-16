import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http' ;
import { Valideur} from '../model/valideur'
import {FormBuilder , FormGroup , FormControl , ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValideurService {

  formData:Valideur;
  readonly rootURL = 'http://localhost:8091/api';
  list :Valideur[];

  constructor(private http: HttpClient) { }
  PostValideur(){
      
    return this.http.post(this.rootURL+ '/Valideur' ,this.formData);

  }
  PutValideur(){
      
    return this.http.put(this.rootURL+ '/Valideur/'+ this.formData.idvalideur ,this.formData);

  }
  DeleteValideur(idvalideur){
      
    return this.http.delete(this.rootURL+ '/Valideur/'+ idvalideur );

  }
  refreshList(){
    
    this.http.get(this.rootURL + '/Valideur')
    .toPromise()
    .then(res=> this.list = res as Valideur[] );
  }
}
