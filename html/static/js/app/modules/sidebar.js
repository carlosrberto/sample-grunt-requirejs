define([
    'jquery'
],function($) {
    return {
        init: function() {
            this.$body = $('body');
            this.$sidebarMenuItens = $('.sidebar-menu > li');
            this.initEvents();
        },

        initEvents: function() {
            this.$sidebarMenuItens.on('click', $.proxy(this.onItemClick, this));
            this.$body.on('click', $.proxy(this.onBodyClick, this));
        },

        onItemClick: function(event) {
            var el = $(event.currentTarget);
            if (el.hasClass('active')) {
                this.$body.removeClass('push-content');
                el.removeClass('active');
            } else {
                this.$body.addClass('push-content');
                el.addClass('active');
                this.$sidebarMenuItens.not(el).removeClass('active');
            }
        },

        onBodyClick: function(event) {
            var isOnSidebar = !! $(event.target).parents('.adm-sidebar').length;
            if (!isOnSidebar) {
                this.$body.removeClass('push-content');
                this.$sidebarMenuItens.removeClass('active');
            }
        }
    };
});
