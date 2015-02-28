$(document).ready(function () {
	$('.ga1').mouseenter(function (e) {
			$(this).addClass("zoom");
			$(this).removeClass("unzoom");
			$(this).children('h3').fadeOut(200);
			$(this).children('h4').fadeOut(200);
			$(this).children('span').fadeIn(500);
		})
		.mouseleave(function (e) {
			$(this).addClass("unzoom");
			$(this).removeClass("zoom");
		});
});
