@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/swiper.js')


$(document).ready(function(){
	
// mobile_menu
    
    $('.burger').click( function() { 
        $('header .navbar').slideToggle(300); 
        $('.burger').toggleClass( 'burger_active' ); 
    });
	
	var ww=window.innerWidth;
	$(window).resize(function(){
		//функция вызывается всегда, при изменении размера окна. Для того, чтобы она вызывалась только при изменении ширины окна - этот пункт
		if(ww==window.innerWidth) return;//
		if(window.innerWidth > 1279) {
			$('header .navbar').show(); 
		} else {
			$('header .navbar').hide();
			$('.burger').removeClass('burger_active'); 
		}
	});
	
// Swiper slider	
	
	var sharesSwiper = new Swiper ('swiper-shares .swiper-container', {
		slidesPerView: "auto",
      	spaceBetween: 35,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
	
	var entertainmentSwiper = new Swiper ('.swiper-entertainment .swiper-container', {
		slidesPerView: "3",
      	spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
	
	var eventsSwiper = new Swiper ('.swiper-events .swiper-container', {
		slidesPerView: "auto",
      	spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
	
	
// plates height
	
	$(window).resize(function(){
		$('.plates-line__inner').css('height', $('.plates-line__inner').width() + 'px');
	});
	
//seotext open
	
	$(window).resize(function(){
		$('.more-info').removeClass('open');
		var h1=$('.types-screen__content p:eq(1)').height();
		var h2=$('.exclusive-screen__text .caption').height();
		var h3=$('.exclusive-screen__text p:eq(1)').height();
		$('.exclusive-screen__text').css('height', (h2 + h3 + 27) + 'px');
		$('.types-screen__content').removeClass('open').css('height', h1 + 'px');
	});
	
	$('.types-screen .more-info').click(function(){
		if(window.innerWidth > 1279) {
			$(this).addClass('open');
			$(this).parent().parent().addClass('open');
		} else {
			$(this).addClass('open');
			$(this).parent().parent().css('height', 'auto');
		}
	});
	
	$('.exclusive-screen .more-info').click(function(){
		$(this).parent().parent().css('height', 'auto');
		$(this).addClass('open');
	});

// 	slick-slider	
	
	$('.img-slider').slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		arrows: false,
		autoplay: true,
    	autoplaySpeed: 2000,
	});
	
	$('.exclusive').slick({
		infinite: true,
		slidesToShow: 1,
		dots: true,
		arrows: true,
	});
	
	$('.examples').slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
			  }
			},
		]
	});
	
	$('.reviews').slick({
		infinite: true,
		slidesToShow: 3,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				arrows: false,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
			  }
			},
		]
	});
	
// plates height
	
	$(window).resize(function(){
		$('.partners__partner').css('height', $('.partners__partner').width() + 'px');
	});
	
	
	
	$(window).resize();
	setTimeout(function(){
		ww=0;
		$(window).resize();
	},400)
}); 