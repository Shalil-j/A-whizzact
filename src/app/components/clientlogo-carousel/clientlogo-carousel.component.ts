import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientlogo-carousel',
  templateUrl: './clientlogo-carousel.component.html',
  styleUrls: ['./clientlogo-carousel.component.css']
})
export class ClientlogoCarouselComponent implements OnInit {

  clientLogo=[
    {img:'../../assets/icons/clients-logo/Aegis.png'},
    {img:'../../assets/icons/clients-logo/Agarwal-Logo-blue.png'},
    {img:'../../assets/icons/clients-logo/finance-logo.jpg'},
    {img:'../../assets/icons/clients-logo/ll.webp'},
    {img:'../../assets/icons/clients-logo/logo-dover_main.png'},
    {img:'../../assets/icons/clients-logo/reachhere.png'},
    {img:'../../assets/icons/clients-logo/taggd-brand-logo.svg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
