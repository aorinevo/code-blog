//* ========================
//#FILE - CreditCardActionModel.js
//> Author: Aori Nevo
//>
//> Create Date: <October 24, 2016>
//>
//======================== */

define( [
    'backbone',    
    'underscore',
    'jquery',
    'backbone.radio'
], function ( Backbone, _, $, Radio ) {
    // Private variables
    // -----------------
    // `dataParamsDefault` is set to a non-empty object so that postBuilder.js makes a an ajax post request.  
    //  If the intended ajax call is a GET request, dataParams property needs to be set to an empty object.
    // `quickToolsLinks` is the default object that the model uses to generate the QuickTools links.
    // `dataAction, dataParams,` and ` dataCoremetrics` correspond to `data-action, data-params,` and `data-coremetrics`.
    // `column` can be set to `left` or `right`. Note: If set to anything else, then the result will be equivalent to setting showLink to false.
    // `showLink` is used to suppress a link from being rendered to the DOM. Note: If `showLink` is set to true and `column` 
    /// property is not set to "left" or "right", then link will not display.
    var dataActions = [ "dispute", "replaceCard", "updateBilling", "addAuthorizedUser", "lostCard", "creditAlerts", "estatements", "increaseLimit" ],
        quickToolsLinks = {
            dispute: {
                dataAction: "dispute",
                qti18n: "1) dispute",
                column: "left",
                showLink: true
            },
            replaceCard: {
                dataAction: "replaceCard",
                qti18n: "2) order",
                column: "left",
                showLink: true
            },
            updateBilling: {
                dataAction: "updateBilling",
                qti18n: "3) updateBillInfo",
                column: "left",
                showLink: true
            },
            addAuthorizedUser: {
                dataAction: "addAuthorizedUser",
                qti18n: "4) addAuthorizedUser",
                column: "left",
                showLink: false
            },
            lostCard: {
                dataAction: "lostCard",
                qti18n: "5) report",
                column: "right",
                showLink: true
            },
            creditAlerts: {
                dataAction: "creditAlerts",
                qti18n: "6) manageAlerts",
                column: "right",
                showLink: true
            },
            estatements: {
                dataAction: "estatements",
                qti18n: "7) managePaperless",
                column: "right",
                showLink: true
            },
            increaseLimit: {
                dataAction: "increaseLimit",
                qti18n: "8) increaseLimit",
                column: "right",
                showLink: false
            }
        };

    // Private Functions
    // ---------------------  

    // Keys `quickToolsLinks` with `dataAction` and sets `property` to `value`.
    // @param {string} dataAction
    // @param {string} property
    // @param {dynamic} value
    //
    function setQuickToolsLinkProperty( dataAction, property, value ) {
        quickToolsLinks[ dataAction ][ property ] = value;
    }

    // Iterates over `quickToolsLinks` object and sets `property` to `value`.
    // This function differes from `setQuickToolsLinkProperty` in that it sets the same property in each element of `quickToolsLinks`
    // to `value`.
    // @param {string} property
    // @param {dynamic} value
    //
    function setPropertyForAllQuickToolsLinks( property, value ) {
        for ( var link in quickToolsLinks ) {
            quickToolsLinks[ link ][ property ] = value;
        }
    }

    // Returns elements of `quickToolsLinks` for which `property === value` and `showLink === true`
    // @param {string} property
    // @param {dynamic} value
    // @return {array}
    //
    function getQuickToolsLinks( property, value ) {
        return _.pick( quickToolsLinks, function ( link, key, object ) {
            return link[ property ] === value && link[ "showLink" ] === true;
        } );
    }

    // Toggle the visibility of a list of `linkKeys`.  Note, `visible` is an array that must have the same length as `linkKeys`.
    // @param {array} linkKeys
    // @param {array} visible
    //
    function setVisibilityOfQuickToolsLinks( linkKeys, visible ) {
        linkKeys.forEach( function ( link, index ) {
            setQuickToolsLinkProperty( link, "showLink", visible[ index ] );
        } );
    }

    // QuickToolsLinkModel
    // ---------------------        
    var QuickToolsLinksModel = Backbone.Model.extend( {
        initialize: function ( options ) {
            var radio = Radio.channel( 'card-selector');
            this.set( {
                quickToolsLinks: quickToolsLinks
            } );
            radio.on( 'select:changed', this.updateQuickToolsLinks.bind(this));
            radio.trigger( 'select:changed', "[true,true,true,true,true,true,true,true]");
        },
        // `updateQuickToolsLinks` takes credit card data and updates the `quickToolsLinks` object and sets the quickToolsLinksLeft and quickToolsLinksRight 
        // model attributes.
        updateQuickToolsLinks: function ( visibilityList ) {                        
            setVisibilityOfQuickToolsLinks( dataActions, JSON.parse(visibilityList));
            this.set(
                $.extend( {}, {                    
                    quickToolsLinksLeft: getQuickToolsLinks( "column", "left" ),
                    quickToolsLinksRight: getQuickToolsLinks( "column", "right" )
                } )
            );
        }
    } );

    return QuickToolsLinksModel;
} );
