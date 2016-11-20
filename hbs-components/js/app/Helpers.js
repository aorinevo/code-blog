define(['handlebars', 'text!templates/QuickToolsLinks.hbs'],
function( Handlebars, QuickToolsLinks){
  Handlebars.registerPartial('quickToolsLinks', Handlebars.compile( QuickToolsLinks ));
});