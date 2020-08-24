import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// menu desplegable

/* const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('#menu-button');
let localScroll = window.pageYOffset;

menuButton.addEventListener('click', showHide);

function showHide() {
  if(menu.classList.contains('is-active')){
    menu.classList.remove('is-active');
    header.classList.remove('is-active');
  } else{
    menu.classList.add('is-active');
    header.classList.add('is-active');
  }
} */
/*
window.onscroll = function() {
  const scroll = window.pageYOffset;
  if (localScroll >= scroll) {
    header.style.top = '0';
  } else {
    header.style.top = '-100px';
  }
  localScroll = scroll;
}
 */
