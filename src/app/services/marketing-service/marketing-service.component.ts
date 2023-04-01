import { Component, OnInit,ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import * as anime from 'animejs';

declare var animejs: any;

@Component({
  selector: 'app-marketing-service',
  templateUrl: './marketing-service.component.html',
  styleUrls: ['./marketing-service.component.css']
})

// const anime = require('animejs');
export class MarketingServiceComponent implements OnInit {

  constructor() {window.scrollTo(0, 0) }

  ngOnInit(): void {
  }
  Clientlogo: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplaySpeed:1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items:5
      }
    },
    nav: false,
  }

  @ViewChild('myVideo') myVideo: any;

  ngAfterViewInit() {
    this.myVideo.nativeElement.play();
  }
}
