import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SvgMeterExampleComponent } from './svg-meter-example/svg-meter-example.component';
import { RadioHbsComponentsExampleComponent } from './radio-hbs-components-example/radio-hbs-components-example.component';
import { HomeComponent } from './home/home.component';
import { MeterComponent } from './meter/meter.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageNavbarComponent } from './page-navbar/page-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgMeterExampleComponent,
    RadioHbsComponentsExampleComponent,
    HomeComponent,    
    MeterComponent,    
    LeftNavComponent, PageHeaderComponent, PageFooterComponent, PageNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'svg-meter-example',
        component: SvgMeterExampleComponent
      },
      {
        path: 'radio-hbs-components-example',
        component: RadioHbsComponentsExampleComponent
      }
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
