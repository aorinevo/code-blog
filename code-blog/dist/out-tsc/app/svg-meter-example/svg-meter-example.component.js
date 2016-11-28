var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var SvgMeterExampleComponent = (function () {
    function SvgMeterExampleComponent() {
        this.meters = [
            {
                radiusOuter: 100,
                radiusInner: 80,
                part: 3000,
                whole: 5000,
                strokeWhole: 'gray',
                strokePart: 'red',
                strokeWidth: 20
            },
            {
                radiusOuter: 100,
                radiusInner: 95,
                part: 2000,
                whole: 5000,
                strokeWhole: 'gray',
                strokePart: 'blue',
                strokeWidth: 5
            },
            {
                radiusOuter: 100,
                radiusInner: 90,
                part: 4000,
                whole: 5000,
                strokeWhole: 'gray',
                strokePart: 'green',
                strokeWidth: 10
            }
        ];
    }
    SvgMeterExampleComponent.prototype.ngOnInit = function () {
    };
    return SvgMeterExampleComponent;
}());
SvgMeterExampleComponent = __decorate([
    Component({
        selector: 'ancb-svg-meter-example',
        templateUrl: './svg-meter-example.component.html',
        styleUrls: ['./svg-meter-example.component.css']
    }),
    __metadata("design:paramtypes", [])
], SvgMeterExampleComponent);
export { SvgMeterExampleComponent };
//# sourceMappingURL=../../../../src/app/svg-meter-example/svg-meter-example.component.js.map