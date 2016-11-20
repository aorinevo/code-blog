define([
  'js/app/QuickToolsLinks/views/CreditCardActionView',
  'js/app/QuickToolsLinks/models/QuickToolsModel',
  'js/app/Helpers'
], 
function( CreditCardActionView, QuickToolsModel, Helpers ){  
  var ccModel = new QuickToolsModel();
  new CreditCardActionView({model: ccModel}).render();
});