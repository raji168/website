import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'website';
  routeSubcription: Subscription;
  
  constructor ( private router: Router) {

  }

  ngOnInit() {
    this.routeSubcription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    })
  }

  ngOnDestroy() {
    if (this.routeSubcription) {
      this.routeSubcription.unsubscribe();
    }
  }
}
