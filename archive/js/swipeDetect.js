//Finger swipe detector js
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
	return evt.touches ||             // browser API
	evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
	const firstTouch = getTouches(evt)[0];                                      
	xDown = firstTouch.clientX;                                      
	yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
	if ( ! xDown || ! yDown ) {
		return;
	}

	var xUp = evt.touches[0].clientX;                                    
	var yUp = evt.touches[0].clientY;
	
	var xDiff = xDown - xUp;
	var yDiff = yDown - yUp;
	
	if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
		if ( xDiff > 0 ) {
			/* left swipe */ 
			$(".mobileMenu, .overlay").removeClass("open");
			$(".navbar-toggler").removeClass("is-active");
		} else if(xDown < 10 && xDiff < 0){
			/* right swipe */
			$(".mobileMenu, .overlay").addClass("open");
			$(".navbar-toggler").addClass("is-active");
		}                       
	}
	
	
	//use it when need to detection of finger swipe event
	/*
	if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*
		if ( xDiff > 0 ) {
			/* left swipe *
		} else if(xDown < 10 && xDiff < 0){
			/* right swipe *
		}                       
	} else {
		if ( yDiff > 0 ) {
			/* up swipe *
		} else { 
			/* down swipe *
		}                                                                 
	}
	*/
	
	/* reset values */
	xDown = null;
	yDown = null;                                             
};
