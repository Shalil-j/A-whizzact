import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from './contact/contact.component';
import { WhyWhizzactComponent } from './why-whizzact/why-whizzact.component';
import { IndustryComponent } from './industry/industry.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
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
  {
path:"company",
component: CompanyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
