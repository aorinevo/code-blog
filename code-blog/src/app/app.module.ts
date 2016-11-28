import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SvgMeterExampleComponent } from './svg-meter-example/svg-meter-example.component';
import { RadioHbsComponentsExampleComponent } from './radio-hbs-components-example/radio-hbs-components-example.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MeterComponent } from './meter/meter.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgMeterExampleComponent,
    RadioHbsComponentsExampleComponent,
    HomeComponent,
    HeaderComponent,
    MeterComponent
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
