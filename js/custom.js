/*jslint browser: true*/
/*global $, jQuery, console*/



(function ($) {

    $(document).ready(function () {



        var hasScroll = false;
        $('#logo').show();
        $('#scrollup').hide();

        if ($(this).scrollTop() > 100) {
            document.getElementById("navibar").className = document.getElementById("navibar").className.replace(/(?:^|\s)navbar-color-disabled(?!\S)/g, '');
            document.getElementById("content-navbar").className = document.getElementById("content-navbar").className.replace(/(?:^|\s)pull-down-navbar(?!\S)/g, '');

            document.getElementById("navibar").className += " navbar-color-active";
            document.getElementById("content-navbar").className += " pull-up-navbar";
            $("#logo").fadeOut();
            $("#scrollup").fadeIn();
            hasScroll = true;
        }



        $(function () {
            $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 100) {
                    document.getElementById("navibar").className = document.getElementById("navibar").className.replace(/(?:^|\s)navbar-color-disabled(?!\S)/g, '');
                    document.getElementById("content-navbar").className = document.getElementById("content-navbar").className.replace(/(?:^|\s)pull-down-navbar(?!\S)/g, '');

                    document.getElementById("navibar").className += " navbar-color-active";
                    document.getElementById("content-navbar").className += " pull-up-navbar";
                    $("#logo").fadeOut();
                    $("#scrollup").fadeIn();
                    hasScroll = true;

                } else {
                    if (hasScroll === true) {
                        document.getElementById("navibar").className = document.getElementById("navibar").className.replace(/(?:^|\s)navbar-color-active(?!\S)/g, '');
                        document.getElementById("content-navbar").className = document.getElementById("content-navbar").className.replace(/(?:^|\s)pull-up-navbar(?!\S)/g, '');
                        document.getElementById("navibar").className += " navbar-color-disabled";
                        document.getElementById("content-navbar").className += " pull-down-navbar";

                        $("#logo").fadeIn();
                        $("#scrollup").fadeOut();
                    }
                }
            });


        });

    });
}(jQuery));





$(document).ready(function () {
    "use strict";

    function filterPath(string) {
        return string
            .replace(/^\//, '')
            .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
            .replace(/\/$/, '');
    }
    var locationPath = filterPath(location.pathname);
    var scrollElem = scrollableElement('html', 'body');

    $('a[href*=#]').each(function () {
        var thisPath = filterPath(this.pathname) || locationPath;
        if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
            var $target = $(this.hash),
                target = this.hash;
            if (target) {
                var targetOffset = $target.offset().top;
                $(this).click(function (event) {
                    event.preventDefault();



                    var timeout = null;
                    clearTimeout(timeout);
                    timeout = setTimeout(function () {
                        $(scrollElem).animate({
                            scrollTop: targetOffset
                        }, 1000, function () {
                            location.hash = target;
                        });
                    }, 150);



                });
            }
        }
    });

    // use the first element that is "scrollable"
    function scrollableElement(els) {
        for (var i = 0, argLength = arguments.length; i < argLength; i++) {
            var el = arguments[i],
                $scrollElement = $(el);
            if ($scrollElement.scrollTop() > 0) {
                return el;
            } else {
                $scrollElement.scrollTop(1);
                var isScrollable = $scrollElement.scrollTop() > 0;
                $scrollElement.scrollTop(0);
                if (isScrollable) {
                    return el;
                }
            }
        }
        return [];
    }

});

(function ($) {
    $(document).ready(function () {
        var timeout = null;
        $('#scrollup').click(function () {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                $(window.opera ? 'html' : 'html, body').animate({
                    scrollTop: 0,
                }, 1500);
            }, 150);
        });

    });
}(jQuery));

$(document).ready(function () {

    $('#team-slider').owlCarousel({


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




});

$(document).ready(function () {
    var marker, map;

    var mapCanvas = document.getElementById('map-canvas');
    var mapmarkericon = 'http://slmun.org/Resources/solid-pin-red.png';
    function initialize() {


        var stylesArray = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
        var bmichLatLng = new google.maps.LatLng(6.901046, 79.872734);
        var mapOptions = {
            center: bmichLatLng,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: stylesArray,
            draggable: false,
            disableDefaultUI: true
                //            panControl: false

        };
        map = new google.maps.Map(mapCanvas, mapOptions);

        var contentString = '<div class="map-info text-center" ><b>BMICH</b><br/> Bauddhaloka Mawatha, Colombo</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker = new google.maps.Marker({
            amimation: google.maps.Animation.DROP,
            map: map,
            title: 'BMICH',
            position: bmichLatLng,
            icon: mapmarkericon
        });


        google.maps.event.addListener(map, 'click', function (event) {
            this.setOptions({
                scrollwheel: true,
                draggable: true
            });
        });

        google.maps.event.addListener(map, 'mouseout', function (event) {
            this.setOptions({
                scrollwheel: false,
                draggable: true
            });
        });

        infowindow.open(map, marker);

    }
    google.maps.event.addDomListener(window, 'load', initialize);

});

//$(document).ready(function () {
//    var x = true;
//    var waypoint = new Waypoint({
//        element: document.getElementById('counter'),
//        handler: function (direction) {
//            if (x === true) {
//
//                function getnumber() {
//                    $('.stat-count').each(function () {
//                        var num = parseInt($(this).html());
//                        var new_num = num * 0.75
//                        $(this).html(new_num);
//
//
//                    })
//                };
//
//
//
//                getnumber();
//
//                x = false;
//            }
//
//        },
//        offset: '60%',
//
//
//    })
//});

$(document).ready(function () {
    $('#text-contact-email').hover(function () {

        $('#icon-contact-email').toggleClass('shrink');
        //       $('#tele').removeClass('buzz');
    });
    $('#text-contact-map').hover(function () {

        $('#icon-contact-map').toggleClass('shrink');
        //       $('#tele').removeClass('buzz');
    });
    $('#text-contact-phone').hover(function () {

        $('#icon-contact-phone').toggleClass('shrink');
        //       $('#tele').removeClass('buzz');
    });
     $('#text-contact-phone2').hover(function () {

        $('#icon-contact-phone').toggleClass('shrink');
        //       $('#tele').removeClass('buzz');
    });


});

$(document).ready(function () {
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    })
});
