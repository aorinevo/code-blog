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
    var config = {
        whole: 5,
        part: 3,
        radiusOuter: 100,
        radiusInner: 90,
        svgId: 'meter-arc',
        path1Stroke: '#F1F1F1',
        path2Stroke: '#A1A1A1'      
    };
            
    
    var meter = new Meter( config ),
        CONFIG = meter.CONFIG();
        
    $('#svg-meter-container').append( meter.render());
    $.easing.easeInQuad = function (x, t, b, c, d) {
      return c*(t/=d)*t + b;
    };
    if ( CONFIG.part > 0 ) {
        $( {
            'reviewCountVal': 0,
            'remainingReviews': 5,
            'angle': 0
        } ).animate( {
            'reviewCountVal': 3,
            'remainingReviews': 2,
            'angle': CONFIG.meterAngle
        }, {
            duration: 2000,
            easing: "easeInQuad",
            step: function ( now, fx ) {
                switch ( fx.prop ) {
                case 'angle':
                    $( '#' + CONFIG.svgId + '-1' )[ 0 ].setAttribute( "d", meter.describeArc( CONFIG.x, CONFIG.y, CONFIG.radius, 0, now ) );
                    break;
                case 'reviewCountVal':
                    $( '.meter-count' ).text( Math.ceil( now ) );
                    break;
                default:
                    $( '.meter-remaining-count' ).text( Math.floor( now ) );
                }
            }
        } );
    }      
  }

}
