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
    'jquery',
    'marionette',
    'text!templates/Page.hbs',
    'handlebars'
],
function ( $, Marionette, Page, Handlebars ) {      
    'use strict';    
    
    function renderQuickTools(){
      var ccModel = new QuickToolsModel();
      new QuickToolsLinksView({model: ccModel}).render();      
    }
    
    function renderCardSelector(){      
      new CardSelectorView().render(); 
    }
    
    var PageView = Marionette.View.extend( {
        template: Handlebars.compile(Page),
        el: '#page-view',  
        onRender: function () { 
        }
    } );

    return PageView;
} );
