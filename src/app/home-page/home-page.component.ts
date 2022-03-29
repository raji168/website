import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // imagesForSlider = [
  //   { path: '../assets/image/slide1image.jpg' },
  //   { path: '../assets/image/slide2image.jpg' },
  //   { path: '../assets/image/slide3image.jpg' },
  // ];

  images = [
    { path: '../assets/image/logo/indoshell.png' },
    { path: '../assets/image/logo/kgisl-logo.png' },
    { path: '../assets/image/logo/sandfits.jpg' },
    { path: '../assets/image/logo/svic-logo.gif' },
    { path: '../assets/image/logo/uniqueshell.jpg' },
    // { path: '../assets/image/logo/indoshell.png' },
    // { path: '../assets/image/logo/kgisl-logo.png' },
    // { path: '../assets/image/logo/sandfits.jpg' },
    // { path: '../assets/image/logo/svic-logo.gif' },
    // { path: '../assets/image/logo/uniqueshell.jpg' }
    
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
