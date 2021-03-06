/* sidebar.js */
var nav = document.querySelector("nav");
var mobileMenu = document.querySelector(".mobileMenu");
var overlay = document.querySelector(".overlay");
var brand = document.querySelector(".navbar-brand");
	
if(nav.classList.contains("_sidebar")){
	/*
	|---------------------------------------
	| Menu & Overlay js
	|---------------------------------------
	*/
	var overlayElem = document.createElement('div');
	overlayElem.classList = "overlay";
	
	//var menu_under_nav = document.querySelector("body").getAttribute("data-menu_under_nav");
	//if(menu_under_nav==="true"){
	if(nav.classList.contains("fixed-top") && nav.classList.contains("_menu-under-nav")){
	//menu under navigation
	function setMenuTop(){
		var navOuterHeight = nav.offsetHeight;
		mobileMenu.style.top = (navOuterHeight - .17) + "px";
		}
		setMenuTop(); 
		window.addEventListener("resize", function (){
			setMenuTop();
		});
		document.querySelector(".navbar").addEventListener("click", function(){
			setMenuTop();
		});
		document.querySelector(".navbar-toggler").addEventListener("click", function(){
			setMenuTop();
		});
		
		//document.getElementsByTagName("BODY")[0].appendChild(overlay);
		document.body.appendChild(overlayElem);
	}else{
	//menu under navigation
	nav.appendChild(overlayElem);
	}
	
	
	
	
	/*
	|---------------------------------------
	| Mobile Menu Side Setting js
	|---------------------------------------
	*/
	//var menu_side = document.querySelector("body").getAttribute("data-menu_side");
	//if(menu_side==="right"){
	if(nav.classList.contains("_menu-side-right")){
		mobileMenu.classList.add("onRight");
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
		//brand side left
		brand.classList.add("ml-auto")
		brand.classList.add("order-1")
	}else{
		brand.classList.add("mr-auto")
		brand.classList.add("order-0")
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
	
	
	document.querySelector(".navbar-toggler").addEventListener("click", function(){
		document.querySelector(".overlay").classList.toggle("open");
		mobileMenu.classList.toggle("open");
		document.querySelector(".navbar-toggler").classList.toggle("is-active");
	}, false);
	document.querySelector(".overlay").addEventListener("click", function(){
		document.querySelector(".overlay").classList.toggle("open");
		mobileMenu.classList.toggle("open");
		document.querySelector(".navbar-toggler").classList.toggle("is-active");
	}, false);
	
	
	
	
	
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
				mobileMenu.classList.remove("open");
				document.querySelector(".overlay").classList.remove("open");
				document.querySelector(".navbar-toggler").classList.remove("is-active");
			} else if(xDown < 10 && xDiff < 0){
				/* right swipe */
				mobileMenu.classList.add("open");
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
		if(nav.classList.contains("fixed-top") && nav.classList.contains("_content-under-nav")){
			document.body.style.paddingTop = (nav.clientHeight-.17)+"px";
		}
	}
	contentUnderNav();
	
	
}
