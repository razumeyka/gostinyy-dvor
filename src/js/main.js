@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/swiper.js')
@@include('./lib/jquery.viewportchecker.js')
@@include('./lib/select2.full.js')
@@include('./lib/jquery.validate.js')


$(document).ready(function(){
	
	$('.burger').click( function() { 
        $('.menu-column').toggleClass('visible').css({
			'height': window.innerHeight + 'px'
		});
		$('body').toggleClass('hidden'); 
    });
	
	var ww=window.innerWidth;
	$(window).resize(function(){
		//функция вызывается всегда, при изменении размера окна. Для того, чтобы она вызывалась только при изменении ширины окна - этот пункт
		if(ww==window.innerWidth) return;//
		if(window.innerWidth > 767) {
			$('body').removeClass('hidden'); 
		} else {
			if ($('.menu-column').hasClass('visible')) {
				$('body').addClass('hidden'); 
			} else {
				$('body').removeClass('hidden');
			}
		}
	});
	
	
// plus-button
	
	$('.plus-button').click(function(){
		$(this).slideToggle(300); 
		$(this).parent().next().addClass('active');
	});
	
	
// plates height
	
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
	
	var w3= $('.photo-info_big').width();
	$('.photo-info_big').css({
		'height': w3 + 'px'
	});
	
	$(window).resize(function(){
		var w4= $('.photo-info_big').width();
		$('.photo-info_big').css({
			'height': w4 + 'px'
		});
	});
	
	
//text open
	
	$('.more-info').click(function(){
		$(this).addClass('open');
	});

	
// select2
	
	$('.select2').select2({
		width: 'resolve',
		minimumResultsForSearch: Infinity,
		allowClear: true,
		dropdownCssClass: 'select-new-dropdown'
	});
	
	$(window).resize(function() {
		if ( window.innerWidth < 768 ) {
			$('.select2').css('width', "250px");
		}
	});

	
// tabs
	
	
	$('.tabs__content').each(function( index ) {
		var h=$(this).find('.tabs__item:first-child').height();
		$(this).css({
			'height': h + 'px'
		});
	});
	
	$('.tabs__button').click(function(){ 
		var index=$(this).index();
		var height=$(this).parent().next('.tabs__content').find('.tabs__item').eq(index).height();
		$('.tabs__button').removeClass('active');
		$(this).addClass('active');
		$('.tabs__content').css({
			'margin-left': '-'+index+'00%',
			'height': height + 'px'
		});
	});
		
	
// scrolltop
	
	var height = window.innerHeight;
	var footerStart = $('.footer-info').offset().top - 100;
	var footerHeight = $('.footer-info').innerHeight();
	$(window).scroll(function () {
		var top = $(window).scrollTop();
		if((top > height) && ((top + height - 50) < (footerStart + footerHeight))){
			$('.go-up').fadeIn('slow');
			if ((top + height - 50) > footerStart ) {
				$('.go-up').addClass('shadow');
			} else {
				$('.go-up').removeClass('shadow');
			}
		} else {
			$('.go-up').fadeOut('slow');
		}
	});
	
	$('.go-up').click(function(){ 
		var el = $(this);
		var dest = el.attr('href'); // получаем направление
		if(dest !== undefined && dest !== '') { // проверяем существование
			$('html').animate({
				scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
			}, 500 // скорость прокрутки
			);
		}
		return false;
	});
	
//more-info open
	
	$('.more-button').click(function(){
		var h1=$(this).parent().parent().height();
		var h2=$(this).next('.more-info').height();
		$(this).addClass('open');
		$(this).next('.more-info').addClass('open');
		$(this).parent().parent().parent().css('height', (h1 + h2) + 'px');
	});
	
		
//calendar
	
	$('.calendar__year').click(function(){
		$('.calendar__line').removeClass('active');
		$(this).parent().addClass('active');
	});

	
// validate
	
	$('.wpcf7-form').validate({
		rules: {
			name: 'required',
			ucomment: 'required',
			mail: {
			  required: true,
			  email: true,
			}
		},
		submitHandler: function() {
			$.ajax({
				url: "/form.php",
				method: "POST",
				data:$(this).serializeArray(),
			}).always(function(msg){
				if(msg=="OK"){
					$.fancybox.open({
					src: '#thx',
					type : 'inline',
					});	
				}else{
					$.fancybox.open({
						src: '#err',
						type : 'inline',
					});
				}
			})
		}
	});
	
	
// schema
	
	document.addEventListener("touchstart", function(){}, true);
	
	// Ховер по магазину - открывается подсказка
	$('.scheme .cls-1').mouseenter(function(){
		$('.hover-plate').removeClass('hover');
		$('.scheme .cls-1').removeClass('active');
		$(this).addClass('active');
		var hoverPlate = $('.hover-plate[data-id=' + $(this).data('id') + ']');
		hoverPlate.addClass('hover');
		var leftWidth = hoverPlate.innerWidth();
		var topHeight = hoverPlate.innerHeight();
		var offsetTop = $(this)[0].getBoundingClientRect().top - $('.scheme')[0].getBoundingClientRect().top;
		var offsetLeft = $(this)[0].getBoundingClientRect().left - $(this).closest('.scheme')[0].getBoundingClientRect().left;
		var centerLeft = parseInt($(this)[0].getBoundingClientRect().right - $(this)[0].getBoundingClientRect().left);
		hoverPlate.css({
			'top': (offsetTop - topHeight) + 'px',
			'left': (offsetLeft - leftWidth/2 + centerLeft/2) + 'px'
		});
	});	
	
	$('.scheme .cls-1').mouseleave(function(){
		$('.hover-plate').removeClass('hover');
		$(this).removeClass('active');
	});
	
	$('.hover-plate').mouseenter(function(){
		$(this).addClass('hover');
		$('.scheme .cls-1[data-id=' + $(this).data('id') + ']').addClass('active');
	});
	
	$('.hover-plate').mouseleave(function(){
		$(this).removeClass('hover');
		$('.scheme .cls-1[data-id=' + $(this).data('id') + ']').removeClass('active');
	});
	
	
	// Ховер по лого - открывается подсказка
	$('.scheme #LOGO g').mouseenter(function(){
		$('.hover-plate').removeClass('hover');
		$('.scheme .cls-1').removeClass('active');
		var path = $('.scheme .cls-1[data-id=' + $(this).data('id') + ']');
		path.addClass('active');
		var hoverPlate = $('.hover-plate[data-id=' + $(this).data('id') + ']');
		hoverPlate.addClass('hover');
		var leftWidth = hoverPlate.innerWidth();
		var topHeight = hoverPlate.innerHeight();
		var offsetTop = path[0].getBoundingClientRect().top - $('.scheme')[0].getBoundingClientRect().top;
		var offsetLeft = path[0].getBoundingClientRect().left - $(this).closest('.scheme')[0].getBoundingClientRect().left;
		var centerLeft = parseInt(path[0].getBoundingClientRect().right - path[0].getBoundingClientRect().left);
		hoverPlate.css({
			'top': (offsetTop - topHeight) + 'px',
			'left': (offsetLeft - leftWidth/2 + centerLeft/2) + 'px'
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
	
	$('.simple-plate').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
		repeat: true,
	}); 
	
	$('.entertainment__bg').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	}); 
	
	$('.film').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
		repeat: true,
	}); 
	
	$('.sight__item').viewportChecker({
		classToAdd: 'visible',
		offset:10,
		repeat: true,
	}); 
	
	$('.footer-bg').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	}); 
	
	$('.footer-info').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	}); 
     
	$('.footer-contacts').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	}); 

	$('.inner-page__header').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	}); 
	
	$('.plate .contact').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	}); 
	
	$('.plate__contact-line svg').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	}); 
	
	$('.plate__location .button').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	});

	$('.goods-plate').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
		repeat: true,
	});

	$('.big-letter').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	});

	$('.swiper-restaurants-page').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	});

	$('.event-banner').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	});

	$('.inner-page__right-text p').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	});
	

	$(window).resize();
	setTimeout(function(){
		ww=0;
		$(window).resize();
	},100)
	
