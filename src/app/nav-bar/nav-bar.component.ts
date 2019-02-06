import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isHomeActive = true;
  isTopicsActive = false;
  isUserActive = false;
  constructor() { }

  ngOnInit() {
  }

  isHome() {
    this.isHomeActive = true;
    this.isTopicsActive = false;
    this.isUserActive = false;
  }

  isTopics() {
    this.isHomeActive = false;
    this.isTopicsActive = true;
    this.isUserActive = false;
  }

  isUser() {
    this.isHomeActive = false;
    this.isTopicsActive = false;
    this.isUserActive = true;
  }
}
