import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = environment.url + '/rest';

  constructor(private http: HttpClient) { }

  logIn(){
    return this.http.get(`${this.API}/login`);
  }


}
