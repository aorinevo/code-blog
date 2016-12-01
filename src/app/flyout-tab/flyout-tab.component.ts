import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ancb-flyout-tab',
  templateUrl: './flyout-tab.component.html',
  styleUrls: ['./flyout-tab.component.scss']
})
export class FlyoutTabComponent {

  @Input() tabText: string;
  @Output() panelOpenChange = new EventEmitter<Object>();
  
  panelOpen: boolean = false;

  togglePanel(){
    this.panelOpen = !this.panelOpen; 
    this.panelOpenChange.emit({
      value: this.panelOpen
    });
  }

}
