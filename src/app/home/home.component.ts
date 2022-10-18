import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { TerminalService } from 'primeng/terminal';

declare let $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  serviceArray:any=[]

  constructor(private router: Router) {
    window.scroll(0,0);
    // this.serviceCarousel()
  }

  ngOnInit(): void {

  }

  // serviceCarousel(){
  //   this.serviceArray =[
  //     {
  //       "content":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati iure ipsa maiores natus praesentium suscipit harum incidunt sequi aut mollitia. Praesentium voluptates atque maxime cumque fuga! Delectus odio itaque dicta.",
  //       "svg_path":"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z",
  //       "client_name":"Ranjit",
  //       "company_name":"WhizzAct",
  //       "url":"",
  //     },
  //     {
  //       "content":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati iure ipsa maiores natus praesentium suscipit harum incidunt sequi aut mollitia. Praesentium voluptates atque maxime cumque fuga! Delectus odio itaque dicta.",
  //       "svg_path":"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z",
  //       "client_name":"Ranjit",
  //       "company_name":"WhizzAct",
  //       "url":"",
  //     },{
  //       "content":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati iure ipsa maiores natus praesentium suscipit harum incidunt sequi aut mollitia. Praesentium voluptates atque maxime cumque fuga! Delectus odio itaque dicta.",
  //       "svg_path":"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z",
  //       "client_name":"Ranjit",
  //       "company_name":"WhizzAct",
  //       "url":"",
  //     }
  //   ]
  // }

  Clients: OwlOptions = {
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
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
  }
// testimonal
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
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 2
    },
    940: {
      items: 3
    }
  },
  nav: false,
}

Services: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: true,
  dots: true,
  autoplay:true,
  autoplaySpeed:1000,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: false,
}

getEnter(e:any){
  if(e.target.value=="y" || e.target.value=="Y"){
    this.router.navigate(['/contact']);
  }else {
    $("#startInput").val("");
  }
}

}

