import { Component, OnInit } from '@angular/core';
// import anime from 'animejs/lib/anime.es.js';
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
  // const path = animejs.path('#lines path')


//   ngAfterViewInit(): void {
//   anime({
//     targets: '.line-drawing-demo .lines .el',
//     translateX: path('x'),
//     translateY: path('y'),
//     rotate: path('angle'),
//     easing: 'linear',
//     duration: 2000,
//     loop: true
//   });
// }
}
