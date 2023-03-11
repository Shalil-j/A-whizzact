import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientlogo-carousel',
  templateUrl: './clientlogo-carousel.component.html',
  styleUrls: ['./clientlogo-carousel.component.css']
})
export class ClientlogoCarouselComponent implements OnInit {

  clientLogo=[
   
    {img:'../../assets/icons/clients-logo/Agarwal-Logo-blue.png'},
    {img:'../../assets/icons/clients-logo/AICL-logo.jpg'},
    {img:'../../assets/icons/clients-logo/finance-logo.jpg'},
    {img:'../../assets/icons/clients-logo/ll.webp'},
    {img:'../../assets/icons/clients-logo/logo-dover_main.png'},
    {img:'../../assets/icons/clients-logo/taggd-brand-logo.svg'},
    {img:'../../assets/icons/clients-logo/A1sathi.png'},
    {img:'../../assets/icons/clients-logo/Shubham-nagir.png'},
    {img:'http://www.whizzactsolutions.com/assets/img/boru.jpg'},
    {img:'http://www.whizzactsolutions.com/assets/img/acw.jpg'},
    // {img:'http://www.whizzactsolutions.com/assets/img/labtest.jpg'},
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
