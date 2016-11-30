import { Component } from '@angular/core';

@Component({
  selector: 'ancb-flyout-tab-example',
  templateUrl: './flyout-tab-example.component.html',
  styleUrls: ['./flyout-tab-example.component.scss']
})
export class FlyoutTabExampleComponent {
  
  meter: Object =     {
    radiusOuter: 100,
    radiusInner: 80,
    part: 3000,
    whole: 5000,
    strokeWhole: '#ddd',
    strokePart: 'red',
    strokeWidth: 20
  };  
  
  tabText: string = "BECOME A TOP REVIEWER";

}
