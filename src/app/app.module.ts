import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { WhyWhizzactComponent } from './why-whizzact/why-whizzact.component';
import { IndustryComponent } from './industry/industry.component';
import { CompanyComponent } from './company/company.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MobileappServiceComponent } from './services/mobileapp-service/mobileapp-service.component';
import { WebappServiceComponent } from './services/webapp-service/webapp-service.component';
import { DevopsServiceComponent } from './services/devops-service/devops-service.component';
import { CloudServiceComponent } from './services/cloud-service/cloud-service.component';
import { SoftwareServiceComponent } from './services/software-service/software-service.component';
import { MarketingServiceComponent } from './services/marketing-service/marketing-service.component';
import { GraphicdesignServiceComponent } from './services/graphicdesign-service/graphicdesign-service.component';
import { UxuiServiceComponent } from './services/uxui-service/uxui-service.component';
import { ClientlogoCarouselComponent } from './components/clientlogo-carousel/clientlogo-carousel.component';
import { TestimonalComponent } from './components/testimonal/testimonal.component';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { TerminalModule } from 'primeng/terminal';
import { DragScrollModule } from 'ngx-drag-scroll';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    ContactComponent,
    WhyWhizzactComponent,
    IndustryComponent,
    CompanyComponent,
    MobileappServiceComponent,
    WebappServiceComponent,
    DevopsServiceComponent,
    CloudServiceComponent,
    SoftwareServiceComponent,
    MarketingServiceComponent,
    GraphicdesignServiceComponent,
    UxuiServiceComponent,
    ClientlogoCarouselComponent,
    TestimonalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    // SlickCarouselModule
    // TerminalModule
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
