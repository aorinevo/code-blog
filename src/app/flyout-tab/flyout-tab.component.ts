import { Component, Input } from '@angular/core';

@Component({
  selector: 'ancb-flyout-tab',
  templateUrl: './flyout-tab.component.html',
  styleUrls: ['./flyout-tab.component.scss']
})
export class FlyoutTabComponent {

  @Input() tabText: string;
  
  panelOpen: boolean = false;

  togglePanel(){
    this.panelOpen = !this.panelOpen; 
  }

}
