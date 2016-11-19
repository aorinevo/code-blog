requirejs.config({
    baseUrl: 'js',
    paths: {
        app: './app/app',
        marionette: '../node_modules/backbone.marionette/lib/backbone.marionette.min',
        backbone: '../node_modules/backbone/backbone-min',
        jquery: '../node_modules/jquery/dist/jquery.min',
        underscore: '../node_modules/underscore/underscore',
        'backbone.radio': '../node_modules/backbone.radio/build/backbone.radio.min'
    },
    shim: {
      marionette: ['backbone','backbone.radio'],
      backbone: ['jquery', 'underscore']
    }  
});

require(['app']);