define([
  'handlebars', 
  'text!templates/partials/QuickToolsLinksPartial.hbs', 
  'text!templates/partials/CardSelectorPartial.hbs'
],
function( Handlebars, QuickToolsLinks, CardSelector){
  Handlebars.registerPartial('quickToolsLinks', Handlebars.compile( QuickToolsLinks ));
  Handlebars.registerPartial('cardSelector', Handlebars.compile( CardSelector ));
});