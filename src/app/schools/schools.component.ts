import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {
  navbarOpen = false;

  toggleNavbarsch() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}
