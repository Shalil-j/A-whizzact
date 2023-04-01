import { Component, OnInit,ViewChild, AfterViewInit  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-mobileapp-service',
  templateUrl: './mobileapp-service.component.html',
  styleUrls: ['./mobileapp-service.component.css']
})
export class MobileappServiceComponent implements OnInit {
  constructor() { window.scrollTo(0, 0) }

  ngOnInit(): void {
    this.ngAfterViewInit() 
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
