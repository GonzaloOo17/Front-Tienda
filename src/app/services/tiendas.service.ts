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
    return this.http.get(`${this.API}/list_tienda/${keyword}`);
  }

  getTienda(id: string){
    return this.http.get(`${this.API}/get_tienda/${id}`);
  }

  getTiendaUser(id: string){
    return this.http.get(`${this.API}/get_tienda_user/${id}`);
  }

  getTiendasCategoria(id: string){
    return this.http.get(`${this.API}/list_tiendas_categoria/${id}`);
  }

  listAnuncios(){
    return this.http.get(`${this.API}/list_anuncios`);
  }

  listCategorias(){
    return this.http.get(`${this.API}/categorias`);
  }
}
