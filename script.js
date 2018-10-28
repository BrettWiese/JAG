//loading screen
$(document).ready(function () {
    setTimeout(function(){
        $('#loading').toggleClass("close");
    }, 0);
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
    if ( $(window).width() > 600) {
  	$("#apple-window").toggleClass("close");
  	$('.windows-box').css('z-index', '1');
    $("#apple-window").css('z-index', '    5');
    }
    else {
      $("body, html").animate({scrollTop: $("#apple-window").offset().top-20},500);
    }
});

$('.spotify-button').click(function() {
    if ( $(window).width() > 600) {
  	$("#spotify-window").toggleClass("close");
  	$('.windows-box').css('z-index', '1');
    $("#spotify-window").css('z-index', '    5');
    }
    else {
      $("body, html").animate({scrollTop: $("#spotify-window").offset().top-20},500);
    }
});

$('.ie-button').click(function() {
    if ( $(window).width() > 600) {
  	$("#ie-window").toggleClass("close");
  	$('.windows-box').css('z-index', '1');
    $("#ie-window").css('z-index', '    5');
    }
    else {
      $("body, html").animate({scrollTop: $("#ie-window").offset().top-20},500);
    }
});

$('.solitaire-button').click(function() {
    if ( $(window).width() > 600) {
  	$("#solitaire-window").toggleClass("close");
  	$('.windows-box').css('z-index', '1');
    $("#solitaire-window").css('z-index', '5');
    }
    else {
      $("body, html").animate({scrollTop: $("#solitaire-window").offset().top-20},500);
    }
});

$('.mail-button').click(function() {
    if ( $(window).width() > 600) {
    $("#mail-window").toggleClass("close");
    $('.windows-box').css('z-index', '1');
    $("#mail-window").css('z-index', '5');
    }
    else {
      $("body, html").animate({scrollTop: $("#mail-window").offset().top-20},500);
    }
});

$('.notepad-window-1-button').click(function() {
    if ( $(window).width() > 600) {
    $("#notepad-window-1").toggleClass("close");
    $('.windows-box').css('z-index', '1');
    $("#notepad-window-1").css('z-index', '5');
    }
    else {
      $("body, html").animate({scrollTop: $("#notepad-window-1").offset().top-20},500);
    }
});

$('.notepad-window-2-button').click(function() {
    if ( $(window).width() > 600) {
    $("#notepad-window-2").toggleClass("close");
    $('.windows-box').css('z-index', '1');
    $("#notepad-window-2").css('z-index', '5');
    }
    else {
      $("body, html").animate({scrollTop: $("#notepad-window-2").offset().top-20},500);
    }
});

$('.notepad-window-3-button').click(function() {
    if ( $(window).width() > 600) {
    $("#notepad-window-3").toggleClass("close");
    $('.windows-box').css('z-index', '1');
    $("#notepad-window-3").css('z-index', '5');
    }
    else {
      $("body, html").animate({scrollTop: $("#notepad-window-3").offset().top-20},500);
    }
});

$('.notepad-window-4-button').click(function() {
    if ( $(window).width() > 600) {
    $("#notepad-window-4").toggleClass("close");
    $('.windows-box').css('z-index', '1');
    $("#notepad-window-4").css('z-index', '    5');
    }
    else {
      $("body, html").animate({scrollTop: $("#notepad-window-4").offset().top-20},500);
    }
});

$('.notepad-window-5-button').click(function() {
    if ( $(window).width() > 600) {
    $("#notepad-window-5").toggleClass("close");
    $('.windows-box').css('z-index', '1');
    $("#notepad-window-5").css('z-index', '    5');
    }
    else {
      $("body, html").animate({scrollTop: $("#notepad-window-5").offset().top-20},500);
    }
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