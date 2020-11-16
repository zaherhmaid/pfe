import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http' ;
import { Observable, from } from 'rxjs';
import { Checklist} from '../model/checklist'
import {FormBuilder , FormGroup , FormControl , ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  formData:Checklist;
  readonly rootURL = 'http://localhost:8091/api';
  list :Checklist[];
  private user:any;

  constructor(private http: HttpClient) { }
  PostChecklist(){
      
    return this.http.post(this.rootURL+ '/Checklist' ,this.formData);

  }
  PutChecklist(idchecklist: number, value: any): Observable<Object> {
    return this.http.put(`${this.rootURL}/${idchecklist}`, value);
  }
  DeleteChecklist(idchecklist){
      
    return this.http.delete(this.rootURL+ '/Checklist/'+ idchecklist );

  }
  refreshList(){
    
    this.http.get(this.rootURL + '/Checklist')
    .toPromise()
    .then(res=> this.list = res as Checklist[] );
  }


  getchecklist(idchecklist: number): Observable<any> {
    return this.http.get(`${this.rootURL}/${idchecklist}`);
  }
}
