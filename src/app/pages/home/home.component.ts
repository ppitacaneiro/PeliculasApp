import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies:Movie[] = [];

  constructor(private peliculasService:PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getCartelera().subscribe(response => {
      // console.log(response)
      this.movies = response.results;
    });
  }

}
