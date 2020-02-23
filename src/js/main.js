@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/swiper.js')
@@include('./lib/jquery.viewportchecker.js')
@@include('./lib/jquery.maskedinput.js')


$(document).ready(function(){
	
// mobile_menu
    
    $('.burger').click( function() { 
        $('.menu-column').slideToggle(300); 
    });
	
	var ww=window.innerWidth;
	$(window).resize(function(){
		//функция вызывается всегда, при изменении размера окна. Для того, чтобы она вызывалась только при изменении ширины окна - этот пункт
		if(ww==window.innerWidth) return;//
		if(window.innerWidth > 767) {
			$('.menu-column').show(); 
		} else {
			$('.menu-column').hide();
		}
	});
	
// Swiper slider	
	
	var sharesSwiper = new Swiper ('.swiper-shares .swiper-container', {
		slidesPerView: "auto",
		spaceBetween: 20,
		navigation: {
			nextEl: ('.swiper-shares .swiper-button-next'),
			prevEl: ('.swiper-shares .swiper-button-prev'),
		},
		breakpoints: {
			1024: {
			  slidesPerView: "auto",
			  spaceBetween:32,
			},
		}
	})
	
	var sharesSwiper = new Swiper ('.swiper-restaurants .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-restaurants .swiper-button-next',
			prevEl: '.swiper-restaurants .swiper-button-prev',
		},
		breakpoints: {
			450: {
			  slidesPerView: 2,
				spaceBetween: 20,
			},
			640: {
			  slidesPerView: 3,
				spaceBetween: 20,
			},
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 32,
			},
			1280: {
			  slidesPerView: 4,
			  spaceBetween: 32,
			},
			1440: {
			  slidesPerView: 5,
				spaceBetween: 32,
			},
		}
	})
	
	var shopsSwiper = new Swiper ('.swiper-shops .swiper-container', {
		slidesPerView: "auto",
		spaceBetween: 32,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-shops .swiper-button-next',
			prevEl: '.swiper-shops .swiper-button-prev',
		},
	})
	
	var entertainmentSwiper = new Swiper ('.swiper-entertainment .swiper-container', {
		slidesPerView: "1",
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-entertainment .swiper-button-next',
			prevEl: '.swiper-entertainment .swiper-button-prev',
		},
		breakpoints: {
			640: {
			  slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
			  spaceBetween: 20,
			},
			1280: {
			  slidesPerView: 3,
			  spaceBetween: 32,
			},
		}
	})
	
	var eventsSwiper = new Swiper ('.swiper-events .swiper-container', {
		slidesPerView: "auto",
      	spaceBetween: 32,
		navigation: {
			nextEl: '.swiper-events .swiper-button-next',
			prevEl: '.swiper-events .swiper-button-prev',
		},
	})
	
// plates height
	
	// height
	
	var w1= $('.dark-plate').width();
	$('.dark-plate').css({
		'height': w1 + 'px'
	});
	
	$(window).resize(function(){
		var w2= $('.dark-plate').width();
		$('.dark-plate').css({
			'height': w2 + 'px'
		});
	});
	
// animation
	
	$('.mosaic__group_first').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
		repeat: true,
	});
	
	$('.mosaic__group_second').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
		repeat: true,
	});
	
	$('.swiper-shares .swiper-container').viewportChecker({
		classToAdd: 'visible',
		offset: 300,
		repeat: true,
	});
	
	$('.swiper-restaurants ').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	});
	
	$('.swiper-shops .swiper-container').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
		repeat: true,
	});
	
	$('.simple-plates__plate-wr').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
		repeat: true,
	}); 
	
	$('.entertainment').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
		repeat: true,
	}); 
	
	$('.film').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
		repeat: true,
	}); 
	
	$('.sight__item-wr').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
		repeat: true,
	}); 
	
	$('.footer-bg').viewportChecker({
		classToAdd: 'visible',
		offset: 100,
		repeat: true,
	}); 
	
	$('.footer-info').viewportChecker({
		classToAdd: 'visible',
		offset: 150,
		repeat: true,
	}); 
     
	$('.footer-contacts').viewportChecker({
		classToAdd: 'visible',
		offset: 100,
		repeat: true,
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
	
// mask
	
	$('input[type="tel"]').mask("8-999-999-99-99");

	
	$(window).resize();
	setTimeout(function(){
		ww=0;
		$(window).resize();
	},400)
}); 