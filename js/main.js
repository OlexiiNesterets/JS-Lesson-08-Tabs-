'use strict';

(function ($) {

    function $changeWindow(elementToShow) {

        /* Make all windows except this 'hidden' */
        $(elementToShow).parent().find('.window').addClass('hidden');
        $(elementToShow).removeClass('hidden');

        /* Make all tabs icons except this 'disabled' */
        $(elementToShow).parent().find('.icon').css({'background-position-y': '-2px'});
        $(elementToShow).find('.icon').css({'background-position-y': '30px'});
    }

    /* The object that helps link the tab to the window */
    var $window = {
        information__tab: function () { $changeWindow('.information__window') },
        ratings__tab: function () { $changeWindow('.ratings__window') },
        buy__tab: function(){ $changeWindow('.buy__window') }
    };

    $('.tabs__item').click(function () {

        var $this = $(this);

        if ( !$this.hasClass('checked') ) {

            /* The tab checking */
            var $parent = $this.parent();

            $parent.find('.checked').removeClass('checked');
            $this.addClass('checked');

            /* Linking a tab to the corresponding window */
            var $id = $this.attr('id');
            $window[$id]();

            /* Make the icon 'active' */
            $this.find('.icon').css({'background-position-y': '26px'});
        }
    });

})(jQuery);