import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiendasService {

  private API = environment.url + '/rest';

  constructor(private http: HttpClient) { }


  listTiendas(){
    return this.http.get(`${this.API}/list_tiendas`);
  }

  searchTiendas(keyword: string){
    return this.http.get(`${this.API}/list_by_name`);
  }

  listAnuncios(){
    return this.http.get(`${this.API}/list_anuncios`);
  }

}
