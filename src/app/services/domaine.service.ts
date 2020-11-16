import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http' ;
import { Observable, from } from 'rxjs';
import { Domaine} from '../model/domaine'
import {FormBuilder , FormGroup , FormControl , ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  formData:Domaine;
  readonly rootURL = 'http://localhost:8091/api';
  list :Domaine[];

  constructor(private http: HttpClient) { }
  PostDomaine(){
      
    return this.http.post(this.rootURL+ '/Domaine' ,this.formData);

  }
  PutDomaine(){
      
    return this.http.put(this.rootURL+ '/Domaine/'+ this.formData.iddomaine ,this.formData);

  }
  DeleteDomaine(iddomaine){
      
    return this.http.delete(this.rootURL+ '/Domaine/'+ iddomaine );

  }
  refreshList(){
    
    this.http.get(this.rootURL + '/Domaine')
    .toPromise()
    .then(res=> this.list = res as Domaine[] );
  }
}
