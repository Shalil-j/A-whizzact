import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from './contact/contact.component';
import { WhyWhizzactComponent } from './why-whizzact/why-whizzact.component';
import { IndustryComponent } from './industry/industry.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
  },
  {
    path:"about",
    component: AboutComponent,
  },
  {
    path:"contact",
    component: ContactComponent,
  },
  {
    path:"why-whizzact",
    component: WhyWhizzactComponent,
  },
  {
    path:"industry",
    component: IndustryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
