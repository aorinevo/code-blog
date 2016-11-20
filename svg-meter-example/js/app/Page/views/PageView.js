//* ========================
//#FILE - CreditCardActionView.js
//> Author: Raphael Oliveira
//>
//> Create Date: <April 13, 2015>
//>
//======================== */

//Note 3.x replaces ItemView and LayoutView with View!!!!
define(
[
  'js/app/Meter/Meter'
],
function ( Meter ) {      
    'use strict';    
    
    function renderQuickTools(){
      var ccModel = new QuickToolsModel();
      new QuickToolsLinksView({model: ccModel}).render();      
    }
    
    function renderCardSelector(){      
      new CardSelectorView().render(); 
    }
    
    return {
      renderMeter: function( config ){
        return new Meter( config ).render();
      }
    };
} );