// Swiper sliders	
	
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
	
	var restaurantsSwiper = new Swiper ('.swiper-restaurants .swiper-container', {
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
		spaceBetween: 20,
		pagination: {
			el: '.swiper-shops .swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-shops .swiper-button-next',
			prevEl: '.swiper-shops .swiper-button-prev',
		},
		breakpoints: {
			1024: {
			  slidesPerView: "auto",
			  spaceBetween:32,
			},
		}
	})
	
	var simrestSwiper = new Swiper ('.swiper-simrest .swiper-container', {
		slidesPerView: "auto",
		spaceBetween: 20,
		pagination: {
			el: '.swiper-simrest .swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-simrest .swiper-button-next',
			prevEl: '.swiper-simrest .swiper-button-prev',
		},
		breakpoints: {
			1024: {
			  slidesPerView: "auto",
			  spaceBetween:32,
			},
		}
	})
	
	var funSwiper = new Swiper ('.swiper-fun .swiper-container', {
		slidesPerView: "auto",
		spaceBetween: 20,
		pagination: {
			el: '.swiper-fun .swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-fun .swiper-button-next',
			prevEl: '.swiper-fun .swiper-button-prev',
		},
		breakpoints: {
			1024: {
			  slidesPerView: "auto",
			  spaceBetween:32,
			},
			1440: {
			  slidesPerView: "2",
			  spaceBetween:32,
			},
		}
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
			1024: {
				slidesPerView: 2,
			  spaceBetween: 32,
			},
			1280: {
			  slidesPerView: 3,
			  spaceBetween: 32,
			},
		}
	})
	
	var eventsSwiper = new Swiper ('.swiper-events .swiper-container', {
		slidesPerView: 1,
      	spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-events .swiper-button-next',
			prevEl: '.swiper-events .swiper-button-prev',
		},
		breakpoints: {
			640: {
			  slidesPerView: 3,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: "auto",
			  spaceBetween: 20,
			},
			1024: {
				slidesPerView: "auto",
			  spaceBetween: 32,
			},
		}
	})
	
	var sightSwiper = new Swiper ('.swiper-sight .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			500: { 
				slidesPerView: 2,
				spaceBetween: 20,
			},
			640: { 
				slidesPerView: 3,
				slidesPerColumn: 1,
				slidesPerColumnFill: "row",
				spaceBetween: 20,
			},
			768: { 
				slidesPerView: 2,
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				spaceBetween: 32,
			},
		}
	})
	
	var headerSwiper = new Swiper ('.swiper-header .swiper-container', {
		slidesPerView: 1,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		  },
		navigation: {
			nextEl: '.swiper-header .swiper-button-next',
			prevEl: '.swiper-header .swiper-button-prev',
		},
		pagination: {
			el: '.swiper-header .swiper-pagination',
			type: 'progressbar',
		},
	})
	
	var servicesSwiper = undefined;
	function initServicesSwiper() {
		var screenWidth = $(window).outerWidth();
		if ( (screenWidth < (1024)) && (servicesSwiper == undefined)) {
			servicesSwiper = new Swiper ('.swiper-services .swiper-container', {
				slidesPerView: 1,
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiper-services .swiper-button-next',
					prevEl: '.swiper-services .swiper-button-prev',
				},
				breakpoints: {
					640: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					768: { 
						slidesPerView: 2,
						slidesPerColumn: 3,
						slidesPerColumnFill: "row",
						spaceBetween: 20,
					},
				}
			})
		} else if ((screenWidth > 1023) && (servicesSwiper != undefined)) {
		  servicesSwiper.destroy();
		  servicesSwiper = undefined;
		  $('.swiper-services .swiper-wrapper').removeAttr('style');
		  $('.swiper-services .swiper-slide').removeAttr('style');
		}
	}
	initServicesSwiper();

	$(window).resize(function() {
		initServicesSwiper();
	});
	
	var restSwiper = undefined;
	function initSwiper() {
		var screenWidth = $(window).outerWidth();
		if ( (screenWidth < (768)) && (restSwiper == undefined)) {
			restSwiper = new Swiper ('.swiper-restaurants-page .swiper-container', {
				slidesPerView: 1,
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiper-restaurants-page .swiper-button-next',
					prevEl: '.swiper-restaurants-page .swiper-button-prev',
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
				}
			})
		} else if ((screenWidth > 767) && (restSwiper != undefined)) {
		  restSwiper.destroy();
		  restSwiper = undefined;
		  $('.swiper-restaurants-page .swiper-wrapper').removeAttr('style');
		  $('.swiper-restaurants-page .swiper-slide').removeAttr('style');
		}
	}
	initSwiper();

	$(window).resize(function() {
		initSwiper();
	});
	
	var ShopsGroupSwiper = undefined;
	function initShopsGroupSwiper() {
		var screenWidth = $(window).outerWidth();
		if ( (screenWidth < (768)) && (ShopsGroupSwiper == undefined)) {
			ShopsGroupSwiper = new Swiper ('.swiper-shops-only-mobile .swiper-container', {
				slidesPerView: 1,
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiper-shops-only-mobile .swiper-button-next',
					prevEl: '.swiper-shops-only-mobile .swiper-button-prev',
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
				}
			})
		} else if ((screenWidth > 767) && (ShopsGroupSwiper != undefined)) {
		  ShopsGroupSwiper.destroy();
		  ShopsGroupSwiper = undefined;
		  $('.swiper-shops-only-mobile .swiper-wrapper').removeAttr('style');
		  $('.swiper-shops-only-mobile .swiper-slide').removeAttr('style');
		}
	}
	initShopsGroupSwiper();

	$(window).resize(function() {
		initShopsGroupSwiper();
	});

	var ProductsSwiper = undefined;
	function initProductsSwiper() {
		var screenWidth = $(window).outerWidth();
		if ( (screenWidth < (768)) && (ProductsSwiper == undefined)) {
			ProductsSwiper = new Swiper ('.swiper-products .swiper-container', {
				slidesPerView: 1,
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiper-products .swiper-button-next',
					prevEl: '.swiper-products .swiper-button-prev',
				},
				breakpoints: {
					450: { 
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: { 
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}
			})
		} else if ((screenWidth > 767) && (ProductsSwiper != undefined)) {
		  ProductsSwiper.destroy();
		  ProductsSwiper = undefined;
		  $('.swiper-products .swiper-wrapper').removeAttr('style');
		  $('.swiper-products .swiper-slide').removeAttr('style');
		}
	}
	initProductsSwiper();

	$(window).resize(function() {
		initProductsSwiper();
	});
	
}); 

