import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http' ;
import { Observable, from } from 'rxjs';
import { Profil} from '../model/profil'
import {FormBuilder , FormGroup , FormControl , ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  formData:Profil;
  readonly rootURL = 'http://localhost:8091/api';
  list :Profil[];

  constructor(private http: HttpClient) { }
  PostProfil(){
      
    return this.http.post(this.rootURL+ '/Profil' ,this.formData);

  }
  PutProfil(){
      
    return this.http.put(this.rootURL+ '/Profil/'+ this.formData.idprofil ,this.formData);

  }
  DeleteProfil(idprofil){
      
    return this.http.delete(this.rootURL+ '/Profil/'+ idprofil );

  }
  refreshList(){
    
    this.http.get(this.rootURL + '/Profil')
    .toPromise()
    .then(res=> this.list = res as Profil[] );
  }
}
