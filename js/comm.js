$(document).ready(function () {
	$('.ga1').mouseenter(function (e) {
			$(this).addClass("zoom");
			$(this).removeClass("unzoom");
		})
		.mouseleave(function (e) {
			$(this).addClass("unzoom");
			$(this).removeClass("zoom");
		});
});
