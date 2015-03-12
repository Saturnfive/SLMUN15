$(document).ready(function () {
	$('.wrapper').hoverIntent(function () {
		$(this).removeClass("unzoom");
		$(this).addClass("zoom");
//		$(this).children(".title").fadeOut(500);
//		$(this).children(".sub-title").fadeOut(500, function () {
//			$(this).siblings("span").fadeIn(500);
//		});
	}, function () {
		$(this).addClass("unzoom");
		$(this).removeClass("zoom");
//		$(this).children("span").fadeOut(500, function () {
//			$(this).siblings(".title").fadeIn(500);
//			$(this).siblings(".sub-title").fadeIn(500);
//		});

	});
});
