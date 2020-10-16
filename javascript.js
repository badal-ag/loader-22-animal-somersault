
$(document).ready(function () {
	$("#armadillo").hide(0).delay(500).fadeIn(100);

	let resizeTimer;
	window.addEventListener("resize", () => {
		document.body.classList.add("resize-animation-stopper");
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			document.body.classList.remove("resize-animation-stopper");
		}, 400);
	});
});
