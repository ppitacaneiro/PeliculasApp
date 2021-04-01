import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MovieDetail } from 'src/app/interfaces/movie-detail';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interfaces/credits-detail';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  movie:MovieDetail;
  cast:Cast;

  constructor(private activatedRouter:ActivatedRoute,
              private peliculaService:PeliculasService,
              private location:Location,
              private router:Router) { }

  ngOnInit(): void {
    const idMovie = this.activatedRouter.snapshot.params.id;
    console.log('idMovie => ' + idMovie);

    combineLatest([
      this.peliculaService.getCast(idMovie),
      this.peliculaService.getMovieDetail(idMovie)
    ]).subscribe(([cast,movie]) => {
        if (!movie) {
          this.router.navigateByUrl('/home');
          return;
        }
        this.movie = movie;
        this.cast = cast;
    });
  }

  goBack() {
    this.location.back();
  }

}
