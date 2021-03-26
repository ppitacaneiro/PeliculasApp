import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieDetail } from '../interfaces/movie-detail';
import { CreditDetail,Cast } from '../interfaces/credits-detail';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl:string = 'https://api.themoviedb.org/3/';
  private page:number = 1;
  public loading = false;

  constructor(private http:HttpClient) { }

  get params() {
    return {
      api_key : '55825859776de4072a855f9c7db4bda9',
      language : 'es-ES',
      page : this.page.toString()
    }
  }

  getCartelera():Observable<CarteleraResponse> {

    this.loading = true;
    console.log('loading data from API');
    
    return this.http.get<CarteleraResponse>(`${ this.baseUrl }movie/now_playing`,{
      params : this.params
    }).pipe(
      tap(() => {
        this.loading = false;
        this.page += 1;
      })
    );
  }

  searchMovies(txtSearch:string):Observable<Movie[]> {

    const params = {...this.params, page:'1', query:txtSearch};

    return this.http.get<CarteleraResponse>(`${ this.baseUrl }search/movie`, {
      params
    }).pipe(
      map(response => response.results)
    );
  }

  getMovieDetail(id:string) {
    return this.http.get<MovieDetail>(`${this.baseUrl}/movie/${id}`,{
      params : this.params
    }).pipe(
      catchError(err => of(null))
    )
  }

  getCast(id:string):Observable<Cast> {
    return this.http.get<CreditDetail>(`${this.baseUrl}/movie/${id}/credits`,{
      params : this.params
    }).pipe(
      map(response => response.cast),
      catchError(err => of(null)),
    )
  }
}
