@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/swiper.js')
@@include('./lib/jquery.viewportchecker.js')
@@include('./lib/select2.js')
@@include('./lib/jquery.maskedinput.js')


$(document).ready(function(){
	
// mobile_menu
    
    $('.burger').click( function() { 
        $('.menu-column').slideToggle(300); 
    });
	
	function setHeiHeight() {
		$('.menu-column').css({
			height: $(window).height() + 'px'
		});
	}
	
	var ww=window.innerWidth;
	$(window).resize(function(){
		//функция вызывается всегда, при изменении размера окна. Для того, чтобы она вызывалась только при изменении ширины окна - этот пункт
		if(ww==window.innerWidth) return;//
		if(window.innerWidth > 767) {
			$('.menu-column').show().css({
				height: '100%'
			});
		} else {
			$('.menu-column').hide();
			setHeiHeight();
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
	
//text open
	
	$('.more-info').click(function(){
		$(this).addClass('open');
	});

// select2
	
	$('.select2').select2({
		width: 'resolve',
		minimumResultsForSearch: Infinity,
		allowClear: true
	});
	
// tabs
	
    $('.tabs__button').click(function(){ 
		$('.tabs__button').removeClass('active');
		$(this).addClass('active');
		$('.tabs__content').css('margin-left','-'+$(this).index()+'00%'); 
    });
	
// mask
	
	$('input[type="tel"]').mask("8-999-999-99-99");
	
	
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
	
	var sightSwiper = new Swiper ('.swiper-restaurants .swiper-container', {
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
			768: { 
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
			el: '.swiper-pagination',
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
	
	var servicesSwiper = undefined;
	function initSwiper() {
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
					500: {
						slidesPerView: 2,
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
	initSwiper();

	$(window).resize(function() {
		initSwiper();
	});
	
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
		navigation: {
			nextEl: '.swiper-sight .swiper-button-next',
			prevEl: '.swiper-sight .swiper-button-prev',
		},
		breakpoints: {
			500: { 
				slidesPerView: 2,
				spaceBetween: 20,
			},
			640: { 
				slidesPerView: 3,
				slidesPerColumn: 2,
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
	
	var sightSwiper = new Swiper ('.swiper-header .swiper-container', {
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
//		pagination: {
//			el: '.swiper-pagination',
//			type: 'fraction',
//		},
	})
	
	
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
	
	$('.sight__item-wr').viewportChecker({
		classToAdd: 'visible',
		offset: 50,
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
	
	$('.plate .contact').viewportChecker({
		classToAdd: 'visible',
		offset: 10,
		repeat: true,
	}); 

	
$(window).resize();
setTimeout(function(){
	ww=0;
	$(window).resize();
},400)
}); 

// 	GoogleMap
	
var markerImage, marker;

function initMap() {
	initialize();

	markerImage = new google.maps.MarkerImage(
		'../images/icons/map.png',
		new google.maps.Size(300, 300),
//		new google.maps.Point(0, 0)
	);

	marker = new google.maps.Marker({
		icon: markerImage,
		position: {lat: 54.192193, lng: 37.617769},
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
		center: {lat: 54.192223, lng: 37.619049},
		zoom: 18,
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
			"elementType": "labels",
			"stylers": [
			  {
				"color": "#63533e"
			  },
			  {
				"lightness": -40
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
			"featureType": "administrative.country",
			"elementType": "labels",
			"stylers": [
			  {
				"color": "#6e5c43"
			  }
			]
		  },
		  {
			"featureType": "administrative.country",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  },
			  {
				"visibility": "on"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative.locality",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#bdbdbd"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [
			  {
				"saturation": -25
			  },
			  {
				"visibility": "on"
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
				"color": "#757575"
			  },
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#181818"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#1b1b1b"
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
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#4e4e4e"
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
		  {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#3d3d3d"
			  }
			]
		  }
		]
//		[{"elementType": "geometry",
//			"stylers": [
//			  {
//				"color": "#1b1b1a"
//			  }
//			]
//		},
//		{"elementType": "labels",
//			"stylers": [
//			  {
//				"color": "#63533e"
//			  },
//			  {
//				"lightness": -40
//			  },
//			  {
//				"visibility": "on"
//			  },
//			  {
//				"weight": 1.5
//			  }
//			]
//		},
//		{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#322f2c"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#2b2b24"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}, {"color":"#63533e"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#191919"}]},
//		{"featureType": "road", "elementType":"labels.text.fill","stylers": [{
//        "color": "#63593e"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#e6e6e6"},{"visibility":"off"}]}]
	});
}