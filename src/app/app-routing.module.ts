import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './menubar/about-us/about-us.component';
import { CareersComponent } from './menubar/careers/careers.component';
import { ContactUsComponent } from './menubar/contact-us/contact-us.component';
import { PortfolioComponent } from './menubar/portfolio/portfolio.component';
import { ProductComponent } from './menubar/product/product.component';
import { ServiceComponent } from './menubar/service/service.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TechnologyComponent } from './menubar/technology/technology.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'product', component: ProductComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'technology', component: TechnologyComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
