import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ancb-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() mytitle: string;
  
  constructor() { }

  ngOnInit() {
    console.log(this.mytitle);
  }

}
