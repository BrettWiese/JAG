//loading screen
$(document).ready(function () {
    setTimeout(function(){
        $('#loading').toggleClass("close");
    }, 200);
});


// window dragging - general
$('.windows-box').click(function(e) {
    $('.windows-box').css('z-index', '1');
    $(this).css('z-index', '5');
});

$('.drag-me').each(function() {
    $(this).draggable();
});

//closing windows and putting them on top
$('.apple-button').click(function() {
  	$("#apple-window").toggleClass("close");
  	$('.windows-box').css('z-index', '1');
    $("#apple-window").css('z-index', '5');
});

$('.spotify-button').click(function() {
  	$("#spotify-window").toggleClass("close");
  	    $('.windows-box').css('z-index', '1');
    $("#spotify-window").css('z-index', '5');
});

$('.ie-button').click(function() {
  	$("#ie-window").toggleClass("close");
  	$('.windows-box').css('z-index', '1');
    $("#ie-window").css('z-index', '5');
});

$('.solitaire-button').click(function() {
  	$("#solitaire-window").toggleClass("close");
  	$('.windows-box').css('z-index', '1');
    $("#solitaire-window").css('z-index', '5');
});

//solitaire loader
$(document).ready(function () {
    setTimeout(function(){
        $('#solitaire-window').toggleClass("close");
    }, 100);
});

//start menu funcionality
var modal = document.getElementById('start')

window.onclick = function(event) {
    if (event.target == modal) {
    	console.log('in if statement')
        modal.style.display = "none";
    }
}
