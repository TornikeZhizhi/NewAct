$(document).ready(function(){


	 $(".main_search_close img").css("marginLeft",$(".header_search").offset().left)

	 $(".header_search").click(function(){

	 	$(".main_search").addClass("active");
	 })
	 $(".main_search_close").click(function(){

	 	$(".main_search").removeClass("active");
	 })



	 // dropdown js

	 $(".nav_dropdown").click(function(e){
	 	e.preventDefault()
	 	e.stopPropagation()
	 	$(".nav_dropdown").removeClass("active")
	 	$(this).addClass("active")
	 	$(".language_container").removeClass("active")
	 })



	  $(".inner_dropdown_links a").mouseenter(function(){

	  	$(this).parent().parent().prev().addClass("active")
	  })
	  $(".inner_dropdown_links a").mouseleave(function(){

	  	$(this).parent().parent().prev().removeClass("active")
	  })



	 $(window).click(function(){
	 	$(".nav_dropdown").removeClass("active");
	 	$(".language_container").removeClass("active")

	 })

	 $(".nav_dropdown_child, .language_container").click(function(e){

	 	e.stopPropagation()
	 })


	 //language js

	 $(".language_dropdown").click(function(e){
	 	e.preventDefault()
	 	e.stopPropagation()

	 	$(".language_container").addClass("active")
	 })



	
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
		$(".mobile_header").toggleClass("active")
	});



	$(".dropdown_mobile_nav").click(function(e){

		e.preventDefault()
		$(".mobile_nav ul li a").css("opacity","0.7")
		$(this).next().slideToggle()
		$(this).toggleClass("active")

	})

	  $('.team_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

 	
})