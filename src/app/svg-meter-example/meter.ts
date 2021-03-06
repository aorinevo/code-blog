import * as _ from 'underscore';

var CONFIG: Object = {
  whole: 1,
  part: 0,
  radiusOuter: 0,
  radiusInner: 0,
  svgId: '',
  path1Stroke: '#FFFFFF',
  path2Stroke: '#FFFFFF',
  fill: 'none'
};  

function polarToCartesian( centerX, centerY, radius, angleInDegrees ) {
  var angleInRadians = ( angleInDegrees - 90 ) * Math.PI / 180.0;

  return {
      x: centerX + ( radius * Math.cos( angleInRadians ) ),
      y: centerY + ( radius * Math.sin( angleInRadians ) )
  };
}

function setAttributes( el, attrs ) {
  for ( var key in attrs ) {
      el.setAttribute( key, attrs[ key ] );
  }
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

export class Meter {

  constructor(config: any){
    console.log('test: ', CONFIG);
    CONFIG = _.extend( CONFIG, config );
    // CONFIG.strokeWidth = CONFIG.radiusOuter - CONFIG.radiusInner;
    // CONFIG.radius = CONFIG.radiusOuter - CONFIG.strokeWidth / 2;
    // CONFIG.svgWidth = 2 * CONFIG.radiusOuter;
    // CONFIG.svgHeight = 2 * CONFIG.radiusOuter;
    // CONFIG.x = CONFIG.radiusOuter;
    // CONFIG.y = CONFIG.radiusOuter;
    // CONFIG.meterAngle = CONFIG.part / CONFIG.whole * 360;
  }
  
  public CONFIG() {
    return CONFIG;
  };
  
  public describeArc = describeArc;
  
  public render() {
    //Create DOM elements
    var svg = document.createElementNS( "http://www.w3.org/2000/svg", "svg" ),
        path2 = document.createElementNS( "http://www.w3.org/2000/svg", 'path' ),
        path1 = document.createElementNS( "http://www.w3.org/2000/svg", 'path' );

    svg.appendChild( path2 );
    svg.appendChild( path1 );

    //Set attributes on DOM elements
    setAttributes( svg, {
        // width: CONFIG.svgWidth,
        // height: CONFIG.svgHeight
    } );
    setAttributes( path2, {
        // id: CONFIG.svgId + '-2',
        // stroke: CONFIG.path2Stroke,
        // fill: CONFIG.fill,
        // 'stroke-width': CONFIG.strokeWidth,
        // 'd': describeArc( CONFIG.x, CONFIG.y, CONFIG.radius, 0, 359.9999 )
    } );
    setAttributes( path1, {
        // id: CONFIG.svgId + '-1',
        // stroke: CONFIG.path1Stroke,
        // fill: CONFIG.fill,
        // 'stroke-width': CONFIG.strokeWidth,
        // 'd': describeArc( CONFIG.x, CONFIG.y, CONFIG.radius, 0, 0 )
    } );
    return svg;
  }    

}
