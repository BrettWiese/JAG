$('.windows-box').click(function(e) {
    $('.windows-box').css('z-index', '1');
    $(this).css('z-index', '5');
});

$('.drag-me').each(function() {
    $(this).draggable();
});

$('.apple-button').click(function() {
  	$("#apple-window").toggleClass("close");
});


$('.spotify-button').click(function() {
  	$("#spotify-window").toggleClass("close");
});

$('.ie-button').click(function() {
  	$("#ie-window").toggleClass("close");
});

$('.solitaire-button').click(function() {
  	$("#solitaire-window").toggleClass("close");
});




var modal = document.getElementById('start')

window.onclick = function(event) {
    if (event.target == modal) {
    	console.log('in if statement')
        modal.style.display = "none";
    }
}
