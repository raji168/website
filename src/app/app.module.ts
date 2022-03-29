import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './menubar/product/product.component';
import { AboutUsComponent } from './menubar/about-us/about-us.component';
import { ServiceComponent } from './menubar/service/service.component';
import { PortfolioComponent } from './menubar/portfolio/portfolio.component';
import { CareersComponent } from './menubar/careers/careers.component';
import { ContactUsComponent } from './menubar/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomePageComponent } from './home-page/home-page.component';
import { TechnologyComponent } from './menubar/technology/technology.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    AboutUsComponent,
    ServiceComponent,
    PortfolioComponent,
    CareersComponent,
    ContactUsComponent,
    MenubarComponent, FooterComponent, HomePageComponent, TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    IvyCarouselModule,CarouselModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
