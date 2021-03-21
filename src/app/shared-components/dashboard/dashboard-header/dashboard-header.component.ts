import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  constructor() { }
  showMe:boolean=false

  ngOnInit(): void {
  }
  tootgleTag(){
    this.showMe = !this.showMe
  }

}
