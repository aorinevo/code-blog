requirejs.config({
    baseUrl: 'js',
    paths: {        
        marionette: '../node_modules/backbone.marionette/lib/backbone.marionette',
        backbone: '../node_modules/backbone/backbone-min',
        jquery: '../node_modules/jquery/dist/jquery.min',
        underscore: '../node_modules/underscore/underscore',
        'backbone.radio': '../node_modules/backbone.radio/build/backbone.radio.min',
        handlebars: '../node_modules/handlebars/dist/handlebars.min',
        text: '../node_modules/text/text'
    },
    shim: {
      marionette: ['backbone','backbone.radio'],
      backbone: ['jquery', 'underscore']
    }  
});

require(['app/app']);