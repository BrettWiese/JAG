    $('.windows-box').click(function(e) {
        $('.windows-box').css('z-index', '1');
        $(this).css('z-index', '5');
    });

    $('.windows-box').each(function() {
        $(this).draggable();
    });

    $('.apple-button').click(function() {
	  	$("#apple-window").toggleClass("close");
	});


	$('.spotify-button').click(function() {
	  	$("#spotify-window").toggleClass("close");
	});

	$('.start-button').click(function() {
	  	$("#start-menu").toggleClass("close");
	});
