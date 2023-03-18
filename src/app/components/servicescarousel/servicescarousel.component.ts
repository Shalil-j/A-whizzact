import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-servicescarousel',
  templateUrl: './servicescarousel.component.html',
  styleUrls: ['./servicescarousel.component.css']
})
export class ServicescarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Testimonal: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    lazyLoad:true,
    autoplay:true,
    rewind:true,
    autoplaySpeed:1000,
    navSpeed: 700,
    navText: ['<i class="bi bi-arrow-left-circle-fill"></i>', '<i class="bi bi-arrow-right-circle-fill"></i>'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true,
  }

}
