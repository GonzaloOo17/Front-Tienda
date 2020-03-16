import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = environment.url + '/rest';

  constructor(private http: HttpClient) { }

  logIn(email: string, password: string){
    return this.http.get(`${this.API}/login/${email}/${password}`);
  }

  logInPost(user:any){
    return this.http.post(`${this.API}/login`, user);
  }

  getProfile(idUser:string){
    return this.http.get(`${this.API}/get_profile_user/${idUser}`);
  }
  

  register(user:any){
    return this.http.post(`${this.API}/register`, user);
  }


}
