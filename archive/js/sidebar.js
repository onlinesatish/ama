var overlay = document.createElement('div');
		overlay.classList = "overlay";
		
		var menu_under_nav = document.querySelector("body").getAttribute("data-menu_under_nav");
		if(menu_under_nav==="true"){
		//menu under navigation
		//function setMenuTop(){
			var navOuterHeight = $(".navbar").outerHeight();
			$(".mobileMenu").css("top", navOuterHeight);
			document.getElementsByTagName("BODY")[0].appendChild(overlay);
		//}
		}else {
		//menu under navigation
		document.getElementsByTagName("nav")[0].appendChild(overlay);
		}
		
		
		
		
		//menu side
		var menu_side = document.querySelector("body").getAttribute("data-menu_side");
		if(menu_side==="right"){
		$(".mobileMenu").addClass("onRight");
		$(".navbar-toggler").addClass("hamburger--arrowalt-r");
		} else {
		$(".navbar-toggler").addClass("hamburger--arrowalt");
		}
		
		/*/toggler side
		var toggler_side = document.querySelector("body").getAttribute("data-toggler_side");
		if(toggler_side==="left"){
		//menu side left
		$(".navbar-brand").addClass("order-1")
		alert('data-toggler_side="left"');
		}else{
		$(".navbar-brand").addClass("order-0")
		}*/
		
		
		//brand side
		var brand_side = document.querySelector("body").getAttribute("data-brand_side");
		if(brand_side==="right"){
		//menu side left
		$(".navbar-brand").addClass("ml-auto, order-1")
		//$(".navbar-brand").addClass("order-1")
		}else{
		$(".navbar-brand").addClass("mr-auto, order-0")
		//$(".navbar-brand").addClass("order-0")
		}
		
		//var nav = document.getElementById("nav");
		//nav.insertBefore(overlay, nav.childNodes[0]);
		
		
		new WOW().init();
		
		
		
	/*/	$(function(){
		//if you want mobile menu goes below navbar then uncomment this code.
		setMenuTop();
		$(window).resize(function (){
		setMenuTop();
		});
		$(".navbar .navbar-toggler").on("click", function(){
		setMenuTop();
		});
		*/
		$(".navbar-toggler, .overlay").on("click", function(){
		$(".mobileMenu, .overlay").toggleClass("open");
		$(".navbar-toggler").toggleClass("is-active");
		});
		//});
