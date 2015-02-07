/*jslint browser: true*/
/*global $, jQuery, alert, skrollr, Waypoint*/

$(document).ready(function () {
    skrollr.init({
        smoothScrolling: false,
        mobileDeceleration: 0.004
    });

    var waypoint;
    waypoint = new Waypoint({
        element: document.getElementById('top'),
        handler: function (direction) {
            if (direction === 'down') {
                $('#navibar').addClass('navbar-color-active');
                $('#navibar').removeClass('navbar-color-disabled');
            } else {
                $('#navibar').addClass('navbar-color-disabled');
                $('#navibar').removeClass('navbar-color-active');

            }
        },
        offset: -100
    });

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 6
            }
        }
    });


}); //Document ready ends here
