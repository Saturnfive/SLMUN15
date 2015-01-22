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

(function ($) {

    var eFired = false,
        oTop = $(document).height(),
        scrollticker;
    oTop = (oTop * 0.4598877529) - 10;

    $(window).scroll(function () {

        if (scrollticker) {
            window.clearTimeout(scrollticker);
            scrollticker = null;
        }
        // Set Timeout

        function count($this) {
            var current = parseInt($this.html(), 10);
            current = current + 22; /* Where 50 is increment */
            $this.html(current);
            if (current > $this.data('count')) {
                $this.html($this.data('count'));
            } else {
                setTimeout(function () {
                    count($this);
                }, 50);
            }
        }

        function y() {
            $(".stat-count").each(function () {
                $(this).data('count', parseInt($(this).html(), 10));
                var x = parseInt($(this).html(), 10) - 400;
                $(this).html(x);
                count($(this));
            });
        }



        scrollticker = window.setTimeout(function () {

            var pTop = $('body').scrollTop();
            console.log(pTop + ' - ' + oTop);

            if (pTop > oTop) {
                if (eFired === false) {
                    y();
                    eFired = true;
                }
            }

        }, 50);
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
//
//$('#scrollup').click(function () {
//    $(window.opera ? 'html' : 'html, body').animate({
//        scrollTop: 0,
//    }, 1500); // 1500 here is the duration of animation in the milliseconds (seconds * 1000)
//});


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

        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        loop: false,


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
    function initialize() {
        var mapCanvas = document.getElementById('map-canvas');


        var stylesArray = [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
            }
        ]
    },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
            }
        ]
    },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
            },
                    {
                        "lightness": 45
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
            }
        ]
    },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#25b0e9"
            },
                    {
                        "visibility": "on"
            }
        ]
    }
];
        var bmichLatLng = new google.maps.LatLng(6.901046, 79.872734)
        var mapOptions = {
            center: bmichLatLng,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: stylesArray,
            draggable: false,
            //            panControl: false

        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: bmichLatLng,
            map: map,
            title: 'BMICH'
        });
        map.set('draggable', true);

    }
    google.maps.event.addDomListener(window, 'load', initialize);




});

$(document).ready(function(){
    $(".fade-button").hover(function(){
        var x= $(this).attr('id') ;

        $( this ).addClass( x +"-fore", 500, "linear" );
        $( "#" + x + "-bkg" ).addClass( x +"-bkg", 400, "linear" ); /*400milliseconds animate*/
    },function(){
        var x= $(this).attr('id') ;
        $( this ).removeClass( x +"-fore", 500, "linear" );
        $( "#" + x + "-bkg").removeClass( x +"-bkg", 400, "linear" ); /*400milliseconds animate*/
    });

});




//        var timeout = null;
//            clearTimeout(timeout);
//            timeout = setTimeout(function () {
//
//            }, 150);
//
