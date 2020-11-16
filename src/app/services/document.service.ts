import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http' ;
import { Observable, from } from 'rxjs';
import { Document} from '../model/document'
import {FormBuilder , FormGroup , FormControl , ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  formData:Document;
  readonly rootURL = 'http://localhost:8091/api';
  list :Document[];

  constructor(private http: HttpClient) { }
  PostDocument(){
      
    return this.http.post(this.rootURL+ '/Document' ,this.formData);

  }
  PutDocument(){
      
    return this.http.put(this.rootURL+ '/Document/'+ this.formData.iddocument ,this.formData);

  }
  DeleteDocument(iddocument){
      
    return this.http.delete(this.rootURL+ '/Document/'+ iddocument );

  }
  refreshList(){
    
    this.http.get(this.rootURL + '/Document')
    .toPromise()
    .then(res=> this.list = res as Document[] );
  }
}
