import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uxui-service',
  templateUrl: './uxui-service.component.html',
  styleUrls: ['./uxui-service.component.css']
})
export class UxuiServiceComponent implements OnInit {

  constructor() { window.scrollTo(0, 0)}

  ngOnInit(): void {
  }

}
