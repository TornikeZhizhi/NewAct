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
})