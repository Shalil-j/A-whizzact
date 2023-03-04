import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
