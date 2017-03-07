// /**
//  * Created by pchotrani on 17/03/16.
//  */

(function ($) { // this is an immediately invoked Function, to protect variables from being out of the scope.

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
        var $nav = $('.cd-vertical-nav');
        (footerVisible) ? $nav.addClass('fade') : $nav.removeClass('fade');
    };

    var tnaScrollSpy = function($els){
        var currentScrollPosition = $(window).scrollTop();
        $els.each(function(){
            var sectionPosition = $(this).offset().top;
            if( sectionPosition - 1 < currentScrollPosition ){
                var id = $(this).attr('id');
                var $target = $("[href=#"+id+"]")
                $('.cd-menu').removeClass('is-selected');
                $target.addClass('is-selected');
            }
        })
    }

    var throttleScroll = function(){

        var scheduled = false;
        window.addEventListener('scroll', function() {

            if (! scheduled) {
                scheduled = true;
                setTimeout(function(){
                    scheduled = false;
                    console.log('scrollCount');
                }, 1000)
            }
        });
    }

    $(window).on('scroll', function () {
        var $cdSection = $('.cd-section');
        var largeScreen = $(window).width() > 1024;
        parallaxScroll(largeScreen);
        fadeNavigationIfFooterShown();
        tnaScrollSpy($cdSection);
        throttleScroll($('body'));
    });

    $('.top-menu').on('click', 'a', function (e, $container) {
        $link = $(e.currentTarget);
        $container = $('.top-menu');
        manageLinkState($link, $container);
        scrollToSection($link);
    });


    // IIFE
    var init = (function () {
        // Remove style attributes from .wp-caption
        $(".wp-caption").removeAttr("style");
        $("<div class='position-top-right'><span class='sprite icon-new-window'></span></div>").insertBefore(".wp-caption > a > img");
    })();
})
(jQuery)