$(document).ready(function(){


	 $(".main_search_close img").css("marginLeft",$(".header_search").offset().left)

	 $(".header_search").click(function(){

	 	$(".main_search").addClass("active");
	 })
	 $(".main_search_close").click(function(){

	 	$(".main_search").removeClass("active");
	 })



	 // dropdown js

	 $(".nav_dropdown").mouseenter(function(e){
	 	e.preventDefault()
	 	e.stopPropagation()
	 	$(".nav_dropdown").removeClass("active")
	 	$(this).addClass("active")
	 	$(".language_container").removeClass("active")
	 })



	  // $(".inner_dropdown_links a").mouseenter(function(){

	  // 	$(this).parent().parent().prev().addClass("active")
	  // })
	  // $(".inner_dropdown_links a").mouseleave(function(){

	  // 	$(this).parent().parent().prev().removeClass("active")
	  // })

  $(".inner_dropdown").mouseenter(function(){

	  $(this).find("a").addClass("active")
})

   $(".header_right").mouseleave(function(){

	  $(this).find("a").removeClass("active")
})

	 $(window).click(function(){
	 	$(".nav_dropdown").removeClass("active");
	 	$(".language_container").removeClass("active")

	 })

	 $(".nav_dropdown_child, .language_container").click(function(e){

	 	e.stopPropagation()
	 })

	 var headerX = false;






	 //language js

	 $(".language_dropdown").click(function(e){
	 	e.preventDefault()
	 	e.stopPropagation()

	 	$(".language_container").toggleClass("active")
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
	slidesToScroll: 1,
	dots:true,
	arrows:false,

	responsive: [
		{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			
		}
		},
		{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		
			
		}
	},
	{
	  breakpoint: 768,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
	  }
	}
	
  ]


  

});



	  $('.team_slider2').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots:true,
	arrows:false,

	responsive: [
		{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			
		}
		},
		{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		
			
		}
	},
	{
	  breakpoint: 768,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
	  }
	}
	
  ]


  

});




$('.main_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots:true,
	arrows:true,

  });
  

$('.insight_tab').each(function(index){


  var txt = $('.insight_tab .insight_tab_text').eq(index).text()
 
  if(txt.length > 200) {
    $('.insight_tab .insight_tab_text').eq(index).text(txt.substring(0,200) + '...')

  }
})

$('.news_section').each(function(index){

  var txt = $('.news_section .latest_news_info').eq(index).text()
 
  if(txt.length > 200) {
    $('.news_section .latest_news_info').eq(index).text(txt.substring(0,200) + '...')

  }
})

	
})


$(".exit").click(function () {
    $(".insights_subscribe").css("display", "none");
});


$(document).ready(function(){
	// $(".office_box").click(function(){

	//   $("img").toggleClass("rotate");


	// });


	$(".main_box").on("click", function () {
		$(this)
		  .find($(".office_info"))
		  .slideToggle();

	
	});


	$(".main_box").on("click", function () {
		$(this)
		  .find($("img"))
		  .toggleClass("rotate");
	  });

  });


  $(document).on('keypress', ':input[type="number"]', function (e) {
    if (isNaN(e.key)) {
        return false;
    }
});


$(document).on('change','.up', function(){
	var names = [];
	var length = $(this).get(0).files.length;
	  for (var i = 0; i < $(this).get(0).files.length; ++i) {
		  names.push($(this).get(0).files[i].name);
	  }
	  // $("input[name=file]").val(names);
	if(length>2){
	  var fileName = names.join(', ');
	  $(this).closest('.form-group').find('.form-control').attr("value",length+" files selected");
	}
	else{
	  $(this).closest('.form-group').find('.form-control').attr("value",names);
	}
 });

var vac = true;


// $(".vacancy_list_box").mouseenter(function(){

// 	if (vac) {

// 	$(this).find(".vac_apply_button_box").slideDown()
// 	vac = false;
// 	}		

// 	setTimeout(function(){

// 		vac = true;
// 	},500)
// })


// $(".vacancy_list_box").mouseleave(function(){
	
// 	$(".vac_apply_button_box").slideUp()

// })


 


 


  