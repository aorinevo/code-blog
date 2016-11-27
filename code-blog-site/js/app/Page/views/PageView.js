//* ========================
//#FILE - CreditCardActionView.js
//> Author: Aori Nevo
//>
//> Create Date: <Nov 20, 2016>
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
    
    var PageView = Marionette.View.extend( {
        template: Handlebars.compile(Page),
        el: '#page-view'
    } );

    return PageView;
} );
