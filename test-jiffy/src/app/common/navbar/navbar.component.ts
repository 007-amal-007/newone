import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@HostListener('window:scroll', ['$event'])
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//variabel to check scrolled or not
 isScrolled = false;

@HostListener("window:scroll")
scrollEvent() {
    window.pageYOffset >= 20 ? (this.isScrolled = true) : (this.isScrolled = false);
}


}
