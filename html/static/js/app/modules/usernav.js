define([
    'jquery'
], function($) {
    return {
        init: function() {
            this.$body = $('body');
            this.$el = $('.user-nav');
            this.$btn = $('.user-content-wrapper > .btn');
            this.$content = this.$el.find('.user-content');
            this.initEvents();
        },

        initEvents: function() {
            this.$btn.on('click', $.proxy(this.onBtnClick, this));
            this.$body.on('click', $.proxy(this.onBodyClick, this));
        },

        isVisible: function() {
            return this.$content.is(':visible');
        },

        onBtnClick: function() {
            if (!this.isVisible()) {
                this.show();
            } else {
                this.hide();
            }
        },

        onBodyClick: function(event) {
            var userNavClick = !! $(event.target).parents('.user-content-wrapper').length;
            if (this.isVisible() && !userNavClick) {
                this.hide();
            }
        },

        show: function() {
            this.$content.fadeIn();
        },

        hide: function() {
            this.$content.fadeOut();
        }
    };
});
