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
import { FlyoutTabComponent } from './flyout-tab/flyout-tab.component';
import { FlyoutTabExampleComponent } from './flyout-tab-example/flyout-tab-example.component';
import { D3Component } from './d3/d3.component';
import { D3ExampleComponent } from './d3-example/d3-example.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingsPageComponent } from './meetings-page/meetings-page.component';
import { ItermPreztoIdeComponent } from './iterm-prezto-ide/iterm-prezto-ide.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgMeterExampleComponent,
    RadioHbsComponentsExampleComponent,
    HomeComponent,    
    MeterComponent,    
    LeftNavComponent, PageHeaderComponent, PageFooterComponent, PageNavbarComponent, FlyoutTabComponent, FlyoutTabExampleComponent, D3Component, D3ExampleComponent, MeetingsComponent, MeetingsPageComponent, ItermPreztoIdeComponent
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
      },
      {
        path: 'flyout-tab-example',
        component: FlyoutTabExampleComponent
      },
      {
        path: 'd3-example',
        component: D3ExampleComponent
      },
      {
        path: 'meetings',
        component: MeetingsPageComponent
      },
      {
        path: 'iterm-prezto-ide',
        component: ItermPreztoIdeComponent
      }               
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
