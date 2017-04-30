//#MODULE - Top Reviewer View
//> Author: Aori Nevo
//>
//> Create Date: <April 11, 2016>
//>
//======================== */

define( [ 'jquery',
        'underscore',
        'marionette',        
        'bcomTemplates/features/topReviewer/TopReviewer',
        'bcomjs/features/topReviewer/TopReviewerModel',
        'bcomTemplates/features/topReviewer/i18n/TopReviewerMessages',
        'bcomjs/components/charts/Meter'
    ],
    function ( $, _, Marionette, topReviewerTemplate, TopReviewerModel, I18n, Meter ) {

        var topReviewerView = Marionette.ItemView.extend( {
            events: {
                'click .bcom-top-reviewer-tab': 'toggleShowTopReviewerPanel'
            },

            template: topReviewerTemplate,

            id: 'bcom-top-reviewer',

            i18n: I18n,

            initialize: function ( options ) {
                var self = this;
                _.extend( this, options );
                if ( Cookie.get( 'SignedIn' ) === '1' ) {
                    this.model = new TopReviewerModel( {
                        uid: Cookie.get( "bloomingdales_online_uid" )
                    } );
                    this.model.fetch();
                }
            },
            modelEvents: {
                'change': 'render'
            },
            onBeforeRender: function () {
                $( 'body' ).append( this.$el );
                this.$el.addClass( this.model.get( 'reviewerType' ) );
                this.coremetricsName = this.model.get( 'reviewerType' ).replace( /-/, '_' );
                this._minimizedRightValue = this.$el.css( 'right' );
                this.triggerCoremetricsTopReviewerElementTag( 'overlay_present', this.coremetricsName );
            },
            renderMeter: function ( data ) {
                var meterConfig = {
                    whole: 5,
                    part: data.reviewCountVal,
                    radiusOuter: 45,
                    radiusInner: 35,
                    svgId: 'bcom-top-meter-arc',
                    path1Stroke: '#F1F1F1',
                    path2Stroke: '#A1A1A1'
                };
                var meter = new Meter( meterConfig ),
                    CONFIG = meter.CONFIG();
                $( '.bcom-top-reviewer-meter' ).html( meter.render() );
                //Animations
                if ( CONFIG.part > 0 ) {
                    $( {
                        'reviewCountVal': 0,
                        'remainingReviews': 5,
                        'angle': 0
                    } ).animate( {
                        'reviewCountVal': data.reviewCountVal,
                        'remainingReviews': data.remainingReviews,
                        'angle': CONFIG.meterAngle
                    }, {
                        duration: 2000,
                        step: function ( now, fx ) {
                            switch ( fx.prop ) {
                            case 'angle':
                                $( '#' + CONFIG.svgId + '-1' )[ 0 ].setAttribute( "d", meter.describeArc( CONFIG.x, CONFIG.y, CONFIG.radius, 0, now ) );
                                break;
                            case 'reviewCountVal':
                                $( '.bcom-top-reviewer-review-count' ).text( Math.ceil( now ) );
                                break;
                            default:
                                $( '.bcom-top-reviewer-remaining-reviews' ).text( Math.floor( now ) );
                            }
                        }
                    } );
                }
            },
            toggleShowTopReviewerPanel: function () {
                var self = this;

                if ( this.$el.hasClass( 'open' ) ) {                    
                    this.$el.animate( {
                        right: this._minimizedRightValue
                    }, function () {
                        self.$el.removeClass( 'open' );
                    } );
                } else {
                    this._minimizedRightValue = this.$el.css( 'right' );
                    this.$el.animate( {
                        right: "0px"
                    } );
                    if ( this.model.get( 'reviewerType' ) === 'open-reviews' ) {
                        this.renderMeter( this.model.toJSON() );
                    }
                    this.$el.addClass( 'open' );
                }
            }
        } );

        return topReviewerView;
    } );
