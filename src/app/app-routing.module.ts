import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from './contact/contact.component';
import { WhyWhizzactComponent } from './why-whizzact/why-whizzact.component';
import { IndustryComponent } from './industry/industry.component';
import { CompanyComponent } from './company/company.component';
import { MobileappServiceComponent } from './services/mobileapp-service/mobileapp-service.component';
import { WebappServiceComponent } from './services/webapp-service/webapp-service.component';
import { SoftwareServiceComponent } from './services/software-service/software-service.component';
import { CloudServiceComponent } from './services/cloud-service/cloud-service.component';
import { DevopsServiceComponent } from './services/devops-service/devops-service.component';
import { MarketingServiceComponent } from './services/marketing-service/marketing-service.component';
import { GraphicdesignServiceComponent } from './services/graphicdesign-service/graphicdesign-service.component';
import { UxuiServiceComponent } from './services/uxui-service/uxui-service.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "why-whizzact",
    component: WhyWhizzactComponent,
  },
  {
    path: "industry",
    component: IndustryComponent,
  },
  {
    path: "company",
    component: CompanyComponent,
  },
  {
    path: "mobile-service",
    component: MobileappServiceComponent,
  },
  {
    path: "webapp-service",
    component: WebappServiceComponent,
  },
  {
    path: "software-service",
    component: SoftwareServiceComponent,
  },
  {
    path: "devops-service",
    component: DevopsServiceComponent,
  },
  {
    path: "cloud-service",
    component: CloudServiceComponent,
  },
  {
    path: "marketing-service",
    component: MarketingServiceComponent,
  },
  {
    path: "graphic-service",
    component: GraphicdesignServiceComponent,
  },
  {
    path: "uxui-service",
    component: UxuiServiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
