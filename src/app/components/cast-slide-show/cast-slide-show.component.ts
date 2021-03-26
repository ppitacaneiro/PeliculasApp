import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { Cast } from '../../interfaces/credits-detail';

@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.css']
})
export class CastSlideShowComponent implements OnInit, AfterViewInit {

  @Input() cast:Cast[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('cast1 => ');
    console.log(this.cast);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      freeMode: true,
      spaceBetween: 15,
      slidesPerView: 5.3
    });
  }

}
