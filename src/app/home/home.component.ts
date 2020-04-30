import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showHideSideBar: boolean = false;

  onShowSideBarChange(_showHideSideBar){
    this.showHideSideBar = _showHideSideBar;
  }
}
