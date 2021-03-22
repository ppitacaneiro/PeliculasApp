import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  movies:Movie[];
  txtSearch:string;

  constructor(private activatedRoute:ActivatedRoute,private peliculasService:PeliculasService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.txtSearch = params.texto;
      
      this.peliculasService.searchMovies(this.txtSearch).subscribe(
        movies => {
          this.movies = movies;
        })
    });
  }

}
