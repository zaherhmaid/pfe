import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private userUrl = 'http://localhost:8091/api/test/user';
  private createurUrl = 'http://localhost:8091/api/test/Createur';
  private adminUrl = 'http://localhost:8091/api/test/admin';
  private valideurUrl = 'http://localhost:8091/api/test/Valideur';
 
  constructor(private http: HttpClient) { 
  }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }
 
  getCreateurBoard(): Observable<string> {
    return this.http.get(this.createurUrl, { responseType: 'text' });
  }
 
  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  getValideurBoard(): Observable<string> {
    return this.http.get(this.valideurUrl, { responseType: 'text' });
  }
  
}