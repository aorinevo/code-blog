import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

$.extend($.easing, {
  easeInQuad: (x, t, b, c, d) => {
    return c*(t/=d)*t + b;
  }
});

function polarToCartesian( centerX, centerY, radius, angleInDegrees ) {
  var angleInRadians = ( angleInDegrees - 90 ) * Math.PI / 180.0;

  return {
      x: centerX + ( radius * Math.cos( angleInRadians ) ),
      y: centerY + ( radius * Math.sin( angleInRadians ) )
  };
}

function describeArc( x, y, radius, startAngle, endAngle ) {

  var start = polarToCartesian( x, y, radius, endAngle );
  var end = polarToCartesian( x, y, radius, startAngle );

  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
      "M", start.x, start.y,
      "A", radius, radius, 0, arcSweep, 0, end.x, end.y
  ].join( " " );

  return d;
}

@Component({  
  selector: 'ancb-svg-meter-example',
  templateUrl: './svg-meter-example.component.html',
  styleUrls: ['./svg-meter-example.component.css']
})
export class SvgMeterExampleComponent implements OnInit {  
  private svgMeta: Object = {
      radiusOuter: 100,
      radiusInner: 90,
      radius: 90,
      id: 'meter-arc',
      strokeWidth: 10
  };
  
  private pointsCounter: Number;
  
  private pathList: Object[] = [
    { 
      stroke: "#F1F1F1",        
      d: describeArc( 100, 100, 90, 0, 359.999 )
    },
    {
      whole: 5,
      part: 3,      
      stroke: "#A1A1A1"      
    }
  ];
  
  constructor() { 
  }

  ngOnInit() {   
        $( {
            'pointsAccumulated': 0,
            'remainingReviews': 5,
            'angle': 0
        } ).animate( {
            'pointsAccumulated': 3000,
            'remainingReviews': 2,
            'angle': 3000/5000*360
        }, {
            duration: 2000,   
            easing: "easeInQuad",         
            step: function ( now, fx ) {
                switch ( fx.prop ) {
                case 'angle':
                    this.pathList[1].d =  describeArc( this.svgMeta.radiusOuter, this.svgMeta.radiusOuter, this.svgMeta.radius, 0, now );                    
                    break;
                case 'pointsAccumulated':
                    this.pointsCounter = Math.ceil( now );
                    break;
                default:
                    $( '.meter-remaining-count' ).text( Math.floor( now ) );
                }
            }.bind(this)
        } );
    }      

}
