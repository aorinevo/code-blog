define([
  'marionette',
  'handlebars',
  'text!templates/CardSelector.hbs',
  'backbone.radio'
],
function( Marionette, Handlebars, CardSelector, Radio ){
  
  var radio;
    
  var CardSelector = Marionette.View.extend({
    el: '#card-selector',
    template: Handlebars.compile( CardSelector ),
    initialize: function(){
      radio = Radio.channel( 'card-selector');
    },
    events: {
      'change': 'triggerRadioEvent'
    },
    triggerRadioEvent: function(){      
      radio.trigger('select:changed', this.$el.find('select').val());
    }    
  });
  
  return CardSelector;
});