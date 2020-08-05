$(function(){


	// $(".products-item__rateyo").rateYo({
	// 	rating: 5,
	// 	starWidth: "12px",
	// 	readOnly: true
	// });

	$('.slider__inner').slick({
		dots: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$",
	});

	$('.icon-th-list').on('click', function(){
		$('.products-item').addClass('list')
		$('.icon-th-list').addClass('active')
		$('.icon-th-large').removeClass('active')
	});
	$('.icon-th-large').on('click', function(){
		$('.products-item').removeClass('list')
		$('.icon-th-large').addClass('active')
		$('.icon-th-list').removeClass('active')
	});

	$('.header__menu-btn').on('click', function(){
		$('.header__menu-list').slideToggle();
	});

	$('.header__btn-menu').on('click', function(){
		$('.header__buttons').toggleClass('active');
	});

	$('.product-details__tabs .tab').on('click', function(event){
		var id = $(this).attr('data-id');
		$('.product-details__tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.product-details__tabs .tabs').find('.tab').removeClass('active').hide();
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});


	var mixer = mixitup('.products__box');


});