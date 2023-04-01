import { Component, OnInit,ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-cloud-service',
  templateUrl: './cloud-service.component.html',
  styleUrls: ['./cloud-service.component.css']
})
export class CloudServiceComponent implements OnInit {

  slideConfig={
    slidesToShow:1,
    slidesToScroll:1,
    dots:true
  }


  image=[
    {img:"../../assets/image/markus-winkler-bfuy8aRCRt4-unsplash.jpg"},
    {img: "../../assets/image/bernd-dittrich-eCc7FjMoR74-unsplash.jpg"},
    {img:"../../assets/image/markus-winkler-bfuy8aRCRt4-unsplash.jpg"},
    {img: "../../assets/image/bernd-dittrich-eCc7FjMoR74-unsplash.jpg"}


  ]

  constructor() {window.scrollTo(0, 0)}

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
