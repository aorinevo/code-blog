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
    'handlebars',
    'js/app/QuickToolsLinks/models/QuickToolsModel',
    'js/app/QuickToolsLinks/views/QuickToolsLinksView',
    'js/app/CardSelector/views/CardSelectorView'
],
function ( $, Marionette, Page, Handlebars, QuickToolsModel, QuickToolsLinksView, CardSelectorView ) {      
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
          renderQuickTools();
          renderCardSelector();
        }
    } );

    return PageView;
} );
