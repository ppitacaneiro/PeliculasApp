import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute, private peliculaService:PeliculasService) { }

  ngOnInit(): void {
    const idMovie = this.activatedRouter.snapshot.params.id;
    console.log('idMovie => ' + idMovie);
    this.peliculaService.getMovieDetail(idMovie).subscribe(movie => {
      console.log(movie);
    });
  }

}
