import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http' ;
import { Observable, from } from 'rxjs';
import { Admin} from '../model/admin'
import {FormBuilder , FormGroup , FormControl , ReactiveFormsModule,Validators }
from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  formData:Admin;
  readonly rootURL = 'http://localhost:8091/api';
  list :Admin[];

  constructor(private http: HttpClient) { }
  PostAdmin(){
      
    return this.http.post(this.rootURL+ '/Admin' ,this.formData);

  }
  PutAdmin(){
      
    return this.http.put(this.rootURL+ '/Admin/'+ this.formData.idadmin ,this.formData);

  }
  DeleteAdmin(idadmin){
      
    return this.http.delete(this.rootURL+ '/Admin/'+ idadmin );

  }
  refreshList(){
    
    this.http.get(this.rootURL + '/Admin')
    .toPromise()
    .then(res=> this.list = res as Admin[] );
  }
}
