import { Component, OnInit } from '@angular/core';
// import { HostListener } from '@angular/core';

// @HostListener('window:scroll', ['$event'])({

// onWindowScroll() {
//     let element = document.querySelector('.navbar') as HTMLElement;
//     if (window.pageYOffset > element.clientHeight) {
//       element.classList.add('bg-white');
//     } else {
//       element.classList.remove('bg-white');
//     }
//   }
// })
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
