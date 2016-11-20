define([
  'app/QuickToolsLinks/views/CreditCardActionView',
  'app/QuickToolsLinks/models/QuickToolsModel',
  'app/Helpers'
], 
function( CreditCardActionView, QuickToolsModel, Helpers ){  
  var ccModel = new QuickToolsModel();
  new CreditCardActionView({model: ccModel}).render();
});