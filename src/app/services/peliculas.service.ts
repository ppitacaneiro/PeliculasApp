import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  getCartelera():Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>(' https://api.themoviedb.org/3/movie/now_playing?api_key=55825859776de4072a855f9c7db4bda9&language=es-ES&page=1');
  }
}
