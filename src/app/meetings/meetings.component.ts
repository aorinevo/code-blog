import { Component, Input } from '@angular/core';

@Component({
  selector: 'ancb-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent  {
  
  @Input() meeting: Object;

}
