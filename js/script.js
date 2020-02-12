$(document).ready(function(){
	if ($(window).width() >= 981) { 
       $(".slide-two").owlCarousel({
			items: 4,
			nav: true,
			navText: ["<img src='image/active1.png'>", "<img src='image/active.png'>"],
			loop: true,
		});
    } else {
       $(".slide-two").owlCarousel({
			items: 2,
		});
    };
    $(".slide").owlCarousel({
		items: 1,
		nav: true,
		navText: ["<img src='image/left.png'>", "<img src='image/active.png'>"],
		loop: true,
	});
    $(".slide-two #box").click(function(e) {
		e.preventDefault();
		$(".slide-two #box").removeClass('active');
		$(this).addClass('active');
	})
});


	
