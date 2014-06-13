require.config({
    baseUrl: 'static/js',

    paths: {
        'views': 'app/views',
        'modules': 'app/modules',
        'libs': 'vendor/libs',
        'jquery': 'vendor/libs/jquery',
        'plugins': 'vendor/plugins',
        'bootstrap': 'vendor/plugins/bootstrap'
    },

    shim: {
        'bootstrap/tooltip' : { deps: ['jquery'], exports: '$.fn.tooltip' },
        'bootstrap/dropdown' : { deps: ['jquery'], exports: '$.fn.dropdown' },
        'plugins/bootstrap-select' : { deps: ['jquery', 'bootstrap/dropdown'], exports: '$.fn.selectpicker' },
        'plugins/jquery.flot' : { deps: ['jquery'], exports: '$.plot' },
        'plugins/jquery.flot.pie' : { deps: ['jquery', 'plugins/jquery.flot'], exports: '$.plot' },
        'plugins/jquery.flot.resize' : { deps: ['jquery', 'plugins/jquery.flot'], exports: '$.plot' }
    },

    deps: ['require', 'jquery'],

    callback: function(require, $) {
        var view = 'views/' + document.body.getAttribute('data-view');
        require(['views/base', view], function(base, view){
            $(function(){
                base.init();
                if ( view && view.init ) {
                    view.init();
                }
            });
        });
    }
});
