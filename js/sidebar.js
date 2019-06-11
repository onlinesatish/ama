/*
|---------------------------------------
| Menu & Overlay js
|---------------------------------------
*/
var overlay = document.createElement('div');
overlay.classList = "overlay";

var menu_under_nav = document.querySelector("body").getAttribute("data-menu_under_nav");
//if(menu_under_nav==="true"){
if(document.querySelector("nav").classList.contains("fixed-top") && document.querySelector("nav").classList.contains("_menu_under_nav")){
//menu under navigation
function setMenuTop(){
	var navOuterHeight = document.querySelector(".navbar").offsetHeight;
	document.querySelector(".mobileMenu").style.top = (navOuterHeight - .17) + "px";
	}
	setMenuTop(); 
	window.addEventListener("resize", function (){
		setMenuTop();
	});
	document.querySelector(".navbar .navbar-toggler").addEventListener("click", function(){
		setMenuTop();
	});

	//document.getElementsByTagName("BODY")[0].appendChild(overlay);
	document.body.appendChild(overlay);
}else if(document.querySelector("nav").classList.contains("fixed-top") && document.querySelector("nav").classList.contains("_menu_over_nav")){
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
	document.querySelector(".mobileMenu").classList.add("onRight");
	document.querySelector(".navbar-toggler").classList.add("hamburger--arrowalt-r");
} else {
	document.querySelector(".navbar-toggler").classList.add("hamburger--arrowalt");
}

/*
|---------------------------------------
| Brand Side js
|---------------------------------------
*/
var brand_side = document.querySelector("body").getAttribute("data-brand_side");
if(brand_side==="right"){
	//menu side left
	document.querySelector(".navbar-brand").classList.add("ml-auto order-1")
}else{
	document.querySelector(".navbar-brand").classList.add("mr-auto,order-0")
}


/*
|---------------------------------------
| Open & Close Mobile Menu
|---------------------------------------
*/
/*$(".navbar-toggler, .overlay").on("click", function(){
	$(".mobileMenu, .overlay").toggleClass("open");
	$(".navbar-toggler").toggleClass("is-active");
});*/


document.querySelectorAll(".navbar-toggler, .overlay")[0].addEventListener("click", function(){
	document.querySelector(".overlay").classList.toggle("open");
	document.querySelector(".mobileMenu").classList.toggle("open");
	document.querySelector(".navbar-toggler").classList.toggle("is-active");
});
document.querySelectorAll(".overlay")[0].addEventListener("click", function(){
	document.querySelector(".overlay").classList.toggle("open");
	document.querySelector(".mobileMenu").classList.toggle("open");
	document.querySelector(".navbar-toggler").classList.toggle("is-active");
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
			document.querySelector(".mobileMenu").classList.remove("open");
			document.querySelector(".overlay").classList.remove("open");
			document.querySelector(".navbar-toggler").classList.remove("is-active");
		} else if(xDown < 10 && xDiff < 0){
			/* right swipe */
			document.querySelector(".mobileMenu").classList.add("open");
			document.querySelector(".overlay").classList.add("open");
			document.querySelector(".navbar-toggler").classList.add("is-active");
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

/*
|---------------------------------------
| Content Under Nav js
|---------------------------------------
*/
function contentUnderNav(){
	if(document.querySelector("nav").classList.contains("fixed-top") && document.querySelector("nav").classList.contains("_content_under_nav")){
		document.body.style.paddingTop = (document.querySelector("nav").clientHeight-.17)+"px";
	}
}
contentUnderNav();


