import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl:string = 'https://api.themoviedb.org/3/';
  private page:number = 1;

  constructor(private http:HttpClient) { }

  get params() {
    return {
      api_key : '55825859776de4072a855f9c7db4bda9',
      language : 'es-ES',
      page : this.page.toString()
    }
  }

  getCartelera():Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>(`${ this.baseUrl }movie/now_playing`,{
      params : this.params
    });
  }
}
