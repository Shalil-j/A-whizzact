import { Component, OnInit,ViewChild, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-software-service',
  templateUrl: './software-service.component.html',
  styleUrls: ['./software-service.component.css']
})
export class SoftwareServiceComponent implements OnInit {

  constructor() { window.scrollTo(0, 0)}

  ngOnInit(): void {
  }
  @ViewChild('myVideo') myVideo: any;




  ngAfterViewInit() {
    this.myVideo.nativeElement.play();
  }
}
