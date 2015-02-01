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
    var mapmarkericon = 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png';
    function initialize() {


        var stylesArray = [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f3f4f4"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"weight":0.9},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#83cead"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#7fc8ed"}]}];
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


});
