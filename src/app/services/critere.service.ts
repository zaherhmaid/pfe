import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http' ;
import { Observable, from } from 'rxjs';
import { Critere} from '../model/critere'
import {FormBuilder , FormGroup , FormControl , ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CritereService {

  formData:Critere;
  readonly rootURL = 'http://localhost:8091/api';
  list :Critere[];

  constructor(private http: HttpClient) { }
  PostCritere(){
      
    return this.http.post(this.rootURL+ '/Critere' ,this.formData);

  }
  PutCritere(){
      
    return this.http.put(this.rootURL+ '/Critere/'+ this.formData.idcritere ,this.formData);

  }
  DeleteCritere(idcritere){
      
    return this.http.delete(this.rootURL+ '/Critere/'+ idcritere );

  }
  getCritere(idcritere: number): Observable<any> {
    return this.http.get(`${this.rootURL}/${idcritere}`);
  }
  refreshList(){
    
    this.http.get(this.rootURL + '/Critere')
    .toPromise()
    .then(res=> this.list = res as Critere[] );
  }
}
