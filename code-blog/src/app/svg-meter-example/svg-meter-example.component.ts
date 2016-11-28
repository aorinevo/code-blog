import { Component, OnInit } from '@angular/core';

@Component({  
  selector: 'ancb-svg-meter-example',
  templateUrl: './svg-meter-example.component.html',
  styleUrls: ['./svg-meter-example.component.css']
})
export class SvgMeterExampleComponent implements OnInit {       
  meters: Object[] =[
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
  
  constructor() { 
  }

  ngOnInit() {   
    
  }      

}
