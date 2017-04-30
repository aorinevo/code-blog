import { Component } from '@angular/core';

@Component({
  selector: 'ancb-flyout-tab-example',
  templateUrl: './flyout-tab-example.component.html',
  styleUrls: ['./flyout-tab-example.component.scss']
})
export class FlyoutTabExampleComponent {
  
  meter: Object =     {
    radiusOuter: 45,
    radiusInner: 35,
    part: 4,
    whole: 5,
    strokeWhole: '#F1F1F1',
    strokePart: '#A1A1A1',
    strokeWidth: 10
  };  
  
  reanimate: boolean;
  
  tabText: string = "BECOME A TOP REVIEWER";
  
  test(event){
    this.reanimate = event.value;
  }

}
