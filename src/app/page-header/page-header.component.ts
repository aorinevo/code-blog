import { Component, Input } from '@angular/core';

@Component({
  selector: 'ancb-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {

  @Input() mytitle: string;

}
