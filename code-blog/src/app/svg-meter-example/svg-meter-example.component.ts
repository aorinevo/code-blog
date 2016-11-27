import { Component, OnInit } from '@angular/core';
import { Meter } from './meter';
import * as $ from 'jquery';

@Component({
  selector: 'ancb-svg-meter-example',
  templateUrl: './svg-meter-example.component.html',
  styleUrls: ['./svg-meter-example.component.css']
})
export class SvgMeterExampleComponent implements OnInit {  
  
  constructor() { 
  }

  ngOnInit() {
    $('#svg-meter-container').append(new Meter({
      radiusOuter: 100,
      radiusInner: 80,      
      path1Stroke: '#000000',
      path2Stroke: '#000000'
    }).render());
  }

}
