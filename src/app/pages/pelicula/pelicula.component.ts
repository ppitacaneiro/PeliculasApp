import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MovieDetail } from 'src/app/interfaces/movie-detail';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interfaces/credits-detail';

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
    this.peliculaService.getMovieDetail(idMovie).subscribe(movie => {
      if (!movie)
      {
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = movie;
    });
    
    this.peliculaService.getCast(idMovie).subscribe(casting => {
      this.cast = casting;
      console.log(this.cast);
    });
  }

  goBack() {
    this.location.back();
  }

}
