import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare let $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  serviceArray:any=[]


  constructor(private router: Router) {
    // window.scroll(1000,1000);

  }

  ngOnInit(): void {

    $("#mobile").removeClass('service-inactive');
    $("#mobile").addClass('service-active');
    $("#mobile_btn").addClass('service-btn-active-t');

    $('.paroller-example').paroller({
      factorXs: 0.1,
      factorSm: 0.1,
      factorMd: -0.4,
      factorLg: -0.5,
      factorXl: -0.6,
      factor: -0.4,
      type: 'foreground',
      direction: 'horizontal'
      });

  }
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





callActiveService(str:any){
  if(str=='mobile'){

    $("#mobile").addClass('service-active');
    $("#web").addClass('service-inactive');
    $("#software").addClass('service-inactive');
    $("#devops").addClass('service-inactive');
    $("#cloud").addClass('service-inactive');
    $("#marketing").addClass('service-inactive');
    $("#graphic").addClass('service-inactive');
    $("#uxui").addClass('service-inactive');
    // --------------
    $("#mobile").removeClass('service-inactive');
    $("#web").removeClass('service-active');
    $("#software").removeClass('service-active');
    $("#devops").removeClass('service-active');
    $("#cloud").removeClass('service-active');
    $("#marketing").removeClass('service-active');
    $("#graphic").removeClass('service-active');
    $("#uxui").removeClass('service-active');
    // ------borders--------------------
    $("#mobile_btn").addClass('service-btn-active-t');
    $("#web_btn").removeClass('service-btn-active-t');
    $("#software_btn").removeClass('service-btn-active-t');
    $("#devops_btn").removeClass('service-btn-active-t');
    $("#cloud_btn").removeClass('service-btn-active-b');
    $("#marketing_btn").removeClass('service-btn-active-b');
    $("#graphic_btn").removeClass('service-btn-active-b');
    $("#uxui_btn").removeClass('service-btn-active-b');






  } else if(str=='web'){

    $("#mobile").addClass('service-inactive');
    $("#web").addClass('service-active');
    $("#software").addClass('service-inactive');
    $("#devops").addClass('service-inactive');
    $("#cloud").addClass('service-inactive');
    $("#marketing").addClass('service-inactive');
    $("#graphic").addClass('service-inactive');
    $("#uxui").addClass('service-inactive');
    // --------------
    $("#mobile").removeClass('service-active');
    $("#web").removeClass('service-inactive');
    $("#software").removeClass('service-active');
    $("#devops").removeClass('service-active');
    $("#cloud").removeClass('service-active');
    $("#marketing").removeClass('service-active');
    $("#graphic").removeClass('service-active');
    $("#uxui").removeClass('service-active');
    // -------borders------
    $("#mobile_btn").removeClass('service-btn-active-t');
    $("#web_btn").addClass('service-btn-active-t');
    $("#software_btn").removeClass('service-btn-active-t');
    $("#devops_btn").removeClass('service-btn-active-t');
    $("#cloud_btn").removeClass('service-btn-active-b');
    $("#marketing_btn").removeClass('service-btn-active-b');
    $("#graphic_btn").removeClass('service-btn-active-b');
    $("#uxui_btn").removeClass('service-btn-active-b');


  } else if(str=='software'){

    $("#mobile").addClass('service-inactive');
    $("#web").addClass('service-inactive');
    $("#software").addClass('service-active');
    $("#devops").addClass('service-inactive');
    $("#cloud").addClass('service-inactive');
    $("#marketing").addClass('service-inactive');
    $("#graphic").addClass('service-inactive');
    $("#uxui").addClass('service-inactive');
    // --------------
    $("#mobile").removeClass('service-active');
    $("#web").removeClass('service-active');
    $("#software").removeClass('service-inactive');
    $("#devops").removeClass('service-active');
    $("#cloud").removeClass('service-active');
    $("#marketing").removeClass('service-active');
    $("#graphic").removeClass('service-active');
    $("#uxui").removeClass('service-active');
    // ---------borders-------
    $("#mobile_btn").removeClass('service-btn-active-t');
    $("#web_btn").removeClass('service-btn-active-t');
    $("#software_btn").addClass('service-btn-active-t');
    $("#devops_btn").removeClass('service-btn-active-t');
    $("#cloud_btn").removeClass('service-btn-active-b');
    $("#marketing_btn").removeClass('service-btn-active-b');
    $("#graphic_btn").removeClass('service-btn-active-b');
    $("#uxui_btn").removeClass('service-btn-active-b');

  } else if(str=='devops'){

    $("#mobile").addClass('service-inactive');
    $("#web").addClass('service-inactive');
    $("#software").addClass('service-inactive');
    $("#devops").addClass('service-active');
    $("#cloud").addClass('service-inactive');
    $("#marketing").addClass('service-inactive');
    $("#graphic").addClass('service-inactive');
    $("#uxui").addClass('service-inactive');
    // --------------
    $("#mobile").removeClass('service-active');
    $("#web").removeClass('service-active');
    $("#software").removeClass('service-active');
    $("#devops").removeClass('service-inactive');
    $("#cloud").removeClass('service-active');
    $("#marketing").removeClass('service-active');
    $("#graphic").removeClass('service-active');
    $("#uxui").removeClass('service-active');
 // ---------borders-------
    $("#mobile_btn").removeClass('service-btn-active-t');
    $("#web_btn").removeClass('service-btn-active-t');
    $("#software_btn").removeClass('service-btn-active-t');
    $("#devops_btn").addClass('service-btn-active-t');
    $("#cloud_btn").removeClass('service-btn-active-b');
    $("#marketing_btn").removeClass('service-btn-active-b');
    $("#graphic_btn").removeClass('service-btn-active-b');
    $("#uxui_btn").removeClass('service-btn-active-b');
  } else if(str=='cloud'){

    $("#mobile").addClass('service-inactive');
    $("#web").addClass('service-inactive');
    $("#software").addClass('service-inactive');
    $("#devops").addClass('service-inactive');
    $("#cloud").addClass('service-active');
    $("#marketing").addClass('service-inactive');
    $("#graphic").addClass('service-inactive');
    $("#uxui").addClass('service-inactive');
    // --------------
    $("#mobile").removeClass('service-active');
    $("#web").removeClass('service-active');
    $("#software").removeClass('service-active');
    $("#devops").removeClass('service-active');
    $("#cloud").removeClass('service-inactive');
    $("#marketing").removeClass('service-active');
    $("#graphic").removeClass('service-active');
    $("#uxui").removeClass('service-active');
 // ---------borders-------
    $("#mobile_btn").removeClass('service-btn-active-t');
    $("#web_btn").removeClass('service-btn-active-t');
    $("#software_btn").removeClass('service-btn-active-t');
    $("#devops_btn").removeClass('service-btn-active-t');
    $("#cloud_btn").addClass('service-btn-active-b');
    $("#marketing_btn").removeClass('service-btn-active-b');
    $("#graphic_btn").removeClass('service-btn-active-b');
    $("#uxui_btn").removeClass('service-btn-active-b');
  } else if(str=='marketing'){

    $("#mobile").addClass('service-inactive');
    $("#web").addClass('service-inactive');
    $("#software").addClass('service-inactive');
    $("#devops").addClass('service-inactive');
    $("#cloud").addClass('service-inactive');
    $("#marketing").addClass('service-active');
    $("#graphic").addClass('service-inactive');
    $("#uxui").addClass('service-inactive');
    // --------------
    $("#mobile").removeClass('service-active');
    $("#web").removeClass('service-active');
    $("#software").removeClass('service-active');
    $("#devops").removeClass('service-active');
    $("#cloud").removeClass('service-active');
    $("#marketing").removeClass('service-inactive');
    $("#graphic").removeClass('service-active');
    $("#uxui").removeClass('service-active');
 // ---------borders-------
    $("#mobile_btn").removeClass('service-btn-active-t');
    $("#web_btn").removeClass('service-btn-active-t');
    $("#software_btn").removeClass('service-btn-active-t');
    $("#devops_btn").removeClass('service-btn-active-t');
    $("#cloud_btn").removeClass('service-btn-active-b');
    $("#marketing_btn").addClass('service-btn-active-b');
    $("#graphic_btn").removeClass('service-btn-active-b');
    $("#uxui_btn").removeClass('service-btn-active-b');
  } else if(str=='graphic'){

    $("#mobile").addClass('service-inactive');
    $("#web").addClass('service-inactive');
    $("#software").addClass('service-inactive');
    $("#devops").addClass('service-inactive');
    $("#cloud").addClass('service-inactive');
    $("#marketing").addClass('service-inactive');
    $("#graphic").addClass('service-active');
    $("#uxui").addClass('service-inactive');
    // --------------
    $("#mobile").removeClass('service-active');
    $("#web").removeClass('service-active');
    $("#software").removeClass('service-active');
    $("#devops").removeClass('service-active');
    $("#cloud").removeClass('service-active');
    $("#marketing").removeClass('service-active');
    $("#graphic").removeClass('service-inactive');
    $("#uxui").removeClass('service-active');
 // ---------borders-------
    $("#mobile_btn").removeClass('service-btn-active-t');
    $("#web_btn").removeClass('service-btn-active-t');
    $("#software_btn").removeClass('service-btn-active-t');
    $("#devops_btn").removeClass('service-btn-active-t');
    $("#cloud_btn").removeClass('service-btn-active-b');
    $("#marketing_btn").removeClass('service-btn-active-b');
    $("#graphic_btn").addClass('service-btn-active-b');
    $("#uxui_btn").removeClass('service-btn-active-b');
  } else if(str=='uxui'){

    $("#mobile").addClass('service-inactive');
    $("#web").addClass('service-inactive');
    $("#software").addClass('service-inactive');
    $("#devops").addClass('service-inactive');
    $("#cloud").addClass('service-inactive');
    $("#marketing").addClass('service-inactive');
    $("#graphic").addClass('service-inactive');
    $("#uxui").addClass('service-active');
    // --------------
    $("#mobile").removeClass('service-active');
    $("#web").removeClass('service-active');
    $("#software").removeClass('service-active');
    $("#devops").removeClass('service-active');
    $("#cloud").removeClass('service-active');
    $("#marketing").removeClass('service-active');
    $("#graphic").removeClass('service-active');
    $("#uxui").removeClass('service-inactive');
 // ---------borders-------
    $("#mobile_btn").removeClass('service-btn-active-t');
    $("#web_btn").removeClass('service-btn-active-t');
    $("#software_btn").removeClass('service-btn-active-t');
    $("#devops_btn").removeClass('service-btn-active-t');
    $("#cloud_btn").removeClass('service-btn-active-b');
    $("#marketing_btn").removeClass('service-btn-active-b');
    $("#graphic_btn").removeClass('service-btn-active-b');
    $("#uxui_btn").addClass('service-btn-active-b');
  }
}

getEnter(e:any){
  if(e.target.value=="y" || e.target.value=="Y"){
    this.router.navigate(['/contact']);
  }else {
    $("#startInput").val("");
  }
}


}

