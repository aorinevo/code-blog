import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'ancb-d3-example',
  templateUrl: './d3-example.component.html',
  styleUrls: ['./d3-example.component.css']
})
export class D3ExampleComponent implements OnInit {

  constructor() { 
  console.log('d3 object: ', d3);
  }

  ngOnInit() {
  }

}
