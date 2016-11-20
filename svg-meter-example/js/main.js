requirejs.config({
    baseUrl: '.',
    paths: {        
        jquery: 'node_modules/jquery/dist/jquery.min',
        underscore: 'node_modules/underscore/underscore',
        'jquery-ui': 'node_modules/jquery-ui-dist/jquery-ui.min'
    },
    shim: {
      'jquery-ui': ['jquery']
    }  
});

require(['js/app/app']);