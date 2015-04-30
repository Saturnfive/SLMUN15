$(document).ready(function () {
	$('.box').hoverIntent({
		over: addBlueBox,
		out: addBlueBox,
		interval: 10,
		sensitivity: 5
	});

	function addBlueBox() {
		$(this).toggleClass('blue-hover');
		$(this).children(".btn").toggleClass('white-hover')
	}
});
