$(document).ready(function(){

	var totalSlides = 3
	var currentSlide = 1

	$(".right").click(function(){
		if(currentSlide<totalSlides){
			$(".sliderbox").animate({left:"-=100%"},"300")
			currentSlide = currentSlide+1
	}
	}) //end right click

	$(".left").click(function(){
		if(currentSlide>1){
			$(".sliderbox").animate({left:"+=100%"},"300")
			currentSlide = currentSlide-1
	}
	}) //end left click
})

