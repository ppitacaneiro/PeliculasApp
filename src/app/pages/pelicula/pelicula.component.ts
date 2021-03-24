import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/interfaces/movie-detail';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  movie:MovieDetail;

  constructor(private activatedRouter:ActivatedRoute,
              private peliculaService:PeliculasService,
              private location:Location) { }

  ngOnInit(): void {
    const idMovie = this.activatedRouter.snapshot.params.id;
    console.log('idMovie => ' + idMovie);
    this.peliculaService.getMovieDetail(idMovie).subscribe(movie => {
      // console.log(movie);
      this.movie = movie;
    });
  }

  goBack() {
    this.location.back();
  }

}
