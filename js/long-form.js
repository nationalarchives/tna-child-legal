// /**
//  * Created by pchotrani on 17/03/16.
//  */

(function ($) {

    var parallaxScroll = function (largeScreen) {
        if (largeScreen) {
            $('.intro-text').css({
                transform: "translate(0px,-" + $(window).scrollTop() / 3 + "px)"
            });
        }
    }

    var manageLinkState = function ($link, $container) {
        $container.find('a').removeClass('is-selected');
        $link.addClass('is-selected');
    }

    var scrollToSection = function ($link) {
        var $target = $($link.attr('href'));

        $('body').animate({
            scrollTop: $target.offset().top
        }, 'slow');
    }

    var fadeNavigationIfFooterShown = function () {
        var footerVisible = $(window).scrollTop() + 600 > $(document).height() - $(window).height();
        var $nav = $('#cd-vertical-nav');
        (footerVisible) ? $nav.fadeOut(1000) : $nav.fadeIn(1000);
    };

    $(window).on('scroll', function () {
        var largeScreen = $(window).width() > 1024;
        parallaxScroll(largeScreen);
        fadeNavigationIfFooterShown();
    });

    $('#top-menu').on('click', 'a', function (e, $container) {
        $link = $(e.currentTarget);
        $container = $('#top-menu');
        manageLinkState($link, $container);
        scrollToSection($link);
    });

    // IIFE
    var init = (function () {
        // Remove style attributes from .wp-caption
        $(".wp-caption").removeAttr("style");
        $("<div class='position-top-right'><span class='sprite icon-new-window'></span></div>").insertBefore(".wp-caption > a > img");
        $('.cd-section').each(function () {
            insertPlaceholders($(this));
        })
    })();
})
(jQuery)