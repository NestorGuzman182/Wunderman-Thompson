import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  // menu desplegable

   showHide() {
     const header = document.querySelector('.header');
     const menu = document.querySelector('.menu');
     if (menu.classList.contains('is-active')) {
          menu.classList.remove('is-active');
          header.classList.remove('is-active');
        } else {
          menu.classList.add('is-active');
          header.classList.add('is-active');
        }

      }
}



