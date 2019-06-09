$(function(){
	//if you want mobile menu goes below navbar then uncomment this code.
	/*
	function setMenuTop(){
		var navOuterHeight = $(".navbar").outerHeight();
		$(".mobileMenu").css("top", navOuterHeight)
	}
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
});
