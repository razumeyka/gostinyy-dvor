@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/swiper.js')
@@include('./lib/jquery.viewportchecker.js')
@@include('./lib/select2.full.js')
@@include('./lib/jquery.maskedinput.js')


$(document).ready(function(){
	
	@@include('./lib/swiper-sliders.js')
	@@include('./lib/animation.js')
	
	$('.burger').click( function() { 
        $('.menu-column').toggleClass('visible'); 
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
		allowClear: true,
		dropdownCssClass: 'select-new-dropdown'
	});
	
// tabs
	
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
	$(window).scroll(function () {
		var top = $(window).scrollTop();
		if(top >= height){
			$('.go-up').fadeIn('slow');
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
	
// mask
	
	$('input[type="tel"]').mask("8-999-999-99-99");

	
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
				"color": "#63533e"
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