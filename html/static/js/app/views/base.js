define([
    'jquery',
    'modules/usernav',
    'modules/sidebar',
    'plugins/bootstrap-select',
    'bootstrap/tooltip'
],
function($, userNav, sidebar) {
    return {
        init: function() {
            this.initGlobalPlugins();
            this.initCommonModules();
        },

        initCommonModules: function() {
            userNav.init();
            sidebar.init();
        },

        initGlobalPlugins: function() {
            // bootstrap-select
            $('.selectpicker').selectpicker();

            // bootstrap-tooltip
            $('[data-toggle="tooltip"]').tooltip();
        }
    };
});
