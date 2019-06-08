/*
|---------------------------------------
| Overlay js
|---------------------------------------
*/
var overlay = document.createElement('div');
overlay.classList = "overlay";

var menu_under_nav = document.querySelector("body").getAttribute("data-menu_under_nav");
if(menu_under_nav==="true"){
//menu under navigation
function setMenuTop(){
	var navOuterHeight = $(".navbar").outerHeight();
	$(".mobileMenu").css("top", navOuterHeight);
	setMenuTop();
	$(window).resize(function (){
		setMenuTop();
	});
	$(".navbar .navbar-toggler").on("click", function(){
		setMenuTop();
	});
}
	document.getElementsByTagName("BODY")[0].appendChild(overlay);
}else {
//menu under navigation
document.getElementsByTagName("nav")[0].appendChild(overlay);
}




/*
|---------------------------------------
| Mobile Menu Side Setting js
|---------------------------------------
*/
var menu_side = document.querySelector("body").getAttribute("data-menu_side");
if(menu_side==="right"){
	$(".mobileMenu").addClass("onRight");
	$(".navbar-toggler").addClass("hamburger--arrowalt-r");
} else {
	$(".navbar-toggler").addClass("hamburger--arrowalt");
}

/*
|---------------------------------------
| Brand Side js
|---------------------------------------
*/
var brand_side = document.querySelector("body").getAttribute("data-brand_side");
if(brand_side==="right"){
	//menu side left
	$(".navbar-brand").addClass("ml-auto, order-1")
}else{
	$(".navbar-brand").addClass("mr-auto, order-0")
}


/*
|---------------------------------------
| Open & Close Mobile Menu
|---------------------------------------
*/
$(".navbar-toggler, .overlay").on("click", function(){
	$(".mobileMenu, .overlay").toggleClass("open");
	$(".navbar-toggler").toggleClass("is-active");
});






/*
|---------------------------------------
| Finger swipe detector js
|---------------------------------------
*/
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
