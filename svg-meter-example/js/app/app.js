define([
  'js/app/Meter/Meter',
  'jquery',
  'jquery-ui'
], 
function( Meter, $ ){  
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
      
  $('#svg-meter-container').html( meter.render());
    
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
          easing: "easeInOutQuart",
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
});