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
      	spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
	
	var shopsSwiper = new Swiper ('.swiper-shops .swiper-container', {
		slidesPerView: "auto",
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
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
	
	// height
	
	var w= $('.dark-plates__plate-wr').width();
	$('.dark-plates__plate-wr').css({
		'height': w + 'px'
	});
	
	$(window).resize(function(){
		var w= $('.dark-plates__plate-wr').width();
		$('.dark-plates__plate-wr').css({
			'height': w + 'px'
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
		offset: 350,
		repeat: true,
	});
	
	$('.shares-events .swiper-container').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
		repeat: true,
	});
	
	$('.restaurants-screen .dark-plates ').viewportChecker({
		classToAdd: 'visible',
		offset: 250,
		repeat: true,
	});
	
	$('.shops-screen .swiper-container').viewportChecker({
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