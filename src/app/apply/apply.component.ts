import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}
