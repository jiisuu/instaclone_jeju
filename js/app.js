$(document).ready(function(){
// here we put all the code 
	var heart = $('.heart');

	heart.click(function(){
		$(this).toggleClass('fa-heart-o')
		$(this).toggleClass('heart-red fa-heart')
	})
})