// 	GoogleMap
	
var markerImage, marker;

function initMap() {
	initialize();

	markerImage = new google.maps.MarkerImage(
		'../images/icons/map.png',
		new google.maps.Size(300, 300),
		new google.maps.Point(0, 0),
		new google.maps.Point(150, 150)
	);

	marker = new google.maps.Marker({
		icon: markerImage,
		position: {lat: 54.191818, lng: 37.618197},
		map: map,
		title:"ТРЦ Гостиный двор"
	});		
}

//инициализация карты в div "map"

var map;
function initialize() {
	map = new google.maps.Map(document.getElementById('map'), {
		disableDefaultUI: true,
		scrollwheel: false,
		center: {lat:54.191749, lng: 37.617311},
		zoom: 17,
		styles:[
		  {  
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#1b1b1a"
			  }
			]
		  },
			{
			"featureType": 'landscape.humanmade', // обводка домов и зданий
			"elementType": 'geometry.stroke',
			"stylers": [{color: '#6e5c43'}] 
		  },
		{
			featureType: 'administrative.land_parcel', // номера домов
			elementType: 'labels.text.fill',
			stylers: [{color: '#6e5c43'}]
		  },
		  {
			"elementType": "labels.icon",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"elementType": "labels.text",
			"stylers": [
			  {
				"color": "#6e5c43"
			  }
			]
		  },
		  {
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#63533e"
			  }
			]
		  },
		  {
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#63533e"
			  },
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#6e5c43"
			  }
			]
		  },
		  {
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative",
			"elementType": "labels",
			"stylers": [
			  {
				"color": "#6e5c43"
			  },
			  {
				"weight": 1
			  }
			]
		  },
		  {
			"featureType": "administrative",
			"elementType": "labels.icon",
			"stylers": [
			  {
				"visibility": "on"
			  }
			]
		  },
		  {
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"stylers": [
			  {
				"visibility": "on"
			  }
			]
		  },
		  {
			"featureType": "administrative.locality",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#63533e"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [
			  {
				"color": "#63533e"
			  },
			  {
				"visibility": "on"
			  },
			  {
				"weight": 1.5
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text",
			"stylers": [
			  {
				"color": "#63533e"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#63533e"
			  },
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#191919"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
			  {
				"color": "#191919"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#63593e"
			  }
			]
		  },
		  {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#191919"
			  }
			]
		  },
		  {
			"featureType": "road.arterial",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#373533"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#191919"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#373533"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#373533"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#63533e"
			  }
			]
		  },
		  {
			"featureType": "transit",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#000000"
			  }
			]
		  },
		]
	});
}