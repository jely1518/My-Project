// Sticky Nav
$(window).scroll(function(e){
	el = $(".sticky-nav"); // element you want to scroll
	var navHeight = $(el).height();

	jQueryscrolling = 0; // Position you want element to assume during scroll
	jQuerybounds = 240; // boundary of when to change element to fixed and scroll

	if ($(this).scrollTop() > jQuerybounds) {
		$(el).fadeIn("slow").css({"position": "fixed", "top": jQueryscrolling, "display": "block", "height": "52px"});

	}
	if ($(this).scrollTop() < jQuerybounds) {
		$(el).fadeOut("slow").css({"display": "none", "height": "0"});
	}
});