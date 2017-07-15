/*
 * animateScroll.js
 */

var animateModals = function(){
	// Animate smooth scrolling for modals
	$('a[href^="#"]').on('click', function(event) {
		    var target = $(this.getAttribute('href'));

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').stop().animate({
		            scrollTop: target.offset().top
		        }, 1000);
		    }
	});
}

window.onload = animateModals;