import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-webapp-service',
  templateUrl: './webapp-service.component.html',
  styleUrls: ['./webapp-service.component.css']
})
export class WebappServiceComponent implements OnInit {

  constructor() { window.scrollTo(0, 0)}

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


//   const slider = document.querySelector('.web-dev-div');
//   let mouseDown = false;
//   let startX, scrollLeft;

//   let startDragging = function (e) {
//       mouseDown = true;
//       startX = e.pageX - slider.offsetLeft;
//       scrollLeft = slider.scrollLeft;
//   };
// let stopDragging = function (event) {
// mouseDown = false;
// };

// slider.addEventListener('mousemove', (e) => {
//   e.preventDefault();
//   if(!mouseDown) { return; }
//   const x = e.pageX - slider.offsetLeft;
//   const scroll = x - startX;
//   slider.scrollLeft = scrollLeft - scroll;
// });

// // Add the event listeners
// slider.addEventListener('mousedown', startDragging, false);
// slider.addEventListener('mouseup', stopDragging, false);
// slider.addEventListener('mouseleave', stopDragging, false);
}
