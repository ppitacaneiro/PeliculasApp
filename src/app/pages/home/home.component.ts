import { HostListener } from '@angular/core';
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
  public moviesSlideShow:Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const posActualScroll = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const maximoScroll = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if (posActualScroll > maximoScroll) {
      if (this.peliculasService.loading) { return; }
      this.peliculasService.getCartelera().subscribe(resp => {
        this.movies.push(...resp.results);
      });
    }
  }

  constructor(private peliculasService:PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getCartelera().subscribe(response => {
      // console.log(response)
      this.movies = response.results;
      this,this.moviesSlideShow = response.results;
    });
  }

}
