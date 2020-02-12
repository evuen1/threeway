

$( () => {
	
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('nav .menu').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('nav .menu').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});

	$('#contactForm, #contactForm1').submit(function(event) {
		event.preventDefault();

	    $.ajax({
	      method: 'POST',
	      url: $(this).attr('action'),
	      data: $(this).serialize(),
	      success: (data) => {
	      	var json = JSON.parse(data);
	      	if (json.formUrl) {
	      		window.location = json.formUrl;
	      	} else {
	      		$(this)[0].reset();
	      		alert('Ваша заявка успешно отправлена!');
	      	}
	      	// console.log(json);
	      },
	    });
	});
	
});

