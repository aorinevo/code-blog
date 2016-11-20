define(['handlebars', 'text!templates/QuickToolsLinks.hbs', 'text!templates/CardSelector.hbs'],
function( Handlebars, QuickToolsLinks, CardSelector){
  Handlebars.registerPartial('quickToolsLinks', Handlebars.compile( QuickToolsLinks ));
  Handlebars.registerPartial('cardSelector', Handlebars.compile( CardSelector ));
});