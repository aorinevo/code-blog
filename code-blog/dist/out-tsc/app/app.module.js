var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
import { LeftNavComponent } from './left-nav/left-nav.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            SvgMeterExampleComponent,
            RadioHbsComponentsExampleComponent,
            HomeComponent,
            HeaderComponent,
            MeterComponent,
            LeftNavComponent
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
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map