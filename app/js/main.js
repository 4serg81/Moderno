$(function(){


	$(".products-item__rateyo").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true
	});

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


	var mixer = mixitup('.products__box');


});