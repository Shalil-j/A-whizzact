import { Component, OnInit,ViewChild, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-mobileapp-service',
  templateUrl: './mobileapp-service.component.html',
  styleUrls: ['./mobileapp-service.component.css']
})
export class MobileappServiceComponent implements OnInit {
  constructor() { window.scrollTo(0, 0) }

  ngOnInit(): void {
  }
  @ViewChild('myVideo') myVideo: any;

  ngAfterViewInit() {
    this.myVideo.nativeElement.play();
  }
}
