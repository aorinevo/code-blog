//* ========================
//#FILE - CreditCardActionView.js
//> Author: Raphael Oliveira
//>
//> Create Date: <April 13, 2015>
//>
//======================== */
define(
    [
        'jquery',
        'marionette',                                                
    ],
    function ( $, Marionette ) {
        'use strict';
        var ccActionView;

        ccActionView = Marionette.ItemView.extend( {
            template: CcActionTpl,
            el: '#ccAction',            
            onRender: function () {
                this.$el.removeClass( 'displayNone' );

                /*This will create a tooltip for all links inside this class that has the title attribute.*/
                Tooltip.create( "#csrActionLinks a", {
                    location: "bottom"
                } );
            },
            modelEvents: {
                "change": "render"
            },
            events: {
                //Define this function and reference it by name here.
                'ccActionUpdate': 'ccActionUpdate',
                'click #questionMark': 'toggleTooltip'
            },
            ccActionUpdate: function ( ev, ccData ) {
                //update quicktools object when user selects a different card from dropdown. Triggers re-render.
                this.model.updateQuickToolsLinks( ccData );
            },
            closeTooltip: function () {
                if ( this.toolTipCredit ) {
                    this.toolTipCredit.hide();
                }
            },
            toggleTooltip: function ( e ) {
                var elSelector = "#" + e.target.id,
                    tooltipName,
                    width,
                    header = "",
                    tooltip;
                if ( elSelector === "#questionMark" ) {
                    tooltip = this.tooltipCredit;
                    tooltipName = "creditLinesToolTip";
                    width = 232;
                    header = I18n.creditLinesToolTip.header;
                }
                //creates if it doesn't exist yet
                if ( !tooltip ) {
                    tooltip = Panel.create( tooltipName, {
                        closeOnClick: true,
                        width: width,
                        padding: 10,
                        arrow: "Bottom",
                        position: {
                            my: 'bottom-15',
                            at: 'top',
                            of: elSelector
                        },
                        tooltip: true,
                        close: true
                    } );
                    tooltip.setHeader( header );
                }
                // Show if hidden, hides if shown
                tooltip.toggle();
            }
        } );

        return ccActionView;
    } );
