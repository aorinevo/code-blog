//* ========================
//#FILE - QuickToolsLinksView.js
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
        'text!templates/QuickToolsLinks.hbs',       
        'handlebars',
        'backbone.radio'                                             
    ],
    function ( $, Marionette, Page, Handlebars, Radio ) {
        'use strict';
        var radio = Radio.channel( 'card-selector');
        var QuickToolsLinksView = Marionette.View.extend( {
            template: Handlebars.compile(Page),
            el: '#quick-tools-links',  
            onRender: function () {
                this.$el.removeClass( 'displayNone' );
            },
            modelEvents: {
                "change": "render"
            }
        } );

        return QuickToolsLinksView;
    } );
